"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[644],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=u(r),c=n,m=h["".concat(s,".").concat(c)]||h[c]||d[c]||o;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8151:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={title:"Ledger Team Update",slug:"2022-11-23-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},l=void 0,i={permalink:"/cardano-updates/2022-11-23-ledger",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-11-23-ledger.md",source:"@site/blog/2022-11-23-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2022-11-23T00:00:00.000Z",formattedDate:"November 23, 2022",tags:[{label:"ledger",permalink:"/cardano-updates/tags/ledger"}],readingTime:2.19,hasTruncateMarker:!1,authors:[{name:"Jared Corduan",title:"Ledger Team Lead",url:"https://github.com/JaredCorduan",imageURL:"https://github.com/JaredCorduan.png",key:"JaredCorduan"}],frontMatter:{title:"Ledger Team Update",slug:"2022-11-23-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2022-11-18-hydra"}},s={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2},{value:"The Conway ledger era",id:"the-conway-ledger-era",level:3},{value:"Versioned CBOR",id:"versioned-cbor",level:3},{value:"Deposit tracking",id:"deposit-tracking",level:3},{value:"Technical debt",id:"technical-debt",level:3},{value:"Node release",id:"node-release",level:3}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"We released ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cardano-foundation/CIPs/pull/380"},"CIP-1694"),",\nour proposal for entering the ",(0,n.kt)("a",{parentName:"p",href:"https://roadmap.cardano.org/en/voltaire/"},"Voltaire phase"),".\n",(0,n.kt)("strong",{parentName:"p"},"Please come join the discussion"),", this will be an incredibly exciting transition for\nCardano and we want everyone to participate!"),(0,n.kt)("p",null,"We now have a sensible way to version all of the serialization schemes used in the ledger.\nThe draft pull request was polished, reviewed, and merged this week.\nThis solves many problems that have vexed us since the beginning of the Shelley ledger era."),(0,n.kt)("p",null,"Everyone working on the Cardano node is working together to improve our release process,\nand the ledger team in particular dedicated one engineer to help with these efforts\nfor the next release."),(0,n.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,n.kt)("h3",{id:"the-conway-ledger-era"},"The Conway ledger era"),(0,n.kt)("p",null,"The current proposal in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cardano-foundation/CIPs/pull/380"},"CIP-1694")," encompasses two new ledger eras.\nThe first era will be called Conway, after the English mathematician John Horton Conway.\nThe community facing aspects of the Conway ledger era will be very minimal,\nbut it will pave the way for introducing liquid democracy.\nThe details can be viewed ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/projects/4"},"here"),".\nWe do not yet have a formal specification for the Conway era.\nOur plan is to debut the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/formal-ledger-specifications"},"formal ledger model"),".\nBriefly, the Conway ledger era will:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"introduce SPO voting for hard forks (in the spirit of the now abandoned ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-foundation/CIPs/pull/318"},"CIP-47"),")"),(0,n.kt)("li",{parentName:"ul"},"provide an on-chain mechanism for rotating the governance keys"),(0,n.kt)("li",{parentName:"ul"},"re-plumb the ledger rules involving governance to be in line with ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-foundation/CIPs/pull/380"},"CIP-1694"))),(0,n.kt)("h3",{id:"versioned-cbor"},"Versioned CBOR"),(0,n.kt)("p",null,"We now have the ability to easily tie our serialization schemes to the Cardano\nmajor protocol version.\nWe still aim to preserve backwards compatibility as much as possible, but we now have a principled\nplan for resolving problems (see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cardano-foundation/CIPs/pull/372"},"CIP-ledger-cbor"),").\nIn particular, we can now address several long standing issues, such as\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/issues/2444"},"issue-2444"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/issues/2965"},"issue-2965"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/issues/3003"},"issue-3003"),". "),(0,n.kt)("p",null,"The final (and massive!) pull request which brought us the versioning is ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3138"},"pull-3138"),"."),(0,n.kt)("h3",{id:"deposit-tracking"},"Deposit tracking"),(0,n.kt)("p",null,"The draft pull request which was exploring how best to track individual deposits\nis much closer now to being ready to take out of draft (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3127"},"pull-3127"),").\nFor background on the issue, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/issues/3113"},"issue-3113"),".\nThis is quite an invasive change which effects many of our tests, which we are now addressing."),(0,n.kt)("h3",{id:"technical-debt"},"Technical debt"),(0,n.kt)("p",null,"As always, we keep working on technical debt.\nWe have deduplicated a some things: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3129"},"pull-3129"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3162"},"pull-3162"),".\nWe have memoized a problematic computation (though more due diligence is needed before we can\nmerge): ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3141"},"pull-3141"),"."),(0,n.kt)("h3",{id:"node-release"},"Node release"),(0,n.kt)("p",null,"We have been helping with the node release efforts. See ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/pull/4608"},"pull-4608"),"."))}d.isMDXComponent=!0}}]);