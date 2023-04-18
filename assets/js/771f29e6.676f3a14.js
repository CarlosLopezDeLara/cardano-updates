"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[6674],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=p(a),c=n,m=h["".concat(u,".").concat(c)]||h[c]||s[c]||l;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},27064:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={title:"Ledger Team Update",slug:"2023-03-31-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},o=void 0,i={permalink:"/cardano-updates/2023-03-31-ledger",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-03-31-ledger.md",source:"@site/blog/2023-03-31-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2023-03-31T00:00:00.000Z",formattedDate:"March 31, 2023",tags:[{label:"ledger",permalink:"/cardano-updates/tags/ledger"}],readingTime:1.97,hasTruncateMarker:!1,authors:[{name:"Jared Corduan",title:"Ledger Team Lead",url:"https://github.com/JaredCorduan",imageURL:"https://github.com/JaredCorduan.png",key:"JaredCorduan"}],frontMatter:{title:"Ledger Team Update",slug:"2023-03-31-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-03-31-hydra"},nextItem:{title:"Critical Incident Report",permalink:"/cardano-updates/2023-03-27-critical incident"}},u={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"Support for the next release",id:"support-for-the-next-release",level:3},{value:"Experiments for DRep stake distribution",id:"experiments-for-drep-stake-distribution",level:3},{value:"Technical debt and bug fixes",id:"technical-debt-and-bug-fixes",level:3},{value:"Documentation changes",id:"documentation-changes",level:3}],d={toc:p};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"We are still heavily involved in work related to preparing the next release.\nThe other main thing we have worked on is experimentation about how we will\nhandle the DRep stake distribution for CIP-1694 in the conway ledger era.\nLastly, we merged a fix for\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/issues/4826"},"node-4826"),"\ninto our main branch (there will be a post-mortem shortly)."),(0,n.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,n.kt)("h3",{id:"support-for-the-next-release"},"Support for the next release"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3363"},"pull-3363")," - Fix problems relating to Arbitrary instances used by consensus."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3361"},"pull-3361")," - Remove the alonze genesis from the conway genesis."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3360"},"pull-3360")," - Translate bad pointer addresses to valid ones in conway."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3357"},"pull-3357")," - Fix a bug relating to zero valued ADA in the script context."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3356"},"pull-3356")," - Added needed instances (Arbitrary and Serialization) for conway integration."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3345"},"pull-3345")," - Added helper functions for the CLI."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3342"},"pull-3342")," - Fix a bug with a CLI helper function (having to do with deposit tracking).")),(0,n.kt)("h3",{id:"experiments-for-drep-stake-distribution"},"Experiments for DRep stake distribution"),(0,n.kt)("p",null,"Adding another stake distribution to the ledger state presents some new challenges.\nWe would like to be able to use the current stake distribution at the epoch boundary\nfor DRep voting so that people can always vote themselves in time for any proposal.\nTo this end, we have a prototype of an incremental computation based on the incremental\nlambda calculus, together with tests and benchmarks (which are very promising).\nSee ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3344"},"pull-3344"),"."),(0,n.kt)("p",null,"Additionally, more of the ledger state is going to need to be rearranged to accomodate\nthe new incremental computations.\nWe have two draft PRs up for possibles solution.\nSee ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3353"},"pull-3353")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3364"},"pull-3364"),"."),(0,n.kt)("h3",{id:"technical-debt-and-bug-fixes"},"Technical debt and bug fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3343"},"pull-3343")," - A fix ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/issues/4826"},"node-4826"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3333"},"pull-3333")," - Moving more code out of the shelley packages. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3347"},"pull-3347")," - Bug fix for the multi-asset generators."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3341"},"pull-3341")," - Removal of code duplication.")),(0,n.kt)("h3",{id:"documentation-changes"},"Documentation changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3354"},"pull-3354"),' - Rename "optional datums" with "supplemental datums" in the alonzo spec.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3352"},"pull-3352")," - Add a section to the Shelly errata about the individual deposit tracking."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3351"},"pull-3351")," - Further clarify the details regarding the script integrity hash."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3350"},"pull-3350")," - Some cleanup of the Babbage spec.")))}s.isMDXComponent=!0}}]);