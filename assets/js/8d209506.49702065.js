"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[2936],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8373:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={title:"Crypto Team Update",slug:"2023-01-20-crypto",authors:"iquerejeta",tags:["crypto"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2023-01-20-crypto",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-01-20-crypto.md",source:"@site/blog/2023-01-20-crypto.md",title:"Crypto Team Update",description:"High level summary",date:"2023-01-20T00:00:00.000Z",formattedDate:"January 20, 2023",tags:[{label:"crypto",permalink:"/cardano-updates/tags/crypto"}],readingTime:1.65,hasTruncateMarker:!1,authors:[{name:"I\xf1igo Querejeta Azurmendi",title:"Cardano Lead Cryptography Engineer",url:"https://github.com/iquerejeta",imageURL:"https://github.com/iquerejeta.png",key:"iquerejeta"}],frontMatter:{title:"Crypto Team Update",slug:"2023-01-20-crypto",authors:"iquerejeta",tags:["crypto"],hide_table_of_contents:!1},prevItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2023-01-25-consensus"},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2022-01-20-hydra"}},u={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"Mithril",id:"mithril",level:3},{value:"cardano-base",id:"cardano-base",level:3},{value:"KES agent",id:"kes-agent",level:3}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"The open fronts that the crypto team is working on are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Mithril: We explored whether some uses of ",(0,n.kt)("inlineCode",{parentName:"li"},"transmute")," could be removed, but it resulted in considerable regression.  "),(0,n.kt)("li",{parentName:"ul"},"cardano-base: Some issues with Nix are blocking merge of VRF update. BLS12-381 benchmarks where quite satisfactory. Next steps will be defined by cryptography strategic decision. "),(0,n.kt)("li",{parentName:"ul"},"KES agent: An inconsistency between ",(0,n.kt)("inlineCode",{parentName:"li"},"contra-tracer")," available in hackage and the one in cardano-haskell delayed our progress. Now we are adapting PRs to the ",(0,n.kt)("inlineCode",{parentName:"li"},"contra-tracer")," used by consensus. ")),(0,n.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,n.kt)("h3",{id:"mithril"},"Mithril"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We removed the usage of transmute in mithril-core (and exchanged it with ser/deser, as unfortunately there is no other way with the library we currently use). However, the benchmarks showed an important regression - ~30% worse on average ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/pull/675"},"PR#675"),". We decided to keep transmute, but instead group all its usage in helper functions, to facilitate auditing. "),(0,n.kt)("li",{parentName:"ul"},"We are writing a RFP for the audit of the core library. ")),(0,n.kt)("h3",{id:"cardano-base"},"cardano-base"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A problem with Nix is blocking merge of ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/341"},"PR#341")),(0,n.kt)("li",{parentName:"ul"},"Plutus team ran ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/plutus/blob/kwxm/BLS12_381/prototype/plutus-benchmark/bls-benchmarks/Main.hs"},"benchmarks")," of BLS12-381 built-ins. The results are satisfactory, and while we have yet not implemented SNARK verification in plutus, it all seems to point that we'll be able to verify some proofs in a single script execution."),(0,n.kt)("li",{parentName:"ul"},"Team is fully digesting the Plonk paper. "),(0,n.kt)("li",{parentName:"ul"},"There's been a lot of discussions (with internal and external projects) regarding pairings in plutus, and what elliptic curve should be used.  ")),(0,n.kt)("h3",{id:"kes-agent"},"KES agent"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A little unforseen delay has been caused by a mismatch in the use of ",(0,n.kt)("inlineCode",{parentName:"li"},"contra-tracer"),". The one in hackage and that in cardano-haskell are not compatible. Unfortunately, for secure forgetting we use that of hackage, and now realised. We are ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/255/commits/39b2d9473aa296976825248360a73cf066065431"},"doing the change"),", but still the CI is not happy."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/317/commits/39b2d9473aa296976825248360a73cf066065431"},"same")," was needed for the KES agents prerequisites ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/317"},"PR#317"),"."),(0,n.kt)("li",{parentName:"ul"},"We've started working with the agent itself again, upgrading the cardano-base dependency and adding ouroboros-network-framework dependency")))}c.isMDXComponent=!0}}]);