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




console.log('Exiting...');
