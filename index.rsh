/**
 * Functions
 * constructor(name, symbol)
 * 
 * ERC721 - METADATA
 * name()
 * symbol()
 * tokenURI(tokenId, _tokenURI)
 * _setTokenURI(tokenId, _tokenURI)
 * _setBaseURI(baseURI)
 * baseURI()
 * _burn(owner, tokenId)
 * 
 * 
 * ERC721
 * balanceOf(owner)
 * ownerOf(tokenId)
 * approve(to, tokenId)
 * getApproved(tokenId)
 * setApprovalForAll(to, approved)
 * isApprovedForAll(owner, operator)
 * transferFrom(from, to, tokenId)
 * safeTransferFrom(from, to, tokenId)
 * safeTransferFrom(from, to, tokenId, _data)
 * _safeTransferFrom(from, to, tokenId, _data)
 * _exists(tokenId)
 * _isApprovedOrOwner(spender, tokenId)
 * _safeMint(to, tokenId)
 * _safeMint(to, tokenId, _data)
 * _mint(to, tokenId)
 * _burn(owner, tokenId)
 * _burn(tokenId)
 * _transferFrom(from, to, tokenId)
 * _checkOnERC721Received(from, to, tokenId, _data)
 * 
 * ERC165 -- save this for later
 * constructor()
 * supportsInterface(interfaceId)
 * _registerInterface(interfaceId)
 * 
 * Context
 * _msgSender()
 * _msgData()
 * 
 * 
 * Events
 * Transfer(from, to, tokenId)
 * Approval(owner, approved, tokenId)
 * ApprovalForAll(owner, operator, approved)
 * 
 */
'reach 0.1';

export const main = Reach.App(() => {
  setOptions({connectors: [ETH]});
  const D = Participant('Deployer', {
    meta: Object({
      name: StringDyn,
      symbol: StringDyn,
      tokenURI: StringDyn,
    }),
    zeroAddr: Address,
    tokId: UInt,
    launched: Fun([Contract], Null),
  });
  const A = API({
    approve: Fun([Address, UInt], Null),
    setApprovalForAll: Fun([Address, Bool], Null),
    transferFrom: Fun([Address, Address, UInt], Null),
    safeTransferFrom2: Fun([Address, Address, UInt], Null),
    safeTransferFrom1: Fun([Address, Address, UInt, BytesDyn], Null),
  },{
    // this specifies an alias for these functions
    safeTransferFrom1: 'safeTransferFrom',
    safeTransferFrom2: 'safeTransferFrom',
  });
  // this is just a function object
  const ERC721TokenReceived = {
    onERC721Received: Fun([Address, Address, UInt, BytesDyn], Bytes(4)),
  };
  const V = View({
    name: StringDyn,
    symbol: StringDyn,
    tokenURI: Fun([UInt], StringDyn),
    balanceOf: Fun([Address], UInt),
    ownerOf: Fun([UInt], Address),
    getApproved: Fun([UInt], Address),
    isApprovedForAll: Fun([Address, Address], Bool),
  });
  const E = Events({
    Transfer: [Address, Address, UInt],
    Approval: [Address, Address, UInt],
    ApprovalForAll: [Address, Address, Bool],
  });
  init();
  D.only(() => {
    const {name, symbol, tokenURI} = declassify(interact.meta);
    const zeroAddr = declassify(interact.zeroAddr);
    const tokId = declassify(interact.tokId);
  });
  D.publish(name, symbol, tokenURI, tokId, zeroAddr);
  D.interact.launched(getContract());

  V.name.set(name);
  V.symbol.set(symbol);

  // TokenId, Address of the owner
  const owners = new Map(UInt, Address);
  // Address of the owner, amount owned (should this be Map(Tuple(Address, Address), UInt))
  const balances = new Map(Address, UInt);
  const tokenApprovals = new Map(UInt, Address);
  const operatorApprovals = new Map(Tuple(Address, Address), Bool);

  // the token initially belongs to the deployer
  // this could eventually be replaced with the "mint" function
  owners[tokId] = D;
  balances[D] = 1;

  const [] = parallelReduce([])
  .define(() => {
    V.balanceOf.set((owner) => {
      check(owner != zeroAddr, "ERC721::balanceOf: Address zero is not a valid owner");
      const m_bal = balances[owner];
      return fromSome(m_bal, 0);
    });
    const tokenExists = (tokenId) => isSome(owners[tokenId]);

    const ownerOf = (tokenId) => {
      const m_owner = owners[tokenId];
      return fromSome(m_owner, zeroAddr);
    };
    V.ownerOf.set(ownerOf);

    const getApproved = (tokenId) => {
      const m_approval = tokenApprovals[tokenId];
      return fromSome(m_approval, zeroAddr);
    };
    V.getApproved.set(getApproved);

    const isApprovedForAll = (owner, operator) => {
      const m_approved = operatorApprovals[[owner, operator]];
      return fromSome(m_approved, false);
    };
    V.isApprovedForAll.set(isApprovedForAll);

    const isApprovedOrOwner = (spender, tokenId) => {
      check(tokenExists(tokenId), "isApprovedOrOwner: token exists");
      const owner = ownerOf(tokenId);
      return spender == owner || isApprovedForAll(owner, spender) || getApproved(tokenId) == spender;
    }

    V.tokenURI.set((tokenId) => {
      return StringDyn.concat(tokenURI, StringDyn(tokenId));
    });
    const approve = (to, tokenId) => {
      const owner = ownerOf(tokenId);
      tokenApprovals[tokenId] = to;
      E.Approval(owner, to, tokenId);
    }
    const transferChecks = (caller, from_, to, tokenId) => {
      const owner = ownerOf(tokenId);
      // this is the only error left?
      //check(owner == from_, "ERC721::transfer: transfer from incorrect owner");
      check(to != zeroAddr, "ERC721::transfer: transfer to the zero address");
      check(isApprovedOrOwner(caller, tokenId), "ERC721::transfer: caller is not owner nor approved");
    }
    const transfer_ = (caller, from_, to, tokenId) => {
      transferChecks(caller, from_, to, tokenId);
      approve(zeroAddr, tokenId);
      balances[from_] = maybe(balances[from_], 0, (b) => b - 1);
      balances[to]    = maybe(balances[to]   , 1, (b) => b + 1);
      owners[tokenId] = to;
      E.Transfer(from_, to, tokenId);
    }
    const doSafeTransferFrom = (caller, from_, to, tokenId, data) => {
      transfer_(caller, from_, to, tokenId);
      const ctcMaybe = Contract.fromAddress(to);
      ctcMaybe.match({
        Some: (ctc) => {
          const r = remote(ctc, ERC721TokenReceived);
          const mv = r.onERC721Received(getAddress(), from_, tokenId, data);
          // This hex string is bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))
          enforce(mv == Bytes.fromHex('0x150b7a02'));
        },
        None: () => {},
      });
    }
  })
  .invariant(balance() == 0)
  .while(true)
  .api_(A.safeTransferFrom1, (from_, to, tokenId, data) => {
    transferChecks(this, from_, to, tokenId);
    return [ (ret) => {
      doSafeTransferFrom(this, from_, to, tokenId, data);
      ret(null);
      return [];
    }];
  })
  // testing this
  .api_(A.safeTransferFrom2, (from_, to, tokenId) => {
    transferChecks(this, from_, to, tokenId);
    return [ (ret) => {
      doSafeTransferFrom(this, from_, to, tokenId, BytesDyn(""));
      ret(null);
      return [];
    }];
  })
  .api_(A.transferFrom, (from_, to, tokenId) => {
    transferChecks(this, from, to, tokenId);
    return [ (ret) => {
      transfer_(this, from_, to, tokenId);
      ret(null);
      return [];
    }];
  })
  .api_(A.approve, (to, tokenId) => {
    const owner = ownerOf(tokenId);
    check(to != owner, "ERC721::approve: Approval to current owner");
    check(this == owner || isApprovedForAll(owner, this), "ERC721::approve: Caller is not owner nor approved for all");
    return [ (ret) => {
      approve(to, tokenId);
      ret(null);
      return [];
    }];
  })
  .api_(A.setApprovalForAll, (operator, approved) => {
    const owner = this;
    check(owner != operator, "ERC721::setApprovalForAll: approve to caller");
    return [ (ret) => {
      operatorApprovals[[owner, operator]] = approved;
      E.ApprovalForAll(owner, operator, approved);
      ret(null);
      return [];
    }];
  })
  commit();
  exit();
});// end of Reach.App