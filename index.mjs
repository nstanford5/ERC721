import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib({REACH_NO_WARN: 'Y'});

if(stdlib.connector !== 'ETH'){
  console.log('Sorry, this program is only compiled on ETH for now');
  process.exit(0);
};
console.log('Starting up...');

const sbal = stdlib.parseCurrency(100);
const accs = await stdlib.newTestAccounts(4, sbal);
const [acc0, acc1, acc2, acc3] = accs;
const [add0, addr1, addr2, addr3] = accs.map(x => x.getAddress());
const zerAddr = "0x" + "0".repeat(40);

await ctc0.p.Deployer({
  meta: {
    // token metadata here
    name: "Reach_ERC721",
    symbol: "RCH",
    tokenURI: 'tokenURI here'
  },
  zeroAddr: zerAddr,
  launched: async (c) => {
    console.log(`Ready at contract ${c}`);
    // ready to start making API calls
  },
})