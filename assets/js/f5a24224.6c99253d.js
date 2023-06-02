"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[71844],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=n,m=d["".concat(u,".").concat(h)]||d[h]||c[h]||o;return r?a.createElement(m,i(i({ref:t},s),{},{components:r})):a.createElement(m,i({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66255:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Ledger Team Update",slug:"2022-10-14-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2022-10-14-ledger",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-10-14-ledger.md",source:"@site/blog/2022-10-14-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2022-10-14T00:00:00.000Z",formattedDate:"October 14, 2022",tags:[{label:"ledger",permalink:"/cardano-updates/tags/ledger"}],readingTime:2.03,hasTruncateMarker:!1,authors:[{name:"Jared Corduan",title:"Ledger Team Lead",url:"https://github.com/JaredCorduan",imageURL:"https://github.com/JaredCorduan.png",key:"JaredCorduan"}],frontMatter:{title:"Ledger Team Update",slug:"2022-10-14-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2022-10-14-hydra"},nextItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2022-10-05-consensus"}},u={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2},{value:"Completed Technical Debt",id:"completed-technical-debt",level:3},{value:"In-progress Technical Debt",id:"in-progress-technical-debt",level:3}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"The ledger team is still primarily focused on addressing\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/issues?q=is%3Aissue+is%3Aopen+label%3A%22%3Acredit_card%3A+technical-debt%22"},"technical"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/projects/3"},"debt"),".\nWe now have the infrastructure for versioning our serialization schemes,\nwhich we continue to put into action.\nWe have made first steps towards getting proper support for the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/formal-ledger-specifications"},"formal ledger repository"),"\n(in particular, we've added nix builds and\ncontinuous integration support).\nWe are wrapping up an investigation of the performance of a critical\nfunction used by the consensus layer for leader checks.\nFinally, we are improving the packaging and versioning of our code."),(0,n.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,n.kt)("h3",{id:"completed-technical-debt"},"Completed Technical Debt"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Because the Shelley ledger era was a complete re-write of the Byron ledger era, a lot of\nour code lives in the ",(0,n.kt)("inlineCode",{parentName:"li"},"cardano-ledger-shelley")," package, though with hindsight we can say that\nmuch of it should live in ",(0,n.kt)("inlineCode",{parentName:"li"},"cardano-ledger-core"),".\nWe continue to move things to ",(0,n.kt)("inlineCode",{parentName:"li"},"cardano-ledger-core"),", and have much more to come. [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3059"},"pull-3059"),"]"),(0,n.kt)("li",{parentName:"ul"},"We now have the infrastructure to support ",(0,n.kt)("strong",{parentName:"li"},"versioned")," serialization schemes.\nThe inability to do this has caused us a lot difficulties,\nsuch as [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/issues/3003"},"issue-3003"),"], [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/issues/2965"},"issue-2965"),"] and [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/issues/2444"},"issue-2444"),"].\nWe are still in the process of switching to the versioned serialization scheme\n(such as [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3078"},"pull-3078"),"]),\nbut the infrastructure was completed in [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3063"},"pull-3063"),"]."),(0,n.kt)("li",{parentName:"ul"},"We now have proper nix and CI support for the formal ledger project. [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/formal-ledger-specifications/pull/19"},"pull-19"),"]"),(0,n.kt)("li",{parentName:"ul"},"A separate team is helping bring support for\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-haskell-packages"},"CHaP"),"\nto all the cardano-node repositories.\nWe have been helping out with this effort.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A separate team continues working on upgrading all the\ncardano-node repositories to work with ghc 9.2.4.\nWe have been helping out with this effort.")),(0,n.kt)("h3",{id:"in-progress-technical-debt"},"In-progress Technical Debt"),(0,n.kt)("p",null,"We also have several fairly large pull-requests in review\nthat we are working on."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In an on-going attempt to build out a more user-friendly API,\nwe continue to remove ",(0,n.kt)("inlineCode",{parentName:"li"},"HasField")," instances in place of using micro-lenses.\nThe protocol parameters, in particular, are being worked on. [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3045"},"pull-3045"),"]"),(0,n.kt)("li",{parentName:"ul"},"We are also renaming record fields to be consistent across the repository. [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3062"},"pull-3062"),"]"),(0,n.kt)("li",{parentName:"ul"},"We are now cleaning up all the work we did to understand the performance\nof the TICKF transition. We have some improvements to the computatation\nas well. [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3068"},"pull-3068"),"]"),(0,n.kt)("li",{parentName:"ul"},"We are adding more documentation, in particular to our ",(0,n.kt)("inlineCode",{parentName:"li"},"Twiddler")," functionality. [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3073"},"pull-3073"),"]"),(0,n.kt)("li",{parentName:"ul"},"The formal ledger is adding support for finite set theory. [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/formal-ledger-specifications/pull/20"},"pull-20"),"]")))}c.isMDXComponent=!0}}]);