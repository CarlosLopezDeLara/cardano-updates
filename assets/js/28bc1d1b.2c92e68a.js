"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[1285],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(r),c=a,k=d["".concat(i,".").concat(c)]||d[c]||p[c]||s;return r?n.createElement(k,o(o({ref:t},m),{},{components:r})):n.createElement(k,o({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41578:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const s={title:"System Test Team Update",slug:"2023-06-08-system-test",authors:"mkoura",tags:["system-test"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2023-06-08-system-test",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-06-08-system-test.md",source:"@site/blog/2023-06-08-system-test.md",title:"System Test Team Update",description:"High level summary",date:"2023-06-08T00:00:00.000Z",formattedDate:"June 8, 2023",tags:[{label:"system-test",permalink:"/cardano-updates/tags/system-test"}],readingTime:1.005,hasTruncateMarker:!1,authors:[{name:"Martin Kourim",title:"System Test Engineer",url:"https://github.com/mkoura",imageURL:"https://github.com/mkoura.png",key:"mkoura"}],frontMatter:{title:"System Test Team Update",slug:"2023-06-08-system-test",authors:"mkoura",tags:["system-test"],hide_table_of_contents:!1},prevItem:{title:"SRE Team Update",permalink:"/cardano-updates/2023-06-08-sre"},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-06-02-hydra"}},i={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Workstreams",id:"workstreams",level:2},{value:"Framework improvements:",id:"framework-improvements",level:3},{value:"Testing improvements",id:"testing-improvements",level:3},{value:"Node:",id:"node",level:3},{value:"DB-Sync:",id:"db-sync",level:3}],m={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"Since the last update (2023-03-26) we did more improvements on our Test Framework, added more automated tests, kept analyzing and fixing nightly jobs failures, tested the ",(0,a.kt)("em",{parentName:"p"},"1.35.7")," and ",(0,a.kt)("em",{parentName:"p"},"8.0.0")," releases."),(0,a.kt)("h2",{id:"workstreams"},"Workstreams"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node-tests/pulls?page=1&q=is%3Apr+is%3Aclosed+updated%3A2023-03-26..2023-06-08"},"Full list of closed PRs")),(0,a.kt)("h3",{id:"framework-improvements"},"Framework improvements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make cardano-submit-api REST API service available and run corresponding regression tests by default"),(0,a.kt)("li",{parentName:"ul"},"Update cabal build testing for 8.0.0"),(0,a.kt)("li",{parentName:"ul"},"Add support for testing governance SPO poll"),(0,a.kt)("li",{parentName:"ul"},"Use Poetry for Python dependency management"),(0,a.kt)("li",{parentName:"ul"},"Check status of known GH issues during tests runtime and finish the test accordingly"),(0,a.kt)("li",{parentName:"ul"},"Generate topology files with both IP addresses and DNS names"),(0,a.kt)("li",{parentName:"ul"},"Log issues like failure to start a cluster instance and report errors during tests runtime")),(0,a.kt)("h3",{id:"testing-improvements"},"Testing improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add rollback testing:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"global consensus is reached after rollback, in situation where less than ",(0,a.kt)("inlineCode",{parentName:"li"},"securityParam")," blocks were produced since cluster split"),(0,a.kt)("li",{parentName:"ol"},"global consensus is not reached when more than ",(0,a.kt)("inlineCode",{parentName:"li"},"securityParam")," blocks were produced, and the result is permanent fork"))),(0,a.kt)("li",{parentName:"ul"},"Add tests to governance SPO poll commands")),(0,a.kt)("h3",{id:"node"},"Node:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"tested the ",(0,a.kt)("a",{parentName:"li",href:"https://input-output-hk.github.io/cardano-node-tests/test_results/node/tag_1_35_7.html"},"1.35.7")," release"),(0,a.kt)("li",{parentName:"ul"},"tested the ",(0,a.kt)("a",{parentName:"li",href:"https://input-output-hk.github.io/cardano-node-tests/test_results/node/tag_8_0_0.html"},"8.0.0")," release")),(0,a.kt)("h3",{id:"db-sync"},"DB-Sync:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"improvements in db-sync sync tests"),(0,a.kt)("li",{parentName:"ul"},"improvements in db-sync functional tests")))}p.isMDXComponent=!0}}]);