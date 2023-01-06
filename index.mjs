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
      tokId: 1,// simulate asset ID num
      launched: (ctc) => {
        console.log(`The contract has been deployed: ${ctc}`);
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

const ctc0 = acc0.contract(backend);
console.log('Starting backend...');
await startMeUp(ctc0, meta);// contract deployed

const ctcInfo = await ctc0.getInfo();
const ctc1 = acc1.contract(backend, ctcInfo);
// other helpers
const assertBalances = async (bal0, bal1, bal2, bal3) => {
  assertEq(bal0, (await ctc0.v.balanceOf(acc0.getAddress()))[1])// change this to unsafe views
  // assertEq(bal1, (await ctc0.v.balanceOf(acc1.getAddress()))[1]);
  // assertEq(bal2, (await ctc0.v.balanceOf(acc1.getAddress()))[1]);
  // assertEq(bal3, (await ctc0.v.balanceOf(acc1.getAddress()))[1]);
  console.log(`assertBalances complete`);
};
const assertOwners = async (...owners) => {
  assertEq(await ctc1.ownerOf(tok1), owners[0], "ownerOf(1)");

  const countAddr = addr => owners.reduce((n, a) => n + (addr === a ? 1 : 0), 0);
  assertEq(await ctc1(addr1).balanceOf(addr1), countAddr(addr1), "balanceOf(addr1)");
};
const assertEvent = async (event, ...expectedArgs) => {
  const e = await ctc0.events[event].next();
  const actualArgs = e.what;
  expectedArgs.forEach((expectedArg, i) => assertEq(actualArgs[i], expectedArg, `${event} field ${i}`));
  console.log(`assertEvent complete`);
};
const mkTransfer = transferFn => async (from, to, tok, ctcOverride) => {
  const fromCtc = ctcOverride ?? (from === addr1 ? ctc1 : (from === addr2 ? ctc2 : ctc3));
  await waitTxn(fromCtc[transferFn](from, to, tok, gasLimit));
  await assertEvent.Approval(from, zeroAddr, tok);
  await assertEvent.Transfer(from, to, tok);
};
const transferFrom = mkTransfer("transferFrom");
const safeTransferFrom = mkTransfer("safeTransferFrom(address,address,uint256)");

try{
  const deployBal = await ctc0.v.balanceOf(addr0);
  console.log(`The deployers ERC721 token balance is: ${deployBal[1]}`);
  const myBal = await ctc1.v.balanceOf(addr1);
  console.log(`The first users token balance is: ${stdlib.formatCurrency(myBal[1])}`);
} catch(e){
  console.log(`${e}`);
}
// balanceOf takes an Address and returns an Int
try{
  const zeroAddrBal = await ctc0.v.balanceOf(zeroAddr);
  console.log(`The balance of the zeroAddress is: ${stdlib.fromSome(zeroAddrBal, 0)}`);
} catch (e){
  console.log(`${e}`);
}


console.log('Exiting...');
