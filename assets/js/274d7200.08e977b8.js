"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[26565],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},38189:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Ledger Team Update",slug:"2022-11-11-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2022-11-11-ledger",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-11-11-ledger.md",source:"@site/blog/2022-11-11-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2022-11-11T00:00:00.000Z",formattedDate:"November 11, 2022",tags:[{label:"ledger",permalink:"/cardano-updates/tags/ledger"}],readingTime:2.41,hasTruncateMarker:!1,authors:[{name:"Jared Corduan",title:"Ledger Team Lead",url:"https://github.com/JaredCorduan",imageURL:"https://github.com/JaredCorduan.png",key:"JaredCorduan"}],frontMatter:{title:"Ledger Team Update",slug:"2022-11-11-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2022-11-11-hydra"},nextItem:{title:"Network Team Update",permalink:"/cardano-updates/2022-11-11-network"}},s={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"I am extremely excited to say that we now have a pull request up which introduces our new versioned\nCBOR serialization. This was an enormous effort, but it will solve a host of problems that we have\nhad since the Shelley phase. It will take time to properly review it, and we will\nneed to put in a lot of effort to integrate it with the downstream components, but this is  a huge\nmilestone. Additionally, we have a new CIP proposing a deprecation cycle for the transaction\nserialization schemes."),(0,a.kt)("p",null,"We also have a draft pull request that reworks how deposits are tracked. Users of the system will\nnot notice any difference, but it is a necessary change needed to prepare the way for\ndecentralizing the governance of Cardano."),(0,a.kt)("p",null,"Finally, we continued to address technical debt. In particular, we continued to make progress on\nbringing coherency and consistency to the code base with a common naming convention, and\nimproving some error messages."),(0,a.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We have a pull request up for our new versioned CBOR serialization.\nWhen we encounter a problem with our deserializers, it can be very difficult to implement a fix.\nIt is difficult because we can only fix such issues during a hard fork, and leading up to the\nhard fork we must maintain two serializations for the same type in order to not cause unintended\nnetwork splitting (the problematic version must be used before the hard fork,\nand the fixed version is used afterwards).\nThis can be especially tricky with the ",(0,a.kt)("inlineCode",{parentName:"li"},"FromCBOR")," typeclass, since it is not always easy to\nsearch for where all the problematic uses are located.\nThe new versioned CBOR serialization allows us to gracefully handle this transition.\nSee [",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3138"},"pull-3138"),"]."),(0,a.kt)("li",{parentName:"ul"},"We proposed a CIP for backwards compatibility of the transaction serialization schemes.\nSee [",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cardano-foundation/CIPs/pull/372"},"pull-372"),"]."),(0,a.kt)("li",{parentName:"ul"},"We have draft for the new deposit tracking.\nThis draft is not as memory efficient as the final version will be,\nbut it is a sufficient proof of concept that we can write property tests against, ensuring\nthat we have not changed the semantics.\nWe will optimize after we are sure of the correctness.\nSee [",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3127"},"pull-3127"),"]."),(0,a.kt)("li",{parentName:"ul"},"We now provide better support for debugging failed Plutus scripts in an important helper\nfunction, named ",(0,a.kt)("inlineCode",{parentName:"li"},"evaluateTransactionExecutionUnits"),".\nIn particular, it now returns all the information needed to rerun the script with exactly the\nsame arguments. This feature will end up appearing in the CLI and other tools from the Plutus\ntools team.\nSee [",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3135"},"pull-3135"),"]."),(0,a.kt)("li",{parentName:"ul"},"We did a lot more renaming to bring coherency and consistency to the code base.\nSee [",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3126"},"pull-3126"),"], [",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3120"},"pull-3120"),"], [",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3118"},"pull-3118"),"], and [",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3116"},"pull-3116"),"]."),(0,a.kt)("li",{parentName:"ul"},"We have added a few things to the ledger repository to make it conform to the\n",(0,a.kt)("a",{parentName:"li",href:"https://input-output-hk.github.io/cardano-engineering-handbook/"},"Cardano Engineering Handbook"),"\nSee [",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3139"},"pull-3139"),"].")))}c.isMDXComponent=!0}}]);