"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[28480],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>s});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),m=i(a),s=l,h=m["".concat(p,".").concat(s)]||m[s]||c[s]||n;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var i=2;i<n;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},39253:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>u,toc:()=>i});var r=a(87462),l=(a(67294),a(3905));const n={title:"Ledger Team Update",slug:"2023-05-26-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},o=void 0,u={permalink:"/cardano-updates/2023-05-26-ledger",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-05-26-ledger.md",source:"@site/blog/2023-05-26-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2023-05-26T00:00:00.000Z",formattedDate:"May 26, 2023",tags:[{label:"ledger",permalink:"/cardano-updates/tags/ledger"}],readingTime:1.565,hasTruncateMarker:!1,authors:[{name:"Jared Corduan",title:"Ledger Team Lead",url:"https://github.com/JaredCorduan",imageURL:"https://github.com/JaredCorduan.png",key:"JaredCorduan"}],frontMatter:{title:"Ledger Team Update",slug:"2023-05-26-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-05-26-hydra"},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-05-19-hydra"}},p={authorsImageUrls:[void 0]},i=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"Conway progress",id:"conway-progress",level:3},{value:"Improve testing",id:"improve-testing",level:3},{value:"Integration work",id:"integration-work",level:3},{value:"Technical debt",id:"technical-debt",level:3}],d={toc:i};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,l.kt)("p",null,"The ledger team made progress on the conway ledger era. In particular, the design and implementation\nof the new certificates is near complete, we refactored some of our data structures\nto be able to support DReps, we cleaned up the serialization format, and renamed things to make\nclearer the differences with Shelley."),(0,l.kt)("p",null,"The team also completed integration work for the next node release, namely 8.1.0.\nAnd, as always, we continue to address technical debt."),(0,l.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,l.kt)("h3",{id:"conway-progress"},"Conway progress"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3408"},"pull-3408")," - Improve conway delegation certificates"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3428"},"pull-3428")," - Get rid of Constitutional in favor of Genesis and Committee"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3426"},"pull-3426")," - Add DRep to internal data struture (UMap)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3425"},"pull-3425")," - Improve witness logic needed for conway"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3423"},"pull-3423")," - Rename ShelleyDelegCerts constructors to distinguish them from Conway"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3421"},"pull-3421")," - Rename DCert -> TxCert"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3454"},"pull-3454")," - conway CDDL minor fixes")),(0,l.kt)("h3",{id:"improve-testing"},"Improve testing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3403"},"pull-3403")," - Add Plutus script context golden tests")),(0,l.kt)("h3",{id:"integration-work"},"Integration work"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3410"},"pull-3410")," - Update chaps index"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3416"},"pull-3416")," - Bump cardano-ledger-alonzo-test version"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3414"},"pull-3414")," - Bump cardano-ledger-shelley-test minor version"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3420"},"pull-3420")," - Bump cardano-ledger-shelley-ma-test version"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3441"},"pull-3441")," - Release cardano-ledger-","[alonzo|babbage]","-1.2.1")),(0,l.kt)("h3",{id:"technical-debt"},"Technical debt"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3409"},"pull-3409")," -  Unit test - no such thing as a reference datum"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3407"},"pull-3407")," -  Fixup release process documentation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3404"},"pull-3404")," -  Create TotalDeposits events during all eras"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3402"},"pull-3402")," -  Fix broken references in the Shelley spec"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3424"},"pull-3424")," -  Remove no longer used cardano-ledger-shelley-ma package"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3432"},"pull-3432")," -  Add an example on how to bump up versions in the changelog "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3440"},"pull-3440")," -  Revert back to the group serialization for ProtVer for PParams ")))}c.isMDXComponent=!0}}]);