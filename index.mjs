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
  assertEq(bal0, await ctc0.v.balanceOf(addr0.getAddress())[1]);
  assertEq(bal1, await ctc1.v.balanceOf(addr1.getAddress())[1]);
};
const assertEvent = async (event, ...expectedArgs) => {
  const e = await ctc0.events[event].next();
  const actualArgs = e.what;
  expectedArgs.forEach((expectedArg, i) => assertEq(actualArgs[i], expectedArg, `${event} field ${i}`));
  console.log(`assertEvent complete`);
};
// const mkTransfer = transferFn => async (from, to, tok, ctcOverride) => {
//   const fromCtc = ctcOverride ?? (from === addr1 ? ctc1 : (from === addr2 ? ctc2 : ctc3));
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
// balanceOf takes an Address and returns an Int
try{
  const zeroAddrBal = await ctc0.v.balanceOf(zeroAddr);
  console.log(`The balance of the zeroAddress is: ${stdlib.fromSome(zeroAddrBal, 0)}`);
} catch (e){
  console.log(`${e}`);
}

// the deployer is the owner
// approve address 1, transfer to address 1
try{
  // await ctc0.a.approve(addr1, 1);
  // console.log(`${addr1} has been approved.`);
  await ctc0.a.safeTransferFrom2(addr0, addr1, 1);
} catch(e){
  console.log(`${e}`);
}


console.log('Exiting...');
