"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[3050],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(r),c=a,h=d["".concat(i,".").concat(c)]||d[c]||p[c]||s;return r?n.createElement(h,o(o({ref:t},m),{},{components:r})):n.createElement(h,o({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10313:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const s={title:"System Test Team Update",slug:"2023-03-27-system-test",authors:"mkoura",tags:["system-test"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2023-03-27-system-test",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-03-27-system-test.md",source:"@site/blog/2023-03-27-system-test.md",title:"System Test Team Update",description:"High level summary",date:"2023-03-27T00:00:00.000Z",formattedDate:"March 27, 2023",tags:[{label:"system-test",permalink:"/cardano-updates/tags/system-test"}],readingTime:.785,hasTruncateMarker:!1,authors:[{name:"Martin Kourim",title:"System Test Engineer",url:"https://github.com/mkoura",imageURL:"https://github.com/mkoura.png",key:"mkoura"}],frontMatter:{title:"System Test Team Update",slug:"2023-03-27-system-test",authors:"mkoura",tags:["system-test"],hide_table_of_contents:!1},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-03-24-hydra"}},i={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Workstreams",id:"workstreams",level:2},{value:"Framework improvements:",id:"framework-improvements",level:3},{value:"Node:",id:"node",level:3},{value:"DB-Sync:",id:"db-sync",level:3}],m={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"Since the last update (2023-1-13) we did more improvements on our Test Framework, added more automated tests, kept analyzing and fixing nightly jobs failures, tested the ",(0,a.kt)("em",{parentName:"p"},"1.35.5")," and ",(0,a.kt)("em",{parentName:"p"},"1.35.6")," releases (and their predecessing release candidates) and ran tests on branch with the ",(0,a.kt)("em",{parentName:"p"},"UTxO-HD")," functionality."),(0,a.kt)("h2",{id:"workstreams"},"Workstreams"),(0,a.kt)("h3",{id:"framework-improvements"},"Framework improvements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"improvements in searching for unexpected error messages in log files during test run"),(0,a.kt)("li",{parentName:"ul"},"added support for UTxO-HD testing"),(0,a.kt)("li",{parentName:"ul"},"added support for the new P2P topology format"),(0,a.kt)("li",{parentName:"ul"},"added local cluster variant that has the same properties as mainnet (epoch length, fees, etc.)"),(0,a.kt)("li",{parentName:"ul"},"added preliminary support for the Conway era"),(0,a.kt)("li",{parentName:"ul"},"added support for running tests on the ",(0,a.kt)("em",{parentName:"li"},"Preview")," testnet")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node-tests/pulls?q=is%3Apr+is%3Aclosed+updated%3A2023-01-13..2023-03-26"},"Full list of closed PRs")),(0,a.kt)("h3",{id:"node"},"Node:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ran tests on node branch with the UTxO-HD functionality"),(0,a.kt)("li",{parentName:"ul"},"tested the ",(0,a.kt)("a",{parentName:"li",href:"https://input-output-hk.github.io/cardano-node-tests/test_results/node/tag_1_35_5.html"},"1.35.5")," release"),(0,a.kt)("li",{parentName:"ul"},"tested the ",(0,a.kt)("a",{parentName:"li",href:"https://input-output-hk.github.io/cardano-node-tests/test_results/node/tag_1_35_6.html"},"1.35.6")," release")),(0,a.kt)("h3",{id:"db-sync"},"DB-Sync:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"improvements in db-sync sync tests"),(0,a.kt)("li",{parentName:"ul"},"improvements in db-sync functional tests")))}p.isMDXComponent=!0}}]);