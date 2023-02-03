import { loadStdlib } from "@reach-sh/stdlib";
import * as ERC721backend from './build/index.ERC721.mjs';
import * as auctionBackend from './build/index.auction.mjs';
const stdlib = loadStdlib({REACH_NO_WARN: 'Y'});
const GAS_LIMIT = 5_000_000;

if(stdlib.connector !== 'ETH'){
  console.log('Sorry, this program is only compiled on ETH for now');
  process.exit(0);
};
console.log('Starting frontend...');

const sbal = stdlib.parseCurrency(100);
const accs = await stdlib.newTestAccounts(4, sbal);
const [acc0, acc1, acc2, acc3] = accs;
const [addr0, addr1, addr2, addr3] = accs.map(x => x.getAddress());
const zeroAddr = "0x" + "0".repeat(40);
const tokId = 1;
acc0.setGasLimit(GAS_LIMIT);

const waitTxn = async callPromise => await (await callPromise).wait();

const assertFail = async (promise) => {
  try {
    await promise;
  } catch(e) {
    return;
  }
  throw "Expected exception but did not catch one";
}

const assertEq = (a, b, context = "assertEq") => {
  if (a === b) return;
  try {
    const res1BN = stdlib.bigNumberify(a);
    const res2BN = stdlib.bigNumberify(b);
    if(res1BN.eq(res2BN)) return;
  } catch {}
  stdlib.assert(false, `${context}: ${a} == ${b}`);
}

const startMeUp = async (ctc, meta) => {
  const flag = "startup success throw flag";
  try {
    await ctc.p.Deployer({
      meta,
      zeroAddr: zeroAddr,
      tokId: tokId,// simulate asset ID num
      launched: async (ctc) => {
        console.log(`The ERC721 contract has been deployed: ${ctc}`);
        await ctc0.a.approve(ctc, tokId);
        console.log(`The contract has been approved to spend the Token`);
        throw flag;
      },
    });
  } catch(e) {
    if(e !== flag){
      throw e;
    }
  }
}// end of startMeUp

const meta = {
  name: "Reach_ERC721",
  symbol: "RCH",
  tokenURI: 'tokenURIstringhere',
};

const ctc0 = acc0.contract(ERC721backend);
console.log('Starting backend...');
await startMeUp(ctc0, meta);// contract deployed

const ctcInfo = await ctc0.getInfo();
const ctc1 = acc1.contract(ERC721backend, ctcInfo);
const ctc2 = acc2.contract(ERC721backend, ctcInfo);
const ctc3 = acc3.contract(ERC721backend, ctcInfo);
// other helpers
const assertBalances = async (bal0, bal1, bal2, bal3) => {
  assertEq(bal0, await ctc0.v.balanceOf(addr0)[1]);
  assertEq(bal1, await ctc1.v.balanceOf(addr1)[1]);
  assertEq(bal2, await ctc2.v.balanceOf(addr2)[1]);
  assertEq(bal3, await ctc3.v.balanceOf(addr3)[1]);
};
const assertEvent = async (event, ...expectedArgs) => {
  const e = await ctc0.events[event].next();
  const actualArgs = e.what;
  expectedArgs.forEach((expectedArg, i) => assertEq(actualArgs[i], expectedArg, `${event} field ${i}`));
  console.log(`assertEvent complete`);
};
// const mkTransfer = transferFn => async (from, to, tok, ctcOverride) => {
//   const fromCtc = ctcOverride ?? ((from === addr0 ? ctc0 : (from === addr1 ? ctc1 : (from === addr2 ? ctc2 : ctc3))))
//   await waitTxn(fromCtc[transferFn](from, to, tok, gasLimit));
//   await assertEvent.Approval(from, zeroAddr, tok);
//   await assertEvent.Transfer(from, to, tok);
// };
// const transferFrom = mkTransfer("transferFrom");
// const safeTransferFrom = mkTransfer("safeTransferFrom(address,address,uint256)");

try{
  const deployBal = await ctc0.unsafeViews.balanceOf(addr0);
  console.log(`The deployers ${meta.name} token balance is: ${deployBal}`);
  const myBal = await ctc1.v.balanceOf(addr1);
  console.log(`The first users token balance is: ${stdlib.formatCurrency(myBal[1])}`);
} catch(e){
  console.log(`${e}`);
}
// // balanceOf takes an Address and returns an Int
// try{
//   const zeroAddrBal = await ctc0.v.balanceOf(zeroAddr);
//   console.log(`The balance of the zeroAddress is: ${stdlib.fromSome(zeroAddrBal, 100)}`);
// } catch (e){
//   console.log(`${e}`);
// }

// the deployer is the owner
// approve function works
try{
  await ctc0.a.approve(addr1, tokId);
  console.log(`${addr1} has been approved.`);
  //console.log(`Attempting to approve the owner..`);
  //await ctc0.a.approve(addr0, tokId);// this throws
} catch(e){
  console.log(`${e}`);
}

// nft auction starts here
//const nftId = await ctc0.getContractAddress();
const NFT = await stdlib.launchToken(acc0, "Dummy", "dNFT", {supply: 1});
const nftId = NFT.id;
console.log(`ERC721 Address: ${nftId}`);
const minBid = stdlib.parseCurrency(5);
const lenInBlocks = 25;
const params = {nftId, minBid, lenInBlocks};

const bidders = [];
const startBidders = async () => {
  let bid = minBid;
  const runBidder = async (who) => {
    const inc = stdlib.parseCurrency(Math.random() * 10);
    bid = bid.add(inc);
    const acc = await stdlib.newTestAccount(sbal);
    acc.setDebugLabel(who);
    acc.setGasLimit(GAS_LIMIT);
    await acc.tokenAccept(nftId);
    bidders.push([who, acc]);
    const ctc = acc.contract(auctionBackend, ctcCreator.getInfo());
    const getBal = async () => stdlib.formatCurrency(await stdlib.balanceOf(acc));
    console.log(`${who} decides to bid ${stdlib.formatCurrency(bid)}.`);
    console.log(`${who} balance before is ${await getBal()}.`);
    try{
      const vNFT = await ctc.unsafeViews.nft();
      const vMin = await ctc.unsafeViews.min();
      const vBid = await ctc.unsafeViews.currBid();
      console.log(`${who} sees the NFT up for sale is ${vNFT}.`);
      console.log(`${who} sees the minimum bid is ${stdlib.formatCurrency(vMin)}.`);
      console.log(`${who} sees the current bid is ${stdlib.formatCurrency(vBid)}.`);
      const [lastBidder, lastBid] = await ctc.apis.Bidder.bid(bid);
      console.log(`${who} out bid ${stdlib.formatAddress(lastBidder)} who bid ${stdlib.formatCurrency(lastBid)}. `);
    } catch (e) {
      console.log(`${e}`);
    }
    console.log(`${who} balance after is ${await getBal()}`);
  };

  await runBidder('Alice');
  await runBidder('Bob');
  await runBidder('Claire');
};// end of startBidders

const ctcCreator = acc0.contract(auctionBackend);
await ctcCreator.p.Creator({
  getSale: () => {
    console.log(`Creator sets parameters of sale:`, params);
    return params;
  },
  auctionReady: () => {
    startBidders();
  },
  seeBid: (who, amt) => {
    console.log(`Creator saw that ${stdlib.formatAddress(who)} bid ${stdlib.formatCurrency(amt)}.`);
  },
  showOutcome: (winner, amt) => {
    console.log(`Creator saw that ${stdlib.formatAddress(winner)} won with ${stdlib.formatCurrency(amt)}`);
  },
});// end of Creator interact object

for (const [who, acc] of bidders){
  const [amt, amtNFT] = await stdlib.balancesOf(acc, [null, nftId]);
  console.log(`${who} has ${stdlib.formatCurrency(amt)} ${stdlib.standardUnit} and ${amtNFT} of the NFT`);
}

console.log('Exiting...');
