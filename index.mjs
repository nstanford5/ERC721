import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib({REACH_NO_WARN: 'Y'});

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

const lock = () => {
  const lockObj = {};
  lockObj.reset = () => lockObj.wait = new Promise(r => { lockObj.unlock = r; });
  lockObj.reset();
  return lockObj;
;}

const startMeUp = async (ctc, meta) => {
  const flag = "startup success throw flag";
  try {
    await ctc.p.Deployer({
      meta,
      zeroAddr: zeroAddr,
      launched: (ctc) => {
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
}

const ctc0 = acc0.contract(backend);
console.log('Starting backend...');
await startMeUp(ctc0, meta);// contract deployed

const ctcInfo = await ctc0.getInfo();
const ctc = (acc) => acc.contract(backend, ctcInfo);

/**
 * Locking mechanism.
 * 
 * Do I need this? Or can I make it work
 * 
 * Finish locking mechanism
 */
const evLocks = {};
const assertEvent = {};
for (const ev of ["Transfer", "Approval", "ApprovalForAll"]){
  // Make lock, to wait for an event to occur
  const l = lock();
  ctc.on(ev, (...args) => l.unlock(args));
  evLocks[ev] = l;

  // Event occurence assertion helper
  assertEvent[ev] = async (...expectedArgs) => {
    const args = await l.wait;
    l.reset();
    expectedArgs.forEach((expectedArg, i) => assertEq(args[i], expectedArg, `${ev} field ${i}`));
  }
}// end of for loop

// other helpers
const assertOwners = async (...owners) => {
  assertEq(await ctc.ownerOf(tok1), owners[0], "ownerOf(1)");

  const countAddr = addr => owners.reduce((n, a) => n + (addr === a ? 1 : 0), 0);
  assertEq(await ctc.balanceOf(addr1), countAddr(addr1), "balanceOf(addr1)");
}
// networkAccount: https://docs.reach.sh/frontend/#js_networkAccount
const [_, ctc1, ctc2, ctc3] = accs.map(a => ctc.connect(a.networkAccount));
const mkTransfer = transferFn => async (from, to, tok, ctcOverride) => {
  const fromCtc = ctcOverride ?? (from === addr1 ? ctc1 : (from === addr2 ? ctc2 : ctc3));
  await waitTxn(fromCtc[transferFn](from, to, tok, gasLimit));
  await assertEvent.Approval(from, zeroAddr, tok);
  await assertEvent.Transfer(from, to, tok);
};
const transferFrom = mkTransfer("transferFrom");
const safeTransferFrom = mkTransfer("safeTransferFrom(address,address,uint256)");




await assertFail(ctc.balanceOf(zeroAddr));


console.log('Exiting...');
