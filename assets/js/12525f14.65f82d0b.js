"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[46207],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,h=u(e,["components","mdxType","originalType","parentName"]),d=i(a),c=r,m=d["".concat(o,".").concat(c)]||d[c]||s[c]||p;return a?n.createElement(m,l(l({ref:t},h),{},{components:a})):n.createElement(m,l({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,l=new Array(p);l[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[d]="string"==typeof e?e:r,l[1]=u;for(var i=2;i<p;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},96725:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>u,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const p={title:"Ledger Team Update",slug:"2023-04-03-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},l=void 0,u={permalink:"/cardano-updates/quarterly/2023-04-03-ledger",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/quarterly/2023-04-03-ledger.md",source:"@site/quarterly/2023-04-03-ledger.md",title:"Ledger Team Update",description:"Ledger Quarterly Update",date:"2023-04-03T00:00:00.000Z",formattedDate:"April 3, 2023",tags:[{label:"ledger",permalink:"/cardano-updates/quarterly/tags/ledger"}],readingTime:6.405,hasTruncateMarker:!1,authors:[{name:"Jared Corduan",title:"Ledger Team Lead",url:"https://github.com/JaredCorduan",imageURL:"https://github.com/JaredCorduan.png",key:"JaredCorduan"}],frontMatter:{title:"Ledger Team Update",slug:"2023-04-03-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"Network Team Update",permalink:"/cardano-updates/quarterly/2023-04-04-network"},nextItem:{title:"Consensus Quarterly Update",permalink:"/cardano-updates/quarterly/2023-01-18-consensus"}},o={authorsImageUrls:[void 0]},i=[{value:"Ledger Quarterly Update",id:"ledger-quarterly-update",level:2},{value:"2023-01 - 2023-03",id:"2023-01---2023-03",level:2},{value:"Main achievements",id:"main-achievements",level:3},{value:"CIPs",id:"cips",level:4},{value:"Formal ledger model",id:"formal-ledger-model",level:4},{value:"Conway ledger era",id:"conway-ledger-era",level:4},{value:"DRep stake distribution computation",id:"drep-stake-distribution-computation",level:4},{value:"Integration work",id:"integration-work",level:4},{value:"Deposit tracking",id:"deposit-tracking",level:4},{value:"New ledger API",id:"new-ledger-api",level:4},{value:"Constraint-based generators",id:"constraint-based-generators",level:4},{value:"Technical debt",id:"technical-debt",level:4},{value:"Critical fixes",id:"critical-fixes",level:5},{value:"Next steps",id:"next-steps",level:3},{value:"More details",id:"more-details",level:3}],h={toc:i},d="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ledger-quarterly-update"},"Ledger Quarterly Update"),(0,r.kt)("h2",{id:"2023-01---2023-03"},"2023-01 - 2023-03"),(0,r.kt)("h3",{id:"main-achievements"},"Main achievements"),(0,r.kt)("h4",{id:"cips"},"CIPs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Entering the Voltaire phase")," -\nCIP-1694 received a major update after participation in the design has expanded to\nmore and more people, including those who attended the Colorado workshop.\nSee ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-foundation/CIPs/pull/380"},"CIP-1694"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ledger CIP category")," -\nThe ledger team continues to embrace the CIP process, and has begun the process of\nregistering the ledger as an official CIP category.\nSee ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-foundation/CIPs/pull/456"},"CIP-84"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ledger serialization")," -\nA CIP for the ledger serialization deprecation cycle has been accepted.\nSee ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cardano-foundation/CIPs/tree/master/CIP-0080"},"CIP-80"),".")),(0,r.kt)("h4",{id:"formal-ledger-model"},"Formal ledger model"),(0,r.kt)("p",null,"Our new formal specifications backed by Agda have seen a lot of progress.\nThe majority of the ideas in CIP-1694 are now present, and we have made enough progress\nthat we can now safely say that the PDF produced by the Agda model will be the\nofficial ledger specification for the Conway ledger era.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/formal-ledger-specifications"},"the repository"),"."),(0,r.kt)("h4",{id:"conway-ledger-era"},"Conway ledger era"),(0,r.kt)("p",null,"Progress on the Haskell implementation of CIP-1694 has gone hand in hand with the formal model.\nThe major component still missing is the DRep stake distribution, which still presents some\ntechnical challenges."),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3176"},"pull-3176"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3216"},"pull-3216"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3226"},"pull-3226"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3291"},"pull-3291"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3326"},"pull-3326"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3330"},"pull-3330"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3339"},"pull-3339"),"]"),(0,r.kt)("h4",{id:"drep-stake-distribution-computation"},"DRep stake distribution computation"),(0,r.kt)("p",null,"Adding another large stake distribution to the ledger state must proceed with caution.\nWe do not want the memory used by the node to increase too much,\nand performance problems can lead to reduced block production.\nWe have prototyped, tested, and benchmarked several approaches that could give us\nthe current DRep stake distribution at each epoch boundary.\nThis has very important implications, since we want every ADA holder to be able to at any\ntime (such as during a contentious vote) register themselves as a DRep and still have time\nto vote themselves on the issue."),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3344"},"pull-3344"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3353"},"pull-3353"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3364"},"pull-3364"),"]"),(0,r.kt)("h4",{id:"integration-work"},"Integration work"),(0,r.kt)("p",null,"The ledger has made some wonderful improvements over the past six months,\nbut which entail a significant amount of integration efforts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Our new versioned CBOR schemes"),(0,r.kt)("li",{parentName:"ul"},"Individual deposit tracking"),(0,r.kt)("li",{parentName:"ul"},"An improved cross-era interface utilizing lenses"),(0,r.kt)("li",{parentName:"ul"},"A new ledger API"),(0,r.kt)("li",{parentName:"ul"},"Re-arranging the ledger stake in preparation for CIP-1694"),(0,r.kt)("li",{parentName:"ul"},"Versioning our Haskell packages\nusing ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-haskell-packages"},"CHaPs"),"."),(0,r.kt)("li",{parentName:"ul"},"Consistent conventions for variable names")),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3279"},"pull-3279"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3282"},"pull-3282"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3288"},"pull-3288"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3289"},"pull-3289"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3292"},"pull-3292"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3297"},"pull-3297"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3298"},"pull-3298"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3299"},"pull-3299"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3300"},"pull-3300"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3302"},"pull-3302"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3303"},"pull-3303"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3308"},"pull-3308"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3342"},"pull-3342"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3345"},"pull-3345"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3356"},"pull-3356"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3357"},"pull-3357"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3360"},"pull-3360"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3361"},"pull-3361"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3363"},"pull-3363"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4349"},"pull-4349"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-base/pull/378"},"pull-378"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-base/pull/376"},"pull-376"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-base/pull/373"},"pull-373"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-base/pull/370"},"pull-370"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-base/pull/361"},"pull-361"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/pull/4976"},"pull-4976"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/pull/5013"},"pull-5013"),"]"),(0,r.kt)("h4",{id:"deposit-tracking"},"Deposit tracking"),(0,r.kt)("p",null,"Individual deposits (for stake credential and stake pool registrations) were not tracked by the ledger.\nDeposits were returned according to the current protocol parameters.\nWhen the values of these two protocol parameters change, the deposit pot\nis adjusted by adding to, or removing from, the reserves."),(0,r.kt)("p",null,"This has several problems:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Most people expect a deposit to be paid back exactly."),(0,r.kt)("li",{parentName:"ul"},"We cannot increase the deposit amount once the reserves hits zero."),(0,r.kt)("li",{parentName:"ul"},"If it becomes known that the deposit amount is going to be increased, free Lovelace can be earned by registering credentials."),(0,r.kt)("li",{parentName:"ul"},"Because of the problems above, it is going to be incredibly hard to ever change the values."),(0,r.kt)("li",{parentName:"ul"},"There is a serious issue involving hard forks.\nThe consensus layer makes the decision about whether or not to enact a hard fork based on\nthe protocol parameter update state two stability windows before the end of the epoch.\nHowever, the ledger will reject a protocol parameter update on the epoch boundary\nif the deposit pot adjustments cannot be reconciled with the reseve pot.\nThis means that if quorum is met regarding changing the major protocol version,\nbut the update is rejected on the epoch boundary, consensus will change the era but the\nledger will not change the major protocol version, leaving the ledger in a split-brain state.")),(0,r.kt)("p",null,"Because we never actually changed the values of the two deposits amounts in the protocol parameters\non mainnet, we were able to retroactively change the behavior.\nWe made the following changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Individual deposits are tracked in the ",(0,r.kt)("inlineCode",{parentName:"li"},"DState"),"."),(0,r.kt)("li",{parentName:"ul"},"The amount deposited is always returned.")),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3195"},"pull-3195"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3202"},"pull-3202"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3217"},"pull-3217"),"]"),(0,r.kt)("h4",{id:"new-ledger-api"},"New ledger API"),(0,r.kt)("p",null,"We have significantly built up the ledger API.\nWe will eventually replace much of the ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-api")," in the node repository with this ledger API."),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3242"},"pull-3242"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3248"},"pull-3248"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3328"},"pull-3328"),"]"),(0,r.kt)("h4",{id:"constraint-based-generators"},"Constraint-based generators"),(0,r.kt)("p",null,"Our largest scale property tests generate an initial ledger state and a long sequence of valid blocks\nwhich span several epochs, mimicking a real network.\nThese tests are, in theory, excellent for checking properties.\nThey are, however, very difficult to maintain and are not as random as we would like\n(a lot of bias has to be introduced to keep the ledger state in enough order to keep generating blocks)."),(0,r.kt)("p",null,"We have a new declaritive infrastructure for building constraint-based generators,\nwhich instead generate a random ledger state representative of not just an initial state,\nbut also those representative of the end result of a long sequence of valid blocks.\nMoreover, these generators are very fast and are much more random than our old generators.\nBefore we can start using them for our existing property tests, however, we still need to\nexpand them to generate a valid block for a given ledger state."),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3219"},"pull-3219"),"]"),(0,r.kt)("h4",{id:"technical-debt"},"Technical debt"),(0,r.kt)("p",null,"We continued to address technical debt as much as we can."),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3167"},"pull-3167"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3170"},"pull-3170"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3172"},"pull-3172"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3175"},"pull-3175"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3184"},"pull-3184"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3205"},"pull-3205"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3208"},"pull-3208"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3210"},"pull-3210"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3212"},"pull-3212"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3218"},"pull-3218"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3222"},"pull-3222"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3223"},"pull-3223"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3224"},"pull-3224"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3225"},"pull-3225"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3229"},"pull-3229"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3239"},"pull-3239"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3241"},"pull-3241"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3244"},"pull-3244"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3245"},"pull-3245"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3249"},"pull-3249"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3260"},"pull-3260"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3263"},"pull-3263"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3264"},"pull-3264"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3268"},"pull-3268"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3269"},"pull-3269"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3270"},"pull-3270"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3274"},"pull-3274"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3276"},"pull-3276"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3277"},"pull-3277"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3286"},"pull-3286"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3290"},"pull-3290"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3295"},"pull-3295"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3296"},"pull-3296"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3306"},"pull-3306"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3307"},"pull-3307"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3310"},"pull-3310"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3311"},"pull-3311"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3316"},"pull-3316"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3320"},"pull-3320"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3323"},"pull-3323"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3327"},"pull-3327"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3331"},"pull-3331"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3332"},"pull-3332"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3333"},"pull-3333"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3338"},"pull-3338"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3341"},"pull-3341"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3347"},"pull-3347"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3350"},"pull-3350"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3351"},"pull-3351"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3352"},"pull-3352"),"]\n[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3354"},"pull-3354"),"]"),(0,r.kt)("h5",{id:"critical-fixes"},"Critical fixes"),(0,r.kt)("p",null,"We fixed two critical issues:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Growing block production delay on the epoch boundary: [",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3209"},"pull-3209"),"]"),(0,r.kt)("li",{parentName:"ul"},"Unexpected node shutdown from ",(0,r.kt)("inlineCode",{parentName:"li"},"balanceR"),": [",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3343"},"pull-3343"),"]")),(0,r.kt)("h3",{id:"next-steps"},"Next steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Conway spec")," -\nComplete the first version of the conway formal specification."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DRep stake distribution")," -\nHave the ledger compute the DRep stake distribution with acceptible performance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Devnet ready")," -\nHave the Haskell implementation of the conway era in sync with the formal specification,\nand integrate the changes with consensus and node.\nAll the details might not be finalized, but the wire specification and the API should\nbe stable so that conway can be placed on a devnet for tool builders to start integrating with."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Plutus V3")," -\nIntegrate Plutus V3 into the ledger, including a new script context which supports DReps.")),(0,r.kt)("h3",{id:"more-details"},"More details"),(0,r.kt)("p",null,"This quarterly report was based off of the following fortnightly ones:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"2023-01-05-ledger"},"2023-01-05")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"2023-01-19-ledger"},"2023-01-19")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"2023-02-02-ledger"},"2023-02-02")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"2023-02-17-ledger"},"2023-02-17")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"2023-03-03-ledger"},"2023-03-03")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"2023-03-17-ledger"},"2023-03-17")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"2023-03-31-ledger"},"2023-03-31"))))}s.isMDXComponent=!0}}]);