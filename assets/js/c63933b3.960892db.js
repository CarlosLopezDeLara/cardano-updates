"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[236],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),s=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),c=s(n),h=r,d=c["".concat(i,".").concat(h)]||c[h]||m[h]||o;return n?a.createElement(d,l(l({ref:e},p),{},{components:n})):a.createElement(d,l({ref:e},p))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=c;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:r,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},27502:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Consensus Team Update",slug:"2023-03-22-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},l=void 0,u={permalink:"/cardano-updates/2023-03-22-consensus",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-03-22-consensus.md",source:"@site/blog/2023-03-22-consensus.md",title:"Consensus Team Update",description:"High level summary",date:"2023-03-22T00:00:00.000Z",formattedDate:"March 22, 2023",tags:[{label:"consensus",permalink:"/cardano-updates/tags/consensus"}],readingTime:.63,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Team Update",slug:"2023-03-22-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},nextItem:{title:"Performance & tracing update",permalink:"/cardano-updates/2023-03-22-performance-and-tracing"}},i={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low-level details",id:"low-level-details",level:2}],p={toc:s};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("p",null,"This week the consensus team continued working on the refactoring of the UTxO HD\nprototype, and design and testing of Genesis. We also extracted the ",(0,r.kt)("inlineCode",{parentName:"p"},"fs-sim"),"\npackage, which provides a file-system abstraction layer that can be used for\ntesting and simulation. This makes the Consensus code base smaller, while\nproviding a package that the community can reuse and contribute to. We also\nfixed a failing property test related to iterators. We are also working on\nmempool and VRF improvements."),(0,r.kt)("h2",{id:"low-level-details"},"Low-level details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Extraction of ",(0,r.kt)("inlineCode",{parentName:"li"},"fs-sim")," code from ",(0,r.kt)("inlineCode",{parentName:"li"},"ouroboros-network"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4425"},"https://github.com/input-output-hk/ouroboros-network/pull/4425")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/fs-sim/pull/1"},"https://github.com/input-output-hk/fs-sim/pull/1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/fs-sim/pull/2"},"https://github.com/input-output-hk/fs-sim/pull/2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4460"},"https://github.com/input-output-hk/ouroboros-network/pull/4460")))),(0,r.kt)("li",{parentName:"ul"},"Smaller changes in ",(0,r.kt)("inlineCode",{parentName:"li"},"fs-sim")," code (some required by ",(0,r.kt)("inlineCode",{parentName:"li"},"UTxO-HD"),"):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/fs-sim/pull/5"},"https://github.com/input-output-hk/fs-sim/pull/5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/fs-sim/pull/6"},"https://github.com/input-output-hk/fs-sim/pull/6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/fs-sim/pull/7"},"https://github.com/input-output-hk/fs-sim/pull/7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/fs-sim/pull/8"},"https://github.com/input-output-hk/fs-sim/pull/8")))),(0,r.kt)("li",{parentName:"ul"},"Released cardano-lmdb-simple-0.6.0.0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/lmdb-simple/pull/20"},"https://github.com/input-output-hk/lmdb-simple/pull/20")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-haskell-packages/pull/150"},"https://github.com/input-output-hk/cardano-haskell-packages/pull/150"))))))}m.isMDXComponent=!0}}]);