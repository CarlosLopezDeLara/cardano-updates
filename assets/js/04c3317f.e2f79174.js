"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[83050],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),m=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(r),c=n,h=u["".concat(i,".").concat(c)]||u[c]||d[c]||s;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var m=2;m<s;m++)o[m]=r[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},10313:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var a=r(87462),n=(r(67294),r(3905));const s={title:"System Test Team Update",slug:"2023-03-27-system-test",authors:"mkoura",tags:["system-test"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2023-03-27-system-test",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-03-27-system-test.md",source:"@site/blog/2023-03-27-system-test.md",title:"System Test Team Update",description:"High level summary",date:"2023-03-27T00:00:00.000Z",formattedDate:"March 27, 2023",tags:[{label:"system-test",permalink:"/cardano-updates/tags/system-test"}],readingTime:.785,hasTruncateMarker:!1,authors:[{name:"Martin Kourim",title:"System Test Engineer",url:"https://github.com/mkoura",imageURL:"https://github.com/mkoura.png",key:"mkoura"}],frontMatter:{title:"System Test Team Update",slug:"2023-03-27-system-test",authors:"mkoura",tags:["system-test"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/cardano-updates/2023-03-31-ledger"},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-03-24-hydra"}},i={authorsImageUrls:[void 0]},m=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Workstreams",id:"workstreams",level:2},{value:"Framework improvements:",id:"framework-improvements",level:3},{value:"Node:",id:"node",level:3},{value:"DB-Sync:",id:"db-sync",level:3}],p={toc:m},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"Since the last update (2023-1-13) we did more improvements on our Test Framework, added more automated tests, kept analyzing and fixing nightly jobs failures, tested the ",(0,n.kt)("em",{parentName:"p"},"1.35.5")," and ",(0,n.kt)("em",{parentName:"p"},"1.35.6")," releases (and their predecessing release candidates) and ran tests on branch with the ",(0,n.kt)("em",{parentName:"p"},"UTxO-HD")," functionality."),(0,n.kt)("h2",{id:"workstreams"},"Workstreams"),(0,n.kt)("h3",{id:"framework-improvements"},"Framework improvements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"improvements in searching for unexpected error messages in log files during test run"),(0,n.kt)("li",{parentName:"ul"},"added support for UTxO-HD testing"),(0,n.kt)("li",{parentName:"ul"},"added support for the new P2P topology format"),(0,n.kt)("li",{parentName:"ul"},"added local cluster variant that has the same properties as mainnet (epoch length, fees, etc.)"),(0,n.kt)("li",{parentName:"ul"},"added preliminary support for the Conway era"),(0,n.kt)("li",{parentName:"ul"},"added support for running tests on the ",(0,n.kt)("em",{parentName:"li"},"Preview")," testnet")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node-tests/pulls?q=is%3Apr+is%3Aclosed+updated%3A2023-01-13..2023-03-26"},"Full list of closed PRs")),(0,n.kt)("h3",{id:"node"},"Node:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ran tests on node branch with the UTxO-HD functionality"),(0,n.kt)("li",{parentName:"ul"},"tested the ",(0,n.kt)("a",{parentName:"li",href:"https://input-output-hk.github.io/cardano-node-tests/test_results/node/tag_1_35_5.html"},"1.35.5")," release"),(0,n.kt)("li",{parentName:"ul"},"tested the ",(0,n.kt)("a",{parentName:"li",href:"https://input-output-hk.github.io/cardano-node-tests/test_results/node/tag_1_35_6.html"},"1.35.6")," release")),(0,n.kt)("h3",{id:"db-sync"},"DB-Sync:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"improvements in db-sync sync tests"),(0,n.kt)("li",{parentName:"ul"},"improvements in db-sync functional tests")))}d.isMDXComponent=!0}}]);