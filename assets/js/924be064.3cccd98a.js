"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[1798],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),h=n,d=m["".concat(p,".").concat(h)]||m[h]||c[h]||i;return r?a.createElement(d,o(o({ref:t},s),{},{components:r})):a.createElement(d,o({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93825:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={title:"Crypto Team Update",slug:"2023-01-06-crypto",authors:"iquerejeta",tags:["crypto"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2023-01-06-crypto",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-01-06-crypto.md",source:"@site/blog/2023-01-06-crypto.md",title:"Crypto Team Update",description:"High level summary",date:"2023-01-06T00:00:00.000Z",formattedDate:"January 6, 2023",tags:[{label:"crypto",permalink:"/cardano-updates/tags/crypto"}],readingTime:1.46,hasTruncateMarker:!1,authors:[{name:"I\xf1igo Querejeta Azurmendi",title:"Cardano Lead Cryptography Engineer",url:"https://github.com/iquerejeta",imageURL:"https://github.com/iquerejeta.png",key:"iquerejeta"}],frontMatter:{title:"Crypto Team Update",slug:"2023-01-06-crypto",authors:"iquerejeta",tags:["crypto"],hide_table_of_contents:!1},prevItem:{title:"Performance & tracing update",permalink:"/cardano-updates/2023-01-11-performance-and-tracing"},nextItem:{title:"Ledger Team Update",permalink:"/cardano-updates/2023-01-05-ledger"}},p={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"MuSig2",id:"musig2",level:3},{value:"Mithril",id:"mithril",level:3},{value:"cardano-base",id:"cardano-base",level:3},{value:"KES agent",id:"kes-agent",level:3},{value:"Cryptography handbook",id:"cryptography-handbook",level:3}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"The four open fronts that the crypto team is working on are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MuSig2: The API features (error handling) has been merged. "),(0,n.kt)("li",{parentName:"ul"},"Mithril: We update the KES library and published it in crates.io. Similarly, we merged batch verification of STM signatures."),(0,n.kt)("li",{parentName:"ul"},"cardano-base: VRF and BLS are still waiting to be merged, as we have some problems with the CI. "),(0,n.kt)("li",{parentName:"ul"},"KES agent: We keep progressing with KES secure forgetting implementation.")),(0,n.kt)("p",null,"We also started working in the cryptography engineering handbook, which will be a cross team effort."),(0,n.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,n.kt)("h3",{id:"musig2"},"MuSig2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Merged the more granular error handling mechanism ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/musig2/pull/33"},"PR#33"))),(0,n.kt)("h3",{id:"mithril"},"Mithril"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Adapted KES library so that sk contains its corresponding period, making key handling easier. Avoid making unnecessary copies of the KES key. Expose function to get associated period. All included in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/kes/commit/9de00835ed354cbb8d37838f6cee57930ea9fd3d"},"Version 0.1.1"),", which was published in ",(0,n.kt)("a",{parentName:"li",href:"https://crates.io/crates/kes-summed-ed25519"},"crates.io"),". "),(0,n.kt)("li",{parentName:"ul"},"Updated new KES format to mithril library ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/pull/674"},"PR 674")),(0,n.kt)("li",{parentName:"ul"},"We implemeneted batch verification of stm signatures, which improves the benchmarks for mithril chain-sync ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/pull/531"},"PR 531")),(0,n.kt)("li",{parentName:"ul"},"We keep progressing on reducing the use of ",(0,n.kt)("inlineCode",{parentName:"li"},"transmute")," in ",(0,n.kt)("inlineCode",{parentName:"li"},"mithril-stm"),".")),(0,n.kt)("h3",{id:"cardano-base"},"cardano-base"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Nothing new to report. Still working in merging these PRs. We are only missing nix merge of ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/iohk-nix/pull/520"},"PR#520")," and the updates on VRF will be merged.")),(0,n.kt)("h3",{id:"kes-agent"},"KES agent"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We keep progressing in the secure forgetting PR. Added NoThunks tests, error hasndling to detect when mlocking fails, resolved bugs due to incorrect usage of mlocked memory and wrote more efficient tests ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/255#issuecomment-1362601518"},"PR#255"),".")),(0,n.kt)("h3",{id:"cryptography-handbook"},"Cryptography handbook"),(0,n.kt)("p",null,"We have made available the (temporary) cryptography handbook ",(0,n.kt)("a",{parentName:"p",href:"https://input-output-hk.github.io/cryptography_spec/"},"https://input-output-hk.github.io/cryptography_spec/"),", and included the description of some primitives (Ed25519, KES and VRF). This is an ongoing effort, and we plan on further expanding the list of available primitives."))}c.isMDXComponent=!0}}]);