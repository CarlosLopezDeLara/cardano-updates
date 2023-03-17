"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[7696],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(r),c=a,y=d["".concat(i,".").concat(c)]||d[c]||u[c]||s;return r?n.createElement(y,o(o({ref:t},m),{},{components:r})):n.createElement(y,o({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const s={title:"System Test Team Update",slug:"2023-01-13-system-test",authors:"dorin100",tags:["system-test"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2023-01-13-system-test",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-01-13-system-test.md",source:"@site/blog/2023-01-13-system-test.md",title:"System Test Team Update",description:"High level summary",date:"2023-01-13T00:00:00.000Z",formattedDate:"January 13, 2023",tags:[{label:"system-test",permalink:"/cardano-updates/tags/system-test"}],readingTime:.91,hasTruncateMarker:!1,authors:[{name:"Dorin Solomon",title:"System Test Team Lead",url:"https://github.com/dorin100",imageURL:"https://github.com/dorin100.png",key:"dorin100"}],frontMatter:{title:"System Test Team Update",slug:"2023-01-13-system-test",authors:"dorin100",tags:["system-test"],hide_table_of_contents:!1},prevItem:{title:"Node Release Team Update",permalink:"/cardano-updates/2023-01-13-release"},nextItem:{title:"Mithril Team Update",permalink:"/cardano-updates/2023-01-12-mithril"}},i={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Workstreams",id:"workstreams",level:2},{value:"Framework improvements:",id:"framework-improvements",level:3},{value:"Node:",id:"node",level:3},{value:"DB-Sync:",id:"db-sync",level:3}],m={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"During the last 2 weeks we did more improvements on our Test Framework, ran some sanity tests related to the ",(0,a.kt)("em",{parentName:"p"},"P2P Single\nRelay")," functionality."),(0,a.kt)("p",null,"We also update the Node & DB-Sync sync tets to build with Nix as the prebuilt files are no longer available at PR level."),(0,a.kt)("h2",{id:"workstreams"},"Workstreams"),(0,a.kt)("h3",{id:"framework-improvements"},"Framework improvements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"extended the ",(0,a.kt)("em",{parentName:"li"},"cardano-node-tests")," with the ability for anybody to fork the repo and ",(0,a.kt)("a",{parentName:"li",href:"https://input-output-hk.github.io/cardano-node-tests/readme.html"},"run all our System Tests on GitHub Actions")),(0,a.kt)("li",{parentName:"ul"},"added 2 new nightly pipelines - nightly-mixed and nightly-p2p - ",(0,a.kt)("a",{parentName:"li",href:"https://input-output-hk.github.io/cardano-node-tests/test_results/nightly_system_tests.html"},"details here")),(0,a.kt)("li",{parentName:"ul"},"some optimizations on how our regression tests are scheduled on pytest workers and how cluster instances are assigned to the tests;")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"  === 743 passed, 67 skipped, 24 xfailed in 9166.64s (2:32:46) ===\n  to\n  === 753 passed, 67 skipped, 14 xfailed in 4654.80s (1:17:34) ===")),(0,a.kt)("h3",{id:"node"},"Node:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ran a couple of sanity runs of CLI a& sync tests on a local branch with P2P Single Relay enabled"),(0,a.kt)("li",{parentName:"ul"},"started the preparations for testing the next tag - ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node-tests/blob/tag_test_1.35.5_rc1/src_docs/source/test_results/node/tag_1_35_5_rc1.rst"},"details here"))),(0,a.kt)("h3",{id:"db-sync"},"DB-Sync:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"some improvements on db-sync sync tests")))}u.isMDXComponent=!0}}]);