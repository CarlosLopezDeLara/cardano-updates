"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[6169],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(r),h=n,g=m["".concat(u,".").concat(h)]||m[h]||c[h]||i;return r?a.createElement(g,l(l({ref:t},p),{},{components:r})):a.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4756:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={title:"Crypto Team Update",slug:"2022-12-09-crypto",authors:"iquerejeta",tags:["crypto"],hide_table_of_contents:!1},l=void 0,o={permalink:"/cardano-updates/2022-12-09-crypto",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-12-09-crypto.md",source:"@site/blog/2022-12-09-crypto.md",title:"Crypto Team Update",description:"High level summary",date:"2022-12-09T00:00:00.000Z",formattedDate:"December 9, 2022",tags:[{label:"crypto",permalink:"/cardano-updates/tags/crypto"}],readingTime:1.39,hasTruncateMarker:!1,authors:[{name:"I\xf1igo Querejeta Azurmendi",title:"Cardano Lead Cryptography Engineer",url:"https://github.com/iquerejeta",imageURL:"https://github.com/iquerejeta.png",key:"iquerejeta"}],frontMatter:{title:"Crypto Team Update",slug:"2022-12-09-crypto",authors:"iquerejeta",tags:["crypto"],hide_table_of_contents:!1},prevItem:{title:"Network Team Update",permalink:"/cardano-updates/2022-12-12-network"},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2022-12-09-hydra"}},u={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"MuSig2",id:"musig2",level:3},{value:"Mithril",id:"mithril",level:3},{value:"cardano-base",id:"cardano-base",level:3},{value:"KES agent",id:"kes-agent",level:2}],p={toc:s},m="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"The four open fronts that the crypto team is working on are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MuSig2: We were blocked with a CI issue, that we finally resolved. Similarly, we merged the redesig of the API to mantain consistency. "),(0,n.kt)("li",{parentName:"ul"},"Mithril: Merged the reformat of the signle signature. Similarly, we started working in ensuring KES implementation in rust is safe. "),(0,n.kt)("li",{parentName:"ul"},"cardano-base: VRF and BLS are still waiting to be merged, as we have some problems with the CI. Moreover, we started experimenting how rust can be included in the cardano-base code-stack. "),(0,n.kt)("li",{parentName:"ul"},"KES agent: We keep progressing with KES secure forgetting implementation as well as the KES agent.")),(0,n.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,n.kt)("h3",{id:"musig2"},"MuSig2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[Still in progress]"," We are introducing a more granular error handling mechanism ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/musig2/pull/33"},"PR#33")),(0,n.kt)("li",{parentName:"ul"},"We merged the API redesig ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/musig2/pull/35"},"PR#35")),(0,n.kt)("li",{parentName:"ul"},"We were blocked for a while with a CI issue, for which we are currently simply using a simpler version of Ubuntu. We'll probably circle back to this in the future ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/musig2/pull/36"},"PR#36"))),(0,n.kt)("h3",{id:"mithril"},"Mithril"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We merged the individual signature ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/pull/620"},"PR#620")),(0,n.kt)("li",{parentName:"ul"},"We are modifying important parts of the KES mplementation to guarantee there are no unnecessary copies during Ser/Deser (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/kes/commits/master"},"kes repo"),") ")),(0,n.kt)("h3",{id:"cardano-base"},"cardano-base"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Nothing new to report. Still working in merging these PRs. "),(0,n.kt)("li",{parentName:"ul"},"We started experimenting on how we can use cabal-pack to create haskell libraries out of rust libraries, and how this would affect the cardano-base fork. We encountered what seems to be a ",(0,n.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/22564"},"bug in GHC"))),(0,n.kt)("h2",{id:"kes-agent"},"KES agent"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We keep progressing in the secure forgetting PR and resolving some bugs on memory handling ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-base/pull/255"},"PR#255")),(0,n.kt)("li",{parentName:"ul"},"Fixed a 'use-after-free' bug in the KES agent.")))}c.isMDXComponent=!0}}]);