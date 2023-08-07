"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[56733],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=l.createContext({}),p=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,h=d["".concat(u,".").concat(c)]||d[c]||s[c]||n;return a?l.createElement(h,i(i({ref:t},m),{},{components:a})):l.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<n;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},50085:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var l=a(87462),r=(a(67294),a(3905));const n={title:"Ledger Team Update",slug:"2023-08-04-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},i=void 0,o={permalink:"/cardano-updates/2023-08-04-ledger",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-08-04-ledger.md",source:"@site/blog/2023-08-04-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2023-08-04T00:00:00.000Z",formattedDate:"August 4, 2023",tags:[{label:"ledger",permalink:"/cardano-updates/tags/ledger"}],readingTime:1.915,hasTruncateMarker:!1,authors:[{name:"Alexey Kuleshevich",title:"Ledger Team Software Engineer",url:"https://github.com/lehins",imageURL:"https://github.com/lehins.png",key:"lehins"}],frontMatter:{title:"Ledger Team Update",slug:"2023-08-04-ledger",authors:"lehins",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-08-04-hydra"},nextItem:{title:"Network Team Update",permalink:"/cardano-updates/2023-08-04-network"}},u={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"Conway progress",id:"conway-progress",level:3},{value:"Testing",id:"testing",level:3},{value:"Bugfixes",id:"bugfixes",level:3},{value:"Plutus integration",id:"plutus-integration",level:3},{value:"Improvements and releasing",id:"improvements-and-releasing",level:3}],m={toc:p},d="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("p",null,"The ledger team was working almost exclusively on the Conway era implementation. In\nparticular, the main focus was directed towards solidifying transaction related types and\ntheir binary representation. We also directed some effort into unblocking Plutus team with\nrespect to PlutusV3 integration."),(0,r.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,r.kt)("h3",{id:"conway-progress"},"Conway progress"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3552"},"pull-3552")," - Allow Constitutional Committee Hot Key to be ScriptHash"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3581"},"pull-3581")," - Make Constitutional Committee Cold Key to be ScriptHash"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3571"},"pull-3571")," - Implement a portion of the TICKF rule."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3556"},"pull-3556")," - Add Script to Constitution"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3576"},"pull-3576")," - Add optional Anchor to ConwayRegDRep certificate"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3495"},"pull-3495")," - Implement refund logic for Proposal deposits"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3579"},"pull-3579")," - Change voting procedure in the transaction to a nested Map"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3585"},"pull-3585")," - Rename ",(0,r.kt)("inlineCode",{parentName:"li"},"CommitteeCert")," into a ",(0,r.kt)("inlineCode",{parentName:"li"},"GovCert")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3587"},"pull-3587")," - Remove ",(0,r.kt)("inlineCode",{parentName:"li"},"DelegStakeTxCert")," from the ",(0,r.kt)("inlineCode",{parentName:"li"},"COMPLETE")," pragma for ",(0,r.kt)("inlineCode",{parentName:"li"},"TxCert")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3586"},"pull-3586")," - Add ",(0,r.kt)("inlineCode",{parentName:"li"},"CurrentTreasuryValue")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"TxBody")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3588"},"pull-3588")," - Rename key roles"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3557"},"pull-3557")," - Update ",(0,r.kt)("inlineCode",{parentName:"li"},"NewCommittee")," action to use ",(0,r.kt)("inlineCode",{parentName:"li"},"RewardAcnt")," and add more info"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3595"},"pull-3595")," - Add ",(0,r.kt)("inlineCode",{parentName:"li"},"ConwayUpdateDRep")," constructor to ConwayTxCertGov type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3600"},"pull-3600")," - Filter out zero TxOuts on Byron/Shelley boundary instead of Babbage/Conway"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3597"},"pull-3597")," - Update ",(0,r.kt)("inlineCode",{parentName:"li"},"ProposalProcedure")," return address to be a ",(0,r.kt)("inlineCode",{parentName:"li"},"RewardAcnt"))),(0,r.kt)("h3",{id:"testing"},"Testing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3374"},"pull-3374")," - New features for generation subject to constraints"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3519"},"pull-3519")," - Basic Conway features test")),(0,r.kt)("h3",{id:"bugfixes"},"Bugfixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3566"},"pull-3566")," - Mint field translation bugfix.")),(0,r.kt)("h3",{id:"plutus-integration"},"Plutus integration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/issues/3538"},"issue-3538")," - A fairly complete specification was created for the PlutusV3 context"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3593"},"pull-3593")," - Conway TxInfo for PlutusV3 is now compatible with all pre-Conway functionality")),(0,r.kt)("h3",{id:"improvements-and-releasing"},"Improvements and releasing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3574"},"pull-3574")," - Improve clarity and performance of collateral Non-ADA validation:"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3573"},"pull-3573")," - Update top-level ",(0,r.kt)("inlineCode",{parentName:"li"},"CHANGELOG.md")," with cardano-node relevant changes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3555"},"pull-3555")," - Bump pygments from 2.12.0 to 2.15.0 in /doc"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3575"},"pull-3575")," - Bump certifi from 2022.12.7 to 2023.7.22 in /doc"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3567"},"pull-3567")," - Backport mint field translation bugfix"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3568"},"pull-3568")," - Fixed typo in byron ledger spec"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3572"},"pull-3572")," - Release/backport tickf bugfix")))}s.isMDXComponent=!0}}]);