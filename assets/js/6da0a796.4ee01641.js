"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[567],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(r),h=n,d=m["".concat(u,".").concat(h)]||m[h]||c[h]||i;return r?a.createElement(d,l(l({ref:t},p),{},{components:r})):a.createElement(d,l({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41701:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={title:"Crypto Team Update",slug:"2022-11-25-crypto",authors:"iquerejeta",tags:["ledger"],hide_table_of_contents:!1},l=void 0,o={permalink:"/cardano-updates/2022-11-25-crypto",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-11-25-crypto.md",source:"@site/blog/2022-11-25-crypto.md",title:"Crypto Team Update",description:"High level summary",date:"2022-11-25T00:00:00.000Z",formattedDate:"November 25, 2022",tags:[{label:"ledger",permalink:"/cardano-updates/tags/ledger"}],readingTime:1.705,hasTruncateMarker:!1,authors:[{name:"I\xf1igo Querejeta Azurmendi",title:"Cardano Lead Cryptography Engineer",url:"https://github.com/iquerejeta",imageURL:"https://github.com/iquerejeta.png",key:"iquerejeta"}],frontMatter:{title:"Crypto Team Update",slug:"2022-11-25-crypto",authors:"iquerejeta",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"Network Team Update",permalink:"/cardano-updates/2022-11-28-network"},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2022-11-25-hydra"}},u={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"MuSig2",id:"musig2",level:3},{value:"Mithril",id:"mithril",level:3},{value:"cardano-base",id:"cardano-base",level:3},{value:"KES agent",id:"kes-agent",level:2}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"The four open fronts that the crypto team is working on are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MuSig2: We are almost ready to reach a point where the MuSig2 library is ready for usage by the Hydra team. "),(0,n.kt)("li",{parentName:"ul"},"Mithril: We started to think how Mithril-core can be designed such that it can be leverage by contexts where the verifiers run full nodes"),(0,n.kt)("li",{parentName:"ul"},"cardano-base: The VRF and BLS branchs are still open and in progress"),(0,n.kt)("li",{parentName:"ul"},"KES agent: We keep progressing with KES secure forgetting implementation as well as the KES agent. ")),(0,n.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,n.kt)("h3",{id:"musig2"},"MuSig2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We redesigned the library so that MuSig2 lib users don't need to be aware of the underlying secp256k1 library ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/musig2/pull/31"},"PR#31")),(0,n.kt)("li",{parentName:"ul"},"We are introducing a more granular error handling mechanism ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/musig2/pull/33"},"PR#33")),(0,n.kt)("li",{parentName:"ul"},"We rethought the API and made it more consistent with the underlying secp256k1 library ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/musig2/pull/35"},"PR#35"))),(0,n.kt)("h3",{id:"mithril"},"Mithril"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The mithril crates in general will be published in crates.io, and we adapted the core library's README ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/pull/616"},"PR#616")," "),(0,n.kt)("li",{parentName:"ul"},"We are modifying the individual signature to not contain the VK and stake. This was not necessary, as the current design requires the aggregator of Mithril certificates to know this information ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/pull/620"},"PR#620"))),(0,n.kt)("h3",{id:"cardano-base"},"cardano-base"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We've been still working in updating to the latest version of the VRF. In particular we modified the cbits to use the latest version of libsodium stable (1.0.18) ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/341"},"PR#341")),(0,n.kt)("li",{parentName:"ul"},"SKs, VKs and VRF outputs will be compatible across the different versions. We are implementing conversion functions for simple transitions ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/344"},"PR#344")),(0,n.kt)("li",{parentName:"ul"},"Benchmarks on pairing built-ins have already started, so we were finalising some CI concerns and final remarks on the BLS PR, so that it can be merged as soon as we have green light from plutus ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/266"},"PR#266"))),(0,n.kt)("h2",{id:"kes-agent"},"KES agent"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We keep progressing in the secure forgetting PR and resolving some bugs on memory handling ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/255"},"PR#255")),(0,n.kt)("li",{parentName:"ul"},"Increasing the test framework to make sure concurrency is properly treated by the KES Agent, for which we are including refcounted references. General progress in the implementation.")))}c.isMDXComponent=!0}}]);