"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[1587],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(r),m=n,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||i;return r?a.createElement(d,o(o({ref:t},c),{},{components:r})):a.createElement(d,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const i={title:"Crypto Team Update",slug:"2023-02-03-crypto",authors:"iquerejeta",tags:["crypto"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2023-02-03-crypto",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-02-03-crypto.md",source:"@site/blog/2023-02-03-crypto.md",title:"Crypto Team Update",description:"High level summary",date:"2023-02-03T00:00:00.000Z",formattedDate:"February 3, 2023",tags:[{label:"crypto",permalink:"/cardano-updates/tags/crypto"}],readingTime:2.47,hasTruncateMarker:!1,authors:[{name:"I\xf1igo Querejeta Azurmendi",title:"Cardano Lead Cryptography Engineer",url:"https://github.com/iquerejeta",imageURL:"https://github.com/iquerejeta.png",key:"iquerejeta"}],frontMatter:{title:"Crypto Team Update",slug:"2023-02-03-crypto",authors:"iquerejeta",tags:["crypto"],hide_table_of_contents:!1},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-02-03-hydra"}},s={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"Mithril",id:"mithril",level:3},{value:"cardano-base",id:"cardano-base",level:3},{value:"KES agent",id:"kes-agent",level:3},{value:"MuSig2",id:"musig2",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"The open fronts that the crypto team is working on are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Mithril: We are creating helper functions to single out the usage of unsafe to facilitate auditing. We are also preparing a RFP for an audit of mithril's core library. Exploring future paths of mithril. "),(0,n.kt)("li",{parentName:"ul"},"cardano-base: Decision of whether to continue with BLS12-381 or switch curves. Conversion Praos to PraosBatchCompat ready, as well as KES secure forgetting.  "),(0,n.kt)("li",{parentName:"ul"},"KES agent: using snockets and making things testable in IOSim "),(0,n.kt)("li",{parentName:"ul"},"MuSig2: GH actions updated for checking the files whether they end with an empty line. Also, we reorganized the library.")),(0,n.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,n.kt)("h3",{id:"mithril"},"Mithril"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Given that removing the usage of transmute really affects the benchmarks, we decided to group all unsafe functions to facilitate auditing ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/pull/722"},"PR#722")),(0,n.kt)("li",{parentName:"ul"},"We have progressed with the RFP document for the mithril-stm library. We are documenting the differences with respect with the original paper."),(0,n.kt)("li",{parentName:"ul"},"We are exploring possible paths of how mithril could be used 'as-a-service'. Other projects such as sidechains or Catalyst would benefit of such a service. We are at a very early stage of brainstorming how it could work.")),(0,n.kt)("h3",{id:"cardano-base"},"cardano-base"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"There has been a very thorough discussion with potential users of the BLS12-381 bindings if that is the best curve. We have considered alternatives such as Pasta curves, Pluto-Eris or BLS12-377, and considering it's trade-offs. Seems that the most interesting curve to have on main-net is still 381. "),(0,n.kt)("li",{parentName:"ul"},"The team is gaining expertise in SNARKs to be able to experiment with them, and conclude whether the bindings will allow for SNARK verification on main-net in a timely manner."),(0,n.kt)("li",{parentName:"ul"},"The update VRF ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/341"},"PR#341")," is finally merged, and we are ready to merge ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/344"},"PR#344"),", which implements conversion functions from the compatible types between Praos and PraosBatchCompat.")),(0,n.kt)("h3",{id:"kes-agent"},"KES agent"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use of snockets to send the data directly from the socket to secure memory. "),(0,n.kt)("li",{parentName:"ul"},"We realized that in order for the DirectSerialise / DirectDeserialise classes to work against IOSim, we have to generalize a bunch of additional primitives"),(0,n.kt)("li",{parentName:"ul"},"Our plans are to: (1) Split up MonadSodium into separate typeclasses, each capturing a more sensible concern; (2) Rename those typeclasses to something that reflects their nature better.")),(0,n.kt)("h3",{id:"musig2"},"MuSig2"),(0,n.kt)("p",null,"The GitHub Action ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/fernandrone/linelint"},"linelint")," is used to check the files."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A new job for linting is added to the file ",(0,n.kt)("inlineCode",{parentName:"li"},"/.github/workflows/ci.yml"),". The rules are configured in the file ",(0,n.kt)("inlineCode",{parentName:"li"},"/.github/workflows/.linelint.yml"),". Some files from the configuration of ",(0,n.kt)("inlineCode",{parentName:"li"},"libsecp")," were failing, so in the rules in ",(0,n.kt)("inlineCode",{parentName:"li"},".linelint.yml")," the failing files are denoted to be ignored by the linter."),(0,n.kt)("li",{parentName:"ul"},"Folders are reorganized. We created a folder to handle the example. This folder includes the ",(0,n.kt)("inlineCode",{parentName:"li"},"examplemusig2.c"),", a distinct ",(0,n.kt)("inlineCode",{parentName:"li"},"config.h"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"helper.c"),". The example is enhanced by implementing the functions in the helper for the configuration given in ",(0,n.kt)("inlineCode",{parentName:"li"},"config.h"),".  The number of messages is different than the tests. The example is made more generic to run with a loop.")))}p.isMDXComponent=!0}}]);