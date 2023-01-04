// Automatically generated with Reach 0.1.13 (f79282c4)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (f79282c4)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  return {
    Approval: [ctc0, ctc0, ctc1],
    ApprovalForAll: [ctc0, ctc0, ctc2],
    Transfer: [ctc0, ctc0, ctc1]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_StringDyn;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Data({
    None: ctc5,
    Some: ctc0
    });
  const ctc7 = stdlib.T_Data({
    None: ctc5,
    Some: ctc2
    });
  const ctc8 = stdlib.T_Data({
    None: ctc5,
    Some: ctc3
    });
  const map0_ctc = ctc6;
  
  const map1_ctc = ctc7;
  
  const map2_ctc = ctc6;
  
  const map3_ctc = ctc8;
  
  
  const _balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3471, v3472, v3473, v3474, v3475] = svs;
      return (await ((async (_v3486 ) => {
          const v3486 = stdlib.protect(ctc0, _v3486, null);
        
        const v3487 = stdlib.addressEq(v3486, v3475);
        const v3488 = v3487 ? false : true;
        stdlib.assert(v3488, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:115:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:114:20:application call to [unknown function] (defined at: ./index.rsh:114:20:application)'],
          msg: 'ERC721::balanceOf: Address zero is not a valid owner',
          who: 'Module'
          });
        const v3490 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc0, v3486, ctc2), null);
        const v3491 = stdlib.fromSome(v3490, stdlib.checkedBigNumberify('./index.rsh:117:30:decimal', stdlib.UInt_max, '0'));
        
        return v3491;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _getApproved = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3471, v3472, v3473, v3474, v3475] = svs;
      return (await ((async (_v3499 ) => {
          const v3499 = stdlib.protect(ctc2, _v3499, null);
        
        const v3500 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc2, v3499, ctc0), null);
        const v3501 = {
          None: 0,
          Some: 1
          }[v3500[0]];
        const v3502 = stdlib.eq(v3501, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3502, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:129:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:133:22:application call to "getApproved" (defined at: ./index.rsh:133:22:application)'],
          msg: 'ERC721::getApproved: approved query for non-existent token',
          who: 'Module'
          });
        const v3504 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc2, v3499, ctc0), null);
        const v3505 = stdlib.fromSome(v3504, v3475);
        
        return v3505;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _isApprovedForAll = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3471, v3472, v3473, v3474, v3475] = svs;
      return (await ((async (_v3506, _v3507 ) => {
          const v3506 = stdlib.protect(ctc0, _v3506, null);
          const v3507 = stdlib.protect(ctc0, _v3507, null);
        
        const v3508 = [v3506, v3507];
        const v3509 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, ctc4, v3508, ctc3), null);
        const v3510 = stdlib.fromSome(v3509, false);
        
        return v3510;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _name = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3471, v3472, v3473, v3474, v3475] = svs;
      return (await ((async () => {
        
        
        return v3472;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _ownerOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3471, v3472, v3473, v3474, v3475] = svs;
      return (await ((async (_v3492 ) => {
          const v3492 = stdlib.protect(ctc2, _v3492, null);
        
        const v3493 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc2, v3492, ctc0), null);
        const v3494 = {
          None: 0,
          Some: 1
          }[v3493[0]];
        const v3495 = stdlib.eq(v3494, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3495, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:126:18:application call to "ownerOf" (defined at: ./index.rsh:126:18:application)'],
          msg: 'ERC721::ownerOf: Owner query for non-existent token',
          who: 'Module'
          });
        const v3498 = stdlib.fromSome(v3493, v3475);
        
        return v3498;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _symbol = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3471, v3472, v3473, v3474, v3475] = svs;
      return (await ((async () => {
        
        
        return v3473;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _tokenURI = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v3471, v3472, v3473, v3474, v3475] = svs;
      return (await ((async (_v3511 ) => {
          const v3511 = stdlib.protect(ctc2, _v3511, null);
        
        const v3512 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc2, v3511, ctc0), null);
        const v3513 = {
          None: 0,
          Some: 1
          }[v3512[0]];
        const v3514 = stdlib.eq(v3513, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3514, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:148:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:19:application call to [unknown function] (defined at: ./index.rsh:147:19:application)'],
          msg: 'tokenURI: URI query for non-existent token',
          who: 'Module'
          });
        const v3516 = stdlib.uintToStringDyn(v3511);
        const v3517 = stdlib.stringDynConcat(v3474, v3516);
        
        return v3517;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      balanceOf: {
        decode: _balanceOf,
        dom: [ctc0],
        rng: ctc2
        },
      getApproved: {
        decode: _getApproved,
        dom: [ctc2],
        rng: ctc0
        },
      isApprovedForAll: {
        decode: _isApprovedForAll,
        dom: [ctc0, ctc0],
        rng: ctc3
        },
      name: {
        decode: _name,
        dom: [],
        rng: ctc1
        },
      ownerOf: {
        decode: _ownerOf,
        dom: [ctc2],
        rng: ctc0
        },
      symbol: {
        decode: _symbol,
        dom: [],
        rng: ctc1
        },
      tokenURI: {
        decode: _tokenURI,
        dom: [ctc2],
        rng: ctc1
        }
      },
    views: {
      3: [ctc0, ctc1, ctc1, ctc1, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc2, ctc4, ctc2, ctc6]);
  return {
    mapDataTy: ctc7
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_StringDyn;
  const ctc8 = stdlib.T_Object({
    name: ctc7,
    symbol: ctc7,
    tokenURI: ctc7
    });
  const ctc9 = stdlib.T_Tuple([ctc1, ctc3]);
  const ctc10 = stdlib.T_Tuple([ctc3]);
  const ctc11 = stdlib.T_BytesDyn;
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc3, ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc15 = stdlib.T_Data({
    approve0_355: ctc9,
    burn0_355: ctc10,
    mint0_355: ctc9,
    safeTransferFrom10_355: ctc12,
    safeTransferFrom20_355: ctc13,
    setApprovalForAll0_355: ctc14,
    transferFrom0_355: ctc13
    });
  const ctc16 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc17 = stdlib.T_Contract;
  const ctc18 = stdlib.T_Data({
    None: ctc0,
    Some: ctc17
    });
  const ctc19 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc20 = stdlib.T_Tuple([ctc3, ctc19]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false
    });
  
  const map3_ctc = ctc6;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false
    });
  
  
  const v3461 = stdlib.protect(ctc8, interact.meta, 'for Deployer\'s interact field meta');
  const v3462 = v3461.name;
  const v3463 = v3461.symbol;
  const v3464 = v3461.tokenURI;
  const v3465 = stdlib.protect(ctc1, interact.zeroAddr, 'for Deployer\'s interact field zeroAddr');
  
  const txn1 = await (ctc.sendrecv({
    args: [v3462, v3463, v3464, v3465],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:101:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7, ctc7, ctc7, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:101:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3472, v3473, v3474, v3475], secs: v3477, time: v3476, didSend: v37, from: v3471 } = txn1;
      
      ;
      const v3478 = await ctc.getContractInfo();
      
      const v3480 = v3476;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc7, ctc7, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v3472, v3473, v3474, v3475], secs: v3477, time: v3476, didSend: v37, from: v3471 } = txn1;
  ;
  const v3478 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.launched(v3478), {
    at: './index.rsh:102:22:application',
    fs: ['at ./index.rsh:102:22:application call to [unknown function] (defined at: ./index.rsh:102:22:function exp)', 'at ./index.rsh:102:22:application call to "liftedInteract" (defined at: ./index.rsh:102:22:application)'],
    msg: 'launched',
    who: 'Deployer'
    });
  
  let v3480 = v3476;
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3810], secs: v3812, time: v3811, didSend: v1941, from: v3809 } = txn3;
    switch (v3810[0]) {
      case 'approve0_355': {
        const v3813 = v3810[1];
        undefined /* setApiDetails */;
        ;
        const v3825 = v3813[stdlib.checkedBigNumberify('./index.rsh:211:8:spread', stdlib.UInt_max, '0')];
        const v3826 = v3813[stdlib.checkedBigNumberify('./index.rsh:211:8:spread', stdlib.UInt_max, '1')];
        const v3827 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3826, ctc1), null);
        const v3828 = {
          None: 0,
          Some: 1
          }[v3827[0]];
        const v3829 = stdlib.eq(v3828, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3829, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:212:26:application call to "ownerOf" (defined at: ./index.rsh:121:31:function exp)', 'at ./index.rsh:215:20:application call to [unknown function] (defined at: ./index.rsh:215:20:function exp)'],
          msg: 'ERC721::ownerOf: Owner query for non-existent token',
          who: 'Deployer'
          });
        const v3832 = stdlib.fromSome(v3827, v3475);
        const v3833 = stdlib.addressEq(v3825, v3832);
        const v3834 = v3833 ? false : true;
        stdlib.assert(v3834, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:213:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:215:20:application call to [unknown function] (defined at: ./index.rsh:215:20:function exp)'],
          msg: 'ERC721::approve: Approval to current owner',
          who: 'Deployer'
          });
        const v3836 = stdlib.addressEq(v3809, v3832);
        const v3837 = [v3832, v3809];
        const v3838 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc16, v3837, ctc5), null);
        const v3839 = stdlib.fromSome(v3838, false);
        const v3840 = v3836 ? true : v3839;
        stdlib.assert(v3840, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:214:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:215:20:application call to [unknown function] (defined at: ./index.rsh:215:20:function exp)'],
          msg: 'ERC721::approve: Caller is not owner nor approved for all',
          who: 'Deployer'
          });
        await stdlib.mapSet(map2, ctc3, v3826, ctc1, v3825);
        null;
        const v3851 = null;
        await txn3.getOutput('approve', 'v3851', ctc0, v3851);
        const cv3480 = v3811;
        
        v3480 = cv3480;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'burn0_355': {
        const v4361 = v3810[1];
        undefined /* setApiDetails */;
        ;
        const v4409 = v4361[stdlib.checkedBigNumberify('./index.rsh:243:8:spread', stdlib.UInt_max, '0')];
        const v4410 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v4409, ctc1), null);
        const v4411 = {
          None: 0,
          Some: 1
          }[v4410[0]];
        const v4412 = stdlib.eq(v4411, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v4412, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:244:26:application call to "ownerOf" (defined at: ./index.rsh:121:31:function exp)', 'at ./index.rsh:246:20:application call to [unknown function] (defined at: ./index.rsh:246:20:function exp)'],
          msg: 'ERC721::ownerOf: Owner query for non-existent token',
          who: 'Deployer'
          });
        const v4415 = stdlib.fromSome(v4410, v3475);
        const v4426 = stdlib.addressEq(v3809, v4415);
        const v4427 = [v4415, v3809];
        const v4428 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc16, v4427, ctc5), null);
        const v4429 = stdlib.fromSome(v4428, false);
        const v4430 = v4426 ? true : v4429;
        const v4436 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc3, v4409, ctc1), null);
        const v4437 = stdlib.fromSome(v4436, v3475);
        const v4438 = stdlib.addressEq(v4437, v3809);
        const v4431 = v4430 ? true : v4438;
        stdlib.assert(v4431, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:245:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:246:20:application call to [unknown function] (defined at: ./index.rsh:246:20:function exp)'],
          msg: 'ERC721::burn: caller is not owner nor approved',
          who: 'Deployer'
          });
        await stdlib.mapSet(map2, ctc3, v4409, ctc1, v3475);
        null;
        const v4448 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc1, v4415, ctc3), null);
        let v4449;
        switch (v4448[0]) {
          case 'None': {
            const v4450 = v4448[1];
            v4449 = stdlib.checkedBigNumberify('./index.rsh:249:46:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v4451 = v4448[1];
            const v4452 = stdlib.safeSub(v4451, stdlib.checkedBigNumberify('./index.rsh:249:60:decimal', stdlib.UInt_max, '1'));
            v4449 = v4452;
            
            break;
            }
          }
        const v4453 = stdlib.eq(v4449, stdlib.checkedBigNumberify('./index.rsh:250:20:decimal', stdlib.UInt_max, '0'));
        if (v4453) {
          await stdlib.mapSet(map1, ctc1, v4415, ctc3, undefined /* Nothing */);
          await stdlib.mapSet(map0, ctc3, v4409, ctc1, v3475);
          null;
          const v4454 = null;
          await txn3.getOutput('burn', 'v4454', ctc0, v4454);
          const cv3480 = v3811;
          
          v3480 = cv3480;
          
          txn2 = txn3;
          continue;}
        else {
          await stdlib.mapSet(map1, ctc1, v4415, ctc3, v4449);
          await stdlib.mapSet(map0, ctc3, v4409, ctc1, v3475);
          null;
          const v4462 = null;
          await txn3.getOutput('burn', 'v4462', ctc0, v4462);
          const cv3480 = v3811;
          
          v3480 = cv3480;
          
          txn2 = txn3;
          continue;}
        break;
        }
      case 'mint0_355': {
        const v4909 = v3810[1];
        undefined /* setApiDetails */;
        ;
        const v5019 = v4909[stdlib.checkedBigNumberify('./index.rsh:231:8:spread', stdlib.UInt_max, '0')];
        const v5020 = v4909[stdlib.checkedBigNumberify('./index.rsh:231:8:spread', stdlib.UInt_max, '1')];
        const v5021 = stdlib.addressEq(v5019, v3475);
        const v5022 = v5021 ? false : true;
        stdlib.assert(v5022, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:232:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:235:20:application call to [unknown function] (defined at: ./index.rsh:235:20:function exp)'],
          msg: 'Cannot mint to zero address',
          who: 'Deployer'
          });
        const v5024 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v5020, ctc1), null);
        const v5025 = {
          None: 0,
          Some: 1
          }[v5024[0]];
        const v5026 = stdlib.eq(v5025, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v5027 = v5026 ? false : true;
        stdlib.assert(v5027, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:233:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:235:20:application call to [unknown function] (defined at: ./index.rsh:235:20:function exp)'],
          msg: 'Token already exists',
          who: 'Deployer'
          });
        const v5029 = stdlib.addressEq(v3809, v3471);
        stdlib.assert(v5029, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:234:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:235:20:application call to [unknown function] (defined at: ./index.rsh:235:20:function exp)'],
          msg: 'mint can only be called by deployer',
          who: 'Deployer'
          });
        const v5033 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc1, v5019, ctc3), null);
        let v5034;
        switch (v5033[0]) {
          case 'None': {
            const v5035 = v5033[1];
            v5034 = stdlib.checkedBigNumberify('./index.rsh:236:52:decimal', stdlib.UInt_max, '1');
            
            break;
            }
          case 'Some': {
            const v5036 = v5033[1];
            const v5037 = stdlib.safeAdd(v5036, stdlib.checkedBigNumberify('./index.rsh:236:66:decimal', stdlib.UInt_max, '1'));
            v5034 = v5037;
            
            break;
            }
          }
        await stdlib.mapSet(map1, ctc1, v5019, ctc3, v5034);
        await stdlib.mapSet(map0, ctc3, v5020, ctc1, v5019);
        null;
        const v5038 = null;
        await txn3.getOutput('mint', 'v5038', ctc0, v5038);
        const cv3480 = v3811;
        
        v3480 = cv3480;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'safeTransferFrom10_355': {
        const v5457 = v3810[1];
        undefined /* setApiDetails */;
        ;
        const v5596 = v5457[stdlib.checkedBigNumberify('./index.rsh:187:8:spread', stdlib.UInt_max, '0')];
        const v5597 = v5457[stdlib.checkedBigNumberify('./index.rsh:187:8:spread', stdlib.UInt_max, '1')];
        const v5598 = v5457[stdlib.checkedBigNumberify('./index.rsh:187:8:spread', stdlib.UInt_max, '2')];
        const v5599 = v5457[stdlib.checkedBigNumberify('./index.rsh:187:8:spread', stdlib.UInt_max, '3')];
        const v5601 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v5598, ctc1), null);
        const v5602 = {
          None: 0,
          Some: 1
          }[v5601[0]];
        const v5603 = stdlib.eq(v5602, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5603, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:28:application call to "ownerOf" (defined at: ./index.rsh:121:31:function exp)', 'at ./index.rsh:188:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:189:20:application call to [unknown function] (defined at: ./index.rsh:189:20:function exp)'],
          msg: 'ERC721::ownerOf: Owner query for non-existent token',
          who: 'Deployer'
          });
        const v5606 = stdlib.fromSome(v5601, v3475);
        const v5607 = stdlib.addressEq(v5597, v3475);
        const v5608 = v5607 ? false : true;
        stdlib.assert(v5608, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:189:20:application call to [unknown function] (defined at: ./index.rsh:189:20:function exp)'],
          msg: 'ERC721::transfer: transfer to the zero address',
          who: 'Deployer'
          });
        const v5620 = stdlib.addressEq(v3809, v5606);
        const v5621 = [v5606, v3809];
        const v5622 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc16, v5621, ctc5), null);
        const v5623 = stdlib.fromSome(v5622, false);
        const v5624 = v5620 ? true : v5623;
        const v5630 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc3, v5598, ctc1), null);
        const v5631 = stdlib.fromSome(v5630, v3475);
        const v5632 = stdlib.addressEq(v5631, v3809);
        const v5625 = v5624 ? true : v5632;
        stdlib.assert(v5625, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:189:20:application call to [unknown function] (defined at: ./index.rsh:189:20:function exp)'],
          msg: 'ERC721::transfer: caller is not owner nor approved',
          who: 'Deployer'
          });
        await stdlib.mapSet(map2, ctc3, v5598, ctc1, v3475);
        null;
        const v5679 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc1, v5596, ctc3), null);
        let v5680;
        switch (v5679[0]) {
          case 'None': {
            const v5681 = v5679[1];
            v5680 = stdlib.checkedBigNumberify('./index.rsh:166:48:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v5682 = v5679[1];
            const v5683 = stdlib.safeSub(v5682, stdlib.checkedBigNumberify('./index.rsh:166:62:decimal', stdlib.UInt_max, '1'));
            v5680 = v5683;
            
            break;
            }
          }
        await stdlib.mapSet(map1, ctc1, v5596, ctc3, v5680);
        const v5684 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc1, v5597, ctc3), null);
        let v5685;
        switch (v5684[0]) {
          case 'None': {
            const v5686 = v5684[1];
            v5685 = stdlib.checkedBigNumberify('./index.rsh:167:48:decimal', stdlib.UInt_max, '1');
            
            break;
            }
          case 'Some': {
            const v5687 = v5684[1];
            const v5688 = stdlib.safeAdd(v5687, stdlib.checkedBigNumberify('./index.rsh:167:62:decimal', stdlib.UInt_max, '1'));
            v5685 = v5688;
            
            break;
            }
          }
        await stdlib.mapSet(map1, ctc1, v5597, ctc3, v5685);
        await stdlib.mapSet(map0, ctc3, v5598, ctc1, v5597);
        null;
        const v5690 = ['None', null];
        const v5691 = await txn3.getOutput('internal', 'v5690', ctc18, v5690);
        switch (v5691[0]) {
          case 'None': {
            const v5692 = v5691[1];
            const v5696 = null;
            await txn3.getOutput('safeTransferFrom1', 'v5696', ctc0, v5696);
            const cv3480 = v3811;
            
            v3480 = cv3480;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'Some': {
            const v5707 = v5691[1];
            const v5708 = await ctc.getContractAddress();
            const v5711 = [];
            const v5712 = undefined /* Remote */;
            const v5713 = await txn3.getOutput('internal', 'v5712', ctc20, v5712);
            const v5715 = v5713[stdlib.checkedBigNumberify('./index.rsh:177:40:application', stdlib.UInt_max, '0')];
            const v5716 = v5713[stdlib.checkedBigNumberify('./index.rsh:177:40:application', stdlib.UInt_max, '1')];
            const v5721 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5715);
            stdlib.assert(v5721, {
              at: './index.rsh:177:40:application',
              fs: ['at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:175:21:function exp)', 'at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:174:21:function exp)', 'at ./index.rsh:190:25:application call to "doSafeTransferFrom" (defined at: ./index.rsh:171:67:function exp)', 'at ./index.rsh:189:20:application call to [unknown function] (defined at: ./index.rsh:189:20:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            const v5722 = 'z';
            const v5723 = stdlib.digest([ctc19], [v5716]);
            const v5725 = stdlib.digest([ctc19], [v5722]);
            const v5726 = stdlib.digestEq(v5723, v5725);
            stdlib.assert(v5726, {
              at: './index.rsh:179:18:application',
              fs: ['at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:175:21:function exp)', 'at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:174:21:function exp)', 'at ./index.rsh:190:25:application call to "doSafeTransferFrom" (defined at: ./index.rsh:171:67:function exp)', 'at ./index.rsh:189:20:application call to [unknown function] (defined at: ./index.rsh:189:20:function exp)'],
              msg: null,
              who: 'Deployer'
              });
            const v5730 = null;
            await txn3.getOutput('safeTransferFrom1', 'v5730', ctc0, v5730);
            const cv3480 = v3811;
            
            v3480 = cv3480;
            
            txn2 = txn3;
            continue;
            break;
            }
          }
        break;
        }
      case 'safeTransferFrom20_355': {
        const v6005 = v3810[1];
        undefined /* setApiDetails */;
        ;
        const v6290 = v6005[stdlib.checkedBigNumberify('./index.rsh:195:8:spread', stdlib.UInt_max, '0')];
        const v6291 = v6005[stdlib.checkedBigNumberify('./index.rsh:195:8:spread', stdlib.UInt_max, '1')];
        const v6292 = v6005[stdlib.checkedBigNumberify('./index.rsh:195:8:spread', stdlib.UInt_max, '2')];
        const v6294 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v6292, ctc1), null);
        const v6295 = {
          None: 0,
          Some: 1
          }[v6294[0]];
        const v6296 = stdlib.eq(v6295, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v6296, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:28:application call to "ownerOf" (defined at: ./index.rsh:121:31:function exp)', 'at ./index.rsh:196:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:197:20:application call to [unknown function] (defined at: ./index.rsh:197:20:function exp)'],
          msg: 'ERC721::ownerOf: Owner query for non-existent token',
          who: 'Deployer'
          });
        const v6299 = stdlib.fromSome(v6294, v3475);
        const v6300 = stdlib.addressEq(v6291, v3475);
        const v6301 = v6300 ? false : true;
        stdlib.assert(v6301, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:196:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:197:20:application call to [unknown function] (defined at: ./index.rsh:197:20:function exp)'],
          msg: 'ERC721::transfer: transfer to the zero address',
          who: 'Deployer'
          });
        const v6313 = stdlib.addressEq(v3809, v6299);
        const v6314 = [v6299, v3809];
        const v6315 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc16, v6314, ctc5), null);
        const v6316 = stdlib.fromSome(v6315, false);
        const v6317 = v6313 ? true : v6316;
        const v6323 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc3, v6292, ctc1), null);
        const v6324 = stdlib.fromSome(v6323, v3475);
        const v6325 = stdlib.addressEq(v6324, v3809);
        const v6318 = v6317 ? true : v6325;
        stdlib.assert(v6318, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:196:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:197:20:application call to [unknown function] (defined at: ./index.rsh:197:20:function exp)'],
          msg: 'ERC721::transfer: caller is not owner nor approved',
          who: 'Deployer'
          });
        await stdlib.mapSet(map2, ctc3, v6292, ctc1, v3475);
        null;
        const v6371 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc1, v6290, ctc3), null);
        let v6372;
        switch (v6371[0]) {
          case 'None': {
            const v6373 = v6371[1];
            v6372 = stdlib.checkedBigNumberify('./index.rsh:166:48:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v6374 = v6371[1];
            const v6375 = stdlib.safeSub(v6374, stdlib.checkedBigNumberify('./index.rsh:166:62:decimal', stdlib.UInt_max, '1'));
            v6372 = v6375;
            
            break;
            }
          }
        await stdlib.mapSet(map1, ctc1, v6290, ctc3, v6372);
        const v6376 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc1, v6291, ctc3), null);
        let v6377;
        switch (v6376[0]) {
          case 'None': {
            const v6378 = v6376[1];
            v6377 = stdlib.checkedBigNumberify('./index.rsh:167:48:decimal', stdlib.UInt_max, '1');
            
            break;
            }
          case 'Some': {
            const v6379 = v6376[1];
            const v6380 = stdlib.safeAdd(v6379, stdlib.checkedBigNumberify('./index.rsh:167:62:decimal', stdlib.UInt_max, '1'));
            v6377 = v6380;
            
            break;
            }
          }
        await stdlib.mapSet(map1, ctc1, v6291, ctc3, v6377);
        await stdlib.mapSet(map0, ctc3, v6292, ctc1, v6291);
        null;
        const v6382 = ['None', null];
        const v6383 = await txn3.getOutput('internal', 'v6382', ctc18, v6382);
        switch (v6383[0]) {
          case 'None': {
            const v6384 = v6383[1];
            const v6388 = null;
            await txn3.getOutput('safeTransferFrom2', 'v6388', ctc0, v6388);
            const cv3480 = v3811;
            
            v3480 = cv3480;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'Some': {
            const v6398 = v6383[1];
            const v6399 = await ctc.getContractAddress();
            const v6402 = [];
            const v6403 = '';
            const v6404 = undefined /* Remote */;
            const v6405 = await txn3.getOutput('internal', 'v6404', ctc20, v6404);
            const v6407 = v6405[stdlib.checkedBigNumberify('./index.rsh:177:40:application', stdlib.UInt_max, '0')];
            const v6408 = v6405[stdlib.checkedBigNumberify('./index.rsh:177:40:application', stdlib.UInt_max, '1')];
            const v6413 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6407);
            stdlib.assert(v6413, {
              at: './index.rsh:177:40:application',
              fs: ['at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:175:21:function exp)', 'at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:174:21:function exp)', 'at ./index.rsh:198:25:application call to "doSafeTransferFrom" (defined at: ./index.rsh:171:67:function exp)', 'at ./index.rsh:197:20:application call to [unknown function] (defined at: ./index.rsh:197:20:function exp)'],
              msg: 'remote bill check',
              who: 'Deployer'
              });
            const v6414 = 'z';
            const v6415 = stdlib.digest([ctc19], [v6408]);
            const v6417 = stdlib.digest([ctc19], [v6414]);
            const v6418 = stdlib.digestEq(v6415, v6417);
            stdlib.assert(v6418, {
              at: './index.rsh:179:18:application',
              fs: ['at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:175:21:function exp)', 'at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:174:21:function exp)', 'at ./index.rsh:198:25:application call to "doSafeTransferFrom" (defined at: ./index.rsh:171:67:function exp)', 'at ./index.rsh:197:20:application call to [unknown function] (defined at: ./index.rsh:197:20:function exp)'],
              msg: null,
              who: 'Deployer'
              });
            const v6422 = null;
            await txn3.getOutput('safeTransferFrom2', 'v6422', ctc0, v6422);
            const cv3480 = v3811;
            
            v3480 = cv3480;
            
            txn2 = txn3;
            continue;
            break;
            }
          }
        break;
        }
      case 'setApprovalForAll0_355': {
        const v6553 = v3810[1];
        undefined /* setApiDetails */;
        ;
        const v6981 = v6553[stdlib.checkedBigNumberify('./index.rsh:221:8:spread', stdlib.UInt_max, '0')];
        const v6982 = v6553[stdlib.checkedBigNumberify('./index.rsh:221:8:spread', stdlib.UInt_max, '1')];
        const v6983 = stdlib.addressEq(v3809, v6981);
        const v6984 = v6983 ? false : true;
        stdlib.assert(v6984, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:223:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:224:20:application call to [unknown function] (defined at: ./index.rsh:224:20:function exp)'],
          msg: 'ERC721::setApprovalForAll: approve to caller',
          who: 'Deployer'
          });
        const v6988 = [v3809, v6981];
        await stdlib.mapSet(map3, ctc16, v6988, ctc5, v6982);
        null;
        const v6989 = null;
        await txn3.getOutput('setApprovalForAll', 'v6989', ctc0, v6989);
        const cv3480 = v3811;
        
        v3480 = cv3480;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'transferFrom0_355': {
        const v7101 = v3810[1];
        undefined /* setApiDetails */;
        ;
        const v7547 = v7101[stdlib.checkedBigNumberify('./index.rsh:203:8:spread', stdlib.UInt_max, '0')];
        const v7548 = v7101[stdlib.checkedBigNumberify('./index.rsh:203:8:spread', stdlib.UInt_max, '1')];
        const v7549 = v7101[stdlib.checkedBigNumberify('./index.rsh:203:8:spread', stdlib.UInt_max, '2')];
        const v7551 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v7549, ctc1), null);
        const v7552 = {
          None: 0,
          Some: 1
          }[v7551[0]];
        const v7553 = stdlib.eq(v7552, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v7553, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:28:application call to "ownerOf" (defined at: ./index.rsh:121:31:function exp)', 'at ./index.rsh:204:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:205:20:application call to [unknown function] (defined at: ./index.rsh:205:20:function exp)'],
          msg: 'ERC721::ownerOf: Owner query for non-existent token',
          who: 'Deployer'
          });
        const v7556 = stdlib.fromSome(v7551, v3475);
        const v7557 = stdlib.addressEq(v7548, v3475);
        const v7558 = v7557 ? false : true;
        stdlib.assert(v7558, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:205:20:application call to [unknown function] (defined at: ./index.rsh:205:20:function exp)'],
          msg: 'ERC721::transfer: transfer to the zero address',
          who: 'Deployer'
          });
        const v7570 = stdlib.addressEq(v3809, v7556);
        const v7571 = [v7556, v3809];
        const v7572 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc16, v7571, ctc5), null);
        const v7573 = stdlib.fromSome(v7572, false);
        const v7574 = v7570 ? true : v7573;
        const v7580 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc3, v7549, ctc1), null);
        const v7581 = stdlib.fromSome(v7580, v3475);
        const v7582 = stdlib.addressEq(v7581, v3809);
        const v7575 = v7574 ? true : v7582;
        stdlib.assert(v7575, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:205:20:application call to [unknown function] (defined at: ./index.rsh:205:20:function exp)'],
          msg: 'ERC721::transfer: caller is not owner nor approved',
          who: 'Deployer'
          });
        await stdlib.mapSet(map2, ctc3, v7549, ctc1, v3475);
        null;
        const v7628 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc1, v7547, ctc3), null);
        let v7629;
        switch (v7628[0]) {
          case 'None': {
            const v7630 = v7628[1];
            v7629 = stdlib.checkedBigNumberify('./index.rsh:166:48:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v7631 = v7628[1];
            const v7632 = stdlib.safeSub(v7631, stdlib.checkedBigNumberify('./index.rsh:166:62:decimal', stdlib.UInt_max, '1'));
            v7629 = v7632;
            
            break;
            }
          }
        await stdlib.mapSet(map1, ctc1, v7547, ctc3, v7629);
        const v7633 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc1, v7548, ctc3), null);
        let v7634;
        switch (v7633[0]) {
          case 'None': {
            const v7635 = v7633[1];
            v7634 = stdlib.checkedBigNumberify('./index.rsh:167:48:decimal', stdlib.UInt_max, '1');
            
            break;
            }
          case 'Some': {
            const v7636 = v7633[1];
            const v7637 = stdlib.safeAdd(v7636, stdlib.checkedBigNumberify('./index.rsh:167:62:decimal', stdlib.UInt_max, '1'));
            v7634 = v7637;
            
            break;
            }
          }
        await stdlib.mapSet(map1, ctc1, v7548, ctc3, v7634);
        await stdlib.mapSet(map0, ctc3, v7549, ctc1, v7548);
        null;
        const v7639 = null;
        await txn3.getOutput('transferFrom', 'v7639', ctc0, v7639);
        const cv3480 = v3811;
        
        v3480 = cv3480;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _approve3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _approve3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _approve3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_StringDyn;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc3]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc3]);
  const ctc11 = stdlib.T_BytesDyn;
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc3, ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc15 = stdlib.T_Data({
    approve0_355: ctc8,
    burn0_355: ctc10,
    mint0_355: ctc8,
    safeTransferFrom10_355: ctc12,
    safeTransferFrom20_355: ctc13,
    setApprovalForAll0_355: ctc14,
    transferFrom0_355: ctc13
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc6;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v3471, v3472, v3473, v3474, v3475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc7, ctc7, ctc7, ctc1]);
  const v3684 = ctc.selfAddress();
  const v3686 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:211:34:application call to [unknown function] (defined at: ./index.rsh:211:34:function exp)', 'at ./index.rsh:112:28:application call to "runapprove0_355" (defined at: ./index.rsh:211:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'in',
    who: 'approve'
    });
  const v3687 = v3686[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3688 = v3686[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3691 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3688, ctc1), null);
  const v3692 = {
    None: 0,
    Some: 1
    }[v3691[0]];
  const v3693 = stdlib.eq(v3692, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3693, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:212:26:application call to "ownerOf" (defined at: ./index.rsh:121:31:function exp)', 'at ./index.rsh:211:34:application call to [unknown function] (defined at: ./index.rsh:211:34:function exp)', 'at ./index.rsh:112:28:application call to "runapprove0_355" (defined at: ./index.rsh:211:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'ERC721::ownerOf: Owner query for non-existent token',
    who: 'approve'
    });
  const v3696 = stdlib.fromSome(v3691, v3475);
  const v3697 = stdlib.addressEq(v3687, v3696);
  const v3698 = v3697 ? false : true;
  stdlib.assert(v3698, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:213:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:211:34:application call to [unknown function] (defined at: ./index.rsh:211:34:function exp)', 'at ./index.rsh:112:28:application call to "runapprove0_355" (defined at: ./index.rsh:211:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'ERC721::approve: Approval to current owner',
    who: 'approve'
    });
  const v3700 = stdlib.addressEq(v3684, v3696);
  const v3701 = [v3696, v3684];
  const v3702 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v3701, ctc5), null);
  const v3703 = stdlib.fromSome(v3702, false);
  const v3704 = v3700 ? true : v3703;
  stdlib.assert(v3704, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:214:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:211:34:application call to [unknown function] (defined at: ./index.rsh:211:34:function exp)', 'at ./index.rsh:112:28:application call to "runapprove0_355" (defined at: ./index.rsh:211:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'ERC721::approve: Caller is not owner nor approved for all',
    who: 'approve'
    });
  const v3713 = ['approve0_355', v3686];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3471, v3472, v3473, v3474, v3475, v3713],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:211:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3810], secs: v3812, time: v3811, didSend: v1941, from: v3809 } = txn1;
      
      switch (v3810[0]) {
        case 'approve0_355': {
          const v3813 = v3810[1];
          sim_r.txns.push({
            kind: 'api',
            who: "approve"
            });
          ;
          const v3825 = v3813[stdlib.checkedBigNumberify('./index.rsh:211:8:spread', stdlib.UInt_max, '0')];
          const v3826 = v3813[stdlib.checkedBigNumberify('./index.rsh:211:8:spread', stdlib.UInt_max, '1')];
          const v3827 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v3826, ctc1), null);
          const v3832 = stdlib.fromSome(v3827, v3475);
          const v3837 = [v3832, v3809];
          stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc9, v3837, ctc5), null);
          await stdlib.simMapSet(sim_r, 2, ctc3, v3826, ctc1, v3825);
          null;
          const v3851 = null;
          const v3852 = await txn1.getOutput('approve', 'v3851', ctc0, v3851);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'burn0_355': {
          const v4361 = v3810[1];
          
          break;
          }
        case 'mint0_355': {
          const v4909 = v3810[1];
          
          break;
          }
        case 'safeTransferFrom10_355': {
          const v5457 = v3810[1];
          
          break;
          }
        case 'safeTransferFrom20_355': {
          const v6005 = v3810[1];
          
          break;
          }
        case 'setApprovalForAll0_355': {
          const v6553 = v3810[1];
          
          break;
          }
        case 'transferFrom0_355': {
          const v7101 = v3810[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc7, ctc7, ctc7, ctc1, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v3810], secs: v3812, time: v3811, didSend: v1941, from: v3809 } = txn1;
  switch (v3810[0]) {
    case 'approve0_355': {
      const v3813 = v3810[1];
      undefined /* setApiDetails */;
      ;
      const v3825 = v3813[stdlib.checkedBigNumberify('./index.rsh:211:8:spread', stdlib.UInt_max, '0')];
      const v3826 = v3813[stdlib.checkedBigNumberify('./index.rsh:211:8:spread', stdlib.UInt_max, '1')];
      const v3827 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3826, ctc1), null);
      const v3828 = {
        None: 0,
        Some: 1
        }[v3827[0]];
      const v3829 = stdlib.eq(v3828, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3829, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:212:26:application call to "ownerOf" (defined at: ./index.rsh:121:31:function exp)', 'at ./index.rsh:215:20:application call to [unknown function] (defined at: ./index.rsh:215:20:function exp)'],
        msg: 'ERC721::ownerOf: Owner query for non-existent token',
        who: 'approve'
        });
      const v3832 = stdlib.fromSome(v3827, v3475);
      const v3833 = stdlib.addressEq(v3825, v3832);
      const v3834 = v3833 ? false : true;
      stdlib.assert(v3834, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:213:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:215:20:application call to [unknown function] (defined at: ./index.rsh:215:20:function exp)'],
        msg: 'ERC721::approve: Approval to current owner',
        who: 'approve'
        });
      const v3836 = stdlib.addressEq(v3809, v3832);
      const v3837 = [v3832, v3809];
      const v3838 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v3837, ctc5), null);
      const v3839 = stdlib.fromSome(v3838, false);
      const v3840 = v3836 ? true : v3839;
      stdlib.assert(v3840, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:214:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:215:20:application call to [unknown function] (defined at: ./index.rsh:215:20:function exp)'],
        msg: 'ERC721::approve: Caller is not owner nor approved for all',
        who: 'approve'
        });
      await stdlib.mapSet(map2, ctc3, v3826, ctc1, v3825);
      null;
      const v3851 = null;
      const v3852 = await txn1.getOutput('approve', 'v3851', ctc0, v3851);
      if (v1941) {
        stdlib.protect(ctc0, await interact.out(v3813, v3852), {
          at: './index.rsh:211:9:application',
          fs: ['at ./index.rsh:211:9:application call to [unknown function] (defined at: ./index.rsh:211:9:function exp)', 'at ./index.rsh:217:10:application call to "ret" (defined at: ./index.rsh:215:20:function exp)', 'at ./index.rsh:215:20:application call to [unknown function] (defined at: ./index.rsh:215:20:function exp)'],
          msg: 'out',
          who: 'approve'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'burn0_355': {
      const v4361 = v3810[1];
      return;
      break;
      }
    case 'mint0_355': {
      const v4909 = v3810[1];
      return;
      break;
      }
    case 'safeTransferFrom10_355': {
      const v5457 = v3810[1];
      return;
      break;
      }
    case 'safeTransferFrom20_355': {
      const v6005 = v3810[1];
      return;
      break;
      }
    case 'setApprovalForAll0_355': {
      const v6553 = v3810[1];
      return;
      break;
      }
    case 'transferFrom0_355': {
      const v7101 = v3810[1];
      return;
      break;
      }
    }
  
  
  };
export async function _burn3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _burn3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _burn3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_StringDyn;
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc3]);
  const ctc11 = stdlib.T_BytesDyn;
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc3, ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc15 = stdlib.T_Data({
    approve0_355: ctc10,
    burn0_355: ctc8,
    mint0_355: ctc10,
    safeTransferFrom10_355: ctc12,
    safeTransferFrom20_355: ctc13,
    setApprovalForAll0_355: ctc14,
    transferFrom0_355: ctc13
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc6;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v3471, v3472, v3473, v3474, v3475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc7, ctc7, ctc7, ctc1]);
  const v3760 = ctc.selfAddress();
  const v3762 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:243:27:application call to [unknown function] (defined at: ./index.rsh:243:27:function exp)', 'at ./index.rsh:112:28:application call to "runburn0_355" (defined at: ./index.rsh:243:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'in',
    who: 'burn'
    });
  const v3763 = v3762[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3765 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3763, ctc1), null);
  const v3766 = {
    None: 0,
    Some: 1
    }[v3765[0]];
  const v3767 = stdlib.eq(v3766, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3767, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:244:26:application call to "ownerOf" (defined at: ./index.rsh:121:31:function exp)', 'at ./index.rsh:243:27:application call to [unknown function] (defined at: ./index.rsh:243:27:function exp)', 'at ./index.rsh:112:28:application call to "runburn0_355" (defined at: ./index.rsh:243:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'ERC721::ownerOf: Owner query for non-existent token',
    who: 'burn'
    });
  const v3770 = stdlib.fromSome(v3765, v3475);
  const v3781 = stdlib.addressEq(v3760, v3770);
  const v3782 = [v3770, v3760];
  const v3783 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v3782, ctc5), null);
  const v3784 = stdlib.fromSome(v3783, false);
  const v3785 = v3781 ? true : v3784;
  const v3791 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc3, v3763, ctc1), null);
  const v3792 = stdlib.fromSome(v3791, v3475);
  const v3793 = stdlib.addressEq(v3792, v3760);
  const v3786 = v3785 ? true : v3793;
  stdlib.assert(v3786, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:245:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:243:27:application call to [unknown function] (defined at: ./index.rsh:243:27:function exp)', 'at ./index.rsh:112:28:application call to "runburn0_355" (defined at: ./index.rsh:243:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'ERC721::burn: caller is not owner nor approved',
    who: 'burn'
    });
  const v3800 = ['burn0_355', v3762];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3471, v3472, v3473, v3474, v3475, v3800],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:243:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3810], secs: v3812, time: v3811, didSend: v1941, from: v3809 } = txn1;
      
      switch (v3810[0]) {
        case 'approve0_355': {
          const v3813 = v3810[1];
          
          break;
          }
        case 'burn0_355': {
          const v4361 = v3810[1];
          sim_r.txns.push({
            kind: 'api',
            who: "burn"
            });
          ;
          const v4409 = v4361[stdlib.checkedBigNumberify('./index.rsh:243:8:spread', stdlib.UInt_max, '0')];
          const v4410 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v4409, ctc1), null);
          const v4415 = stdlib.fromSome(v4410, v3475);
          const v4427 = [v4415, v3809];
          stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc9, v4427, ctc5), null);
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc3, v4409, ctc1), null);
          await stdlib.simMapSet(sim_r, 2, ctc3, v4409, ctc1, v3475);
          null;
          const v4448 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc1, v4415, ctc3), null);
          let v4449;
          switch (v4448[0]) {
            case 'None': {
              const v4450 = v4448[1];
              v4449 = stdlib.checkedBigNumberify('./index.rsh:249:46:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v4451 = v4448[1];
              const v4452 = stdlib.safeSub(v4451, stdlib.checkedBigNumberify('./index.rsh:249:60:decimal', stdlib.UInt_max, '1'));
              v4449 = v4452;
              
              break;
              }
            }
          const v4453 = stdlib.eq(v4449, stdlib.checkedBigNumberify('./index.rsh:250:20:decimal', stdlib.UInt_max, '0'));
          if (v4453) {
            await stdlib.simMapSet(sim_r, 1, ctc1, v4415, ctc3, undefined /* Nothing */);
            await stdlib.simMapSet(sim_r, 0, ctc3, v4409, ctc1, v3475);
            null;
            const v4454 = null;
            const v4455 = await txn1.getOutput('burn', 'v4454', ctc0, v4454);
            
            sim_r.isHalt = false;
            }
          else {
            await stdlib.simMapSet(sim_r, 1, ctc1, v4415, ctc3, v4449);
            await stdlib.simMapSet(sim_r, 0, ctc3, v4409, ctc1, v3475);
            null;
            const v4462 = null;
            const v4463 = await txn1.getOutput('burn', 'v4462', ctc0, v4462);
            
            sim_r.isHalt = false;
            }
          break;
          }
        case 'mint0_355': {
          const v4909 = v3810[1];
          
          break;
          }
        case 'safeTransferFrom10_355': {
          const v5457 = v3810[1];
          
          break;
          }
        case 'safeTransferFrom20_355': {
          const v6005 = v3810[1];
          
          break;
          }
        case 'setApprovalForAll0_355': {
          const v6553 = v3810[1];
          
          break;
          }
        case 'transferFrom0_355': {
          const v7101 = v3810[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc7, ctc7, ctc7, ctc1, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v3810], secs: v3812, time: v3811, didSend: v1941, from: v3809 } = txn1;
  switch (v3810[0]) {
    case 'approve0_355': {
      const v3813 = v3810[1];
      return;
      break;
      }
    case 'burn0_355': {
      const v4361 = v3810[1];
      undefined /* setApiDetails */;
      ;
      const v4409 = v4361[stdlib.checkedBigNumberify('./index.rsh:243:8:spread', stdlib.UInt_max, '0')];
      const v4410 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v4409, ctc1), null);
      const v4411 = {
        None: 0,
        Some: 1
        }[v4410[0]];
      const v4412 = stdlib.eq(v4411, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v4412, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:244:26:application call to "ownerOf" (defined at: ./index.rsh:121:31:function exp)', 'at ./index.rsh:246:20:application call to [unknown function] (defined at: ./index.rsh:246:20:function exp)'],
        msg: 'ERC721::ownerOf: Owner query for non-existent token',
        who: 'burn'
        });
      const v4415 = stdlib.fromSome(v4410, v3475);
      const v4426 = stdlib.addressEq(v3809, v4415);
      const v4427 = [v4415, v3809];
      const v4428 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v4427, ctc5), null);
      const v4429 = stdlib.fromSome(v4428, false);
      const v4430 = v4426 ? true : v4429;
      const v4436 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc3, v4409, ctc1), null);
      const v4437 = stdlib.fromSome(v4436, v3475);
      const v4438 = stdlib.addressEq(v4437, v3809);
      const v4431 = v4430 ? true : v4438;
      stdlib.assert(v4431, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:245:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:246:20:application call to [unknown function] (defined at: ./index.rsh:246:20:function exp)'],
        msg: 'ERC721::burn: caller is not owner nor approved',
        who: 'burn'
        });
      await stdlib.mapSet(map2, ctc3, v4409, ctc1, v3475);
      null;
      const v4448 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc1, v4415, ctc3), null);
      let v4449;
      switch (v4448[0]) {
        case 'None': {
          const v4450 = v4448[1];
          v4449 = stdlib.checkedBigNumberify('./index.rsh:249:46:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v4451 = v4448[1];
          const v4452 = stdlib.safeSub(v4451, stdlib.checkedBigNumberify('./index.rsh:249:60:decimal', stdlib.UInt_max, '1'));
          v4449 = v4452;
          
          break;
          }
        }
      const v4453 = stdlib.eq(v4449, stdlib.checkedBigNumberify('./index.rsh:250:20:decimal', stdlib.UInt_max, '0'));
      if (v4453) {
        await stdlib.mapSet(map1, ctc1, v4415, ctc3, undefined /* Nothing */);
        await stdlib.mapSet(map0, ctc3, v4409, ctc1, v3475);
        null;
        const v4454 = null;
        const v4455 = await txn1.getOutput('burn', 'v4454', ctc0, v4454);
        if (v1941) {
          stdlib.protect(ctc0, await interact.out(v4361, v4455), {
            at: './index.rsh:243:9:application',
            fs: ['at ./index.rsh:243:9:application call to [unknown function] (defined at: ./index.rsh:243:9:function exp)', 'at ./index.rsh:257:10:application call to "ret" (defined at: ./index.rsh:246:20:function exp)', 'at ./index.rsh:246:20:application call to [unknown function] (defined at: ./index.rsh:246:20:function exp)'],
            msg: 'out',
            who: 'burn'
            });
          }
        else {
          }
        
        return;
        }
      else {
        await stdlib.mapSet(map1, ctc1, v4415, ctc3, v4449);
        await stdlib.mapSet(map0, ctc3, v4409, ctc1, v3475);
        null;
        const v4462 = null;
        const v4463 = await txn1.getOutput('burn', 'v4462', ctc0, v4462);
        if (v1941) {
          stdlib.protect(ctc0, await interact.out(v4361, v4463), {
            at: './index.rsh:243:9:application',
            fs: ['at ./index.rsh:243:9:application call to [unknown function] (defined at: ./index.rsh:243:9:function exp)', 'at ./index.rsh:257:10:application call to "ret" (defined at: ./index.rsh:246:20:function exp)', 'at ./index.rsh:246:20:application call to [unknown function] (defined at: ./index.rsh:246:20:function exp)'],
            msg: 'out',
            who: 'burn'
            });
          }
        else {
          }
        
        return;
        }
      break;
      }
    case 'mint0_355': {
      const v4909 = v3810[1];
      return;
      break;
      }
    case 'safeTransferFrom10_355': {
      const v5457 = v3810[1];
      return;
      break;
      }
    case 'safeTransferFrom20_355': {
      const v6005 = v3810[1];
      return;
      break;
      }
    case 'setApprovalForAll0_355': {
      const v6553 = v3810[1];
      return;
      break;
      }
    case 'transferFrom0_355': {
      const v7101 = v3810[1];
      return;
      break;
      }
    }
  
  
  };
export async function _mint3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _mint3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _mint3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_StringDyn;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc3]);
  const ctc9 = stdlib.T_Tuple([ctc3]);
  const ctc10 = stdlib.T_BytesDyn;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc3, ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc14 = stdlib.T_Data({
    approve0_355: ctc8,
    burn0_355: ctc9,
    mint0_355: ctc8,
    safeTransferFrom10_355: ctc11,
    safeTransferFrom20_355: ctc12,
    setApprovalForAll0_355: ctc13,
    transferFrom0_355: ctc12
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc6;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v3471, v3472, v3473, v3474, v3475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc7, ctc7, ctc7, ctc1]);
  const v3734 = ctc.selfAddress();
  const v3736 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:231:31:application call to [unknown function] (defined at: ./index.rsh:231:31:function exp)', 'at ./index.rsh:112:28:application call to "runmint0_355" (defined at: ./index.rsh:231:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'in',
    who: 'mint'
    });
  const v3737 = v3736[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3738 = v3736[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3741 = stdlib.addressEq(v3737, v3475);
  const v3742 = v3741 ? false : true;
  stdlib.assert(v3742, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:232:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:231:31:application call to [unknown function] (defined at: ./index.rsh:231:31:function exp)', 'at ./index.rsh:112:28:application call to "runmint0_355" (defined at: ./index.rsh:231:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'Cannot mint to zero address',
    who: 'mint'
    });
  const v3744 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3738, ctc1), null);
  const v3745 = {
    None: 0,
    Some: 1
    }[v3744[0]];
  const v3746 = stdlib.eq(v3745, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v3747 = v3746 ? false : true;
  stdlib.assert(v3747, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:233:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:231:31:application call to [unknown function] (defined at: ./index.rsh:231:31:function exp)', 'at ./index.rsh:112:28:application call to "runmint0_355" (defined at: ./index.rsh:231:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'Token already exists',
    who: 'mint'
    });
  const v3749 = stdlib.addressEq(v3734, v3471);
  stdlib.assert(v3749, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:234:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:231:31:application call to [unknown function] (defined at: ./index.rsh:231:31:function exp)', 'at ./index.rsh:112:28:application call to "runmint0_355" (defined at: ./index.rsh:231:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'mint can only be called by deployer',
    who: 'mint'
    });
  const v3758 = ['mint0_355', v3736];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3471, v3472, v3473, v3474, v3475, v3758],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:231:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3810], secs: v3812, time: v3811, didSend: v1941, from: v3809 } = txn1;
      
      switch (v3810[0]) {
        case 'approve0_355': {
          const v3813 = v3810[1];
          
          break;
          }
        case 'burn0_355': {
          const v4361 = v3810[1];
          
          break;
          }
        case 'mint0_355': {
          const v4909 = v3810[1];
          sim_r.txns.push({
            kind: 'api',
            who: "mint"
            });
          ;
          const v5019 = v4909[stdlib.checkedBigNumberify('./index.rsh:231:8:spread', stdlib.UInt_max, '0')];
          const v5020 = v4909[stdlib.checkedBigNumberify('./index.rsh:231:8:spread', stdlib.UInt_max, '1')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v5020, ctc1), null);
          const v5033 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc1, v5019, ctc3), null);
          let v5034;
          switch (v5033[0]) {
            case 'None': {
              const v5035 = v5033[1];
              v5034 = stdlib.checkedBigNumberify('./index.rsh:236:52:decimal', stdlib.UInt_max, '1');
              
              break;
              }
            case 'Some': {
              const v5036 = v5033[1];
              const v5037 = stdlib.safeAdd(v5036, stdlib.checkedBigNumberify('./index.rsh:236:66:decimal', stdlib.UInt_max, '1'));
              v5034 = v5037;
              
              break;
              }
            }
          await stdlib.simMapSet(sim_r, 1, ctc1, v5019, ctc3, v5034);
          await stdlib.simMapSet(sim_r, 0, ctc3, v5020, ctc1, v5019);
          null;
          const v5038 = null;
          const v5039 = await txn1.getOutput('mint', 'v5038', ctc0, v5038);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'safeTransferFrom10_355': {
          const v5457 = v3810[1];
          
          break;
          }
        case 'safeTransferFrom20_355': {
          const v6005 = v3810[1];
          
          break;
          }
        case 'setApprovalForAll0_355': {
          const v6553 = v3810[1];
          
          break;
          }
        case 'transferFrom0_355': {
          const v7101 = v3810[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc7, ctc7, ctc7, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v3810], secs: v3812, time: v3811, didSend: v1941, from: v3809 } = txn1;
  switch (v3810[0]) {
    case 'approve0_355': {
      const v3813 = v3810[1];
      return;
      break;
      }
    case 'burn0_355': {
      const v4361 = v3810[1];
      return;
      break;
      }
    case 'mint0_355': {
      const v4909 = v3810[1];
      undefined /* setApiDetails */;
      ;
      const v5019 = v4909[stdlib.checkedBigNumberify('./index.rsh:231:8:spread', stdlib.UInt_max, '0')];
      const v5020 = v4909[stdlib.checkedBigNumberify('./index.rsh:231:8:spread', stdlib.UInt_max, '1')];
      const v5021 = stdlib.addressEq(v5019, v3475);
      const v5022 = v5021 ? false : true;
      stdlib.assert(v5022, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:232:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:235:20:application call to [unknown function] (defined at: ./index.rsh:235:20:function exp)'],
        msg: 'Cannot mint to zero address',
        who: 'mint'
        });
      const v5024 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v5020, ctc1), null);
      const v5025 = {
        None: 0,
        Some: 1
        }[v5024[0]];
      const v5026 = stdlib.eq(v5025, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v5027 = v5026 ? false : true;
      stdlib.assert(v5027, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:233:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:235:20:application call to [unknown function] (defined at: ./index.rsh:235:20:function exp)'],
        msg: 'Token already exists',
        who: 'mint'
        });
      const v5029 = stdlib.addressEq(v3809, v3471);
      stdlib.assert(v5029, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:234:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:235:20:application call to [unknown function] (defined at: ./index.rsh:235:20:function exp)'],
        msg: 'mint can only be called by deployer',
        who: 'mint'
        });
      const v5033 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc1, v5019, ctc3), null);
      let v5034;
      switch (v5033[0]) {
        case 'None': {
          const v5035 = v5033[1];
          v5034 = stdlib.checkedBigNumberify('./index.rsh:236:52:decimal', stdlib.UInt_max, '1');
          
          break;
          }
        case 'Some': {
          const v5036 = v5033[1];
          const v5037 = stdlib.safeAdd(v5036, stdlib.checkedBigNumberify('./index.rsh:236:66:decimal', stdlib.UInt_max, '1'));
          v5034 = v5037;
          
          break;
          }
        }
      await stdlib.mapSet(map1, ctc1, v5019, ctc3, v5034);
      await stdlib.mapSet(map0, ctc3, v5020, ctc1, v5019);
      null;
      const v5038 = null;
      const v5039 = await txn1.getOutput('mint', 'v5038', ctc0, v5038);
      if (v1941) {
        stdlib.protect(ctc0, await interact.out(v4909, v5039), {
          at: './index.rsh:231:9:application',
          fs: ['at ./index.rsh:231:9:application call to [unknown function] (defined at: ./index.rsh:231:9:function exp)', 'at ./index.rsh:239:10:application call to "ret" (defined at: ./index.rsh:235:20:function exp)', 'at ./index.rsh:235:20:application call to [unknown function] (defined at: ./index.rsh:235:20:function exp)'],
          msg: 'out',
          who: 'mint'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'safeTransferFrom10_355': {
      const v5457 = v3810[1];
      return;
      break;
      }
    case 'safeTransferFrom20_355': {
      const v6005 = v3810[1];
      return;
      break;
      }
    case 'setApprovalForAll0_355': {
      const v6553 = v3810[1];
      return;
      break;
      }
    case 'transferFrom0_355': {
      const v7101 = v3810[1];
      return;
      break;
      }
    }
  
  
  };
export async function _safeTransferFrom13(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _safeTransferFrom13 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _safeTransferFrom13 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_StringDyn;
  const ctc8 = stdlib.T_BytesDyn;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc3, ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc15 = stdlib.T_Data({
    approve0_355: ctc11,
    burn0_355: ctc12,
    mint0_355: ctc11,
    safeTransferFrom10_355: ctc9,
    safeTransferFrom20_355: ctc13,
    setApprovalForAll0_355: ctc14,
    transferFrom0_355: ctc13
    });
  const ctc16 = stdlib.T_Contract;
  const ctc17 = stdlib.T_Data({
    None: ctc0,
    Some: ctc16
    });
  const ctc18 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc19 = stdlib.T_Tuple([ctc3, ctc18]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc6;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v3471, v3472, v3473, v3474, v3475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc7, ctc7, ctc7, ctc1]);
  const v3518 = ctc.selfAddress();
  const v3520 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:187:57:application call to [unknown function] (defined at: ./index.rsh:187:57:function exp)', 'at ./index.rsh:112:28:application call to "runsafeTransferFrom10_355" (defined at: ./index.rsh:187:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'in',
    who: 'safeTransferFrom1'
    });
  const v3522 = v3520[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3523 = v3520[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v3530 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3523, ctc1), null);
  const v3531 = {
    None: 0,
    Some: 1
    }[v3530[0]];
  const v3532 = stdlib.eq(v3531, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3532, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:28:application call to "ownerOf" (defined at: ./index.rsh:121:31:function exp)', 'at ./index.rsh:188:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:187:57:application call to [unknown function] (defined at: ./index.rsh:187:57:function exp)', 'at ./index.rsh:112:28:application call to "runsafeTransferFrom10_355" (defined at: ./index.rsh:187:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'ERC721::ownerOf: Owner query for non-existent token',
    who: 'safeTransferFrom1'
    });
  const v3535 = stdlib.fromSome(v3530, v3475);
  const v3536 = stdlib.addressEq(v3522, v3475);
  const v3537 = v3536 ? false : true;
  stdlib.assert(v3537, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:187:57:application call to [unknown function] (defined at: ./index.rsh:187:57:function exp)', 'at ./index.rsh:112:28:application call to "runsafeTransferFrom10_355" (defined at: ./index.rsh:187:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'ERC721::transfer: transfer to the zero address',
    who: 'safeTransferFrom1'
    });
  const v3549 = stdlib.addressEq(v3518, v3535);
  const v3550 = [v3535, v3518];
  const v3551 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc10, v3550, ctc5), null);
  const v3552 = stdlib.fromSome(v3551, false);
  const v3553 = v3549 ? true : v3552;
  const v3559 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc3, v3523, ctc1), null);
  const v3560 = stdlib.fromSome(v3559, v3475);
  const v3561 = stdlib.addressEq(v3560, v3518);
  const v3554 = v3553 ? true : v3561;
  stdlib.assert(v3554, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:187:57:application call to [unknown function] (defined at: ./index.rsh:187:57:function exp)', 'at ./index.rsh:112:28:application call to "runsafeTransferFrom10_355" (defined at: ./index.rsh:187:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'ERC721::transfer: caller is not owner nor approved',
    who: 'safeTransferFrom1'
    });
  const v3574 = ['safeTransferFrom10_355', v3520];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3471, v3472, v3473, v3474, v3475, v3574],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:187:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3810], secs: v3812, time: v3811, didSend: v1941, from: v3809 } = txn1;
      
      switch (v3810[0]) {
        case 'approve0_355': {
          const v3813 = v3810[1];
          
          break;
          }
        case 'burn0_355': {
          const v4361 = v3810[1];
          
          break;
          }
        case 'mint0_355': {
          const v4909 = v3810[1];
          
          break;
          }
        case 'safeTransferFrom10_355': {
          const v5457 = v3810[1];
          sim_r.txns.push({
            kind: 'api',
            who: "safeTransferFrom1"
            });
          ;
          const v5596 = v5457[stdlib.checkedBigNumberify('./index.rsh:187:8:spread', stdlib.UInt_max, '0')];
          const v5597 = v5457[stdlib.checkedBigNumberify('./index.rsh:187:8:spread', stdlib.UInt_max, '1')];
          const v5598 = v5457[stdlib.checkedBigNumberify('./index.rsh:187:8:spread', stdlib.UInt_max, '2')];
          const v5599 = v5457[stdlib.checkedBigNumberify('./index.rsh:187:8:spread', stdlib.UInt_max, '3')];
          const v5601 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v5598, ctc1), null);
          const v5606 = stdlib.fromSome(v5601, v3475);
          const v5621 = [v5606, v3809];
          stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc10, v5621, ctc5), null);
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc3, v5598, ctc1), null);
          await stdlib.simMapSet(sim_r, 2, ctc3, v5598, ctc1, v3475);
          null;
          const v5679 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc1, v5596, ctc3), null);
          let v5680;
          switch (v5679[0]) {
            case 'None': {
              const v5681 = v5679[1];
              v5680 = stdlib.checkedBigNumberify('./index.rsh:166:48:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v5682 = v5679[1];
              const v5683 = stdlib.safeSub(v5682, stdlib.checkedBigNumberify('./index.rsh:166:62:decimal', stdlib.UInt_max, '1'));
              v5680 = v5683;
              
              break;
              }
            }
          await stdlib.simMapSet(sim_r, 1, ctc1, v5596, ctc3, v5680);
          const v5684 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc1, v5597, ctc3), null);
          let v5685;
          switch (v5684[0]) {
            case 'None': {
              const v5686 = v5684[1];
              v5685 = stdlib.checkedBigNumberify('./index.rsh:167:48:decimal', stdlib.UInt_max, '1');
              
              break;
              }
            case 'Some': {
              const v5687 = v5684[1];
              const v5688 = stdlib.safeAdd(v5687, stdlib.checkedBigNumberify('./index.rsh:167:62:decimal', stdlib.UInt_max, '1'));
              v5685 = v5688;
              
              break;
              }
            }
          await stdlib.simMapSet(sim_r, 1, ctc1, v5597, ctc3, v5685);
          await stdlib.simMapSet(sim_r, 0, ctc3, v5598, ctc1, v5597);
          null;
          const v5690 = ['None', null];
          const v5691 = await txn1.getOutput('internal', 'v5690', ctc17, v5690);
          switch (v5691[0]) {
            case 'None': {
              const v5692 = v5691[1];
              const v5696 = null;
              const v5697 = await txn1.getOutput('safeTransferFrom1', 'v5696', ctc0, v5696);
              
              sim_r.isHalt = false;
              
              break;
              }
            case 'Some': {
              const v5707 = v5691[1];
              const v5708 = await ctc.getContractAddress();
              const v5711 = [];
              const v5712 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v5707,
                  remote: ({
                    accs: [v5708, v5596],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:177:40:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:177:40:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc18.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v5712', ctc19, v5712);
              const v5730 = null;
              const v5731 = await txn1.getOutput('safeTransferFrom1', 'v5730', ctc0, v5730);
              
              sim_r.isHalt = false;
              
              break;
              }
            }
          break;
          }
        case 'safeTransferFrom20_355': {
          const v6005 = v3810[1];
          
          break;
          }
        case 'setApprovalForAll0_355': {
          const v6553 = v3810[1];
          
          break;
          }
        case 'transferFrom0_355': {
          const v7101 = v3810[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc7, ctc7, ctc7, ctc1, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v3810], secs: v3812, time: v3811, didSend: v1941, from: v3809 } = txn1;
  switch (v3810[0]) {
    case 'approve0_355': {
      const v3813 = v3810[1];
      return;
      break;
      }
    case 'burn0_355': {
      const v4361 = v3810[1];
      return;
      break;
      }
    case 'mint0_355': {
      const v4909 = v3810[1];
      return;
      break;
      }
    case 'safeTransferFrom10_355': {
      const v5457 = v3810[1];
      undefined /* setApiDetails */;
      ;
      const v5596 = v5457[stdlib.checkedBigNumberify('./index.rsh:187:8:spread', stdlib.UInt_max, '0')];
      const v5597 = v5457[stdlib.checkedBigNumberify('./index.rsh:187:8:spread', stdlib.UInt_max, '1')];
      const v5598 = v5457[stdlib.checkedBigNumberify('./index.rsh:187:8:spread', stdlib.UInt_max, '2')];
      const v5599 = v5457[stdlib.checkedBigNumberify('./index.rsh:187:8:spread', stdlib.UInt_max, '3')];
      const v5601 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v5598, ctc1), null);
      const v5602 = {
        None: 0,
        Some: 1
        }[v5601[0]];
      const v5603 = stdlib.eq(v5602, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5603, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:28:application call to "ownerOf" (defined at: ./index.rsh:121:31:function exp)', 'at ./index.rsh:188:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:189:20:application call to [unknown function] (defined at: ./index.rsh:189:20:function exp)'],
        msg: 'ERC721::ownerOf: Owner query for non-existent token',
        who: 'safeTransferFrom1'
        });
      const v5606 = stdlib.fromSome(v5601, v3475);
      const v5607 = stdlib.addressEq(v5597, v3475);
      const v5608 = v5607 ? false : true;
      stdlib.assert(v5608, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:189:20:application call to [unknown function] (defined at: ./index.rsh:189:20:function exp)'],
        msg: 'ERC721::transfer: transfer to the zero address',
        who: 'safeTransferFrom1'
        });
      const v5620 = stdlib.addressEq(v3809, v5606);
      const v5621 = [v5606, v3809];
      const v5622 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc10, v5621, ctc5), null);
      const v5623 = stdlib.fromSome(v5622, false);
      const v5624 = v5620 ? true : v5623;
      const v5630 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc3, v5598, ctc1), null);
      const v5631 = stdlib.fromSome(v5630, v3475);
      const v5632 = stdlib.addressEq(v5631, v3809);
      const v5625 = v5624 ? true : v5632;
      stdlib.assert(v5625, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:189:20:application call to [unknown function] (defined at: ./index.rsh:189:20:function exp)'],
        msg: 'ERC721::transfer: caller is not owner nor approved',
        who: 'safeTransferFrom1'
        });
      await stdlib.mapSet(map2, ctc3, v5598, ctc1, v3475);
      null;
      const v5679 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc1, v5596, ctc3), null);
      let v5680;
      switch (v5679[0]) {
        case 'None': {
          const v5681 = v5679[1];
          v5680 = stdlib.checkedBigNumberify('./index.rsh:166:48:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v5682 = v5679[1];
          const v5683 = stdlib.safeSub(v5682, stdlib.checkedBigNumberify('./index.rsh:166:62:decimal', stdlib.UInt_max, '1'));
          v5680 = v5683;
          
          break;
          }
        }
      await stdlib.mapSet(map1, ctc1, v5596, ctc3, v5680);
      const v5684 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc1, v5597, ctc3), null);
      let v5685;
      switch (v5684[0]) {
        case 'None': {
          const v5686 = v5684[1];
          v5685 = stdlib.checkedBigNumberify('./index.rsh:167:48:decimal', stdlib.UInt_max, '1');
          
          break;
          }
        case 'Some': {
          const v5687 = v5684[1];
          const v5688 = stdlib.safeAdd(v5687, stdlib.checkedBigNumberify('./index.rsh:167:62:decimal', stdlib.UInt_max, '1'));
          v5685 = v5688;
          
          break;
          }
        }
      await stdlib.mapSet(map1, ctc1, v5597, ctc3, v5685);
      await stdlib.mapSet(map0, ctc3, v5598, ctc1, v5597);
      null;
      const v5690 = ['None', null];
      const v5691 = await txn1.getOutput('internal', 'v5690', ctc17, v5690);
      switch (v5691[0]) {
        case 'None': {
          const v5692 = v5691[1];
          const v5696 = null;
          const v5697 = await txn1.getOutput('safeTransferFrom1', 'v5696', ctc0, v5696);
          if (v1941) {
            stdlib.protect(ctc0, await interact.out(v5457, v5697), {
              at: './index.rsh:187:9:application',
              fs: ['at ./index.rsh:187:9:application call to [unknown function] (defined at: ./index.rsh:187:9:function exp)', 'at ./index.rsh:191:10:application call to "ret" (defined at: ./index.rsh:189:20:function exp)', 'at ./index.rsh:189:20:application call to [unknown function] (defined at: ./index.rsh:189:20:function exp)'],
              msg: 'out',
              who: 'safeTransferFrom1'
              });
            }
          else {
            }
          
          return;
          
          break;
          }
        case 'Some': {
          const v5707 = v5691[1];
          const v5708 = await ctc.getContractAddress();
          const v5711 = [];
          const v5712 = undefined /* Remote */;
          const v5713 = await txn1.getOutput('internal', 'v5712', ctc19, v5712);
          const v5715 = v5713[stdlib.checkedBigNumberify('./index.rsh:177:40:application', stdlib.UInt_max, '0')];
          const v5716 = v5713[stdlib.checkedBigNumberify('./index.rsh:177:40:application', stdlib.UInt_max, '1')];
          const v5721 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5715);
          stdlib.assert(v5721, {
            at: './index.rsh:177:40:application',
            fs: ['at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:175:21:function exp)', 'at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:174:21:function exp)', 'at ./index.rsh:190:25:application call to "doSafeTransferFrom" (defined at: ./index.rsh:171:67:function exp)', 'at ./index.rsh:189:20:application call to [unknown function] (defined at: ./index.rsh:189:20:function exp)'],
            msg: 'remote bill check',
            who: 'safeTransferFrom1'
            });
          const v5722 = 'z';
          const v5723 = stdlib.digest([ctc18], [v5716]);
          const v5725 = stdlib.digest([ctc18], [v5722]);
          const v5726 = stdlib.digestEq(v5723, v5725);
          stdlib.assert(v5726, {
            at: './index.rsh:179:18:application',
            fs: ['at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:175:21:function exp)', 'at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:174:21:function exp)', 'at ./index.rsh:190:25:application call to "doSafeTransferFrom" (defined at: ./index.rsh:171:67:function exp)', 'at ./index.rsh:189:20:application call to [unknown function] (defined at: ./index.rsh:189:20:function exp)'],
            msg: null,
            who: 'safeTransferFrom1'
            });
          const v5730 = null;
          const v5731 = await txn1.getOutput('safeTransferFrom1', 'v5730', ctc0, v5730);
          if (v1941) {
            stdlib.protect(ctc0, await interact.out(v5457, v5731), {
              at: './index.rsh:187:9:application',
              fs: ['at ./index.rsh:187:9:application call to [unknown function] (defined at: ./index.rsh:187:9:function exp)', 'at ./index.rsh:191:10:application call to "ret" (defined at: ./index.rsh:189:20:function exp)', 'at ./index.rsh:189:20:application call to [unknown function] (defined at: ./index.rsh:189:20:function exp)'],
              msg: 'out',
              who: 'safeTransferFrom1'
              });
            }
          else {
            }
          
          return;
          
          break;
          }
        }
      break;
      }
    case 'safeTransferFrom20_355': {
      const v6005 = v3810[1];
      return;
      break;
      }
    case 'setApprovalForAll0_355': {
      const v6553 = v3810[1];
      return;
      break;
      }
    case 'transferFrom0_355': {
      const v7101 = v3810[1];
      return;
      break;
      }
    }
  
  
  };
export async function _safeTransferFrom23(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _safeTransferFrom23 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _safeTransferFrom23 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_StringDyn;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc3]);
  const ctc11 = stdlib.T_Tuple([ctc3]);
  const ctc12 = stdlib.T_BytesDyn;
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc3, ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc15 = stdlib.T_Data({
    approve0_355: ctc10,
    burn0_355: ctc11,
    mint0_355: ctc10,
    safeTransferFrom10_355: ctc13,
    safeTransferFrom20_355: ctc8,
    setApprovalForAll0_355: ctc14,
    transferFrom0_355: ctc8
    });
  const ctc16 = stdlib.T_Contract;
  const ctc17 = stdlib.T_Data({
    None: ctc0,
    Some: ctc16
    });
  const ctc18 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc19 = stdlib.T_Tuple([ctc3, ctc18]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc6;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v3471, v3472, v3473, v3474, v3475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc7, ctc7, ctc7, ctc1]);
  const v3576 = ctc.selfAddress();
  const v3578 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:195:51:application call to [unknown function] (defined at: ./index.rsh:195:51:function exp)', 'at ./index.rsh:112:28:application call to "runsafeTransferFrom20_355" (defined at: ./index.rsh:195:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'in',
    who: 'safeTransferFrom2'
    });
  const v3580 = v3578[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3581 = v3578[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v3586 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3581, ctc1), null);
  const v3587 = {
    None: 0,
    Some: 1
    }[v3586[0]];
  const v3588 = stdlib.eq(v3587, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3588, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:28:application call to "ownerOf" (defined at: ./index.rsh:121:31:function exp)', 'at ./index.rsh:196:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:195:51:application call to [unknown function] (defined at: ./index.rsh:195:51:function exp)', 'at ./index.rsh:112:28:application call to "runsafeTransferFrom20_355" (defined at: ./index.rsh:195:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'ERC721::ownerOf: Owner query for non-existent token',
    who: 'safeTransferFrom2'
    });
  const v3591 = stdlib.fromSome(v3586, v3475);
  const v3592 = stdlib.addressEq(v3580, v3475);
  const v3593 = v3592 ? false : true;
  stdlib.assert(v3593, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:196:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:195:51:application call to [unknown function] (defined at: ./index.rsh:195:51:function exp)', 'at ./index.rsh:112:28:application call to "runsafeTransferFrom20_355" (defined at: ./index.rsh:195:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'ERC721::transfer: transfer to the zero address',
    who: 'safeTransferFrom2'
    });
  const v3605 = stdlib.addressEq(v3576, v3591);
  const v3606 = [v3591, v3576];
  const v3607 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v3606, ctc5), null);
  const v3608 = stdlib.fromSome(v3607, false);
  const v3609 = v3605 ? true : v3608;
  const v3615 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc3, v3581, ctc1), null);
  const v3616 = stdlib.fromSome(v3615, v3475);
  const v3617 = stdlib.addressEq(v3616, v3576);
  const v3610 = v3609 ? true : v3617;
  stdlib.assert(v3610, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:196:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:195:51:application call to [unknown function] (defined at: ./index.rsh:195:51:function exp)', 'at ./index.rsh:112:28:application call to "runsafeTransferFrom20_355" (defined at: ./index.rsh:195:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'ERC721::transfer: caller is not owner nor approved',
    who: 'safeTransferFrom2'
    });
  const v3628 = ['safeTransferFrom20_355', v3578];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3471, v3472, v3473, v3474, v3475, v3628],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:195:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3810], secs: v3812, time: v3811, didSend: v1941, from: v3809 } = txn1;
      
      switch (v3810[0]) {
        case 'approve0_355': {
          const v3813 = v3810[1];
          
          break;
          }
        case 'burn0_355': {
          const v4361 = v3810[1];
          
          break;
          }
        case 'mint0_355': {
          const v4909 = v3810[1];
          
          break;
          }
        case 'safeTransferFrom10_355': {
          const v5457 = v3810[1];
          
          break;
          }
        case 'safeTransferFrom20_355': {
          const v6005 = v3810[1];
          sim_r.txns.push({
            kind: 'api',
            who: "safeTransferFrom2"
            });
          ;
          const v6290 = v6005[stdlib.checkedBigNumberify('./index.rsh:195:8:spread', stdlib.UInt_max, '0')];
          const v6291 = v6005[stdlib.checkedBigNumberify('./index.rsh:195:8:spread', stdlib.UInt_max, '1')];
          const v6292 = v6005[stdlib.checkedBigNumberify('./index.rsh:195:8:spread', stdlib.UInt_max, '2')];
          const v6294 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v6292, ctc1), null);
          const v6299 = stdlib.fromSome(v6294, v3475);
          const v6314 = [v6299, v3809];
          stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc9, v6314, ctc5), null);
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc3, v6292, ctc1), null);
          await stdlib.simMapSet(sim_r, 2, ctc3, v6292, ctc1, v3475);
          null;
          const v6371 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc1, v6290, ctc3), null);
          let v6372;
          switch (v6371[0]) {
            case 'None': {
              const v6373 = v6371[1];
              v6372 = stdlib.checkedBigNumberify('./index.rsh:166:48:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v6374 = v6371[1];
              const v6375 = stdlib.safeSub(v6374, stdlib.checkedBigNumberify('./index.rsh:166:62:decimal', stdlib.UInt_max, '1'));
              v6372 = v6375;
              
              break;
              }
            }
          await stdlib.simMapSet(sim_r, 1, ctc1, v6290, ctc3, v6372);
          const v6376 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc1, v6291, ctc3), null);
          let v6377;
          switch (v6376[0]) {
            case 'None': {
              const v6378 = v6376[1];
              v6377 = stdlib.checkedBigNumberify('./index.rsh:167:48:decimal', stdlib.UInt_max, '1');
              
              break;
              }
            case 'Some': {
              const v6379 = v6376[1];
              const v6380 = stdlib.safeAdd(v6379, stdlib.checkedBigNumberify('./index.rsh:167:62:decimal', stdlib.UInt_max, '1'));
              v6377 = v6380;
              
              break;
              }
            }
          await stdlib.simMapSet(sim_r, 1, ctc1, v6291, ctc3, v6377);
          await stdlib.simMapSet(sim_r, 0, ctc3, v6292, ctc1, v6291);
          null;
          const v6382 = ['None', null];
          const v6383 = await txn1.getOutput('internal', 'v6382', ctc17, v6382);
          switch (v6383[0]) {
            case 'None': {
              const v6384 = v6383[1];
              const v6388 = null;
              const v6389 = await txn1.getOutput('safeTransferFrom2', 'v6388', ctc0, v6388);
              
              sim_r.isHalt = false;
              
              break;
              }
            case 'Some': {
              const v6398 = v6383[1];
              const v6399 = await ctc.getContractAddress();
              const v6402 = [];
              const v6403 = '';
              const v6404 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v6398,
                  remote: ({
                    accs: [v6399, v6290],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./index.rsh:177:40:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./index.rsh:177:40:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc18.defaultValue /* simReturnVal */];})();
              await txn1.getOutput('internal', 'v6404', ctc19, v6404);
              const v6422 = null;
              const v6423 = await txn1.getOutput('safeTransferFrom2', 'v6422', ctc0, v6422);
              
              sim_r.isHalt = false;
              
              break;
              }
            }
          break;
          }
        case 'setApprovalForAll0_355': {
          const v6553 = v3810[1];
          
          break;
          }
        case 'transferFrom0_355': {
          const v7101 = v3810[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc7, ctc7, ctc7, ctc1, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v3810], secs: v3812, time: v3811, didSend: v1941, from: v3809 } = txn1;
  switch (v3810[0]) {
    case 'approve0_355': {
      const v3813 = v3810[1];
      return;
      break;
      }
    case 'burn0_355': {
      const v4361 = v3810[1];
      return;
      break;
      }
    case 'mint0_355': {
      const v4909 = v3810[1];
      return;
      break;
      }
    case 'safeTransferFrom10_355': {
      const v5457 = v3810[1];
      return;
      break;
      }
    case 'safeTransferFrom20_355': {
      const v6005 = v3810[1];
      undefined /* setApiDetails */;
      ;
      const v6290 = v6005[stdlib.checkedBigNumberify('./index.rsh:195:8:spread', stdlib.UInt_max, '0')];
      const v6291 = v6005[stdlib.checkedBigNumberify('./index.rsh:195:8:spread', stdlib.UInt_max, '1')];
      const v6292 = v6005[stdlib.checkedBigNumberify('./index.rsh:195:8:spread', stdlib.UInt_max, '2')];
      const v6294 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v6292, ctc1), null);
      const v6295 = {
        None: 0,
        Some: 1
        }[v6294[0]];
      const v6296 = stdlib.eq(v6295, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v6296, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:28:application call to "ownerOf" (defined at: ./index.rsh:121:31:function exp)', 'at ./index.rsh:196:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:197:20:application call to [unknown function] (defined at: ./index.rsh:197:20:function exp)'],
        msg: 'ERC721::ownerOf: Owner query for non-existent token',
        who: 'safeTransferFrom2'
        });
      const v6299 = stdlib.fromSome(v6294, v3475);
      const v6300 = stdlib.addressEq(v6291, v3475);
      const v6301 = v6300 ? false : true;
      stdlib.assert(v6301, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:196:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:197:20:application call to [unknown function] (defined at: ./index.rsh:197:20:function exp)'],
        msg: 'ERC721::transfer: transfer to the zero address',
        who: 'safeTransferFrom2'
        });
      const v6313 = stdlib.addressEq(v3809, v6299);
      const v6314 = [v6299, v3809];
      const v6315 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v6314, ctc5), null);
      const v6316 = stdlib.fromSome(v6315, false);
      const v6317 = v6313 ? true : v6316;
      const v6323 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc3, v6292, ctc1), null);
      const v6324 = stdlib.fromSome(v6323, v3475);
      const v6325 = stdlib.addressEq(v6324, v3809);
      const v6318 = v6317 ? true : v6325;
      stdlib.assert(v6318, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:196:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:197:20:application call to [unknown function] (defined at: ./index.rsh:197:20:function exp)'],
        msg: 'ERC721::transfer: caller is not owner nor approved',
        who: 'safeTransferFrom2'
        });
      await stdlib.mapSet(map2, ctc3, v6292, ctc1, v3475);
      null;
      const v6371 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc1, v6290, ctc3), null);
      let v6372;
      switch (v6371[0]) {
        case 'None': {
          const v6373 = v6371[1];
          v6372 = stdlib.checkedBigNumberify('./index.rsh:166:48:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v6374 = v6371[1];
          const v6375 = stdlib.safeSub(v6374, stdlib.checkedBigNumberify('./index.rsh:166:62:decimal', stdlib.UInt_max, '1'));
          v6372 = v6375;
          
          break;
          }
        }
      await stdlib.mapSet(map1, ctc1, v6290, ctc3, v6372);
      const v6376 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc1, v6291, ctc3), null);
      let v6377;
      switch (v6376[0]) {
        case 'None': {
          const v6378 = v6376[1];
          v6377 = stdlib.checkedBigNumberify('./index.rsh:167:48:decimal', stdlib.UInt_max, '1');
          
          break;
          }
        case 'Some': {
          const v6379 = v6376[1];
          const v6380 = stdlib.safeAdd(v6379, stdlib.checkedBigNumberify('./index.rsh:167:62:decimal', stdlib.UInt_max, '1'));
          v6377 = v6380;
          
          break;
          }
        }
      await stdlib.mapSet(map1, ctc1, v6291, ctc3, v6377);
      await stdlib.mapSet(map0, ctc3, v6292, ctc1, v6291);
      null;
      const v6382 = ['None', null];
      const v6383 = await txn1.getOutput('internal', 'v6382', ctc17, v6382);
      switch (v6383[0]) {
        case 'None': {
          const v6384 = v6383[1];
          const v6388 = null;
          const v6389 = await txn1.getOutput('safeTransferFrom2', 'v6388', ctc0, v6388);
          if (v1941) {
            stdlib.protect(ctc0, await interact.out(v6005, v6389), {
              at: './index.rsh:195:9:application',
              fs: ['at ./index.rsh:195:9:application call to [unknown function] (defined at: ./index.rsh:195:9:function exp)', 'at ./index.rsh:199:10:application call to "ret" (defined at: ./index.rsh:197:20:function exp)', 'at ./index.rsh:197:20:application call to [unknown function] (defined at: ./index.rsh:197:20:function exp)'],
              msg: 'out',
              who: 'safeTransferFrom2'
              });
            }
          else {
            }
          
          return;
          
          break;
          }
        case 'Some': {
          const v6398 = v6383[1];
          const v6399 = await ctc.getContractAddress();
          const v6402 = [];
          const v6403 = '';
          const v6404 = undefined /* Remote */;
          const v6405 = await txn1.getOutput('internal', 'v6404', ctc19, v6404);
          const v6407 = v6405[stdlib.checkedBigNumberify('./index.rsh:177:40:application', stdlib.UInt_max, '0')];
          const v6408 = v6405[stdlib.checkedBigNumberify('./index.rsh:177:40:application', stdlib.UInt_max, '1')];
          const v6413 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6407);
          stdlib.assert(v6413, {
            at: './index.rsh:177:40:application',
            fs: ['at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:175:21:function exp)', 'at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:174:21:function exp)', 'at ./index.rsh:198:25:application call to "doSafeTransferFrom" (defined at: ./index.rsh:171:67:function exp)', 'at ./index.rsh:197:20:application call to [unknown function] (defined at: ./index.rsh:197:20:function exp)'],
            msg: 'remote bill check',
            who: 'safeTransferFrom2'
            });
          const v6414 = 'z';
          const v6415 = stdlib.digest([ctc18], [v6408]);
          const v6417 = stdlib.digest([ctc18], [v6414]);
          const v6418 = stdlib.digestEq(v6415, v6417);
          stdlib.assert(v6418, {
            at: './index.rsh:179:18:application',
            fs: ['at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:175:21:function exp)', 'at ./index.rsh:174:21:application call to [unknown function] (defined at: ./index.rsh:174:21:function exp)', 'at ./index.rsh:198:25:application call to "doSafeTransferFrom" (defined at: ./index.rsh:171:67:function exp)', 'at ./index.rsh:197:20:application call to [unknown function] (defined at: ./index.rsh:197:20:function exp)'],
            msg: null,
            who: 'safeTransferFrom2'
            });
          const v6422 = null;
          const v6423 = await txn1.getOutput('safeTransferFrom2', 'v6422', ctc0, v6422);
          if (v1941) {
            stdlib.protect(ctc0, await interact.out(v6005, v6423), {
              at: './index.rsh:195:9:application',
              fs: ['at ./index.rsh:195:9:application call to [unknown function] (defined at: ./index.rsh:195:9:function exp)', 'at ./index.rsh:199:10:application call to "ret" (defined at: ./index.rsh:197:20:function exp)', 'at ./index.rsh:197:20:application call to [unknown function] (defined at: ./index.rsh:197:20:function exp)'],
              msg: 'out',
              who: 'safeTransferFrom2'
              });
            }
          else {
            }
          
          return;
          
          break;
          }
        }
      break;
      }
    case 'setApprovalForAll0_355': {
      const v6553 = v3810[1];
      return;
      break;
      }
    case 'transferFrom0_355': {
      const v7101 = v3810[1];
      return;
      break;
      }
    }
  
  
  };
export async function _setApprovalForAll3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _setApprovalForAll3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _setApprovalForAll3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_StringDyn;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc3]);
  const ctc10 = stdlib.T_Tuple([ctc3]);
  const ctc11 = stdlib.T_BytesDyn;
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc3, ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc14 = stdlib.T_Data({
    approve0_355: ctc9,
    burn0_355: ctc10,
    mint0_355: ctc9,
    safeTransferFrom10_355: ctc12,
    safeTransferFrom20_355: ctc13,
    setApprovalForAll0_355: ctc8,
    transferFrom0_355: ctc13
    });
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc6;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v3471, v3472, v3473, v3474, v3475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc7, ctc7, ctc7, ctc1]);
  const v3715 = ctc.selfAddress();
  const v3717 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:221:51:application call to [unknown function] (defined at: ./index.rsh:221:51:function exp)', 'at ./index.rsh:112:28:application call to "runsetApprovalForAll0_355" (defined at: ./index.rsh:221:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'in',
    who: 'setApprovalForAll'
    });
  const v3718 = v3717[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3722 = stdlib.addressEq(v3715, v3718);
  const v3723 = v3722 ? false : true;
  stdlib.assert(v3723, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:223:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:221:51:application call to [unknown function] (defined at: ./index.rsh:221:51:function exp)', 'at ./index.rsh:112:28:application call to "runsetApprovalForAll0_355" (defined at: ./index.rsh:221:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'ERC721::setApprovalForAll: approve to caller',
    who: 'setApprovalForAll'
    });
  const v3732 = ['setApprovalForAll0_355', v3717];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3471, v3472, v3473, v3474, v3475, v3732],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./index.rsh:221:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3810], secs: v3812, time: v3811, didSend: v1941, from: v3809 } = txn1;
      
      switch (v3810[0]) {
        case 'approve0_355': {
          const v3813 = v3810[1];
          
          break;
          }
        case 'burn0_355': {
          const v4361 = v3810[1];
          
          break;
          }
        case 'mint0_355': {
          const v4909 = v3810[1];
          
          break;
          }
        case 'safeTransferFrom10_355': {
          const v5457 = v3810[1];
          
          break;
          }
        case 'safeTransferFrom20_355': {
          const v6005 = v3810[1];
          
          break;
          }
        case 'setApprovalForAll0_355': {
          const v6553 = v3810[1];
          sim_r.txns.push({
            kind: 'api',
            who: "setApprovalForAll"
            });
          ;
          const v6981 = v6553[stdlib.checkedBigNumberify('./index.rsh:221:8:spread', stdlib.UInt_max, '0')];
          const v6982 = v6553[stdlib.checkedBigNumberify('./index.rsh:221:8:spread', stdlib.UInt_max, '1')];
          const v6988 = [v3809, v6981];
          await stdlib.simMapSet(sim_r, 3, ctc15, v6988, ctc5, v6982);
          null;
          const v6989 = null;
          const v6990 = await txn1.getOutput('setApprovalForAll', 'v6989', ctc0, v6989);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'transferFrom0_355': {
          const v7101 = v3810[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc7, ctc7, ctc7, ctc1, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v3810], secs: v3812, time: v3811, didSend: v1941, from: v3809 } = txn1;
  switch (v3810[0]) {
    case 'approve0_355': {
      const v3813 = v3810[1];
      return;
      break;
      }
    case 'burn0_355': {
      const v4361 = v3810[1];
      return;
      break;
      }
    case 'mint0_355': {
      const v4909 = v3810[1];
      return;
      break;
      }
    case 'safeTransferFrom10_355': {
      const v5457 = v3810[1];
      return;
      break;
      }
    case 'safeTransferFrom20_355': {
      const v6005 = v3810[1];
      return;
      break;
      }
    case 'setApprovalForAll0_355': {
      const v6553 = v3810[1];
      undefined /* setApiDetails */;
      ;
      const v6981 = v6553[stdlib.checkedBigNumberify('./index.rsh:221:8:spread', stdlib.UInt_max, '0')];
      const v6982 = v6553[stdlib.checkedBigNumberify('./index.rsh:221:8:spread', stdlib.UInt_max, '1')];
      const v6983 = stdlib.addressEq(v3809, v6981);
      const v6984 = v6983 ? false : true;
      stdlib.assert(v6984, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:223:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:224:20:application call to [unknown function] (defined at: ./index.rsh:224:20:function exp)'],
        msg: 'ERC721::setApprovalForAll: approve to caller',
        who: 'setApprovalForAll'
        });
      const v6988 = [v3809, v6981];
      await stdlib.mapSet(map3, ctc15, v6988, ctc5, v6982);
      null;
      const v6989 = null;
      const v6990 = await txn1.getOutput('setApprovalForAll', 'v6989', ctc0, v6989);
      if (v1941) {
        stdlib.protect(ctc0, await interact.out(v6553, v6990), {
          at: './index.rsh:221:9:application',
          fs: ['at ./index.rsh:221:9:application call to [unknown function] (defined at: ./index.rsh:221:9:function exp)', 'at ./index.rsh:227:10:application call to "ret" (defined at: ./index.rsh:224:20:function exp)', 'at ./index.rsh:224:20:application call to [unknown function] (defined at: ./index.rsh:224:20:function exp)'],
          msg: 'out',
          who: 'setApprovalForAll'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'transferFrom0_355': {
      const v7101 = v3810[1];
      return;
      break;
      }
    }
  
  
  };
export async function _transferFrom3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _transferFrom3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _transferFrom3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc5
    });
  const ctc7 = stdlib.T_StringDyn;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc3]);
  const ctc11 = stdlib.T_Tuple([ctc3]);
  const ctc12 = stdlib.T_BytesDyn;
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc3, ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc15 = stdlib.T_Data({
    approve0_355: ctc10,
    burn0_355: ctc11,
    mint0_355: ctc10,
    safeTransferFrom10_355: ctc13,
    safeTransferFrom20_355: ctc8,
    setApprovalForAll0_355: ctc14,
    transferFrom0_355: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc2;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc6;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v3471, v3472, v3473, v3474, v3475] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc1, ctc7, ctc7, ctc7, ctc1]);
  const v3630 = ctc.selfAddress();
  const v3632 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:203:46:application call to [unknown function] (defined at: ./index.rsh:203:46:function exp)', 'at ./index.rsh:112:28:application call to "runtransferFrom0_355" (defined at: ./index.rsh:203:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'in',
    who: 'transferFrom'
    });
  const v3634 = v3632[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3635 = v3632[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v3640 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3635, ctc1), null);
  const v3641 = {
    None: 0,
    Some: 1
    }[v3640[0]];
  const v3642 = stdlib.eq(v3641, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3642, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:28:application call to "ownerOf" (defined at: ./index.rsh:121:31:function exp)', 'at ./index.rsh:204:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:203:46:application call to [unknown function] (defined at: ./index.rsh:203:46:function exp)', 'at ./index.rsh:112:28:application call to "runtransferFrom0_355" (defined at: ./index.rsh:203:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'ERC721::ownerOf: Owner query for non-existent token',
    who: 'transferFrom'
    });
  const v3645 = stdlib.fromSome(v3640, v3475);
  const v3646 = stdlib.addressEq(v3634, v3475);
  const v3647 = v3646 ? false : true;
  stdlib.assert(v3647, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:203:46:application call to [unknown function] (defined at: ./index.rsh:203:46:function exp)', 'at ./index.rsh:112:28:application call to "runtransferFrom0_355" (defined at: ./index.rsh:203:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'ERC721::transfer: transfer to the zero address',
    who: 'transferFrom'
    });
  const v3659 = stdlib.addressEq(v3630, v3645);
  const v3660 = [v3645, v3630];
  const v3661 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v3660, ctc5), null);
  const v3662 = stdlib.fromSome(v3661, false);
  const v3663 = v3659 ? true : v3662;
  const v3669 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc3, v3635, ctc1), null);
  const v3670 = stdlib.fromSome(v3669, v3475);
  const v3671 = stdlib.addressEq(v3670, v3630);
  const v3664 = v3663 ? true : v3671;
  stdlib.assert(v3664, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:203:46:application call to [unknown function] (defined at: ./index.rsh:203:46:function exp)', 'at ./index.rsh:112:28:application call to "runtransferFrom0_355" (defined at: ./index.rsh:203:8:function exp)', 'at ./index.rsh:112:28:application call to [unknown function] (defined at: ./index.rsh:112:28:function exp)'],
    msg: 'ERC721::transfer: caller is not owner nor approved',
    who: 'transferFrom'
    });
  const v3682 = ['transferFrom0_355', v3632];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3471, v3472, v3473, v3474, v3475, v3682],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./index.rsh:203:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v3810], secs: v3812, time: v3811, didSend: v1941, from: v3809 } = txn1;
      
      switch (v3810[0]) {
        case 'approve0_355': {
          const v3813 = v3810[1];
          
          break;
          }
        case 'burn0_355': {
          const v4361 = v3810[1];
          
          break;
          }
        case 'mint0_355': {
          const v4909 = v3810[1];
          
          break;
          }
        case 'safeTransferFrom10_355': {
          const v5457 = v3810[1];
          
          break;
          }
        case 'safeTransferFrom20_355': {
          const v6005 = v3810[1];
          
          break;
          }
        case 'setApprovalForAll0_355': {
          const v6553 = v3810[1];
          
          break;
          }
        case 'transferFrom0_355': {
          const v7101 = v3810[1];
          sim_r.txns.push({
            kind: 'api',
            who: "transferFrom"
            });
          ;
          const v7547 = v7101[stdlib.checkedBigNumberify('./index.rsh:203:8:spread', stdlib.UInt_max, '0')];
          const v7548 = v7101[stdlib.checkedBigNumberify('./index.rsh:203:8:spread', stdlib.UInt_max, '1')];
          const v7549 = v7101[stdlib.checkedBigNumberify('./index.rsh:203:8:spread', stdlib.UInt_max, '2')];
          const v7551 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v7549, ctc1), null);
          const v7556 = stdlib.fromSome(v7551, v3475);
          const v7571 = [v7556, v3809];
          stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc9, v7571, ctc5), null);
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc3, v7549, ctc1), null);
          await stdlib.simMapSet(sim_r, 2, ctc3, v7549, ctc1, v3475);
          null;
          const v7628 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc1, v7547, ctc3), null);
          let v7629;
          switch (v7628[0]) {
            case 'None': {
              const v7630 = v7628[1];
              v7629 = stdlib.checkedBigNumberify('./index.rsh:166:48:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v7631 = v7628[1];
              const v7632 = stdlib.safeSub(v7631, stdlib.checkedBigNumberify('./index.rsh:166:62:decimal', stdlib.UInt_max, '1'));
              v7629 = v7632;
              
              break;
              }
            }
          await stdlib.simMapSet(sim_r, 1, ctc1, v7547, ctc3, v7629);
          const v7633 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc1, v7548, ctc3), null);
          let v7634;
          switch (v7633[0]) {
            case 'None': {
              const v7635 = v7633[1];
              v7634 = stdlib.checkedBigNumberify('./index.rsh:167:48:decimal', stdlib.UInt_max, '1');
              
              break;
              }
            case 'Some': {
              const v7636 = v7633[1];
              const v7637 = stdlib.safeAdd(v7636, stdlib.checkedBigNumberify('./index.rsh:167:62:decimal', stdlib.UInt_max, '1'));
              v7634 = v7637;
              
              break;
              }
            }
          await stdlib.simMapSet(sim_r, 1, ctc1, v7548, ctc3, v7634);
          await stdlib.simMapSet(sim_r, 0, ctc3, v7549, ctc1, v7548);
          null;
          const v7639 = null;
          const v7640 = await txn1.getOutput('transferFrom', 'v7639', ctc0, v7639);
          
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc7, ctc7, ctc7, ctc1, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v3810], secs: v3812, time: v3811, didSend: v1941, from: v3809 } = txn1;
  switch (v3810[0]) {
    case 'approve0_355': {
      const v3813 = v3810[1];
      return;
      break;
      }
    case 'burn0_355': {
      const v4361 = v3810[1];
      return;
      break;
      }
    case 'mint0_355': {
      const v4909 = v3810[1];
      return;
      break;
      }
    case 'safeTransferFrom10_355': {
      const v5457 = v3810[1];
      return;
      break;
      }
    case 'safeTransferFrom20_355': {
      const v6005 = v3810[1];
      return;
      break;
      }
    case 'setApprovalForAll0_355': {
      const v6553 = v3810[1];
      return;
      break;
      }
    case 'transferFrom0_355': {
      const v7101 = v3810[1];
      undefined /* setApiDetails */;
      ;
      const v7547 = v7101[stdlib.checkedBigNumberify('./index.rsh:203:8:spread', stdlib.UInt_max, '0')];
      const v7548 = v7101[stdlib.checkedBigNumberify('./index.rsh:203:8:spread', stdlib.UInt_max, '1')];
      const v7549 = v7101[stdlib.checkedBigNumberify('./index.rsh:203:8:spread', stdlib.UInt_max, '2')];
      const v7551 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v7549, ctc1), null);
      const v7552 = {
        None: 0,
        Some: 1
        }[v7551[0]];
      const v7553 = stdlib.eq(v7552, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v7553, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:28:application call to "ownerOf" (defined at: ./index.rsh:121:31:function exp)', 'at ./index.rsh:204:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:205:20:application call to [unknown function] (defined at: ./index.rsh:205:20:function exp)'],
        msg: 'ERC721::ownerOf: Owner query for non-existent token',
        who: 'transferFrom'
        });
      const v7556 = stdlib.fromSome(v7551, v3475);
      const v7557 = stdlib.addressEq(v7548, v3475);
      const v7558 = v7557 ? false : true;
      stdlib.assert(v7558, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:205:20:application call to [unknown function] (defined at: ./index.rsh:205:20:function exp)'],
        msg: 'ERC721::transfer: transfer to the zero address',
        who: 'transferFrom'
        });
      const v7570 = stdlib.addressEq(v3809, v7556);
      const v7571 = [v7556, v3809];
      const v7572 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc9, v7571, ctc5), null);
      const v7573 = stdlib.fromSome(v7572, false);
      const v7574 = v7570 ? true : v7573;
      const v7580 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc3, v7549, ctc1), null);
      const v7581 = stdlib.fromSome(v7580, v3475);
      const v7582 = stdlib.addressEq(v7581, v3809);
      const v7575 = v7574 ? true : v7582;
      stdlib.assert(v7575, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:204:19:application call to "transferChecks" (defined at: ./index.rsh:156:57:function exp)', 'at ./index.rsh:205:20:application call to [unknown function] (defined at: ./index.rsh:205:20:function exp)'],
        msg: 'ERC721::transfer: caller is not owner nor approved',
        who: 'transferFrom'
        });
      await stdlib.mapSet(map2, ctc3, v7549, ctc1, v3475);
      null;
      const v7628 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc1, v7547, ctc3), null);
      let v7629;
      switch (v7628[0]) {
        case 'None': {
          const v7630 = v7628[1];
          v7629 = stdlib.checkedBigNumberify('./index.rsh:166:48:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v7631 = v7628[1];
          const v7632 = stdlib.safeSub(v7631, stdlib.checkedBigNumberify('./index.rsh:166:62:decimal', stdlib.UInt_max, '1'));
          v7629 = v7632;
          
          break;
          }
        }
      await stdlib.mapSet(map1, ctc1, v7547, ctc3, v7629);
      const v7633 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc1, v7548, ctc3), null);
      let v7634;
      switch (v7633[0]) {
        case 'None': {
          const v7635 = v7633[1];
          v7634 = stdlib.checkedBigNumberify('./index.rsh:167:48:decimal', stdlib.UInt_max, '1');
          
          break;
          }
        case 'Some': {
          const v7636 = v7633[1];
          const v7637 = stdlib.safeAdd(v7636, stdlib.checkedBigNumberify('./index.rsh:167:62:decimal', stdlib.UInt_max, '1'));
          v7634 = v7637;
          
          break;
          }
        }
      await stdlib.mapSet(map1, ctc1, v7548, ctc3, v7634);
      await stdlib.mapSet(map0, ctc3, v7549, ctc1, v7548);
      null;
      const v7639 = null;
      const v7640 = await txn1.getOutput('transferFrom', 'v7639', ctc0, v7639);
      if (v1941) {
        stdlib.protect(ctc0, await interact.out(v7101, v7640), {
          at: './index.rsh:203:9:application',
          fs: ['at ./index.rsh:203:9:application call to [unknown function] (defined at: ./index.rsh:203:9:function exp)', 'at ./index.rsh:207:10:application call to "ret" (defined at: ./index.rsh:205:20:function exp)', 'at ./index.rsh:205:20:application call to [unknown function] (defined at: ./index.rsh:205:20:function exp)'],
          msg: 'out',
          who: 'transferFrom'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    }
  
  
  };
export async function approve(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for approve expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for approve expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _approve3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function burn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for burn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for burn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _burn3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function mint(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for mint expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for mint expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _mint3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function safeTransferFrom1(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for safeTransferFrom1 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for safeTransferFrom1 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _safeTransferFrom13(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function safeTransferFrom2(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for safeTransferFrom2 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for safeTransferFrom2 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _safeTransferFrom23(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function setApprovalForAll(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for setApprovalForAll expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for setApprovalForAll expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _setApprovalForAll3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function transferFrom(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for transferFrom expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for transferFrom expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _transferFrom3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"string","name":"elem1","type":"string"},{"internalType":"string","name":"elem2","type":"string"},{"internalType":"string","name":"elem3","type":"string"},{"internalType":"address payable","name":"elem4","type":"address"}],"internalType":"struct T13","name":"v9241","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"},{"indexed":false,"internalType":"bool","name":"v2","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"string","name":"elem1","type":"string"},{"internalType":"string","name":"elem2","type":"string"},{"internalType":"string","name":"elem3","type":"string"},{"internalType":"address payable","name":"elem4","type":"address"}],"indexed":false,"internalType":"struct T13","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T8","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"_approve0_355","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"_burn0_355","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"_mint0_355","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"bytes","name":"elem3","type":"bytes"}],"internalType":"struct T5","name":"_safeTransferFrom10_355","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T6","name":"_safeTransferFrom20_355","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T7","name":"_setApprovalForAll0_355","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T6","name":"_transferFrom0_355","type":"tuple"}],"internalType":"struct T8","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3851","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4454","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4462","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5038","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"enum _enum_T15","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"indexed":false,"internalType":"struct T15","name":"v0","type":"tuple"}],"name":"_reach_oe_v5690","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5696","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes4","name":"elem1","type":"bytes4"}],"indexed":false,"internalType":"struct T16","name":"v0","type":"tuple"}],"name":"_reach_oe_v5712","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5730","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"enum _enum_T15","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"indexed":false,"internalType":"struct T15","name":"v0","type":"tuple"}],"name":"_reach_oe_v6382","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6388","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes4","name":"elem1","type":"bytes4"}],"indexed":false,"internalType":"struct T16","name":"v0","type":"tuple"}],"name":"_reach_oe_v6404","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6422","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6989","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v7639","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T8","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"_approve0_355","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"_burn0_355","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"_mint0_355","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"bytes","name":"elem3","type":"bytes"}],"internalType":"struct T5","name":"_safeTransferFrom10_355","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T6","name":"_safeTransferFrom20_355","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T7","name":"_setApprovalForAll0_355","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T6","name":"_transferFrom0_355","type":"tuple"}],"internalType":"struct T8","name":"elem1","type":"tuple"}],"internalType":"struct T9","name":"v9244","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9183","type":"address"},{"internalType":"uint256","name":"v9184","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9154","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v9190","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v9158","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9163","type":"address"},{"internalType":"address payable","name":"v9164","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9197","type":"address"},{"internalType":"uint256","name":"v9198","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v9170","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9218","type":"address"},{"internalType":"address payable","name":"v9219","type":"address"},{"internalType":"uint256","name":"v9220","type":"uint256"}],"name":"safeTransferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9207","type":"address"},{"internalType":"address payable","name":"v9208","type":"address"},{"internalType":"uint256","name":"v9209","type":"uint256"},{"internalType":"bytes","name":"v9210","type":"bytes"}],"name":"safeTransferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9207","type":"address"},{"internalType":"address payable","name":"v9208","type":"address"},{"internalType":"uint256","name":"v9209","type":"uint256"},{"internalType":"bytes","name":"v9210","type":"bytes"}],"name":"safeTransferFrom1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9218","type":"address"},{"internalType":"address payable","name":"v9219","type":"address"},{"internalType":"uint256","name":"v9220","type":"uint256"}],"name":"safeTransferFrom2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9227","type":"address"},{"internalType":"bool","name":"v9228","type":"bool"}],"name":"setApprovalForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v9176","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v9236","type":"address"},{"internalType":"address payable","name":"v9237","type":"address"},{"internalType":"uint256","name":"v9238","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60808060405262004cd580380380916200001a8285620005ae565b83398101906020818303126200058d578051906001600160401b0382116200058d570160a0818303126200058d57604051620000568162000592565b8151815260208201516001600160401b0381116200058d57836200007c918401620005f7565b6020820190815260408301519092906001600160401b0381116200058d5784620000a8918301620005f7565b6040830190815260608201519094906001600160401b0381116200058d57608091620000d6918401620005f7565b60608401908152910151916001600160a01b03831683036200058d5760808101928352436003556040516101e081016001600160401b038111828210176200051f576000916101c0916040528281528260208201528260408201528260608201528260808201528260a08201528260c0820152606060e082015282610100820152826101208201528261014082015282610160820152606061018082015260606101a0820152015260ff6004541662000574577f8f24dbf2cd8c02d27b704f3afe9c30c995d210eb41e873f8e9330db1b00429c260405133815260406020820152825160408201528062000207620001f3620001df895160a0606086015260e085019062000652565b8a51848203603f1901608086015262000652565b8651838203603f190160a085015262000652565b86516001600160a01b031660c08301520390a151801590811562000567575b50156200054e573462000535576040519360c085016001600160401b038111868210176200051f5760405260606020860152606060408601526060808601526000608086015260a08501936000855233865251602086015251604085015251606084015260018060a01b03905116608083015243905260405190620002ab8262000592565b6000825260606020830152606060408301526060808301526000608083015260018060a01b038151168252602081015160208301526040810151604083015260608101516060830152608060018060a01b03910151166080820152600360005543600155604051809160208083015260018060a01b0381511660408301526200037a620003636200034c602084015160a0606087015260e086019062000652565b6040840151858203603f1901608087015262000652565b6060830151848203603f190160a086015262000652565b608091909101516001600160a01b031660c083015203601f1981810183529190620003a69082620005ae565b8051906001600160401b0382116200051f57600254600181811c9116801562000514575b6020821014620004fe57601f811162000494575b50602092601f83116001146200042d575091819260009262000421575b50508160011b916000199060031b1c1916176002555b60405161465b90816200067a8239f35b015190503880620003fb565b821692600260005260206000209160005b8581106200047b5750836001951062000461575b505050811b0160025562000411565b015160001960f88460031b161c1916905538808062000452565b919260206001819286850151815501940192016200043e565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f840160051c81019160208510620004f3575b601f0160051c01905b818110620004e65750620003de565b60008155600101620004d7565b9091508190620004ce565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003ca565b634e487b7160e01b600052604160045260246000fd5b60405163100960cb60e01b815260146004820152602490fd5b60405163100960cb60e01b815260136004820152602490fd5b9050600154143862000226565b60405163100960cb60e01b815260126004820152602490fd5b600080fd5b60a081019081106001600160401b038211176200051f57604052565b601f909101601f19168101906001600160401b038211908210176200051f57604052565b60005b838110620005e65750506000910152565b8181015183820152602001620005d5565b81601f820112156200058d5780516001600160401b0381116200051f57604051926200062e601f8301601f191660200185620005ae565b818452602082840101116200058d576200064f9160208085019101620005d2565b90565b906020916200066d81518092818552858086019101620005d2565b601f01601f191601019056fe60806040526004361015610018575b361561001657005b005b60003560e01c806306fdde03146101e6578063081812fc146101dd578063095ea7b3146101d45780631e93b0f1146101cb57806323b872dd146101c257806340c10f19146101b957806342842e0e1461018c57806342966c68146101b05780636352211e146101a757806370a082311461019e57806372e114f61461015f57806383230757146101955780638bb59c611461018c57806395d89b4114610183578063a22cb4651461017a578063ab53f2c614610171578063ad76d8b414610168578063b88d4fde1461015f578063c5d86f6f14610156578063c87b56dd1461014d578063da70a52514610144578063e985e9c51461013b578063e9e71ad5146101325763feee83da0361000e5761012d610d9b565b61000e565b5061012d610d72565b5061012d610c2e565b5061012d610bf9565b5061012d610afb565b5061012d610aa3565b5061012d61084e565b5061012d610a52565b5061012d6109ed565b5061012d610947565b5061012d6108e7565b5061012d6105d0565b5061012d6108c8565b5061012d610785565b5061012d6106c8565b5061012d610665565b5061012d610553565b5061012d6104c2565b5061012d610477565b5061012d6103d8565b5061012d6102d9565b5061012d61024b565b60005b8381106102025750506000910152565b81810151838201526020016101f2565b9060209161022b815180928185528580860191016101ef565b601f01601f1916010190565b906020610248928181520190610212565b90565b50346102c85760003660031901126102c85761026561129e565b6003600054036102af5760e06102ab916020610290610282610f91565b8280825183010191016118a8565b01519182910152604051918291602083526020830190610212565b0390f35b60405163100960cb60e01b8152600c6004820152602490fd5b600080fd5b6001600160a01b031690565b50346102c85760203660031901126102c8576102ab610399600435610393608061030161129e565b92610310600360005414613b40565b61032a61031b610f91565b602080825183010191016118a8565b6103516001610338846110e7565b5161034281610a3e565b61034b81610a3e565b14613b60565b600161035c836111e4565b5161036681610a3e565b61036f81610a3e565b036103b357506040610383610389926111e4565b01611ac5565b925b0191826110d8565b516102cd565b604051918291826001600160a01b03909116815260200190565b8201516001600160a01b031693905061038b565b6001600160a01b038116036102c857565b5060403660031901126102c8576102ab6104656004356103f7816103c7565b6103ff61129e565b61045e8161040b61153a565b6001600160a01b03948516815260243560208083019182529561042c6143c1565b92511682515251858251015284810190600082515251858251015261044f6143e3565b90600082525185820152611c2b565b0151151590565b60405191829182901515815260200190565b50346102c85760003660031901126102c8576020600354604051908152f35b60609060031901126102c8576004356104ae816103c7565b906024356104bb816103c7565b9060443590565b506102ab6104656101c061045e6104d836610496565b9291906104e361129e565b9384926104ee611099565b6001600160a01b039182168152928116602084019081526040840192835281610515614419565b945116845152511660208351015251604082510152602081019060068251525160e0825101526105436143e3565b9060008252516020820152611c2b565b5060403660031901126102c8576102ab61046560c0600435610574816103c7565b61045e61057f61129e565b809261058961153a565b6001600160a01b0391821681526024356020820190815290916105aa6143c1565b9251168251525160208251015260208101906002825152516060825101526105436143e3565b5060206101406106596105e236610496565b9291906105ed61129e565b9384926105f8611099565b6001600160a01b039182168152928116888401908152604084019283528161061e614419565b94511684515251168783510152516040825101528581019060048251525160a08251015261064a6143e3565b90600082525186820152611c2b565b01511515604051908152f35b5060203660031901126102c8576020606061067e61129e565b6106598160405161068e81610f10565b60405161069a81610f38565b600081528152858101906106ac614330565b825260043581515260018251525160408251015261064a6143e3565b50346102c85760203660031901126102c8576102ab6103996106e861129e565b6103936101006040516106fa81610f38565b610702611099565b8152610712600360005414613b80565b61071d61031b610f91565b610749600161072d6004356110e7565b8085525161073a81610a3e565b61074381610a3e565b14613ba0565b60016107558351611abb565b61075e81610a3e565b0361077157506040610389915101611ac5565b61077f9150608001516102cd565b9261038b565b50346102c85760203660031901126102c8576102ab60406004356107a8816103c7565b6107b061129e565b906107bf600360005414613bc0565b6107d76107d2608061038361031b610f91565b6102cd565b6001600160a01b03909116908103610844576107f36000613be0565b6108046107ff8261116c565b611abb565b61080d81610a3e565b60009060010361083a5750610822839161116c565b01519182915b01526040519081529081906020820190565b9050918291610828565b6107f36001613be0565b5060803660031901126102c857600435610867816103c7565b602435610873816103c7565b606435906001600160401b03908183116102c857366023840112156102c85782600401359182116102c85736602483850101116102c85760209360246108be9401916044359161442f565b6040519015158152f35b50346102c85760003660031901126102c8576020600154604051908152f35b50346102c85760003660031901126102c85761090161129e565b60036000540361091f576101806102ab91604061029061031b610f91565b60405163100960cb60e01b8152600f6004820152602490fd5b6024359081151582036102c857565b5060403660031901126102c8576102ab610465610160600435610969816103c7565b61045e610974610938565b9161097d61129e565b92839161098861153a565b6001600160a01b03918216815291151560208301908152604051916109ac83610f10565b6109b461153a565b835260208301936109c3614330565b855251168251525115156020825101526109de825160059052565b5160c0825101526105436143e3565b50346102c85760003660031901126102c857600054610a0a610f91565b906102ab6040519283928352604060208401526040830190610212565b50634e487b7160e01b600052602160045260246000fd5b60021115610a4857565b610a50610a27565b565b50346102c85760203660031901126102c857610a6c611099565b506060610a7a60043561122b565b60408051918051610a8a81610a3e565b8352602081015115156020840152015115156040820152f35b50346102c85760203660031901126102c8576060610ad4600435610ac6816103c7565b610ace611099565b5061116c565b60408051918051610ae481610a3e565b835260208101511515602084015201516040820152f35b50346102c8576020806003193601126102c8576102ab906004356101a0610b2061129e565b610b2e600360005414613c00565b610bb8610b7e6060610b4f610b41610f91565b8880825183010191016118a8565b610b766001610b5d896110e7565b51610b6781610a3e565b610b7081610a3e565b14613c20565b015194614515565b94604051809686610b9883985180928680870191016101ef565b8201610bac825180938680850191016101ef565b01038086520184610f6e565b015260405191829182610237565b8151606082019392604091610bda81610a3e565b83526020818101511515908401528101516001600160a01b0316910152565b50346102c85760203660031901126102c857610c13611099565b506102ab610c226004356111e4565b60405191829182610bc6565b50346102c85760403660031901126102c8576102ab610465600435610c52816103c7565b610d6260a060243592610c64846103c7565b610c6c61129e565b93610cde610cd5610c7b61153a565b92600180871b03809516845260209485850191168152610393610cce610c9f6143ff565b95610cae600360005414613c40565b610cc7610cb9610f91565b8980825183010191016118a8565b50516102cd565b85516110d8565b838351016110d8565b805190610d156107ff6040519384610cf98782019283611ad2565b0394610d0d601f1996878101835282610f6e565b51902061122b565b610d1e81610a3e565b600090600103610d685750610d5692610d4a610d0d60409461045e945193865193849182019586611ad2565b03908101835282610f6e565b925b0191829015159052565b51151590565b9250505092610d58565b50346102c85760203660031901126102c857610d8c611099565b506102ab610c226004356110e7565b506003196020368201126102c8576001600160401b036004358181116102c85760408382360301126102c857610dcf61129e565b9160405191610ddd83610f10565b8060040135835260248101358281116102c8576101e091019485360301126102c857610e0761103a565b90610e146004860161132f565b8252610e23366024870161133c565b6020830152610e35366064870161136d565b6040830152610e47366084870161133c565b606083015260c48501359081116102c857610eb394610e6f610ea4926004369184010161140a565b6080840152610e813660e4830161149d565b60a0840152610e943661014483016114ff565b60c084015261018436910161149d565b60e08201526020820152611c2b565b60405160008152602090f35b90600182811c92168015610eef575b6020831014610ed957565b634e487b7160e01b600052602260045260246000fd5b91607f1691610ece565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610f2b57604052565b610f33610ef9565b604052565b602081019081106001600160401b03821117610f2b57604052565b606081019081106001600160401b03821117610f2b57604052565b601f909101601f19168101906001600160401b03821190821017610f2b57604052565b6040519060008260025491610fa583610ebf565b8083526001938085169081156110195750600114610fcb575b50610a5092500383610f6e565b600260009081526000805160206145ef83398151915294602093509091905b818310611001575050610a50935082010138610fbe565b85548884018501529485019487945091830191610fea565b9050610a5094506020925060ff191682840152151560051b82010138610fbe565b6040519061010082016001600160401b03811183821017610f2b57604052565b6040519061080082016001600160401b03811183821017610f2b57604052565b6040519060a082016001600160401b03811183821017610f2b57604052565b604051906110a682610f53565b60006040838281528260208201520152565b6000526007602052604060002090565b6000526005602052604060002090565b6001600160a01b039091169052565b906110f0611099565b916000908082526005602052600160ff60408420541661110f81610a3e565b0361116157604092935081526005602052206040519061112e82610f53565b5460ff811661113c81610a3e565b8252600881901c60ff161515602083015260101c6001600160a01b0316604082015290565b508083526020830152565b90611175611099565b9160018060a01b03166000908082526006602052600160ff60408420541661119c81610a3e565b0361116157604092935081526006602052206001604051916111bd83610f53565b60ff81548181166111cd81610a3e565b855260081c16151560208401520154604082015290565b906111ed611099565b916000908082526007602052600160ff60408420541661120c81610a3e565b0361116157604092935081526007602052206040519061112e82610f53565b90611234611099565b916000908082526008602052600160ff60408420541661125381610a3e565b03611161576040929350815260086020522060ff6040519161127483610f53565b5481811661128181610a3e565b8352818160081c161515602084015260101c161515604082015290565b604051906101e082016001600160401b03811183821017611322575b604052816101c06000918281528260208201528260408201528260608201528260808201528260a08201528260c0820152606060e082015282610100820152826101208201528261014082015282610160820152606061018082015260606101a08201520152565b61132a610ef9565b6112ba565b359060078210156102c857565b91908260409103126102c85760405161135481610f10565b60208082948035611364816103c7565b84520135910152565b91908260209103126102c857604051602081016001600160401b0381118282101761139c575b60405291358252565b6113a4610ef9565b611393565b6020906001600160401b0381116113c6575b601f01601f19160190565b6113ce610ef9565b6113bb565b9291926113df826113a9565b916113ed6040519384610f6e565b8294818452818301116102c8578281602093846000960137010152565b91906080838203126102c857604051906001600160401b036080830181811184821017611490575b60405282948035611442816103c7565b84526020810135611452816103c7565b60208501526040810135604085015260608101359182116102c8570181601f820112156102c85760609181602061148b933591016113d3565b910152565b611498610ef9565b611432565b91908260609103126102c857604051606081016001600160401b038111828210176114f2575b604052604080829480356114d6816103c7565b845260208101356114e6816103c7565b60208501520135910152565b6114fa610ef9565b6114c3565b91908260409103126102c85760405161151781610f10565b602081938035611526816103c7565b835201359081151582036102c85760200152565b6040519061154782610f10565b60006020838281520152565b6040519061156082610f38565b60008252565b60405190608082016001600160401b0381118382101761159e575b604052606080836000815260006020820152600060408201520152565b6115a6610ef9565b611581565b6115b361105a565b906115bc61153a565b82526115c6611099565b602083015260008060408401526115db61153a565b60608401526115e8611553565b60808401526115f5611099565b60a08401528060c084015261160861153a565b60e0840152611615611099565b610100840152806101208401528061014084015261163161153a565b61016084015261163f611099565b610180840152806101a0840152806101c084015261165b611566565b6101e0840152611669611099565b6102008401528061022084015261167e61153a565b61024084015261168c611099565b61026084015280610280840152806102a08401526116a8611099565b6102c0840152806102e0840152806103008401526116c4611099565b6103208401526116d2611099565b61034084015280610360840152806103808401526116ee61153a565b6103a08401526116fc61153a565b6103c0840152806103e0840152611711611099565b61040084015261171f611099565b6104208401528061044084015261173461153a565b610460840152611742611099565b610480840152806104a0840152806104c084015261175e611099565b6104e0840152806105008401528061052084015261177a611099565b610540840152611788611099565b61056084015280610580840152806105a084015260606105c08401526117ac61153a565b6105e08401526117ba61153a565b610600840152806106208401526117cf61153a565b6106408401526117dd61153a565b6106608401526117eb611099565b6106808401526117f9611099565b6106a0840152806106c084015261180e61153a565b6106e084015261181c611099565b6107008401528061072084015280610740840152611838611099565b61076084015280610780840152806107a0840152806107c08401526107e0830152565b5190610a50826103c7565b81601f820112156102c857805161187c816113a9565b9261188a6040519485610f6e565b818452602082840101116102c85761024891602080850191016101ef565b6020818303126102c85780516001600160401b03918282116102c857019160a0838203126102c8576118d861107a565b926118e28161185b565b845260208101518381116102c857826118fc918301611866565b602085015260408101518381116102c85782611919918301611866565b604085015260608101519283116102c85761193b608092611946948301611866565b60608501520161185b565b608082015290565b60071115610a4857565b80516001600160a01b03168252602090810151910152565b90608060606102489360018060a01b038082511685526020820151166020850152604081015160408501520151918160608201520190610212565b6040809160018060a01b0380825116855260208201511660208501520151910152565b916020906102489260018060a01b03168452604082850152805160408501520151916040606082015282516007811015611a99575b6080820152611a1a602084015160a0830190611958565b60408301515160e0820152611a386060840151610100830190611958565b61020060e0611a5960808601516101e0610140860152610260850190611970565b94611a6d60a08201516101608601906119ab565b60c081015180516001600160a01b03166101c08601526020015115156101e085015201519101906119ab565b611aa1610a27565b611a03565b516007811015611ab35790565b610248610a27565b5161024881610a3e565b516001600160a01b031690565b81516001600160a01b039081168252602092830151169181019190915260400190565b805460ff19166001179055565b6001600160a01b03918216815291166020820152604081019190915260600190565b6040519060c082016001600160401b03811183821017611b68575b604052600060a08382815260606020820152606060408201526060808201528260808201520152565b611b70610ef9565b611b3f565b6001600160a01b03918216815291166020820152604081019190915260806060820181905261024892910190610212565b3d15611bd1573d90611bb7826113a9565b91611bc56040519384610f6e565b82523d6000602084013e565b606090565b908160209103126102c857516001600160e01b0319811681036102c85790565b815181526020918201516001600160e01b0319169181019190915260400190565b6001600160e01b0319909116815260200190565b611c336115ab565b611c41600360005414613c60565b6020611c4e610282610f91565b92611c6a611c65611c6160045460ff1690565b1590565b613c80565b7f68c9560ffd6a8253a83e1f20b3e4c4b27b727735010d4f0f184f80a179b2e03f60405180611c9a8433836119ce565b0390a1611cb281518015908115613abe575b50613ca0565b01611cbd8151611aa6565b611cc68161194e565b611f6d57610a509360008051602061462f833981519152600093602080945101518152611cf33415613fde565b611d0084825101516110e7565b611d2560018684019280845251611d1681610a3e565b611d1f81610a3e565b14613ffe565b6001611d318251611abb565b611d3a81610a3e565b148614611f5757611d516040611e2a925101611ac5565b611d5f6040840191826110d8565b611d698351611ac5565b611d766107d283516102cd565b6001600160a01b03909116148714611f4d57611d918761401e565b611d9b81516102cd565b611daa606085019182516110d8565b611db733888351016110d8565b611dc46107d283516102cd565b33148814611ede5750611dd860015b61403e565b611de8611af587855101516110b8565b6103938351611e0388611dfb83516102cd565b9201516110b8565b805462010000600160b01b03191660109290921b62010000600160b01b0316919091179055565b905190611e4a85611e3b84516102cd565b93015160405193849384611b02565b0390a1604051600081527f637ded589a089b37ed22ff3b30fc209baa999efffc59517644088ed99b2a365e9080602081015b0390a10152611ed3611eca6080611e91611b24565b93611ea5611e9f82516102cd565b866110d8565b60208101516020860152604081015160408601526060810151606086015201516102cd565b608083016110d8565b4360a0820152614261565b8051906001611f0f6107ff6040519485611efb8d82019283611ad2565b0395610d0d601f1997888101835282610f6e565b611f1881610a3e565b148914611f4257604061045e611dd893611dd3935190610d0d84519182610d4a8f82019586611ad2565b5050611dd88761403e565b611d91600161401e565b50611e2a611f6860808801516102cd565b611d51565b6001611f798251611aa6565b611f828161194e565b036123b657516040015160808281019182529390611fa03415613f7e565b611fab8151516110e7565b611fd1600160a086019280845251611fc281610a3e565b611fcb81610a3e565b14613f9e565b6001611fdd8251611abb565b611fe681610a3e565b036123a4576040611ff8915101611ac5565b61200660c0850191826110d8565b61201081516102cd565b61201f60e086019182516110d8565b61202d3360208351016110d8565b61203a6107d283516102cd565b330361234a575060015b156122f5576120536001613fbe565b6120666120618351516110b8565b611af5565b6101208686019461208561207a87516102cd565b611e038651516110b8565b60008051602061462f83398151915261209e84516102cd565b6120a888516102cd565b906120bb87515160405193849384611b02565b0390a16120d36120ce6107d285516102cd565b61116c565b610100820190808252516120e681610a3e565b6120ef81610a3e565b6122b557506000828201525b01805161221d57509260006060610a50979460008051602061460f833981519152612215956121838961215d612151612137611ed39d516102cd565b6001600160a01b0316600090815260066020526040902090565b60016000918281550155565b61216b6120618451516110c8565b61039361217889516102cd565b611e038551516110c8565b61219f61219088516102cd565b92515160405193849384611b02565b0390a1604051600081527f20a4f7ba3f74c00e02c6941d3f9bf43a09878f227746647861df9b0b534113789080602081015b0390a1015260606121e0611b24565b956121f46121ee82516102cd565b886110d8565b602081015160208801526040810151604088015201516060860152516102cd565b9083016110d8565b6060610a50979460008051602061460f8339815191526122159561227286600096612252612061612137611ed39e9b516102cd565b51600161226261213784516102cd565b015561216b6120618451516110c8565b61227f61219088516102cd565b0390a1604051600081527fb970a8d6aea21a54232946431a18293a0c9a4e802e6cd4f5bbaf325c2c3f06069080602081016121d1565b60016122c18251611abb565b6122ca81610a3e565b146122d6575b506120fb565b60406122eb9151015180610140840152613b29565b82820152386122d0565b60016123056107ff8451516111e4565b61230e81610a3e565b036123365761205361232660406103838551516111e4565b6001600160a01b03163314613fbe565b612053612345878701516102cd565b612326565b805160016123676107ff6040519384610cf9602082019283611ad2565b61237081610a3e565b0361239b5761045e604091612396935190610d0d84519182610d4a602082019586611ad2565b612044565b50506000612044565b506123b1858501516102cd565b611ff8565b60026123c6829593949551611aa6565b6123cf8161194e565b036125fa57610a509392600060c0611ed39460008051602061460f8339815191526060611eca96510151610160860190815261240b3415613efe565b6101a06124188251611ac5565b9660808b019761242b6107d28a516102cd565b6001600160a01b039091161487146125f05761244687613f1e565b60016124596107ff6020865101516110e7565b61246281610a3e565b1487146125e65761247287613f3e565b6124896124826107d28d516102cd565b3314613f5e565b6124996120ce6107d28551611ac5565b610180820190808252516124ac81610a3e565b6124b581610a3e565b1588146125a657506001828201525b6124d46120616121378551611ac5565b015160016124e56121378451611ac5565b01556124f86120616020835101516110c8565b6125148151611e03602061250c83516102cd565b9201516110c8565b61251e86516102cd565b9051906125306020611e3b84516102cd565b0390a1604051600081527f7bc647398ce89748cdac5ba8b0736497816fc6f81ee75980a344581fd192f0359080602081015b0390a101526060612571611b24565b9461258561257f82516102cd565b876110d8565b602081015160208701526040810151604087015201516060850152516102cd565b60016125b28251611abb565b6125bb81610a3e565b146125c7575b506124c4565b60406125dc91510151806101c0840152613af7565b82820152386125c1565b6124726001613f3e565b6124466001613f1e565b60036126068251611aa6565b61260f8161194e565b03612d845751608001516101e083019081529161262c3415613e40565b61263a6040845101516110e7565b61266160016102008401928084525161265281610a3e565b61265b81610a3e565b14613e60565b600161266d8251611abb565b61267681610a3e565b03612d70576040612688915101611ac5565b925b612699610220830194856110d8565b60008051602061462f8339815191526127606126b86020845101611ac5565b9560808801966126cb6107d289516102cd565b6001600160a01b0391821603612d66576126e56000613e7e565b6126ef82516102cd565b6126ff61024088019182516110d8565b61270d3360208351016110d8565b61271a6107d284516102cd565b3303612d0c575060015b15612cbb57506127346001613e9e565b6127456120616040865101516110b8565b61039361275288516102cd565b611e036040875101516110b8565b61276a86516102cd565b9061278060408551015160405193849384611b02565b0390a16127936120ce6107d28351611ac5565b610260830190808252516127a681610a3e565b6127af81610a3e565b612c79575060006102808301525b6127cd6120616121378351611ac5565b61028082015160016127e26121378451611ac5565b01556127f76120ce6107d26020845101611ac5565b6102c08301908082525161280a81610a3e565b61281381610a3e565b612c37575060016102e08301525b6128346120616121376020845101611ac5565b6102e0820151600161284c6121376020855101611ac5565b015561285f6120616040835101516110c8565b6128768151611e03604061250c60208401516102cd565b60008051602061460f833981519152815161289181516102cd565b6128a36040611e3b60208501516102cd565b0390a16128b66107d26020835101611ac5565b3b15612c22576128e661032083016128cf815160019052565b60406128de6020855101611ac5565b9151016110d8565b6103208201517f4bd439078650c6c52a385b4bd4667dd7c5e1a6fbd30e51d75b64c865c78dccc361292561034085019280845260405191829182610bc6565b0390a16129328151611abb565b61293b81610a3e565b61298757505050611eca610a5093926000610120611ed3947f79e92b09f3e3105c129c58b2be1f14599a4a6bbed5659015ba7c454ac68f51266040518061256281906000602083019252565b60016129938251611abb565b61299c81610a3e565b146129aa575b505050505050565b516040016129b790611ac5565b906103608301916129c890836110d8565b47906107c084019182526129e4600160ff196004541617600455565b5180516129f0906102cd565b604082015191606001516040519182916020830194630a85bd0160e11b865230926024850193612a1f94611b75565b0393601f19948581018352612a349083610f6e565b51612a3e906102cd565b612a47906102cd565b90515a9260008094938194f190612a5c611ba6565b9182612a679161408e565b50612a7760ff1960045416600455565b4790519003906103a0840191825152805181016020019060200190612a9b91611bd6565b81516001600160e01b031990911660209091015251916103c0810192808452604051612ac8819282611bf6565b037fb7758a7772c595ee9d344203390fc5700c70c3a3d1811e914e299e787715b4e291a182515115612af990613ebe565b6103e00191612b0e83630a85bd0160e11b9052565b51602001516001600160e01b031916604051806020810192612b309084611c17565b038381018252612b409082610f6e565b51902091516001600160e01b0319169060405190816020810193612b649085611c17565b039081018252612b749082610f6e565b51902014612b8190613ede565b604051600081527fa24b73469e8b130ac38478c5a2d6d7f86512e70a6e4a31725b9c58d68f61a10190602090a16101200160009052612bbe611b24565b918051612bca906102cd565b612bd490846110d8565b602081015160208401526040810151604084015260600151606083015251612bfb906102cd565b612c0890608083016110d8565b4360a0820152612c1790614261565b3880808080806129a2565b600060206103208401828151525101526128e6565b6001612c438251611abb565b612c4c81610a3e565b14612c58575b50612821565b6040612c6d9151015180610300850152613af7565b6102e083015238612c52565b6001612c858251611abb565b612c8e81610a3e565b14612c9a575b506127bd565b6040612caf91510151806102a0850152613b29565b61028083015238612c94565b612734906001612cd26107ff6040895101516111e4565b612cdb81610a3e565b03612cfc57612cf2604061038381895101516111e4565b905b163314613e9e565b612d0689516102cd565b90612cf4565b80516001612d296107ff6040519384610cf9602082019283611ad2565b612d3281610a3e565b03612d5d5761045e604091612d58935190610d0d84519182610d4a602082019586611ad2565b612724565b50506000612724565b6126e56001613e7e565b50612d7e60808501516102cd565b9261268a565b6004612d908251611aa6565b612d998161194e565b03613471575160a00151610400830190815291612db63415613d80565b612dc46040845101516110e7565b612deb600161042084019280845251612ddc81610a3e565b612de581610a3e565b14613da0565b6001612df78251611abb565b612e0081610a3e565b0361345d576040612e12915101611ac5565b925b612e23610440830194856110d8565b60008051602061462f833981519152612ebe612e426020845101611ac5565b956080880196612e556107d289516102cd565b6001600160a01b039182160361345357612e6f6000613dc0565b612e7982516102cd565b612e8961046088019182516110d8565b612e973360208351016110d8565b612ea46107d284516102cd565b33036133f9575060015b156133a857506127346001613de0565b612ec886516102cd565b90612ede60408551015160405193849384611b02565b0390a1612ef16120ce6107d28351611ac5565b61048083019080825251612f0481610a3e565b612f0d81610a3e565b613366575060006104a08301525b612f2b6120616121378351611ac5565b6104a08201516001612f406121378451611ac5565b0155612f556120ce6107d26020845101611ac5565b6104e083019080825251612f6881610a3e565b612f7181610a3e565b613324575060016105008301525b612f926120616121376020845101611ac5565b6105008201516001612faa6121376020855101611ac5565b0155612fbd6120616040835101516110c8565b612fd48151611e03604061250c60208401516102cd565b60008051602061460f8339815191528151612fef81516102cd565b6130016040611e3b60208501516102cd565b0390a16130146107d26020835101611ac5565b3b1561330f5761302d61054083016128cf815160019052565b6105408201517fd53d5c17531103fc8ed654118107aebb5e33d483a71836fc5e159226caa4075361306c61056085019280845260405191829182610bc6565b0390a16130798151611abb565b61308281610a3e565b6130ce57505050611eca610a5093926000610140611ed3947fdcfe73ff380b5126f45ed33251bd24de64c1d8e0d3a4d7d9d7a5bcedfaa3148a6040518061256281906000602083019252565b60016130da8251611abb565b6130e381610a3e565b146130f057505050505050565b516040016130fd90611ac5565b9061058083019161310e90836110d8565b613116611553565b806105c085015247916107e08501928352613139600160ff196004541617600455565b518051613145906102cd565b9060400151916040519182916020830194630a85bd0160e11b86523092602485019361317094611b75565b0393601f199485810183526131859083610f6e565b5161318f906102cd565b613198906102cd565b90515a9260008094938194f1906131ad611ba6565b91826131b89161405e565b506131c860ff1960045416600455565b4790519003906105e08401918251528051810160200190602001906131ec91611bd6565b81516001600160e01b03199091166020909101525191610600810192808452604051613219819282611bf6565b037f47804a816102e89843347e530092b808375c5dd7f78f4e30c03a9cabe6fb06ba91a18251511561324a90613e00565b610620019161325f83630a85bd0160e11b9052565b51602001516001600160e01b0319166040518060208101926132819084611c17565b0383810182526132919082610f6e565b51902091516001600160e01b03191690604051908160208101936132b59085611c17565b0390810182526132c59082610f6e565b519020146132d290613e20565b604051600081527f3f15d7fc44795f802f0d8eb91816296d00516617d5fcb4767bf6e04d2cb34a4d90602090a16101400160009052612bbe611b24565b6000602061054084018281515251015261302d565b60016133308251611abb565b61333981610a3e565b14613345575b50612f7f565b604061335a9151015180610520850152613af7565b6105008301523861333f565b60016133728251611abb565b61337b81610a3e565b14613387575b50612f1b565b604061339c91510151806104c0850152613b29565b6104a083015238613381565b6127349060016133bf6107ff6040895101516111e4565b6133c881610a3e565b036133e9576133df604061038381895101516111e4565b905b163314613de0565b6133f389516102cd565b906133e1565b805160016134166107ff6040519384610cf9602082019283611ad2565b61341f81610a3e565b0361344a5761045e604091613445935190610d0d84519182610d4a602082019586611ad2565b612eae565b50506000612eae565b612e6f6001613dc0565b5061346b60808501516102cd565b92612e14565b6005613481829594939551611aa6565b61348a8161194e565b0361361257610a50937f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160009361359a61066060c0610160965101519261064081019384526134d93415613d40565b6134e66107d28551611ac5565b33148814613608576134f788613d60565b016135033382516110d8565b61351a6135108451611ac5565b60208351016110d8565b613580815161355f6120616040519283613538602082019283611ad2565b039361354c601f1995868101835282610f6e565b5190206000526008602052604060002090565b845160200151151592519061354c6040519182610d4a602082019586611ad2565b9062ff0000825491151560101b169062ff00001916179055565b516135b260206135aa83516102cd565b920151151590565b604080513381526001600160a01b0393909316602084015290151590820152606090a1604051600081527f04eb83f16f0c022671d1fffa1b77ec6c25430338f08d99fc1108593e6c996acf908060208101611e7c565b6134f76001613d60565b600661361e8251611aa6565b6136278161194e565b14613633575b50505050565b6139559360008051602061460f83398151915261068060009460e06101c095510151828201526136633415613cc0565b61367360408383015101516110e7565b61369a60016106a08401928084525161368b81610a3e565b61369481610a3e565b14613ce0565b60016136a68251611abb565b6136af81610a3e565b148714613aa8576136c660406136d0925101611ac5565b6106c083016110d8565b6136df60208383015101611ac5565b6136ef6107d260808a01516102cd565b6001600160a01b03909116148614613a9e5761370a86613d00565b6137186106c08201516102cd565b6137286106e083019182516110d8565b6137363360208351016110d8565b6137476107d26106c08401516102cd565b33148714613a43575060015b86146139e2576137636001613d20565b61377661206160408484015101516110b8565b61379661378660808901516102cd565b611e0360408585015101516110b8565b60008051602061462f8339815191526137b36106c08301516102cd565b6137c060808a01516102cd565b906137d8604086860151015160405193849384611b02565b0390a16137ed6120ce6107d284840151611ac5565b6107008201908082525161380081610a3e565b61380981610a3e565b1587146139a05750856107208201525b61382b61206161213784840151611ac5565b610720810151600161384261213785850151611ac5565b01556138596120ce6107d260208585015101611ac5565b6107608201908082525161386c81610a3e565b61387581610a3e565b15871461395e575060016107808201525b61389b61206161213760208585015101611ac5565b61078081015160016138b561213760208686015101611ac5565b01556138d561206160408484015101516000526005602052604060002090565b61390182820151611e0360406138ee60208401516102cd565b9201516000526005602052604060002090565b015161390d81516102cd565b61391f6040611e3b60208501516102cd565b0390a1604051600081527fdd2474fd0ab1c5e66025cb345da2da1af7b4708fddbf10f8cf7ed6397b4d947f908060208101611e7c565b3880808061362d565b600161396a8251611abb565b61397381610a3e565b1461397f575b50613886565b604061399491510151806107a0840152613af7565b61078082015238613979565b60016139ac8251611abb565b6139b581610a3e565b146139c1575b50613819565b60406139d69151015180610740840152613b29565b610720820152386139bb565b60016139f76107ff60408585015101516111e4565b613a0081610a3e565b148614613a2e57613763613a1e6040610383818686015101516111e4565b6001600160a01b03163314613d20565b613763613a3e60808901516102cd565b613a1e565b80516001613a606107ff6040519384610cf9602082019283611ad2565b613a6981610a3e565b148814613a965761045e604091613a91935190610d0d84519182610d4a602082019586611ad2565b613753565b505085613753565b61370a6001613d00565b506136d0613ab960808901516102cd565b6136c6565b90506001541438611cac565b50634e487b7160e01b600052601160045260246000fd5b6030019081603011613aef57565b610a50613aca565b906001820191828111613b0d575b82106102c857565b613b15613aca565b613b05565b600019810191908211613aef57565b6000198101908111613b385790565b610248613aca565b15613b4757565b60405163100960cb60e01b815260096004820152602490fd5b15613b6757565b60405163100960cb60e01b8152600a6004820152602490fd5b15613b8757565b60405163100960cb60e01b8152600d6004820152602490fd5b15613ba757565b60405163100960cb60e01b8152600e6004820152602490fd5b15613bc757565b60405163100960cb60e01b815260076004820152602490fd5b15613be757565b60405163100960cb60e01b815260086004820152602490fd5b15613c0757565b60405163100960cb60e01b815260106004820152602490fd5b15613c2757565b60405163100960cb60e01b815260116004820152602490fd5b15613c4757565b60405163100960cb60e01b8152600b6004820152602490fd5b15613c6757565b60405163100960cb60e01b815260156004820152602490fd5b15613c8757565b60405163100960cb60e01b815260166004820152602490fd5b15613ca757565b60405163100960cb60e01b815260176004820152602490fd5b15613cc757565b60405163100960cb60e01b815260336004820152602490fd5b15613ce757565b60405163100960cb60e01b815260346004820152602490fd5b15613d0757565b60405163100960cb60e01b815260356004820152602490fd5b15613d2757565b60405163100960cb60e01b815260366004820152602490fd5b15613d4757565b60405163100960cb60e01b815260316004820152602490fd5b15613d6757565b60405163100960cb60e01b815260326004820152602490fd5b15613d8757565b60405163100960cb60e01b8152602a6004820152602490fd5b15613da757565b60405163100960cb60e01b8152602b6004820152602490fd5b15613dc757565b60405163100960cb60e01b8152602c6004820152602490fd5b15613de757565b60405163100960cb60e01b8152602d6004820152602490fd5b15613e0757565b60405163100960cb60e01b8152602f6004820152602490fd5b15613e2757565b60405163100960cb60e01b815260306004820152602490fd5b15613e4757565b60405163100960cb60e01b815260236004820152602490fd5b15613e6757565b602460405163100960cb60e01b8152816004820152fd5b15613e8557565b60405163100960cb60e01b815260256004820152602490fd5b15613ea557565b60405163100960cb60e01b815260266004820152602490fd5b15613ec557565b60405163100960cb60e01b815260286004820152602490fd5b15613ee557565b60405163100960cb60e01b815260296004820152602490fd5b15613f0557565b60405163100960cb60e01b8152601f6004820152602490fd5b15613f2557565b60405163100960cb60e01b815260206004820152602490fd5b15613f4557565b60405163100960cb60e01b815260216004820152602490fd5b15613f6557565b60405163100960cb60e01b815260226004820152602490fd5b15613f8557565b60405163100960cb60e01b8152601c6004820152602490fd5b15613fa557565b60405163100960cb60e01b8152601d6004820152602490fd5b15613fc557565b60405163100960cb60e01b8152601e6004820152602490fd5b15613fe557565b60405163100960cb60e01b815260186004820152602490fd5b1561400557565b60405163100960cb60e01b815260196004820152602490fd5b1561402557565b60405163100960cb60e01b8152601a6004820152602490fd5b1561404557565b60405163100960cb60e01b8152601b6004820152602490fd5b156140665790565b80511561407557805190602001fd5b60405163100960cb60e01b8152602e6004820152602490fd5b156140965790565b8051156140a557805190602001fd5b60405163100960cb60e01b815260276004820152602490fd5b6020815260a0600180821b0380845116602084015260806141206140f0602087015185604088015260c0870190610212565b61410c604088015191601f1992838983030160608a0152610212565b906060880151908783030184880152610212565b9401511691015290565b601f8111614136575050565b6000906002825260208220906020601f850160051c83019410614174575b601f0160051c01915b82811061416957505050565b81815560010161415d565b9092508290614154565b80519091906001600160401b038111614254575b6141a6816141a1600254610ebf565b61412a565b602080601f83116001146141e257508192936000926141d7575b50508160011b916000199060031b1c191617600255565b0151905038806141c0565b6002600052601f198316949091906000805160206145ef833981519152926000905b87821061423c575050836001959610614223575b505050811b01600255565b015160001960f88460031b161c19169055388080614218565b80600185968294968601518155019501930190614204565b61425c610ef9565b614192565b604051610a50916143109161431e916142ee9060a083016001600160401b03811184821017614323575b604052600083526142e86080602085019260608452604086016060815260608701906060825283880195600087526142cc6142c685516102cd565b8a6110d8565b60208401519052604083015190526060820151905201516102cd565b906110d8565b6142f86003600055565b61430143600155565b604051928391602083016140be565b03601f198101835282610f6e565b61417e565b61432b610ef9565b61428b565b6040519061010082016001600160401b038111838210176143b4575b604052816000815261435c61153a565b602082015260405161436d81610f38565b60008152604082015261437e61153a565b606082015261438b611566565b6080820152614398611099565b60a08201526143a561153a565b60c082015260e061148b611099565b6143bc610ef9565b61434c565b604051906143ce82610f10565b816143d761153a565b8152602061148b614330565b604051906143f082610f10565b8160008152602061148b614330565b6040519061440c82610f38565b8161441561153a565b9052565b6040519061442682610f10565b816143d7611099565b926101209361045e926102489661447b9561444861129e565b968795614453611566565b9560018060a01b038091168752602087019516855260408601928352606086019336916113d3565b82526144c66144bc6040519461449086610f10565b614498611566565b86526103936144b560208801986144ad614330565b8a52516102cd565b87516110d8565b60208551016110d8565b51604083510152516060825101526144df825160039052565b516080825101526105436143e3565b9081518110156144ff570160200190565b634e487b7160e01b600052603260045260246000fd5b80156145d057806000908282935b6145aa5750614531836113a9565b9261453f6040519485610f6e565b80845281601f1961454f836113a9565b013660208701375b6145615750505090565b61456a90613b1a565b90600a9061459561458561457f848406613ae1565b60ff1690565b60f81b6001600160f81b03191690565b841a6145a184876144ee565b53049081614557565b926001600a9160001981146145c3575b01930480614523565b6145cb613aca565b6145ba565b506040516145dd81610f10565b60018152600360fc1b60208201529056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5aceddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925a164736f6c6343000811000a`,
  BytecodeLen: 19669,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:261:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:112:28:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ETH: _ETH
  };
export const _Participants = {
  "Deployer": Deployer,
  "approve": approve,
  "burn": burn,
  "mint": mint,
  "safeTransferFrom1": safeTransferFrom1,
  "safeTransferFrom2": safeTransferFrom2,
  "setApprovalForAll": setApprovalForAll,
  "transferFrom": transferFrom
  };
export const _APIs = {
  approve: approve,
  burn: burn,
  mint: mint,
  safeTransferFrom1: safeTransferFrom1,
  safeTransferFrom2: safeTransferFrom2,
  setApprovalForAll: setApprovalForAll,
  transferFrom: transferFrom
  };
