"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[42185],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>s});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),m=i(a),s=l,h=m["".concat(p,".").concat(s)]||m[s]||c[s]||n;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var i=2;i<n;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},99073:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>u,toc:()=>i});var r=a(87462),l=(a(67294),a(3905));const n={title:"Ledger Team Update",slug:"2023-04-21-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},o=void 0,u={permalink:"/cardano-updates/2023-04-21-ledger",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-04-21-ledger.md",source:"@site/blog/2023-04-21-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2023-04-21T00:00:00.000Z",formattedDate:"April 21, 2023",tags:[{label:"ledger",permalink:"/cardano-updates/tags/ledger"}],readingTime:.905,hasTruncateMarker:!1,authors:[{name:"Jared Corduan",title:"Ledger Team Lead",url:"https://github.com/JaredCorduan",imageURL:"https://github.com/JaredCorduan.png",key:"JaredCorduan"}],frontMatter:{title:"Ledger Team Update",slug:"2023-04-21-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-04-21-hydra"},nextItem:{title:"Mithril Team Update",permalink:"/cardano-updates/2023-04-20-mithril"}},p={authorsImageUrls:[void 0]},i=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"Conway ledger era",id:"conway-ledger-era",level:3},{value:"Haddocks hosted on github pages",id:"haddocks-hosted-on-github-pages",level:3},{value:"Small improvements to the API",id:"small-improvements-to-the-api",level:3},{value:"Technical Debt",id:"technical-debt",level:3}],d={toc:i};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,l.kt)("p",null,"We continued to make progress on CIP-1694 and the conway ledger era.\nIn particular, the conway era now supports Plutus V3.\nFinally, we made small improvements to the ledger API and now host\nour Haskell code documentation (haddocks) on github pages."),(0,l.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,l.kt)("h3",{id:"conway-ledger-era"},"Conway ledger era"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3365"},"pull-3365"),"] - Support for Plutus V3."),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3368"},"pull-3368"),"] - Conway genesis fix."),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3369"},"pull-3369"),"] - Added some governance ledger state."),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3372"},"pull-3372"),"] - Work on the conway delegation certificates."),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3384"},"pull-3384"),"] - Rename.")),(0,l.kt)("h3",{id:"haddocks-hosted-on-github-pages"},"Haddocks hosted on github pages"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3385"},"pull-3385"),"] ")),(0,l.kt)("h3",{id:"small-improvements-to-the-api"},"Small improvements to the API"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3366"},"pull-3366"),"]")),(0,l.kt)("h3",{id:"technical-debt"},"Technical Debt"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3367"},"pull-3367"),"] Fix cost model json instances."),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3371"},"pull-3371"),"] UMap cleanup."),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3373"},"pull-3373"),"] Upgrade to ghc 9.2.7 and cabal 3.10.1."),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3375"},"pull-3375"),"] Sadly, we had to revert the ",(0,l.kt)("inlineCode",{parentName:"li"},"TICKF")," optimizations. There was a regression we do not yet understand."),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3377"},"pull-3377"),"] Fix cabal warnings."),(0,l.kt)("li",{parentName:"ul"},"[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3383"},"pull-3383"),"] Fix multi-asset test.")))}c.isMDXComponent=!0}}]);