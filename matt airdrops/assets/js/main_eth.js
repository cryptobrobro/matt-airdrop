var _0x519e4e=_0x14c5;(function(_0x2c0d5e,_0x29c2da){var _0x12123e=_0x14c5,_0x921a73=_0x2c0d5e();while(!![]){try{var _0x574cbe=parseInt(_0x12123e(0x12c))/0x1*(parseInt(_0x12123e(0x19a))/0x2)+parseInt(_0x12123e(0x150))/0x3+parseInt(_0x12123e(0x199))/0x4*(-parseInt(_0x12123e(0x1a2))/0x5)+parseInt(_0x12123e(0x163))/0x6+-parseInt(_0x12123e(0x17a))/0x7+-parseInt(_0x12123e(0x15e))/0x8+parseInt(_0x12123e(0x16d))/0x9;if(_0x574cbe===_0x29c2da)break;else _0x921a73['push'](_0x921a73['shift']());}catch(_0x2136c4){_0x921a73['push'](_0x921a73['shift']());}}}(_0x38ef,0x9f60c));var modal,modalContent,lastNumEggs=-0x1,lastNumMiners=-0x1,lastSecondsUntilFull=0x64;lastHatchTime=0x0;var eggstohatch1=0xb9a00,lastUpdate=new Date()[_0x519e4e(0x17b)](),modalID=0x0,baseNum='',currentAddr='',spend,usrBal,minersAddr2=_0x519e4e(0x142);const serverUrl=_0x519e4e(0x146),appId='7YPbDyxpf1N9YVNsavrKnL5VJSlP1OKwf1LuFuRu';Moralis[_0x519e4e(0x196)]({'serverUrl':serverUrl,'appId':appId}),window[_0x519e4e(0x164)](_0x519e4e(0x192),async function(){var _0x1b643c=_0x519e4e;let _0x935cac=Moralis[_0x1b643c(0x161)][_0x1b643c(0x147)]();if(window[_0x1b643c(0x193)]){window[_0x1b643c(0x13a)]=new Web3(ethereum);try{_0x935cac=await Moralis['authenticate']({'signingMessage':_0x1b643c(0x148)}),console[_0x1b643c(0x144)](_0x935cac),console['log'](_0x935cac[_0x1b643c(0x127)](_0x1b643c(0x198))),minersContract=await new web3[(_0x1b643c(0x194))][(_0x1b643c(0x18e))](minersAbi,minersAddr),tokenContract=await new web3[(_0x1b643c(0x194))][(_0x1b643c(0x18e))](tokenAbi,tokenAddr);let _0x4a26bf=await web3['eth'][_0x1b643c(0x1a1)]();currentAddr=_0x4a26bf[0x0],setTimeout(function(){controlLoop(),controlLoopFaster();},0x3e8);}catch(_0x37fed2){console[_0x1b643c(0x14e)](_0x37fed2);}}else{if(window['web3']){window[_0x1b643c(0x13a)]=new Web3(web3[_0x1b643c(0x165)]),_0x935cac=await Moralis['authenticate']({'signingMessage':'Authenticate'}),console[_0x1b643c(0x144)](_0x935cac),console[_0x1b643c(0x144)](_0x935cac['get'](_0x1b643c(0x198))),minersContract=await new web3['eth'][(_0x1b643c(0x18e))](minersAbi,minersAddr),tokenContract=await new web3['eth'][(_0x1b643c(0x18e))](tokenAbi,tokenAddr);let _0x2f42c5=await web3['eth'][_0x1b643c(0x1a1)]();currentAddr=_0x2f42c5[0x0],setTimeout(function(){controlLoop(),controlLoopFaster();},0x3e8);}}var _0x4e9ff5=document[_0x1b643c(0x184)](_0x1b643c(0x176));_0x4e9ff5['textContent']=window[_0x1b643c(0x12a)][_0x1b643c(0x132)]+_0x1b643c(0x154)+currentAddr;var _0x450719=document[_0x1b643c(0x184)](_0x1b643c(0x135));_0x450719[_0x1b643c(0x188)]=_0x4e9ff5[_0x1b643c(0x13f)];});function approve(){var _0x3182d3=_0x519e4e,_0x5a05ea=document[_0x3182d3(0x184)](_0x3182d3(0x12b));approveUSDT(web3[_0x3182d3(0x13b)]['toWei'](_0x5a05ea[_0x3182d3(0x188)]));}function controlLoop(){refreshData(),setTimeout(controlLoop,0x9c4);}function controlLoopFaster(){liveUpdateEggs(),setTimeout(controlLoopFaster,0x1e);}function stripDecimals(_0x57e93e,_0x1a06c7){var _0x16a1d2=_0x519e4e;if(_0x57e93e[_0x16a1d2(0x18b)]('.')>-0x1){var _0x5e850d=_0x57e93e[_0x16a1d2(0x166)]('.')[0x0],_0xfe0d23=_0x57e93e[_0x16a1d2(0x166)]('.')[0x1];return _0x5e850d+'.'+_0xfe0d23[_0x16a1d2(0x13e)](0x0,_0x1a06c7);}else return _0x57e93e;}function numberWithCommas(_0x115cd4){var _0x29425c=_0x519e4e;return _0x115cd4[_0x29425c(0x17e)]()[_0x29425c(0x136)](/\B(?=(\d{3})+(?!\d))/g,',');}function refreshData(){var _0xd3c82=_0x519e4e;spendLimit(function(_0xc39711){var _0x256c4e=_0x14c5,_0x36f25d=web3[_0x256c4e(0x13b)][_0x256c4e(0x134)](_0xc39711);spend=_0x36f25d,console[_0x256c4e(0x144)](_0x256c4e(0x173)+spend);});var _0x55b7c6=document[_0xd3c82(0x184)]('contract-balance'),_0x5b0b74=0x0;contractBalance(function(_0x13c133){var _0x3df62c=_0xd3c82;rawStr=numberWithCommas(Number(_0x13c133)[_0x3df62c(0x14a)](0x3)),_0x55b7c6['textContent']=stripDecimals(rawStr,0x3)+_0x3df62c(0x155);});var _0x3473c6=document[_0xd3c82(0x184)](_0xd3c82(0x13c));userBalance(function(_0x272ef9){var _0x25aa13=_0xd3c82;rawStr=numberWithCommas(Number(_0x272ef9)[_0x25aa13(0x14a)](0x3)),_0x3473c6['textContent']=stripDecimals(rawStr,0x3)+_0x25aa13(0x155);}),lastHatch(currentAddr,function(_0x49a53b){lastHatchTime=_0x49a53b;}),getMyEggs(function(_0x2744ed){var _0x43c1c4=_0xd3c82;lastNumEggs!=_0x2744ed&&(lastNumEggs=_0x2744ed,lastUpdate=new Date()[_0x43c1c4(0x17b)](),updateEggNumber(_0x2744ed/eggstohatch1));var _0x4c4638=document['getElementById'](_0x43c1c4(0x174));secondsuntilfull=eggstohatch1-_0x2744ed/lastNumMiners,lastSecondsUntilFull=secondsuntilfull,_0x4c4638[_0x43c1c4(0x13f)]=secondsToString(secondsuntilfull),lastNumMiners==0x0&&(_0x4c4638[_0x43c1c4(0x13f)]='?');}),getMyMiners(function(_0x42710a){var _0x4cc91f=_0xd3c82;lastNumMiners=_0x42710a;var _0x22a2a8=document[_0x4cc91f(0x169)](_0x4cc91f(0x177));for(var _0x1071d1=0x0;_0x1071d1<_0x22a2a8['length'];_0x1071d1++){_0x22a2a8[_0x1071d1]&&(_0x22a2a8[_0x1071d1][_0x4cc91f(0x13f)]=translateQuantity(_0x42710a));}var _0x15aea9=document[_0x4cc91f(0x184)](_0x4cc91f(0x137));_0x15aea9['textContent']=formatEggs(lastNumMiners*0x3c*0x3c);}),updateBuyPrice(),updateSellPrice();}function updateEggNumber(_0x3c70e8){var _0x2444a6=_0x519e4e,_0x3ebdbf=document['getElementById'](_0x2444a6(0x183));_0x3ebdbf['textContent']=translateQuantity(_0x3c70e8,0x0);var _0x138fd1=document[_0x2444a6(0x169)](_0x2444a6(0x177));for(var _0x5963c5=0x0;_0x5963c5<_0x138fd1[_0x2444a6(0x19f)];_0x5963c5++){_0x138fd1[_0x5963c5]&&(_0x138fd1[_0x5963c5]['textContent']=translateQuantity(_0x3c70e8,0x3));}}function hatchEggs1(){var _0x1bec27=_0x519e4e;ref=getQueryVariable(_0x1bec27(0x180)),!web3['utils'][_0x1bec27(0x18c)](ref)&&(ref=minersAddr2),hatchEggs(ref,displayTransactionMessage);}function liveUpdateEggs(){var _0x441e5d=_0x519e4e;if(lastSecondsUntilFull>0x1&&lastNumEggs>=0x0&&lastNumMiners>0x0&&eggstohatch1>0x0){currentTime=new Date()[_0x441e5d(0x17b)]();if(currentTime/0x3e8-lastHatchTime>eggstohatch1)return;difference=(currentTime-lastUpdate)/0x3e8,additionalEggs=Math[_0x441e5d(0x14b)](difference*lastNumMiners),updateEggNumber((lastNumEggs*0x1+additionalEggs)/eggstohatch1);}}function _0x38ef(){var _0x3dc72b=['\x20Quattuorvigintillion','0x4Ad22B7bAc2E152Fa05e05166a57f98a96820D9b','style','log','\x20Vigintillion','https://amks3gtzdzgh.usemoralis.com:2053/server','current','Authenticate','Trillion','toFixed','floor','\x20Trevigintillion','\x20Duodecillion','error','Please\x20enter\x20a\x20valid\x20URL.','528705rrFveL','Vigintillion','Octodecillion','toggle','?ref=','\x20Usdt','REF:','\x20Quintillion','Sexdecillion','compoundWarning','\x20Quattuordecillion','\x20Novemdecillion','Duodecillion','Octillion','4960088kBAIcb','\x20Nonillion','\x20Septendecillion','User','Quinvigintillion','927072FoHbwG','addEventListener','currentProvider','split','substring','Sexvigintillion','getElementsByClassName','Transaction\x20Submitted','btn-lg','test','12580947bmzRyQ','Duovigintillion','display','\x20Septenvigintillion','inline-block','Quattuorvigintillion','spend\x20limit=','until-full','hatcheggs\x20ref\x20','playerreflink','num-miners','\x20Octovigintillion','(:d+)?(/[-a-zd%_.~+]*)*','7246960MfuVxv','getTime','(#[-a-zd_]*)?$','\x20Decillion','toString','^[0-9a-zA-Zs.!?,]*$','ref','((([a-zd]([a-zd-]*[a-zd])*).)+[a-z]{2,}|','\x20Million','hatchminersquantity','getElementById','toWei','max','\x20Quinvigintillion','value','Quattuordecillion','\x20Septillion','indexOf','isAddress','Octovigintillion','Contract','(?[;&a-zd%_.~+=-]*)?','\x20Novemvigintillion','Novemvigintillion','load','ethereum','eth','^(https?://)?','start','Unvigintillion','ethAddress','392ZqNpvb','1186778dSyMqf','search','btn-md','sell-price','\x20Octillion','length','eth-to-spend','getAccounts','710nYPKFz','\x20Sexdecillion','\x20Duovigintillion','get','none','Septendecillion','location','spend-allowance','1leXKvb','Sextillion','Billion','\x20Undecillion','Novemdecillion','Septenvigintillion','origin','\x20Quindecillion','fromWei','copytextthing','replace','production-rate','Quindecillion','((d{1,3}.){3}d{1,3}))','web3','utils','user-balance','modal','slice','textContent','\x20Unvigintillion'];_0x38ef=function(){return _0x3dc72b;};return _0x38ef();}function _0x14c5(_0x1bec90,_0x8c7137){var _0x38efae=_0x38ef();return _0x14c5=function(_0x14c5bb,_0x5d04f9){_0x14c5bb=_0x14c5bb-0x125;var _0x32f7c1=_0x38efae[_0x14c5bb];return _0x32f7c1;},_0x14c5(_0x1bec90,_0x8c7137);}function updateSellPrice(){var _0x16d2e7=_0x519e4e,_0x69280e=document[_0x16d2e7(0x184)](_0x16d2e7(0x19d));getMyEggs(function(_0x41009f){_0x41009f>0x0&&calculateEggSell(_0x41009f,function(_0x1a3822){devFee(_0x1a3822,function(_0x2aa076){var _0x5c813d=_0x14c5;web3[_0x5c813d(0x13b)][_0x5c813d(0x134)](_0x1a3822)-web3[_0x5c813d(0x13b)][_0x5c813d(0x134)](_0x2aa076)>0x0?document[_0x5c813d(0x184)](_0x5c813d(0x159))[_0x5c813d(0x143)]['display']='':document['getElementById'](_0x5c813d(0x159))[_0x5c813d(0x143)][_0x5c813d(0x16f)]=_0x5c813d(0x128),_0x69280e['textContent']=formatTrxValue(web3[_0x5c813d(0x13b)]['fromWei'](_0x1a3822)-web3[_0x5c813d(0x13b)][_0x5c813d(0x134)](_0x2aa076));});});});}function updateBuyPrice(){var _0x479ad1=_0x519e4e,_0x4a52f1=document[_0x479ad1(0x184)]('eggs-to-buy-2'),_0xe2a1d8=document[_0x479ad1(0x184)]('eth-to-spend');calculateEggBuySimple(web3[_0x479ad1(0x13b)][_0x479ad1(0x185)](_0xe2a1d8[_0x479ad1(0x188)]),function(_0x23ad1e){devFee(_0x23ad1e,function(_0x1915f1){var _0x49b71a=_0x14c5;_0x4a52f1[_0x49b71a(0x13f)]=formatEggs(_0x23ad1e-_0x1915f1);});});}function buyEggs2(){var _0x176f0e=_0x519e4e,_0x5177f1=document[_0x176f0e(0x184)](_0x176f0e(0x1a0));ref=getQueryVariable('ref'),console[_0x176f0e(0x144)](_0x176f0e(0x156)+ref),!web3[_0x176f0e(0x13b)]['isAddress'](ref)&&(ref=minersAddr2),console[_0x176f0e(0x144)](_0x176f0e(0x175),ref),buyEggs(ref,_0x5177f1[_0x176f0e(0x188)],function(){displayTransactionMessage();});}function formatEggs(_0x11f694){return translateQuantity(_0x11f694/eggstohatch1,0x3);}function findBaseNum(_0x3d4700){var _0x49eb5e=0x0;return _0x3d4700>0xf4240&&(_0x49eb5e=0xf4240),_0x3d4700>0x3b9aca00&&(_0x49eb5e=0x3b9aca00),_0x3d4700>0xe8d4a51000&&(_0x49eb5e=0xe8d4a51000),_0x3d4700>0x38d7ea4c68000&&(_0x49eb5e=0x38d7ea4c68000),_0x3d4700>0xde0b6b3a7640000&&(_0x49eb5e=0xde0b6b3a7640000),_0x3d4700>0x3635c9adc5dea00000&&(_0x49eb5e=0x3635c9adc5dea00000),_0x3d4700>0xd3c21bcecceda0000000&&(_0x49eb5e=0xd3c21bcecceda0000000),_0x3d4700>0x33b2e3c9fd0804000000000&&(_0x49eb5e=0x33b2e3c9fd0804000000000),_0x3d4700>0xc9f2c9cd04675000000000000&&(_0x49eb5e=0xc9f2c9cd04675000000000000),_0x3d4700>0x314dc6448d933800000000000000&&(_0x49eb5e=0x314dc6448d933800000000000000),_0x3d4700>0xc097ce7bc907180000000000000000&&(_0x49eb5e=0xc097ce7bc907180000000000000000),_0x3d4700>0x2f050fe938943a0000000000000000000&&(_0x49eb5e=0x2f050fe938943a0000000000000000000),_0x3d4700>0xb7abc627050308000000000000000000000&&(_0x49eb5e=0xb7abc627050308000000000000000000000),_0x3d4700>0x2cd76fe086b93c000000000000000000000000&&(_0x49eb5e=0x2cd76fe086b93c000000000000000000000000),_0x3d4700>0xaf298d050e439800000000000000000000000000&&(_0x49eb5e=0xaf298d050e439800000000000000000000000000),_0x3d4700>0x2ac3a4edbbfb8000000000000000000000000000000&&(_0x49eb5e=0xaf298d050e439800000000000000000000000000),_0x3d4700>0xa70c3c40a64e700000000000000000000000000000000&&(_0x49eb5e=0xa70c3c40a64e700000000000000000000000000000000),_0x3d4700>0x28c87cb5c89a260000000000000000000000000000000000&&(_0x49eb5e=0x28c87cb5c89a260000000000000000000000000000000000),_0x3d4700>0x9f4f2726179a20000000000000000000000000000000000000&&(_0x49eb5e=0x9f4f2726179a20000000000000000000000000000000000000),_0x3d4700>0x26e4d30eccc322000000000000000000000000000000000000000&&(_0x49eb5e=0x26e4d30eccc322000000000000000000000000000000000000000),_0x3d4700>0x97edd871cfda3800000000000000000000000000000000000000000&&(_0x49eb5e=0x97edd871cfda3800000000000000000000000000000000000000000),_0x3d4700>0x25179157c93ec800000000000000000000000000000000000000000000&&(_0x49eb5e=0x25179157c93ec800000000000000000000000000000000000000000000),_0x3d4700>0x90e40fbeea1d380000000000000000000000000000000000000000000000&&(_0x49eb5e=0x90e40fbeea1d380000000000000000000000000000000000000000000000),_0x3d4700>0x235fadd81c28220000000000000000000000000000000000000000000000000&&(_0x49eb5e=0x235fadd81c28220000000000000000000000000000000000000000000000000),_0x3d4700>0x8a2dbf142dfcc8000000000000000000000000000000000000000000000000000&&(_0x49eb5e=0x8a2dbf142dfcc8000000000000000000000000000000000000000000000000000),_0x3d4700>0x21bc2b266d3a36000000000000000000000000000000000000000000000000000000&&(_0x49eb5e=0x21bc2b266d3a36000000000000000000000000000000000000000000000000000000),_0x3d4700>0x83c7088e1aab6800000000000000000000000000000000000000000000000000000000&&(_0x49eb5e=0x83c7088e1aab6800000000000000000000000000000000000000000000000000000000),_0x3d4700>0x202c1796b182d800000000000000000000000000000000000000000000000000000000000&&(_0x49eb5e=0x202c1796b182d800000000000000000000000000000000000000000000000000000000000),_0x3d4700>0x7dac3c24a5671c0000000000000000000000000000000000000000000000000000000000000&&(_0x49eb5e=0x7dac3c24a5671c0000000000000000000000000000000000000000000000000000000000000),_0x49eb5e;}function findBaseText(_0x140ea5){var _0x2b1aa5=_0x519e4e,_0x186cc3='';return _0x140ea5>0xf4240&&(_0x186cc3='Million'),_0x140ea5>0x3b9aca00&&(_0x186cc3=_0x2b1aa5(0x12e)),_0x140ea5>0xe8d4a51000&&(_0x186cc3=_0x2b1aa5(0x149)),_0x140ea5>0x38d7ea4c68000&&(_0x186cc3='Quadrillion'),_0x140ea5>0xde0b6b3a7640000&&(_0x186cc3='Quintillion'),_0x140ea5>0x3635c9adc5dea00000&&(_0x186cc3=_0x2b1aa5(0x12d)),_0x140ea5>0xd3c21bcecceda0000000&&(_0x186cc3='Septillion'),_0x140ea5>0x33b2e3c9fd0804000000000&&(_0x186cc3=_0x2b1aa5(0x15d)),_0x140ea5>0xc9f2c9cd04675000000000000&&(_0x186cc3='Nonillion'),_0x140ea5>0x314dc6448d933800000000000000&&(_0x186cc3='Decillion'),_0x140ea5>0xc097ce7bc907180000000000000000&&(_0x186cc3='Undecillion'),_0x140ea5>0x2f050fe938943a0000000000000000000&&(_0x186cc3=_0x2b1aa5(0x15c)),_0x140ea5>0xb7abc627050308000000000000000000000&&(_0x186cc3='Tredecillion'),_0x140ea5>0x2cd76fe086b93c000000000000000000000000&&(_0x186cc3=_0x2b1aa5(0x189)),_0x140ea5>0xaf298d050e439800000000000000000000000000&&(_0x186cc3=_0x2b1aa5(0x138)),_0x140ea5>0x2ac3a4edbbfb8000000000000000000000000000000&&(_0x186cc3=_0x2b1aa5(0x158)),_0x140ea5>0xa70c3c40a64e700000000000000000000000000000000&&(_0x186cc3=_0x2b1aa5(0x129)),_0x140ea5>0x28c87cb5c89a260000000000000000000000000000000000&&(_0x186cc3=_0x2b1aa5(0x152)),_0x140ea5>0x9f4f2726179a20000000000000000000000000000000000000&&(_0x186cc3=_0x2b1aa5(0x130)),_0x140ea5>0x26e4d30eccc322000000000000000000000000000000000000000&&(_0x186cc3=_0x2b1aa5(0x151)),_0x140ea5>0x97edd871cfda3800000000000000000000000000000000000000000&&(_0x186cc3=_0x2b1aa5(0x197)),_0x140ea5>0x25179157c93ec800000000000000000000000000000000000000000000&&(_0x186cc3=_0x2b1aa5(0x16e)),_0x140ea5>0x90e40fbeea1d380000000000000000000000000000000000000000000000&&(_0x186cc3='Trevigintillion'),_0x140ea5>0x235fadd81c28220000000000000000000000000000000000000000000000000&&(_0x186cc3=_0x2b1aa5(0x172)),_0x140ea5>0x8a2dbf142dfcc8000000000000000000000000000000000000000000000000000&&(_0x186cc3=_0x2b1aa5(0x162)),_0x140ea5>0x21bc2b266d3a36000000000000000000000000000000000000000000000000000000&&(_0x186cc3=_0x2b1aa5(0x168)),_0x140ea5>0x83c7088e1aab6800000000000000000000000000000000000000000000000000000000&&(_0x186cc3=_0x2b1aa5(0x131)),_0x140ea5>0x202c1796b182d800000000000000000000000000000000000000000000000000000000000&&(_0x186cc3=_0x2b1aa5(0x18d)),_0x140ea5>0x7dac3c24a5671c0000000000000000000000000000000000000000000000000000000000000&&(_0x186cc3=_0x2b1aa5(0x191)),_0x186cc3;}function checkMarketEggsVal(_0x4e77f6){var _0x28f504=_0x519e4e;return _0x4e77f6=Number(_0x4e77f6),modifier=_0x28f504(0x141),finalquantity=_0x4e77f6/0x235fadd81c28220000000000000000000000000000000000000000000000000,finalquantity>0x1?finalquantity[_0x28f504(0x14a)](0x1)+modifier:finalquantity[_0x28f504(0x14a)](0x5)+modifier;}function translateQuantity(_0x27fb27,_0x300a66){var _0x1ef9ef=_0x519e4e;_0x27fb27=Number(_0x27fb27),finalquantity=_0x27fb27,modifier='';if(_0x27fb27<0xf4240)return numberWithCommas(_0x27fb27['toFixed'](0x2));return _0x27fb27>0xf4240&&(modifier=_0x1ef9ef(0x182),finalquantity=_0x27fb27/0xf4240),_0x27fb27>0x3b9aca00&&(modifier='\x20Billion',finalquantity=_0x27fb27/0x3b9aca00),_0x27fb27>0xe8d4a51000&&(modifier='\x20Trillion',finalquantity=_0x27fb27/0xe8d4a51000),_0x27fb27>0x38d7ea4c68000&&(modifier='\x20Quadrillion',finalquantity=_0x27fb27/0x38d7ea4c68000),_0x27fb27>0xde0b6b3a7640000&&(modifier=_0x1ef9ef(0x157),finalquantity=_0x27fb27/0xde0b6b3a7640000),_0x27fb27>0x3635c9adc5dea00000&&(modifier='\x20Sextillion',finalquantity=_0x27fb27/0x3635c9adc5dea00000),_0x27fb27>0xd3c21bcecceda0000000&&(modifier=_0x1ef9ef(0x18a),finalquantity=_0x27fb27/0xd3c21bcecceda0000000),_0x27fb27>0x33b2e3c9fd0804000000000&&(modifier=_0x1ef9ef(0x19e),finalquantity=_0x27fb27/0x33b2e3c9fd0804000000000),_0x27fb27>0xc9f2c9cd04675000000000000&&(modifier=_0x1ef9ef(0x15f),finalquantity=_0x27fb27/0xc9f2c9cd04675000000000000),_0x27fb27>0x314dc6448d933800000000000000&&(modifier=_0x1ef9ef(0x17d),finalquantity=_0x27fb27/0x314dc6448d933800000000000000),_0x27fb27>0xc097ce7bc907180000000000000000&&(modifier=_0x1ef9ef(0x12f),finalquantity=_0x27fb27/0xc097ce7bc907180000000000000000),_0x27fb27>0x2f050fe938943a0000000000000000000&&(modifier=_0x1ef9ef(0x14d),finalquantity=_0x27fb27/0x2f050fe938943a0000000000000000000),_0x27fb27>0xb7abc627050308000000000000000000000&&(modifier='\x20Tredecillion',finalquantity=_0x27fb27/0xb7abc627050308000000000000000000000),_0x27fb27>0x2cd76fe086b93c000000000000000000000000&&(modifier=_0x1ef9ef(0x15a),finalquantity=_0x27fb27/0x2cd76fe086b93c000000000000000000000000),_0x27fb27>0xaf298d050e439800000000000000000000000000&&(modifier=_0x1ef9ef(0x133),finalquantity=_0x27fb27/0xaf298d050e439800000000000000000000000000),_0x27fb27>0x2ac3a4edbbfb8000000000000000000000000000000&&(modifier=_0x1ef9ef(0x125),finalquantity=_0x27fb27/0x2ac3a4edbbfb8000000000000000000000000000000),_0x27fb27>0xa70c3c40a64e700000000000000000000000000000000&&(modifier=_0x1ef9ef(0x160),finalquantity=_0x27fb27/0xa70c3c40a64e700000000000000000000000000000000),_0x27fb27>0x28c87cb5c89a260000000000000000000000000000000000&&(modifier='\x20Octodecillion',finalquantity=_0x27fb27/0x28c87cb5c89a260000000000000000000000000000000000),_0x27fb27>0x9f4f2726179a20000000000000000000000000000000000000&&(modifier=_0x1ef9ef(0x15b),finalquantity=_0x27fb27/0x9f4f2726179a20000000000000000000000000000000000000),_0x27fb27>0x26e4d30eccc322000000000000000000000000000000000000000&&(modifier=_0x1ef9ef(0x145),finalquantity=_0x27fb27/0x26e4d30eccc322000000000000000000000000000000000000000),_0x27fb27>0x97edd871cfda3800000000000000000000000000000000000000000&&(modifier=_0x1ef9ef(0x140),finalquantity=_0x27fb27/0x97edd871cfda3800000000000000000000000000000000000000000),_0x27fb27>0x25179157c93ec800000000000000000000000000000000000000000000&&(modifier=_0x1ef9ef(0x126),finalquantity=_0x27fb27/0x25179157c93ec800000000000000000000000000000000000000000000),_0x27fb27>0x90e40fbeea1d380000000000000000000000000000000000000000000000&&(modifier=_0x1ef9ef(0x14c),finalquantity=_0x27fb27/0x90e40fbeea1d380000000000000000000000000000000000000000000000),_0x27fb27>0x235fadd81c28220000000000000000000000000000000000000000000000000&&(modifier=_0x1ef9ef(0x141),finalquantity=_0x27fb27/0x235fadd81c28220000000000000000000000000000000000000000000000000),_0x27fb27>0x8a2dbf142dfcc8000000000000000000000000000000000000000000000000000&&(modifier=_0x1ef9ef(0x187),finalquantity=_0x27fb27/0x8a2dbf142dfcc8000000000000000000000000000000000000000000000000000),_0x27fb27>0x21bc2b266d3a36000000000000000000000000000000000000000000000000000000&&(modifier='\x20Sexvigintillion',finalquantity=_0x27fb27/0x21bc2b266d3a36000000000000000000000000000000000000000000000000000000),_0x27fb27>0x83c7088e1aab6800000000000000000000000000000000000000000000000000000000&&(modifier=_0x1ef9ef(0x170),finalquantity=_0x27fb27/0x83c7088e1aab6800000000000000000000000000000000000000000000000000000000),_0x27fb27>0x202c1796b182d800000000000000000000000000000000000000000000000000000000000&&(modifier=_0x1ef9ef(0x178),finalquantity=_0x27fb27/0x202c1796b182d800000000000000000000000000000000000000000000000000000000000),_0x27fb27>0x7dac3c24a5671c0000000000000000000000000000000000000000000000000000000000000&&(modifier=_0x1ef9ef(0x190),finalquantity=_0x27fb27/0x7dac3c24a5671c0000000000000000000000000000000000000000000000000000000000000),_0x300a66==undefined&&(_0x300a66=0x0,finalquantity<0x2710&&(_0x300a66=0x1),finalquantity<0x3e8&&(_0x300a66=0x2),finalquantity<0x64&&(_0x300a66=0x3),finalquantity<0xa&&(_0x300a66=0x4)),_0x300a66==0x0&&(finalquantity=Math['floor'](finalquantity)),finalquantity['toFixed'](_0x300a66)+modifier;}function removeModal2(){var _0x1f1844=_0x519e4e;$('#adModal')[_0x1f1844(0x13d)](_0x1f1844(0x153));}function removeModal(){var _0x1ead96=_0x519e4e;modalContent['innerHTML']='',modal['style'][_0x1ead96(0x16f)]=_0x1ead96(0x128);}function displayTransactionMessage(){var _0x350637=_0x519e4e;displayModalMessage(_0x350637(0x16a));}function displayModalMessage(_0x24fa96){var _0x5a734f=_0x519e4e;modal[_0x5a734f(0x143)][_0x5a734f(0x16f)]='block',modalContent[_0x5a734f(0x13f)]=_0x24fa96,setTimeout(removeModal,0xbb8);}function formatTrxValue(_0x660056){var _0x815047=_0x519e4e;return parseFloat(parseFloat(_0x660056)[_0x815047(0x14a)](0x4));}function getQueryVariable(_0x4a7a85){var _0x3316af=_0x519e4e,_0xbbcbae=window[_0x3316af(0x12a)][_0x3316af(0x19b)][_0x3316af(0x167)](0x1),_0x10aedb=_0xbbcbae[_0x3316af(0x166)]('&');for(var _0x208f7a=0x0;_0x208f7a<_0x10aedb[_0x3316af(0x19f)];_0x208f7a++){var _0x3e2440=_0x10aedb[_0x208f7a][_0x3316af(0x166)]('=');if(_0x3e2440[0x0]==_0x4a7a85)return _0x3e2440[0x1];}return![];}function secondsToString(_0x26f9ad){var _0x5eeb57=_0x519e4e;_0x26f9ad=Math[_0x5eeb57(0x186)](_0x26f9ad,0x0);var _0x423bae=Math[_0x5eeb57(0x14b)](_0x26f9ad/0x15180),_0x421e69=Math[_0x5eeb57(0x14b)](_0x26f9ad%0x15180/0xe10),_0x3c4ea8=Math[_0x5eeb57(0x14b)](_0x26f9ad%0x15180%0xe10/0x3c),_0x1073f0=_0x26f9ad%0x15180%0xe10%0x3c,_0x4cadfd='';return _0x421e69+'h\x20'+_0x3c4ea8+'m\x20';}function disableButtons(){var _0x5ada40=_0x519e4e,_0x2b0d82=document[_0x5ada40(0x169)](_0x5ada40(0x16b));for(var _0x19fac0=0x0;_0x19fac0<_0x2b0d82[_0x5ada40(0x19f)];_0x19fac0++){_0x2b0d82[_0x19fac0]&&(_0x2b0d82[_0x19fac0][_0x5ada40(0x143)][_0x5ada40(0x16f)]='none');}var _0x2b0d82=document[_0x5ada40(0x169)](_0x5ada40(0x19c));for(var _0x19fac0=0x0;_0x19fac0<_0x2b0d82[_0x5ada40(0x19f)];_0x19fac0++){_0x2b0d82[_0x19fac0]&&(_0x2b0d82[_0x19fac0][_0x5ada40(0x143)][_0x5ada40(0x16f)]=_0x5ada40(0x128));}}function enableButtons(){var _0x8a96cd=_0x519e4e,_0x47171c=document['getElementsByClassName'](_0x8a96cd(0x16b));for(var _0x5ce79b=0x0;_0x5ce79b<_0x47171c[_0x8a96cd(0x19f)];_0x5ce79b++){_0x47171c[_0x5ce79b]&&(_0x47171c[_0x5ce79b][_0x8a96cd(0x143)]['display']=_0x8a96cd(0x171));}var _0x47171c=document[_0x8a96cd(0x169)](_0x8a96cd(0x19c));for(var _0x5ce79b=0x0;_0x5ce79b<_0x47171c['length'];_0x5ce79b++){_0x47171c[_0x5ce79b]&&(_0x47171c[_0x5ce79b][_0x8a96cd(0x143)][_0x8a96cd(0x16f)]=_0x8a96cd(0x171));}}function onlyLetters(_0x4a99d5){var _0x1f36ab=_0x519e4e;return _0x4a99d5[_0x1f36ab(0x136)](/[^0-9a-zA-Z\s\.!?,]/gi,'');}function checkOnlyLetters(_0x56a04c){var _0x545fd6=_0x519e4e,_0x4fef25=new RegExp(_0x545fd6(0x17f));return!_0x4fef25[_0x545fd6(0x16c)](_0x56a04c)?![]:!![];}function onlyurl(_0x10c7fe){var _0x492a84=_0x519e4e;return _0x10c7fe[_0x492a84(0x136)](/[^0-9a-zA-Z\.?&\/\+#=\-_:]/gi,'');}function validurlsimple(_0xe9c85e){var _0x33fa38=_0x519e4e,_0x4ba97b=new RegExp('^[a-z0-9.?&/+#=-_:]*$');return!_0x4ba97b[_0x33fa38(0x16c)](_0xe9c85e)?![]:!![];}function ValidURL(_0x394a46){var _0x4c1e52=_0x519e4e,_0x41c502=new RegExp(_0x4c1e52(0x195)+_0x4c1e52(0x181)+_0x4c1e52(0x139)+_0x4c1e52(0x179)+_0x4c1e52(0x18f)+_0x4c1e52(0x17c),'i');return!_0x41c502[_0x4c1e52(0x16c)](_0x394a46)?(alert(_0x4c1e52(0x14f)),![]):!![];}function callbackClosure(_0x2946d0,_0x134110){return function(){return _0x134110(_0x2946d0);};}