"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[26299],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=n,h=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91989:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Crypto Team Update",slug:"2023-04-28-crypto",authors:"iquerejeta",tags:["crypto"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2023-04-28-crypto",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-04-28-crypto.md",source:"@site/blog/2023-04-28-crypto.md",title:"Crypto Team Update",description:"High level summary",date:"2023-04-28T00:00:00.000Z",formattedDate:"April 28, 2023",tags:[{label:"crypto",permalink:"/cardano-updates/tags/crypto"}],readingTime:1.26,hasTruncateMarker:!1,authors:[{name:"I\xf1igo Querejeta Azurmendi",title:"Cardano Lead Cryptography Engineer",url:"https://github.com/iquerejeta",imageURL:"https://github.com/iquerejeta.png",key:"iquerejeta"}],frontMatter:{title:"Crypto Team Update",slug:"2023-04-28-crypto",authors:"iquerejeta",tags:["crypto"],hide_table_of_contents:!1},prevItem:{title:"DB-sync Team Update",permalink:"/cardano-updates/2023-05-01-db-sync"},nextItem:{title:"Goedel Team Update",permalink:"/cardano-updates/2023-04-28-goedel"}},u={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"cardano-base",id:"cardano-base",level:3},{value:"KES agent",id:"kes-agent",level:3},{value:"Sidechains",id:"sidechains",level:3}],p={toc:c},s="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"The open fronts that the crypto team is working on are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"cardano-base: New KES structure finally merged. Included additional tests to BLS, and including test vectors created with zkcrypto's library."),(0,n.kt)("li",{parentName:"ul"},"KES agent: Reaching state of MVP. Rewriting KES agent networking code to use the Snockets abstraction."),(0,n.kt)("li",{parentName:"ul"},"Sidechains: Started implementing ECC chip of JubJub over BLS12-381.")),(0,n.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,n.kt)("h3",{id:"cardano-base"},"cardano-base"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/255"},"#255")," finally merged \ud83c\udf89"),(0,n.kt)("li",{parentName:"ul"},"Additional tests for BLS bindings ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/384"},"#384")),(0,n.kt)("li",{parentName:"ul"},"Open PR for including test vectors created with ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/zkcrypto/bls12_381"},"zkscrypto"),"'s library, ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/397"},"PR#397"))),(0,n.kt)("h3",{id:"kes-agent"},"KES agent"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Introducing the SignKeyWithPeriodKES wrapper type, which bundles a KES key with its corresponding KES period ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/389"},"PR#389"),"."),(0,n.kt)("li",{parentName:"ul"},"Introducing the DirectSerialise API into cardano-base, which allows us to write mlocked memory directly to a file descriptor, without going through intermediate encodings stored on the GHC heap (which is a no-no due to secure forgetting requirements) ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/317"},"#317"),"."),(0,n.kt)("li",{parentName:"ul"},"Figuring out how to generalize the KES, DSIGN, and mlocking code in cardano-base such that it can run in IOSim"),(0,n.kt)("li",{parentName:"ul"},"Rewriting KES agent networking code to use the Snockets abstraction, which gives us a platform-independent sockets layer (i.e., it will also work on Windows), and also allows us to run networked code in IOSim for testing purposes"),(0,n.kt)("li",{parentName:"ul"},"Refactor MonadSodium into MonadMLock ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/388"},"PR#388"),".")),(0,n.kt)("h3",{id:"sidechains"},"Sidechains"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Started working on ECC chip for JubJub over BLS (problems still with the multiplication constraint)"),(0,n.kt)("li",{parentName:"ul"},"Use macros used by PSE library to try and merge our fork of halo2curves into PSE's repo")))}d.isMDXComponent=!0}}]);