"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[84069],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),h=n,d=m["".concat(u,".").concat(h)]||m[h]||c[h]||o;return r?a.createElement(d,i(i({ref:t},s),{},{components:r})):a.createElement(d,i({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62566:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Crypto Team Update",slug:"2023-06-09-crypto",authors:"iquerejeta",tags:["crypto"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2023-06-09-crypto",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-06-09-crypto.md",source:"@site/blog/2023-06-09-crypto.md",title:"Crypto Team Update",description:"High level summary",date:"2023-06-09T00:00:00.000Z",formattedDate:"June 9, 2023",tags:[{label:"crypto",permalink:"/cardano-updates/tags/crypto"}],readingTime:.705,hasTruncateMarker:!1,authors:[{name:"I\xf1igo Querejeta Azurmendi",title:"Cardano Lead Cryptography Engineer",url:"https://github.com/iquerejeta",imageURL:"https://github.com/iquerejeta.png",key:"iquerejeta"}],frontMatter:{title:"Crypto Team Update",slug:"2023-06-09-crypto",authors:"iquerejeta",tags:["crypto"],hide_table_of_contents:!1},nextItem:{title:"DB-sync Team Update",permalink:"/cardano-updates/2023-06-08-db-sync"}},u={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"cardano-base",id:"cardano-base",level:3},{value:"Mithril",id:"mithril",level:3},{value:"Sidechains",id:"sidechains",level:3}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"The open fronts that the crypto team is working on are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"cardano-base: E2E tests for BLS bindings and KES agent "),(0,n.kt)("li",{parentName:"ul"},"Sidechains: Implement ECC chip and Rescue hash primitives for ATMS"),(0,n.kt)("li",{parentName:"ul"},"mithril: Full node verifier")),(0,n.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,n.kt)("h3",{id:"cardano-base"},"cardano-base"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RawBearer API in ouroboros-network-framework (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4395)"},"https://github.com/input-output-hk/ouroboros-network/pull/4395)"),"; blocked due to issue with windows' localSnocket. Trying to resolve."),(0,n.kt)("li",{parentName:"ul"},"Adapting cardano-base for direct memory transfers between mlocked RAM and file descriptors ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/317"},"#317"),"."),(0,n.kt)("li",{parentName:"ul"},"Above, blocked by the simplification of typeclasses ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/404"},"#404"),"."),(0,n.kt)("li",{parentName:"ul"},"Provided e2e test cases to the testing team with aggregated signatures and schnorr signatures for the BLS bindings")),(0,n.kt)("h3",{id:"mithril"},"Mithril"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Implementation of Full Node Verifier ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/pull/939"},"#939"))),(0,n.kt)("h3",{id:"sidechains"},"Sidechains"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/sidechains-zk/tree/master/prover/src/ecc"},"ECC chip")," implemented for JubJub over BLS12-381"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/sidechains-zk/tree/master/prover/src/rescue"},"Rescue chip")," implemented for hashing."),(0,n.kt)("li",{parentName:"ul"},"Currently working on Schnorr signature (which uses the above constraints)")))}c.isMDXComponent=!0}}]);