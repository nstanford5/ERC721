// Automatically generated with Reach 0.1.13 (f79282c4)
pragma abicoder v2;
pragma solidity ^0.8.17;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

/**
 * @dev Interface for the optional metadata functions from the ERC20 standard.
 *
 * _Available since v4.1._
 */
interface IERC20Metadata is IERC20 {
    /**
     * @dev Returns the name of the token.
     */
    function name() external view returns (string memory);

    /**
     * @dev Returns the symbol of the token.
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Returns the decimals places of the token.
     */
    function decimals() external view returns (uint8);
}

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

/**
 * @dev Implementation of the {IERC20} interface.
 *
 * This implementation is agnostic to the way tokens are created. This means
 * that a supply mechanism has to be added in a derived contract using {_mint}.
 * For a generic mechanism see {ERC20PresetMinterPauser}.
 *
 * TIP: For a detailed writeup see our guide
 * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How
 * to implement supply mechanisms].
 *
 * We have followed general OpenZeppelin Contracts guidelines: functions revert
 * instead returning `false` on failure. This behavior is nonetheless
 * conventional and does not conflict with the expectations of ERC20
 * applications.
 *
 * Additionally, an {Approval} event is emitted on calls to {transferFrom}.
 * This allows applications to reconstruct the allowance for all accounts just
 * by listening to said events. Other implementations of the EIP may not emit
 * these events, as it isn't required by the specification.
 *
 * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}
 * functions have been added to mitigate the well-known issues around setting
 * allowances. See {IERC20-approve}.
 */
contract ERC20 is Context, IERC20, IERC20Metadata {
    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;

    /**
     * @dev Sets the values for {name} and {symbol}.
     *
     * The default value of {decimals} is 18. To select a different value for
     * {decimals} you should overload it.
     *
     * All two of these values are immutable: they can only be set once during
     * construction.
     */
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    /**
     * @dev Returns the name of the token.
     */
    function name() public view virtual override returns (string memory) {
        return _name;
    }

    /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if `decimals` equals `2`, a balance of `505` tokens should
     * be displayed to a user as `5.05` (`505 / 10 ** 2`).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the value {ERC20} uses, unless this function is
     * overridden;
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */
    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }

    /**
     * @dev See {IERC20-transfer}.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - the caller must have a balance of at least `amount`.
     */
    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        return true;
    }

    /**
     * @dev See {IERC20-allowance}.
     */
    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    /**
     * @dev See {IERC20-approve}.
     *
     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on
     * `transferFrom`. This is semantically equivalent to an infinite approval.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, amount);
        return true;
    }

    /**
     * @dev See {IERC20-transferFrom}.
     *
     * Emits an {Approval} event indicating the updated allowance. This is not
     * required by the EIP. See the note at the beginning of {ERC20}.
     *
     * NOTE: Does not update the allowance if the current allowance
     * is the maximum `uint256`.
     *
     * Requirements:
     *
     * - `from` and `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     * - the caller must have allowance for ``from``'s tokens of at least
     * `amount`.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    /**
     * @dev Atomically increases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, _allowances[owner][spender] + addedValue);
        return true;
    }

    /**
     * @dev Atomically decreases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `spender` must have allowance for the caller of at least
     * `subtractedValue`.
     */
    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        address owner = _msgSender();
        uint256 currentAllowance = _allowances[owner][spender];
        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");
        unchecked {
            _approve(owner, spender, currentAllowance - subtractedValue);
        }

        return true;
    }

    /**
     * @dev Moves `amount` of tokens from `sender` to `recipient`.
     *
     * This internal function is equivalent to {transfer}, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a {Transfer} event.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     */
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");

        _beforeTokenTransfer(from, to, amount);

        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");
        unchecked {
            _balances[from] = fromBalance - amount;
        }
        _balances[to] += amount;

        emit Transfer(from, to, amount);

        _afterTokenTransfer(from, to, amount);
    }

    /** @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a {Transfer} event with `from` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");

        _beforeTokenTransfer(address(0), account, amount);

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, reducing the
     * total supply.
     *
     * Emits a {Transfer} event with `to` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     * - `account` must have at least `amount` tokens.
     */
    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: burn from the zero address");

        _beforeTokenTransfer(account, address(0), amount);

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _totalSupply -= amount;

        emit Transfer(account, address(0), amount);

        _afterTokenTransfer(account, address(0), amount);
    }

    /**
     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.
     *
     * This internal function is equivalent to `approve`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */
    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    /**
     * @dev Spend `amount` form the allowance of `owner` toward `spender`.
     *
     * Does not update the allowance amount in case of infinite allowance.
     * Revert if not enough allowance is available.
     *
     * Might emit an {Approval} event.
     */
    function _spendAllowance(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        uint256 currentAllowance = allowance(owner, spender);
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "ERC20: insufficient allowance");
            unchecked {
                _approve(owner, spender, currentAllowance - amount);
            }
        }
    }

    /**
     * @dev Hook that is called before any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * will be transferred to `to`.
     * - when `from` is zero, `amount` tokens will be minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}

    /**
     * @dev Hook that is called after any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * has been transferred to `to`.
     * - when `from` is zero, `amount` tokens have been minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}
}
/*
  ReachToken essentially emulates Algorand Standard Assets on Ethereum, but doesn't include things like clawback or a separation of management and creator.
 */
contract ReachToken is ERC20 {
  address private _creator;
  string private _url;
  string private _metadata;
  uint8 private _decimals;

  constructor (
    string memory name_,
    string memory symbol_,
    string memory url_,
    string memory metadata_,
    uint256 supply_,
    uint256 decimals_
  ) ERC20(name_, symbol_) {
    _creator = _msgSender();
    _mint(_creator, supply_);
    _url = url_;
    _metadata = metadata_;
    _decimals = uint8(decimals_);
  }

  function url() public view returns (string memory) { return _url; }

  function metadata() public view returns (string memory) { return _metadata; }

  function decimals() public view override returns (uint8) { return _decimals; }

  function burn(uint256 amount) public virtual returns (bool) {
    require(_msgSender() == _creator, "must be creator");
    _burn(_creator, amount);
    return true;
  }

  function destroy() public virtual {
    require(_msgSender() == _creator, "must be creator");
    require(totalSupply() == 0, "must be no supply");
    selfdestruct(payable(_creator));
  }
}

// Generated code includes meaning of numbers
error ReachError(uint256 msg);

contract Stdlib {
  function safeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x + y) >= x, "add overflow"); }
  function safeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x - y) <= x, "sub wraparound"); }
  function safeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y == 0 || (z = x * y) / y == x, "mul overflow"); }
  function safeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x / y; }
  function safeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x % y; }

  function unsafeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x + y; } }
  function unsafeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x - y; } }
  function unsafeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x * y; } }
  function unsafeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x / y; } }
  function unsafeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x % y; } }

  function safeSqrt(uint256 y) internal pure returns (uint256 z) {
    if (y > 3) {
      z = y;
      uint256 x = y / 2 + 1;
      while (x < z) {
        z = x;
        x = (y / x + x) / 2;
      }
    } else if (y != 0) {
      z = 1;
    }
  }

  // From OpenZeppelin --- MIT license
  function uintToStringDyn(uint256 value) internal pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT licence
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

  function reachRequire(bool succ, uint256 errMsg) internal pure {
    if ( ! succ ) {
      revert ReachError(errMsg);
    }
  }

  function checkFunReturn(bool succ, bytes memory returnData, uint256 errMsg) internal pure returns (bytes memory) {
    if (succ) {
      return returnData;
    } else {
      if (returnData.length > 0) {
        assembly {
          let returnData_size := mload(returnData)
          revert(add(32, returnData), returnData_size)
        }
      } else {
        revert ReachError(errMsg);
      }
    }
  }

  function tokenAllowance(address payable token, address owner, address spender) internal returns (uint256 amt) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.allowance.selector, owner, spender));
    checkFunReturn(ok, ret, 0 /*'token.allowance'*/);
    amt = abi.decode(ret, (uint256));
  }

  function tokenTransferFrom(address payable token, address sender, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transferFrom.selector, sender, recipient, amt));
    checkFunReturn(ok, ret, 1 /*'token.transferFrom'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenTransfer(address payable token, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transfer.selector, recipient, amt));
    checkFunReturn(ok, ret, 2 /*'token.transfer'*/);
    res = abi.decode(ret, (bool));
  }
  function safeTokenTransfer(address payable token, address recipient, uint256 amt) internal {
    require(tokenTransfer(token, recipient, amt));
  }

  function reachTokenBurn(address payable token, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.burn.selector, amt));
    checkFunReturn(ok, ret, 3 /*'token.burn'*/);
    res = abi.decode(ret, (bool));
  }
  function safeReachTokenBurn(address payable token, uint256 amt) internal {
    require(reachTokenBurn(token, amt));
  }

  function reachTokenDestroy(address payable token) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.destroy.selector));
    checkFunReturn(ok, ret, 4 /*'token.destroy'*/);
    res = true;
  }
  function safeReachTokenDestroy(address payable token) internal {
    require(reachTokenDestroy(token));
  }

  function readPayAmt(address sender, address payable token) internal returns (uint256 amt) {
    amt = tokenAllowance(token, sender, address(this));
    require(checkPayAmt(sender, token, amt));
  }

  function checkPayAmt(address sender, address payable token, uint256 amt) internal returns (bool) {
    return tokenTransferFrom(token, sender, address(this), amt);
  }

  function tokenApprove(address payable token, address spender, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.approve.selector, spender, amt));
    checkFunReturn(ok, ret, 5 /*'token.approve'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenBalanceOf(address payable token, address owner) internal returns (uint256 res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0) }(abi.encodeWithSelector(IERC20.balanceOf.selector, owner));
    checkFunReturn(ok, ret, 6 /*'token.balanceOf'*/);
    res = abi.decode(ret, (uint256));
  }
}

enum _enum_T0 {None, Some}
struct T0 {
  _enum_T0 which;
  bool _None;
  address payable _Some;
  }
enum _enum_T1 {None, Some}
struct T1 {
  _enum_T1 which;
  bool _None;
  uint256 _Some;
  }
enum _enum_T2 {None, Some}
struct T2 {
  _enum_T2 which;
  bool _None;
  bool _Some;
  }
struct T3 {
  address payable elem0;
  uint256 elem1;
  }
struct T4 {
  uint256 elem0;
  }
struct T5 {
  address payable elem0;
  address payable elem1;
  uint256 elem2;
  bytes elem3;
  }
struct T6 {
  address payable elem0;
  address payable elem1;
  uint256 elem2;
  }
struct T7 {
  address payable elem0;
  bool elem1;
  }
enum _enum_T8 {approve0_355, burn0_355, mint0_355, safeTransferFrom10_355, safeTransferFrom20_355, setApprovalForAll0_355, transferFrom0_355}
struct T8 {
  _enum_T8 which;
  T3 _approve0_355;
  T4 _burn0_355;
  T3 _mint0_355;
  T5 _safeTransferFrom10_355;
  T6 _safeTransferFrom20_355;
  T7 _setApprovalForAll0_355;
  T6 _transferFrom0_355;
  }
struct T9 {
  uint256 elem0;
  T8 elem1;
  }
struct T10 {
  address payable v3471;
  string v3472;
  string v3473;
  string v3474;
  address payable v3475;
  }
struct T11 {
  address payable elem0;
  address payable elem1;
  }
struct T13 {
  uint256 elem0;
  string elem1;
  string elem2;
  string elem3;
  address payable elem4;
  }
struct T14 {
  address payable elem0;
  string elem1;
  string elem2;
  string elem3;
  address payable elem4;
  uint256 elem5;
  }
enum _enum_T15 {None, Some}
struct T15 {
  _enum_T15 which;
  bool _None;
  address payable _Some;
  }
struct T16 {
  uint256 elem0;
  bytes4 elem1;
  }
interface I9e4f77dac3bcd023bda70ef60795ac7bce06db07 {
  function onERC721Received(address payable, address payable, uint256, bytes memory) external payable returns (bytes4);
  }
contract ReachContract is Stdlib {
  uint256 current_step;
  uint256 current_time;
    bytes current_svbs;
  uint256 creation_time;
     bool locked;
  function _reachCreationTime() external view returns (uint256) { return creation_time; }
  function _reachCurrentTime() external view returns (uint256) { return current_time; }
  function _reachCurrentState() external view returns (uint256, bytes memory) { return (current_step, current_svbs); }
  event Approval(address payable v0, address payable v1, uint256 v2);
  event ApprovalForAll(address payable v0, address payable v1, bool v2);
  event Transfer(address payable v0, address payable v1, uint256 v2);
  event _reach_e0(address _who, T13 _a);
  event _reach_e2(address _who, T9 _a);
  event _reach_oe_v3851(bool v0);
  event _reach_oe_v4454(bool v0);
  event _reach_oe_v4462(bool v0);
  event _reach_oe_v5038(bool v0);
  event _reach_oe_v5690(T15 v0);
  event _reach_oe_v5696(bool v0);
  event _reach_oe_v5712(T16 v0);
  event _reach_oe_v5730(bool v0);
  event _reach_oe_v6382(T15 v0);
  event _reach_oe_v6388(bool v0);
  event _reach_oe_v6404(T16 v0);
  event _reach_oe_v6422(bool v0);
  event _reach_oe_v6989(bool v0);
  event _reach_oe_v7639(bool v0);
  receive () external payable {}
  fallback () external payable {}
  mapping (uint256 => T0) _reachm_0;
  function __reachm_0Ref(uint256 addr) internal view returns (T0 memory res) {
    if (_reachm_0[addr].which == _enum_T0.Some) {
      res = _reachm_0[addr];
      }
    else {
      res.which = _enum_T0.None;
      res._None = false;
      }
    }
  function _reachm_0Ref(uint256 addr) external view returns (T0 memory res) {
    res = __reachm_0Ref(addr);
    }
  mapping (address => T1) _reachm_1;
  function __reachm_1Ref(address addr) internal view returns (T1 memory res) {
    if (_reachm_1[addr].which == _enum_T1.Some) {
      res = _reachm_1[addr];
      }
    else {
      res.which = _enum_T1.None;
      res._None = false;
      }
    }
  function _reachm_1Ref(address addr) external view returns (T1 memory res) {
    res = __reachm_1Ref(addr);
    }
  mapping (uint256 => T0) _reachm_2;
  function __reachm_2Ref(uint256 addr) internal view returns (T0 memory res) {
    if (_reachm_2[addr].which == _enum_T0.Some) {
      res = _reachm_2[addr];
      }
    else {
      res.which = _enum_T0.None;
      res._None = false;
      }
    }
  function _reachm_2Ref(uint256 addr) external view returns (T0 memory res) {
    res = __reachm_2Ref(addr);
    }
  mapping (uint256 => T2) _reachm_3;
  function __reachm_3Ref(uint256 addr) internal view returns (T2 memory res) {
    if (_reachm_3[addr].which == _enum_T2.Some) {
      res = _reachm_3[addr];
      }
    else {
      res.which = _enum_T2.None;
      res._None = false;
      }
    }
  function _reachm_3Ref(uint256 addr) external view returns (T2 memory res) {
    res = __reachm_3Ref(addr);
    }
  struct Memory {
    bool nil;
    bool _reachr_approve;
    uint256 _reachr_balanceOf;
    bool _reachr_burn;
    address payable _reachr_getApproved;
    bool _reachr_isApprovedForAll;
    bool _reachr_mint;
    string _reachr_name;
    address payable _reachr_ownerOf;
    bool _reachr_safeTransferFrom1;
    bool _reachr_safeTransferFrom2;
    bool _reachr_setApprovalForAll;
    string _reachr_symbol;
    string _reachr_tokenURI;
    bool _reachr_transferFrom;
    }
  struct _F9245 {
    T3 v9180;
    T8 v9181;
    }
  function _reacha_approve(T3 memory _a, Memory memory _Memory) internal  {
    _F9245 memory _f;
    _f.v9180.elem0 = _a.elem0;
    _f.v9180.elem1 = _a.elem1;
    _f.v9181.which = _enum_T8.approve0_355;
    _f.v9181._approve0_355 = _f.v9180;
    T9  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v9181;
    _reachi_2(_ja, _Memory);
    }
  function _reacha_balanceOf(address payable _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(7) /*'(./index.rsh:86:14:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    reachRequire(((((_a) == _svs.v3475) ? false : true)), uint256(8) /*'(reach standard library:57:5:application,[at ./index.rsh:115:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:114:20:application call to [unknown function] (defined at: ./index.rsh:114:20:application)],Just "ERC721::balanceOf: Address zero is not a valid owner")'*/);
    _Memory._reachr_balanceOf = (((__reachm_1Ref((_a))).which == _enum_T1.Some ? (__reachm_1Ref((_a)))._Some : uint256(0)));
    }
  struct _F9247 {
    T4 v9187;
    T8 v9188;
    }
  function _reacha_burn(uint256 _a, Memory memory _Memory) internal  {
    _F9247 memory _f;
    _f.v9187.elem0 = _a;
    _f.v9188.which = _enum_T8.burn0_355;
    _f.v9188._burn0_355 = _f.v9187;
    T9  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v9188;
    _reachi_2(_ja, _Memory);
    }
  function _reacha_getApproved(uint256 _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(9) /*'(./index.rsh:88:16:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    reachRequire((((uint256((__reachm_0Ref((_a))).which)) == uint256(1))), uint256(10) /*'(reach standard library:57:5:application,[at ./index.rsh:129:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:133:22:application call to "getApproved" (defined at: ./index.rsh:133:22:application)],Just "ERC721::getApproved: approved query for non-existent token")'*/);
    _Memory._reachr_getApproved = (((__reachm_2Ref((_a))).which == _enum_T0.Some ? (__reachm_2Ref((_a)))._Some : _svs.v3475));
    }
  struct _F9249 {
    T11 v3508;
    }
  function _reacha_isApprovedForAll(T11 memory _a, Memory memory _Memory) internal view {
    _F9249 memory _f;
    reachRequire(((current_step == uint256(3))), uint256(11) /*'(./index.rsh:89:21:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    _f.v3508.elem0 = (_a.elem0);
    _f.v3508.elem1 = (_a.elem1);
    _Memory._reachr_isApprovedForAll = (((__reachm_3Ref(uint256(keccak256(abi.encode(_f.v3508))))).which == _enum_T2.Some ? (__reachm_3Ref(uint256(keccak256(abi.encode(_f.v3508)))))._Some : false));
    }
  struct _F9250 {
    T3 v9194;
    T8 v9195;
    }
  function _reacha_mint(T3 memory _a, Memory memory _Memory) internal  {
    _F9250 memory _f;
    _f.v9194.elem0 = _a.elem0;
    _f.v9194.elem1 = _a.elem1;
    _f.v9195.which = _enum_T8.mint0_355;
    _f.v9195._mint0_355 = _f.v9194;
    T9  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v9195;
    _reachi_2(_ja, _Memory);
    }
  function _reacha_name(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(12) /*'(./index.rsh:83:9:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    _Memory._reachr_name = _svs.v3472;
    }
  struct _F9252 {
    T0 v3493;
    }
  function _reacha_ownerOf(uint256 _a, Memory memory _Memory) internal view {
    _F9252 memory _f;
    reachRequire(((current_step == uint256(3))), uint256(13) /*'(./index.rsh:87:12:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    _f.v3493 = __reachm_0Ref((_a));
    reachRequire((((uint256(_f.v3493.which)) == uint256(1))), uint256(14) /*'(reach standard library:57:5:application,[at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:126:18:application call to "ownerOf" (defined at: ./index.rsh:126:18:application)],Just "ERC721::ownerOf: Owner query for non-existent token")'*/);
    _Memory._reachr_ownerOf = ((_f.v3493.which == _enum_T0.Some ? _f.v3493._Some : _svs.v3475));
    }
  struct _F9253 {
    T5 v9204;
    T8 v9205;
    }
  function _reacha_safeTransferFrom1(T5 memory _a, Memory memory _Memory) internal  {
    _F9253 memory _f;
    _f.v9204.elem0 = _a.elem0;
    _f.v9204.elem1 = _a.elem1;
    _f.v9204.elem2 = _a.elem2;
    _f.v9204.elem3 = _a.elem3;
    _f.v9205.which = _enum_T8.safeTransferFrom10_355;
    _f.v9205._safeTransferFrom10_355 = _f.v9204;
    T9  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v9205;
    _reachi_2(_ja, _Memory);
    }
  struct _F9254 {
    T6 v9215;
    T8 v9216;
    }
  function _reacha_safeTransferFrom2(T6 memory _a, Memory memory _Memory) internal  {
    _F9254 memory _f;
    _f.v9215.elem0 = _a.elem0;
    _f.v9215.elem1 = _a.elem1;
    _f.v9215.elem2 = _a.elem2;
    _f.v9216.which = _enum_T8.safeTransferFrom20_355;
    _f.v9216._safeTransferFrom20_355 = _f.v9215;
    T9  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v9216;
    _reachi_2(_ja, _Memory);
    }
  struct _F9255 {
    T7 v9224;
    T8 v9225;
    }
  function _reacha_setApprovalForAll(T7 memory _a, Memory memory _Memory) internal  {
    _F9255 memory _f;
    _f.v9224.elem0 = _a.elem0;
    _f.v9224.elem1 = _a.elem1;
    _f.v9225.which = _enum_T8.setApprovalForAll0_355;
    _f.v9225._setApprovalForAll0_355 = _f.v9224;
    T9  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v9225;
    _reachi_2(_ja, _Memory);
    }
  function _reacha_symbol(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(15) /*'(./index.rsh:84:11:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    _Memory._reachr_symbol = _svs.v3473;
    }
  function _reacha_tokenURI(uint256 _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(3))), uint256(16) /*'(./index.rsh:85:13:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    reachRequire((((uint256((__reachm_0Ref((_a))).which)) == uint256(1))), uint256(17) /*'(reach standard library:57:5:application,[at ./index.rsh:148:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:147:19:application call to [unknown function] (defined at: ./index.rsh:147:19:application)],Just "tokenURI: URI query for non-existent token")'*/);
    _Memory._reachr_tokenURI = (string.concat(_svs.v3474, (uintToStringDyn((_a)))));
    }
  struct _F9258 {
    T6 v9233;
    T8 v9234;
    }
  function _reacha_transferFrom(T6 memory _a, Memory memory _Memory) internal  {
    _F9258 memory _f;
    _f.v9233.elem0 = _a.elem0;
    _f.v9233.elem1 = _a.elem1;
    _f.v9233.elem2 = _a.elem2;
    _f.v9234.which = _enum_T8.transferFrom0_355;
    _f.v9234._transferFrom0_355 = _f.v9233;
    T9  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v9234;
    _reachi_2(_ja, _Memory);
    }
  function _reachi_0(T13 memory _a, Memory memory _Memory) internal  {
    reachRequire((! locked), uint256(18) /*'locked'*/);
    emit _reach_e0(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(19) /*'time check at ./index.rsh:101:5:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(20) /*'(./index.rsh:101:5:dot,[],"verify network token pay amount")'*/);
    T14  memory _ja;
    _ja.elem0 = payable(msg.sender);
    _ja.elem1 = (_a.elem1);
    _ja.elem2 = (_a.elem2);
    _ja.elem3 = (_a.elem3);
    _ja.elem4 = (_a.elem4);
    _ja.elem5 = uint256(block.number);
    _reachl_1(_ja, _Memory);
    }
  struct _F9268 {
    T3 v3813;
    T0 v3827;
    address payable v3832;
    T11 v3837;
    T4 v4361;
    T0 v4410;
    address payable v4415;
    T11 v4427;
    T1 v4448;
    uint256 v4449;
    uint256 v4451;
    T3 v4909;
    T1 v5033;
    uint256 v5034;
    uint256 v5036;
    T5 v5457;
    T0 v5601;
    address payable v5606;
    T11 v5621;
    T1 v5679;
    uint256 v5680;
    uint256 v5682;
    T1 v5684;
    uint256 v5685;
    uint256 v5687;
    T15 v5690;
    T15 v5691;
    address payable v5707;
    bool v5711;
    T16 v5712;
    T16 v5713;
    bytes4 v5722;
    T6 v6005;
    T0 v6294;
    address payable v6299;
    T11 v6314;
    T1 v6371;
    uint256 v6372;
    uint256 v6374;
    T1 v6376;
    uint256 v6377;
    uint256 v6379;
    T15 v6382;
    T15 v6383;
    address payable v6398;
    bool v6402;
    bytes v6403;
    T16 v6404;
    T16 v6405;
    bytes4 v6414;
    T7 v6553;
    T11 v6988;
    T6 v7101;
    T0 v7551;
    address payable v7556;
    T11 v7571;
    T1 v7628;
    uint256 v7629;
    uint256 v7631;
    T1 v7633;
    uint256 v7634;
    uint256 v7636;
    uint256 v9262;
    uint256 v9266;
    }
  function _reachi_2(T9 memory _a, Memory memory _Memory) internal  {
    _F9268 memory _f;
    reachRequire((current_step == uint256(3)), uint256(21) /*'state check at ./index.rsh:112:28:dot'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    reachRequire((! locked), uint256(22) /*'locked'*/);
    emit _reach_e2(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(23) /*'time check at ./index.rsh:112:28:dot'*/);
    if ((_a.elem1).which == _enum_T8.approve0_355) {
    _f.v3813 = (_a.elem1)._approve0_355;
    reachRequire((msg.value == uint256(0)), uint256(24) /*'(./index.rsh:112:28:dot,[],"verify network token pay amount")'*/);
    _f.v3827 = __reachm_0Ref((_f.v3813.elem1));
    reachRequire((((uint256(_f.v3827.which)) == uint256(1))), uint256(25) /*'(reach standard library:57:5:application,[at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:212:26:application call to "ownerOf" (defined at: ./index.rsh:121:31:function exp),at ./index.rsh:215:20:application call to [unknown function] (defined at: ./index.rsh:215:20:function exp)],Just "ERC721::ownerOf: Owner query for non-existent token")'*/);
    _f.v3832 = (_f.v3827.which == _enum_T0.Some ? _f.v3827._Some : _svs.v3475);
    reachRequire(((((_f.v3813.elem0) == _f.v3832) ? false : true)), uint256(26) /*'(reach standard library:57:5:application,[at ./index.rsh:213:10:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:215:20:application call to [unknown function] (defined at: ./index.rsh:215:20:function exp)],Just "ERC721::approve: Approval to current owner")'*/);
    _f.v3837.elem0 = _f.v3832;
    _f.v3837.elem1 = payable(msg.sender);
    reachRequire((((payable(msg.sender) == _f.v3832) ? true : (((__reachm_3Ref(uint256(keccak256(abi.encode(_f.v3837))))).which == _enum_T2.Some ? (__reachm_3Ref(uint256(keccak256(abi.encode(_f.v3837)))))._Some : false)))), uint256(27) /*'(reach standard library:57:5:application,[at ./index.rsh:214:10:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:215:20:application call to [unknown function] (defined at: ./index.rsh:215:20:function exp)],Just "ERC721::approve: Caller is not owner nor approved for all")'*/);
    _reachm_2[(_f.v3813.elem1)].which = _enum_T0.Some;
    _reachm_2[(_f.v3813.elem1)]._Some = (_f.v3813.elem0);
    
    emit Approval( _f.v3832,  (_f.v3813.elem0),  (_f.v3813.elem1));
    emit _reach_oe_v3851( (false));
    _Memory._reachr_approve = (false);
    T14  memory _ja;
    _ja.elem0 = _svs.v3471;
    _ja.elem1 = _svs.v3472;
    _ja.elem2 = _svs.v3473;
    _ja.elem3 = _svs.v3474;
    _ja.elem4 = _svs.v3475;
    _ja.elem5 = uint256(block.number);
    _reachl_1(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T8.burn0_355) {
    _f.v4361 = (_a.elem1)._burn0_355;
    reachRequire((msg.value == uint256(0)), uint256(28) /*'(./index.rsh:112:28:dot,[],"verify network token pay amount")'*/);
    _f.v4410 = __reachm_0Ref((_f.v4361.elem0));
    reachRequire((((uint256(_f.v4410.which)) == uint256(1))), uint256(29) /*'(reach standard library:57:5:application,[at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:244:26:application call to "ownerOf" (defined at: ./index.rsh:121:31:function exp),at ./index.rsh:246:20:application call to [unknown function] (defined at: ./index.rsh:246:20:function exp)],Just "ERC721::ownerOf: Owner query for non-existent token")'*/);
    _f.v4415 = (_f.v4410.which == _enum_T0.Some ? _f.v4410._Some : _svs.v3475);
    _f.v4427.elem0 = _f.v4415;
    _f.v4427.elem1 = payable(msg.sender);
    reachRequire(((((payable(msg.sender) == _f.v4415) ? true : (((__reachm_3Ref(uint256(keccak256(abi.encode(_f.v4427))))).which == _enum_T2.Some ? (__reachm_3Ref(uint256(keccak256(abi.encode(_f.v4427)))))._Some : false))) ? true : ((((__reachm_2Ref((_f.v4361.elem0))).which == _enum_T0.Some ? (__reachm_2Ref((_f.v4361.elem0)))._Some : _svs.v3475)) == payable(msg.sender)))), uint256(30) /*'(reach standard library:57:5:application,[at ./index.rsh:245:10:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:246:20:application call to [unknown function] (defined at: ./index.rsh:246:20:function exp)],Just "ERC721::burn: caller is not owner nor approved")'*/);
    _reachm_2[(_f.v4361.elem0)].which = _enum_T0.Some;
    _reachm_2[(_f.v4361.elem0)]._Some = _svs.v3475;
    
    emit Approval( _f.v4415,  _svs.v3475,  (_f.v4361.elem0));
    _f.v4448 = __reachm_1Ref(_f.v4415);
    if (_f.v4448.which == _enum_T1.None) {
    _f.v4449 = uint256(0);
    } else if (_f.v4448.which == _enum_T1.Some) {
    _f.v4451 = _f.v4448._Some;
    _f.v4449 = (safeSub(_f.v4451, uint256(1)));
    }
    if ((_f.v4449 == uint256(0))) {
      delete _reachm_1[_f.v4415];
      _reachm_0[(_f.v4361.elem0)].which = _enum_T0.Some;
      _reachm_0[(_f.v4361.elem0)]._Some = _svs.v3475;
      
      emit Transfer( _f.v4415,  _svs.v3475,  (_f.v4361.elem0));
      emit _reach_oe_v4454( (false));
      _Memory._reachr_burn = (false);
      T14  memory _ja;
      _ja.elem0 = _svs.v3471;
      _ja.elem1 = _svs.v3472;
      _ja.elem2 = _svs.v3473;
      _ja.elem3 = _svs.v3474;
      _ja.elem4 = _svs.v3475;
      _ja.elem5 = uint256(block.number);
      _reachl_1(_ja, _Memory);
      }
    else {
      _reachm_1[_f.v4415].which = _enum_T1.Some;
      _reachm_1[_f.v4415]._Some = _f.v4449;
      
      _reachm_0[(_f.v4361.elem0)].which = _enum_T0.Some;
      _reachm_0[(_f.v4361.elem0)]._Some = _svs.v3475;
      
      emit Transfer( _f.v4415,  _svs.v3475,  (_f.v4361.elem0));
      emit _reach_oe_v4462( (false));
      _Memory._reachr_burn = (false);
      T14  memory _ja;
      _ja.elem0 = _svs.v3471;
      _ja.elem1 = _svs.v3472;
      _ja.elem2 = _svs.v3473;
      _ja.elem3 = _svs.v3474;
      _ja.elem4 = _svs.v3475;
      _ja.elem5 = uint256(block.number);
      _reachl_1(_ja, _Memory);
      }
    } else if ((_a.elem1).which == _enum_T8.mint0_355) {
    _f.v4909 = (_a.elem1)._mint0_355;
    reachRequire((msg.value == uint256(0)), uint256(31) /*'(./index.rsh:112:28:dot,[],"verify network token pay amount")'*/);
    reachRequire(((((_f.v4909.elem0) == _svs.v3475) ? false : true)), uint256(32) /*'(reach standard library:57:5:application,[at ./index.rsh:232:10:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:235:20:application call to [unknown function] (defined at: ./index.rsh:235:20:function exp)],Just "Cannot mint to zero address")'*/);
    reachRequire(((((uint256((__reachm_0Ref((_f.v4909.elem1))).which)) == uint256(1)) ? false : true)), uint256(33) /*'(reach standard library:57:5:application,[at ./index.rsh:233:10:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:235:20:application call to [unknown function] (defined at: ./index.rsh:235:20:function exp)],Just "Token already exists")'*/);
    reachRequire(((payable(msg.sender) == _svs.v3471)), uint256(34) /*'(reach standard library:57:5:application,[at ./index.rsh:234:10:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:235:20:application call to [unknown function] (defined at: ./index.rsh:235:20:function exp)],Just "mint can only be called by deployer")'*/);
    _f.v5033 = __reachm_1Ref((_f.v4909.elem0));
    if (_f.v5033.which == _enum_T1.None) {
    _f.v5034 = uint256(1);
    } else if (_f.v5033.which == _enum_T1.Some) {
    _f.v5036 = _f.v5033._Some;
    _f.v5034 = (safeAdd(_f.v5036, uint256(1)));
    }
    _reachm_1[(_f.v4909.elem0)].which = _enum_T1.Some;
    _reachm_1[(_f.v4909.elem0)]._Some = _f.v5034;
    
    _reachm_0[(_f.v4909.elem1)].which = _enum_T0.Some;
    _reachm_0[(_f.v4909.elem1)]._Some = (_f.v4909.elem0);
    
    emit Transfer( _svs.v3475,  (_f.v4909.elem0),  (_f.v4909.elem1));
    emit _reach_oe_v5038( (false));
    _Memory._reachr_mint = (false);
    T14  memory _ja;
    _ja.elem0 = _svs.v3471;
    _ja.elem1 = _svs.v3472;
    _ja.elem2 = _svs.v3473;
    _ja.elem3 = _svs.v3474;
    _ja.elem4 = _svs.v3475;
    _ja.elem5 = uint256(block.number);
    _reachl_1(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T8.safeTransferFrom10_355) {
    _f.v5457 = (_a.elem1)._safeTransferFrom10_355;
    reachRequire((msg.value == uint256(0)), uint256(35) /*'(./index.rsh:112:28:dot,[],"verify network token pay amount")'*/);
    _f.v5601 = __reachm_0Ref((_f.v5457.elem2));
    reachRequire((((uint256(_f.v5601.which)) == uint256(1))), uint256(36) /*'(reach standard library:57:5:application,[at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:157:28:application call to "ownerOf" (defined at: ./index.rsh:121:31:function exp),at ./index.rsh:188:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp),at ./index.rsh:189:20:application call to [unknown function] (defined at: ./index.rsh:189:20:function exp)],Just "ERC721::ownerOf: Owner query for non-existent token")'*/);
    _f.v5606 = (_f.v5601.which == _enum_T0.Some ? _f.v5601._Some : _svs.v3475);
    reachRequire(((((_f.v5457.elem1) == _svs.v3475) ? false : true)), uint256(37) /*'(reach standard library:57:5:application,[at ./index.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:188:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp),at ./index.rsh:189:20:application call to [unknown function] (defined at: ./index.rsh:189:20:function exp)],Just "ERC721::transfer: transfer to the zero address")'*/);
    _f.v5621.elem0 = _f.v5606;
    _f.v5621.elem1 = payable(msg.sender);
    reachRequire(((((payable(msg.sender) == _f.v5606) ? true : (((__reachm_3Ref(uint256(keccak256(abi.encode(_f.v5621))))).which == _enum_T2.Some ? (__reachm_3Ref(uint256(keccak256(abi.encode(_f.v5621)))))._Some : false))) ? true : ((((__reachm_2Ref((_f.v5457.elem2))).which == _enum_T0.Some ? (__reachm_2Ref((_f.v5457.elem2)))._Some : _svs.v3475)) == payable(msg.sender)))), uint256(38) /*'(reach standard library:57:5:application,[at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:188:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp),at ./index.rsh:189:20:application call to [unknown function] (defined at: ./index.rsh:189:20:function exp)],Just "ERC721::transfer: caller is not owner nor approved")'*/);
    _reachm_2[(_f.v5457.elem2)].which = _enum_T0.Some;
    _reachm_2[(_f.v5457.elem2)]._Some = _svs.v3475;
    
    emit Approval( _f.v5606,  _svs.v3475,  (_f.v5457.elem2));
    _f.v5679 = __reachm_1Ref((_f.v5457.elem0));
    if (_f.v5679.which == _enum_T1.None) {
    _f.v5680 = uint256(0);
    } else if (_f.v5679.which == _enum_T1.Some) {
    _f.v5682 = _f.v5679._Some;
    _f.v5680 = (safeSub(_f.v5682, uint256(1)));
    }
    _reachm_1[(_f.v5457.elem0)].which = _enum_T1.Some;
    _reachm_1[(_f.v5457.elem0)]._Some = _f.v5680;
    
    _f.v5684 = __reachm_1Ref((_f.v5457.elem1));
    if (_f.v5684.which == _enum_T1.None) {
    _f.v5685 = uint256(1);
    } else if (_f.v5684.which == _enum_T1.Some) {
    _f.v5687 = _f.v5684._Some;
    _f.v5685 = (safeAdd(_f.v5687, uint256(1)));
    }
    _reachm_1[(_f.v5457.elem1)].which = _enum_T1.Some;
    _reachm_1[(_f.v5457.elem1)]._Some = _f.v5685;
    
    _reachm_0[(_f.v5457.elem2)].which = _enum_T0.Some;
    _reachm_0[(_f.v5457.elem2)]._Some = (_f.v5457.elem1);
    
    emit Transfer( (_f.v5457.elem0),  (_f.v5457.elem1),  (_f.v5457.elem2));
    if (((_f.v5457.elem1).code.length > 0)) {
      _f.v5690.which = _enum_T15.Some;
      _f.v5690._Some = (_f.v5457.elem1);
      }
    else {
      _f.v5690.which = _enum_T15.None;
      _f.v5690._None = false;
      }
    _f.v5691 = _f.v5690;
    emit _reach_oe_v5690( _f.v5690);
    if (_f.v5691.which == _enum_T15.None) {
    emit _reach_oe_v5696( (false));
    _Memory._reachr_safeTransferFrom1 = (false);
    T14  memory _ja;
    _ja.elem0 = _svs.v3471;
    _ja.elem1 = _svs.v3472;
    _ja.elem2 = _svs.v3473;
    _ja.elem3 = _svs.v3474;
    _ja.elem4 = _svs.v3475;
    _ja.elem5 = uint256(block.number);
    _reachl_1(_ja, _Memory);
    } else if (_f.v5691.which == _enum_T15.Some) {
    _f.v5707 = _f.v5691._Some;
    {
      _f.v9262 = unsafeSub(address(this).balance, uint256(0));
      locked = true;
      bytes memory v9263 = abi.encodeWithSelector(I9e4f77dac3bcd023bda70ef60795ac7bce06db07.onERC721Received.selector, (payable(address(this))), (_f.v5457.elem0), (_f.v5457.elem2), (_f.v5457.elem3));
      (bool v9260, bytes memory v9261) = _f.v5707.call{value: uint256(0)}(v9263);
      checkFunReturn(v9260, v9261, uint256(39) /*'(./index.rsh:177:40:application,[at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:175:21:function exp),at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:174:21:function exp),at ./index.rsh:190:25:application call to "doSafeTransferFrom" (defined at: ./index.rsh:171:67:function exp),at ./index.rsh:189:20:application call to [unknown function] (defined at: ./index.rsh:189:20:function exp)],"remote onERC721Received failed")'*/);
      locked = false;
      _f.v5712.elem0 = unsafeSub(address(this).balance, _f.v9262);
      _f.v5712.elem1 = abi.decode(v9261, (bytes4));
      }
    _f.v5713 = _f.v5712;
    emit _reach_oe_v5712( _f.v5712);
    reachRequire(((uint256(0) == (_f.v5713.elem0))), uint256(40) /*'(./index.rsh:177:40:application,[at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:175:21:function exp),at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:174:21:function exp),at ./index.rsh:190:25:application call to "doSafeTransferFrom" (defined at: ./index.rsh:171:67:function exp),at ./index.rsh:189:20:application call to [unknown function] (defined at: ./index.rsh:189:20:function exp)],Just "remote bill check")'*/);
    _f.v5722 = hex'150b7a02';
    reachRequire((((uint256(keccak256(abi.encode((_f.v5713.elem1))))) == (uint256(keccak256(abi.encode(_f.v5722)))))), uint256(41) /*'(./index.rsh:179:18:application,[at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:175:21:function exp),at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:174:21:function exp),at ./index.rsh:190:25:application call to "doSafeTransferFrom" (defined at: ./index.rsh:171:67:function exp),at ./index.rsh:189:20:application call to [unknown function] (defined at: ./index.rsh:189:20:function exp)],Nothing)'*/);
    emit _reach_oe_v5730( (false));
    _Memory._reachr_safeTransferFrom1 = (false);
    T14  memory _ja;
    _ja.elem0 = _svs.v3471;
    _ja.elem1 = _svs.v3472;
    _ja.elem2 = _svs.v3473;
    _ja.elem3 = _svs.v3474;
    _ja.elem4 = _svs.v3475;
    _ja.elem5 = uint256(block.number);
    _reachl_1(_ja, _Memory);
    }
    } else if ((_a.elem1).which == _enum_T8.safeTransferFrom20_355) {
    _f.v6005 = (_a.elem1)._safeTransferFrom20_355;
    reachRequire((msg.value == uint256(0)), uint256(42) /*'(./index.rsh:112:28:dot,[],"verify network token pay amount")'*/);
    _f.v6294 = __reachm_0Ref((_f.v6005.elem2));
    reachRequire((((uint256(_f.v6294.which)) == uint256(1))), uint256(43) /*'(reach standard library:57:5:application,[at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:157:28:application call to "ownerOf" (defined at: ./index.rsh:121:31:function exp),at ./index.rsh:196:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp),at ./index.rsh:197:20:application call to [unknown function] (defined at: ./index.rsh:197:20:function exp)],Just "ERC721::ownerOf: Owner query for non-existent token")'*/);
    _f.v6299 = (_f.v6294.which == _enum_T0.Some ? _f.v6294._Some : _svs.v3475);
    reachRequire(((((_f.v6005.elem1) == _svs.v3475) ? false : true)), uint256(44) /*'(reach standard library:57:5:application,[at ./index.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:196:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp),at ./index.rsh:197:20:application call to [unknown function] (defined at: ./index.rsh:197:20:function exp)],Just "ERC721::transfer: transfer to the zero address")'*/);
    _f.v6314.elem0 = _f.v6299;
    _f.v6314.elem1 = payable(msg.sender);
    reachRequire(((((payable(msg.sender) == _f.v6299) ? true : (((__reachm_3Ref(uint256(keccak256(abi.encode(_f.v6314))))).which == _enum_T2.Some ? (__reachm_3Ref(uint256(keccak256(abi.encode(_f.v6314)))))._Some : false))) ? true : ((((__reachm_2Ref((_f.v6005.elem2))).which == _enum_T0.Some ? (__reachm_2Ref((_f.v6005.elem2)))._Some : _svs.v3475)) == payable(msg.sender)))), uint256(45) /*'(reach standard library:57:5:application,[at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:196:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp),at ./index.rsh:197:20:application call to [unknown function] (defined at: ./index.rsh:197:20:function exp)],Just "ERC721::transfer: caller is not owner nor approved")'*/);
    _reachm_2[(_f.v6005.elem2)].which = _enum_T0.Some;
    _reachm_2[(_f.v6005.elem2)]._Some = _svs.v3475;
    
    emit Approval( _f.v6299,  _svs.v3475,  (_f.v6005.elem2));
    _f.v6371 = __reachm_1Ref((_f.v6005.elem0));
    if (_f.v6371.which == _enum_T1.None) {
    _f.v6372 = uint256(0);
    } else if (_f.v6371.which == _enum_T1.Some) {
    _f.v6374 = _f.v6371._Some;
    _f.v6372 = (safeSub(_f.v6374, uint256(1)));
    }
    _reachm_1[(_f.v6005.elem0)].which = _enum_T1.Some;
    _reachm_1[(_f.v6005.elem0)]._Some = _f.v6372;
    
    _f.v6376 = __reachm_1Ref((_f.v6005.elem1));
    if (_f.v6376.which == _enum_T1.None) {
    _f.v6377 = uint256(1);
    } else if (_f.v6376.which == _enum_T1.Some) {
    _f.v6379 = _f.v6376._Some;
    _f.v6377 = (safeAdd(_f.v6379, uint256(1)));
    }
    _reachm_1[(_f.v6005.elem1)].which = _enum_T1.Some;
    _reachm_1[(_f.v6005.elem1)]._Some = _f.v6377;
    
    _reachm_0[(_f.v6005.elem2)].which = _enum_T0.Some;
    _reachm_0[(_f.v6005.elem2)]._Some = (_f.v6005.elem1);
    
    emit Transfer( (_f.v6005.elem0),  (_f.v6005.elem1),  (_f.v6005.elem2));
    if (((_f.v6005.elem1).code.length > 0)) {
      _f.v6382.which = _enum_T15.Some;
      _f.v6382._Some = (_f.v6005.elem1);
      }
    else {
      _f.v6382.which = _enum_T15.None;
      _f.v6382._None = false;
      }
    _f.v6383 = _f.v6382;
    emit _reach_oe_v6382( _f.v6382);
    if (_f.v6383.which == _enum_T15.None) {
    emit _reach_oe_v6388( (false));
    _Memory._reachr_safeTransferFrom2 = (false);
    T14  memory _ja;
    _ja.elem0 = _svs.v3471;
    _ja.elem1 = _svs.v3472;
    _ja.elem2 = _svs.v3473;
    _ja.elem3 = _svs.v3474;
    _ja.elem4 = _svs.v3475;
    _ja.elem5 = uint256(block.number);
    _reachl_1(_ja, _Memory);
    } else if (_f.v6383.which == _enum_T15.Some) {
    _f.v6398 = _f.v6383._Some;
    _f.v6403 = hex'';
    {
      _f.v9266 = unsafeSub(address(this).balance, uint256(0));
      locked = true;
      bytes memory v9267 = abi.encodeWithSelector(I9e4f77dac3bcd023bda70ef60795ac7bce06db07.onERC721Received.selector, (payable(address(this))), (_f.v6005.elem0), (_f.v6005.elem2), _f.v6403);
      (bool v9264, bytes memory v9265) = _f.v6398.call{value: uint256(0)}(v9267);
      checkFunReturn(v9264, v9265, uint256(46) /*'(./index.rsh:177:40:application,[at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:175:21:function exp),at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:174:21:function exp),at ./index.rsh:198:25:application call to "doSafeTransferFrom" (defined at: ./index.rsh:171:67:function exp),at ./index.rsh:197:20:application call to [unknown function] (defined at: ./index.rsh:197:20:function exp)],"remote onERC721Received failed")'*/);
      locked = false;
      _f.v6404.elem0 = unsafeSub(address(this).balance, _f.v9266);
      _f.v6404.elem1 = abi.decode(v9265, (bytes4));
      }
    _f.v6405 = _f.v6404;
    emit _reach_oe_v6404( _f.v6404);
    reachRequire(((uint256(0) == (_f.v6405.elem0))), uint256(47) /*'(./index.rsh:177:40:application,[at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:175:21:function exp),at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:174:21:function exp),at ./index.rsh:198:25:application call to "doSafeTransferFrom" (defined at: ./index.rsh:171:67:function exp),at ./index.rsh:197:20:application call to [unknown function] (defined at: ./index.rsh:197:20:function exp)],Just "remote bill check")'*/);
    _f.v6414 = hex'150b7a02';
    reachRequire((((uint256(keccak256(abi.encode((_f.v6405.elem1))))) == (uint256(keccak256(abi.encode(_f.v6414)))))), uint256(48) /*'(./index.rsh:179:18:application,[at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:175:21:function exp),at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:174:21:function exp),at ./index.rsh:198:25:application call to "doSafeTransferFrom" (defined at: ./index.rsh:171:67:function exp),at ./index.rsh:197:20:application call to [unknown function] (defined at: ./index.rsh:197:20:function exp)],Nothing)'*/);
    emit _reach_oe_v6422( (false));
    _Memory._reachr_safeTransferFrom2 = (false);
    T14  memory _ja;
    _ja.elem0 = _svs.v3471;
    _ja.elem1 = _svs.v3472;
    _ja.elem2 = _svs.v3473;
    _ja.elem3 = _svs.v3474;
    _ja.elem4 = _svs.v3475;
    _ja.elem5 = uint256(block.number);
    _reachl_1(_ja, _Memory);
    }
    } else if ((_a.elem1).which == _enum_T8.setApprovalForAll0_355) {
    _f.v6553 = (_a.elem1)._setApprovalForAll0_355;
    reachRequire((msg.value == uint256(0)), uint256(49) /*'(./index.rsh:112:28:dot,[],"verify network token pay amount")'*/);
    reachRequire((((payable(msg.sender) == (_f.v6553.elem0)) ? false : true)), uint256(50) /*'(reach standard library:57:5:application,[at ./index.rsh:223:10:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:224:20:application call to [unknown function] (defined at: ./index.rsh:224:20:function exp)],Just "ERC721::setApprovalForAll: approve to caller")'*/);
    _f.v6988.elem0 = payable(msg.sender);
    _f.v6988.elem1 = (_f.v6553.elem0);
    _reachm_3[uint256(keccak256(abi.encode(_f.v6988)))].which = _enum_T2.Some;
    _reachm_3[uint256(keccak256(abi.encode(_f.v6988)))]._Some = (_f.v6553.elem1);
    
    emit ApprovalForAll( payable(msg.sender),  (_f.v6553.elem0),  (_f.v6553.elem1));
    emit _reach_oe_v6989( (false));
    _Memory._reachr_setApprovalForAll = (false);
    T14  memory _ja;
    _ja.elem0 = _svs.v3471;
    _ja.elem1 = _svs.v3472;
    _ja.elem2 = _svs.v3473;
    _ja.elem3 = _svs.v3474;
    _ja.elem4 = _svs.v3475;
    _ja.elem5 = uint256(block.number);
    _reachl_1(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T8.transferFrom0_355) {
    _f.v7101 = (_a.elem1)._transferFrom0_355;
    reachRequire((msg.value == uint256(0)), uint256(51) /*'(./index.rsh:112:28:dot,[],"verify network token pay amount")'*/);
    _f.v7551 = __reachm_0Ref((_f.v7101.elem2));
    reachRequire((((uint256(_f.v7551.which)) == uint256(1))), uint256(52) /*'(reach standard library:57:5:application,[at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:157:28:application call to "ownerOf" (defined at: ./index.rsh:121:31:function exp),at ./index.rsh:204:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp),at ./index.rsh:205:20:application call to [unknown function] (defined at: ./index.rsh:205:20:function exp)],Just "ERC721::ownerOf: Owner query for non-existent token")'*/);
    _f.v7556 = (_f.v7551.which == _enum_T0.Some ? _f.v7551._Some : _svs.v3475);
    reachRequire(((((_f.v7101.elem1) == _svs.v3475) ? false : true)), uint256(53) /*'(reach standard library:57:5:application,[at ./index.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:204:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp),at ./index.rsh:205:20:application call to [unknown function] (defined at: ./index.rsh:205:20:function exp)],Just "ERC721::transfer: transfer to the zero address")'*/);
    _f.v7571.elem0 = _f.v7556;
    _f.v7571.elem1 = payable(msg.sender);
    reachRequire(((((payable(msg.sender) == _f.v7556) ? true : (((__reachm_3Ref(uint256(keccak256(abi.encode(_f.v7571))))).which == _enum_T2.Some ? (__reachm_3Ref(uint256(keccak256(abi.encode(_f.v7571)))))._Some : false))) ? true : ((((__reachm_2Ref((_f.v7101.elem2))).which == _enum_T0.Some ? (__reachm_2Ref((_f.v7101.elem2)))._Some : _svs.v3475)) == payable(msg.sender)))), uint256(54) /*'(reach standard library:57:5:application,[at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:204:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp),at ./index.rsh:205:20:application call to [unknown function] (defined at: ./index.rsh:205:20:function exp)],Just "ERC721::transfer: caller is not owner nor approved")'*/);
    _reachm_2[(_f.v7101.elem2)].which = _enum_T0.Some;
    _reachm_2[(_f.v7101.elem2)]._Some = _svs.v3475;
    
    emit Approval( _f.v7556,  _svs.v3475,  (_f.v7101.elem2));
    _f.v7628 = __reachm_1Ref((_f.v7101.elem0));
    if (_f.v7628.which == _enum_T1.None) {
    _f.v7629 = uint256(0);
    } else if (_f.v7628.which == _enum_T1.Some) {
    _f.v7631 = _f.v7628._Some;
    _f.v7629 = (safeSub(_f.v7631, uint256(1)));
    }
    _reachm_1[(_f.v7101.elem0)].which = _enum_T1.Some;
    _reachm_1[(_f.v7101.elem0)]._Some = _f.v7629;
    
    _f.v7633 = __reachm_1Ref((_f.v7101.elem1));
    if (_f.v7633.which == _enum_T1.None) {
    _f.v7634 = uint256(1);
    } else if (_f.v7633.which == _enum_T1.Some) {
    _f.v7636 = _f.v7633._Some;
    _f.v7634 = (safeAdd(_f.v7636, uint256(1)));
    }
    _reachm_1[(_f.v7101.elem1)].which = _enum_T1.Some;
    _reachm_1[(_f.v7101.elem1)]._Some = _f.v7634;
    
    _reachm_0[(_f.v7101.elem2)].which = _enum_T0.Some;
    _reachm_0[(_f.v7101.elem2)]._Some = (_f.v7101.elem1);
    
    emit Transfer( (_f.v7101.elem0),  (_f.v7101.elem1),  (_f.v7101.elem2));
    emit _reach_oe_v7639( (false));
    _Memory._reachr_transferFrom = (false);
    T14  memory _ja;
    _ja.elem0 = _svs.v3471;
    _ja.elem1 = _svs.v3472;
    _ja.elem2 = _svs.v3473;
    _ja.elem3 = _svs.v3474;
    _ja.elem4 = _svs.v3475;
    _ja.elem5 = uint256(block.number);
    _reachl_1(_ja, _Memory);
    }
    }
  function _reachl_1(T14 memory _a, Memory memory _Memory) internal  {
    T10 memory nsvs;
    nsvs.v3471 = _a.elem0;
    nsvs.v3472 = _a.elem1;
    nsvs.v3473 = _a.elem2;
    nsvs.v3474 = _a.elem3;
    nsvs.v3475 = _a.elem4;
    current_step = uint256(3);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    }
  constructor(T13 memory v9241) payable {
    current_step = 0x0;
    creation_time = uint256(block.number);
    Memory memory _Memory;
    _reachi_0(v9241, _Memory);
    }
  function _reachp_2(T9 calldata v9244) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_2(v9244, _Memory);
    }
  function approve(address payable v9183, uint256 v9184) external payable returns (bool) {
    Memory memory _Memory;
    T3  memory _ja;
    _ja.elem0 = v9183;
    _ja.elem1 = v9184;
    _reacha_approve(_ja, _Memory);
    return _Memory._reachr_approve;
    }
  function balanceOf(address payable v9154) external view returns (uint256) {
    Memory memory _Memory;
    _reacha_balanceOf(v9154, _Memory);
    return _Memory._reachr_balanceOf;
    }
  function burn(uint256 v9190) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_burn(v9190, _Memory);
    return _Memory._reachr_burn;
    }
  function getApproved(uint256 v9158) external view returns (address payable) {
    Memory memory _Memory;
    _reacha_getApproved(v9158, _Memory);
    return _Memory._reachr_getApproved;
    }
  function isApprovedForAll(address payable v9163, address payable v9164) external view returns (bool) {
    Memory memory _Memory;
    T11  memory _ja;
    _ja.elem0 = v9163;
    _ja.elem1 = v9164;
    _reacha_isApprovedForAll(_ja, _Memory);
    return _Memory._reachr_isApprovedForAll;
    }
  function mint(address payable v9197, uint256 v9198) external payable returns (bool) {
    Memory memory _Memory;
    T3  memory _ja;
    _ja.elem0 = v9197;
    _ja.elem1 = v9198;
    _reacha_mint(_ja, _Memory);
    return _Memory._reachr_mint;
    }
  function name() external view returns (string memory) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_name(_ja, _Memory);
    return _Memory._reachr_name;
    }
  function ownerOf(uint256 v9170) external view returns (address payable) {
    Memory memory _Memory;
    _reacha_ownerOf(v9170, _Memory);
    return _Memory._reachr_ownerOf;
    }
  function safeTransferFrom(address payable v9218, address payable v9219, uint256 v9220) external payable returns (bool) {
    Memory memory _Memory;
    T6  memory _ja;
    _ja.elem0 = v9218;
    _ja.elem1 = v9219;
    _ja.elem2 = v9220;
    _reacha_safeTransferFrom2(_ja, _Memory);
    return _Memory._reachr_safeTransferFrom2;
    }
  function safeTransferFrom(address payable v9207, address payable v9208, uint256 v9209, bytes calldata v9210) external payable returns (bool) {
    Memory memory _Memory;
    T5  memory _ja;
    _ja.elem0 = v9207;
    _ja.elem1 = v9208;
    _ja.elem2 = v9209;
    _ja.elem3 = v9210;
    _reacha_safeTransferFrom1(_ja, _Memory);
    return _Memory._reachr_safeTransferFrom1;
    }
  function safeTransferFrom1(address payable v9207, address payable v9208, uint256 v9209, bytes calldata v9210) external payable returns (bool) {
    Memory memory _Memory;
    T5  memory _ja;
    _ja.elem0 = v9207;
    _ja.elem1 = v9208;
    _ja.elem2 = v9209;
    _ja.elem3 = v9210;
    _reacha_safeTransferFrom1(_ja, _Memory);
    return _Memory._reachr_safeTransferFrom1;
    }
  function safeTransferFrom2(address payable v9218, address payable v9219, uint256 v9220) external payable returns (bool) {
    Memory memory _Memory;
    T6  memory _ja;
    _ja.elem0 = v9218;
    _ja.elem1 = v9219;
    _ja.elem2 = v9220;
    _reacha_safeTransferFrom2(_ja, _Memory);
    return _Memory._reachr_safeTransferFrom2;
    }
  function setApprovalForAll(address payable v9227, bool v9228) external payable returns (bool) {
    Memory memory _Memory;
    T7  memory _ja;
    _ja.elem0 = v9227;
    _ja.elem1 = v9228;
    _reacha_setApprovalForAll(_ja, _Memory);
    return _Memory._reachr_setApprovalForAll;
    }
  function symbol() external view returns (string memory) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_symbol(_ja, _Memory);
    return _Memory._reachr_symbol;
    }
  function tokenURI(uint256 v9176) external view returns (string memory) {
    Memory memory _Memory;
    _reacha_tokenURI(v9176, _Memory);
    return _Memory._reachr_tokenURI;
    }
  function transferFrom(address payable v9236, address payable v9237, uint256 v9238) external payable returns (bool) {
    Memory memory _Memory;
    T6  memory _ja;
    _ja.elem0 = v9236;
    _ja.elem1 = v9237;
    _ja.elem2 = v9238;
    _reacha_transferFrom(_ja, _Memory);
    return _Memory._reachr_transferFrom;
    }
  }
