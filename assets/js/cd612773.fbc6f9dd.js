"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[7205],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>m});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),p=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),h=p(a),m=n,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||o;return a?r.createElement(d,i(i({ref:e},s),{},{components:a})):r.createElement(d,i({ref:e},s))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=h;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:n,i[1]=u;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},26169:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"Crypto Team Update",slug:"2023-05-12-crypto",authors:"iquerejeta",tags:["crypto"],hide_table_of_contents:!1},i=void 0,u={permalink:"/cardano-updates/2023-05-12-crypto",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-05-12-crypto.md",source:"@site/blog/2023-05-12-crypto.md",title:"Crypto Team Update",description:"High level summary",date:"2023-05-12T00:00:00.000Z",formattedDate:"May 12, 2023",tags:[{label:"crypto",permalink:"/cardano-updates/tags/crypto"}],readingTime:1.095,hasTruncateMarker:!1,authors:[{name:"I\xf1igo Querejeta Azurmendi",title:"Cardano Lead Cryptography Engineer",url:"https://github.com/iquerejeta",imageURL:"https://github.com/iquerejeta.png",key:"iquerejeta"}],frontMatter:{title:"Crypto Team Update",slug:"2023-05-12-crypto",authors:"iquerejeta",tags:["crypto"],hide_table_of_contents:!1},prevItem:{title:"Performance & tracing update",permalink:"/cardano-updates/2023-05-17-performance-and-tracing"},nextItem:{title:"Network Team Update",permalink:"/cardano-updates/2023-05-12-network"}},l={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"cardano-base",id:"cardano-base",level:3},{value:"Sidechains",id:"sidechains",level:3}],s={toc:p};function c(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"The open fronts that the crypto team is working on are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"cardano-base: Include final tests for BLS signature. Further adaptations for KES agent. "),(0,n.kt)("li",{parentName:"ul"},"Sidechains: Implement BLS and JubJub using upstream's macros to merge these curves in halo2curves.")),(0,n.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,n.kt)("h3",{id:"cardano-base"},"cardano-base"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RawBearer API in ouroboros-network-framework (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4395)"},"https://github.com/input-output-hk/ouroboros-network/pull/4395)"),"; this is needed for KES Agent. Review ongoing."),(0,n.kt)("li",{parentName:"ul"},"Facilitate BLS test vectors in Haskell test suite (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/408"},"https://github.com/input-output-hk/cardano-base/pull/408"),")"),(0,n.kt)("li",{parentName:"ul"},"Add the SignKeyWithKES type to cardano-base (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/389"},"https://github.com/input-output-hk/cardano-base/pull/389"),")"),(0,n.kt)("li",{parentName:"ul"},"Restructuring and simplifying the MLocking code in cardano-base (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/404"},"https://github.com/input-output-hk/cardano-base/pull/404"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/405"},"https://github.com/input-output-hk/cardano-base/pull/405"),"), getting rid of the purpose-built MonadMLock etc. typeclasses in the process"),(0,n.kt)("li",{parentName:"ul"},"Merging the DSIGN and DSIGNM APIs such that the same phantom type can be used to select both the pure and mlocked versions of the same DSIGN algorithm (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/411"},"https://github.com/input-output-hk/cardano-base/pull/411"),")"),(0,n.kt)("li",{parentName:"ul"},"Simplifying the KES API into a single KESAlgorithm typeclass, merging the KESSignAlgorithm class into it (this is possible due to the simplifications from #404). (Same PR as above: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/411"},"https://github.com/input-output-hk/cardano-base/pull/411"),")."),(0,n.kt)("li",{parentName:"ul"},"Update CIP-0381 with new plutus built-in functions, ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cardano-foundation/CIPs/pull/506"},"#506"),". In particular hash_to_curve now takes as input a secon input for the Domain Separation Tag (DST), and we limit to have a maximu size of 255 bytes. ")),(0,n.kt)("h3",{id:"sidechains"},"Sidechains"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Opened PR in halo2curves to include BLS12-381 and JubJub, ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/privacy-scaling-explorations/halo2curves/pull/38"},"#38")),(0,n.kt)("li",{parentName:"ul"},"Addition constraint over JubJub merged ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/sidechains-zk/pull/10"},"#10"))))}c.isMDXComponent=!0}}]);