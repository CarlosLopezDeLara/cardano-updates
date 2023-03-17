"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[7490],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},34691:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Network Team Update",slug:"2022-12-12-network",authors:"coot",tags:["network","release"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2022-12-12-network",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-12-12-network.md",source:"@site/blog/2022-12-12-network.md",title:"Network Team Update",description:"High level summary",date:"2022-12-12T00:00:00.000Z",formattedDate:"December 12, 2022",tags:[{label:"network",permalink:"/cardano-updates/tags/network"},{label:"release",permalink:"/cardano-updates/tags/release"}],readingTime:.43,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2022-12-12-network",authors:"coot",tags:["network","release"],hide_table_of_contents:!1},prevItem:{title:"Performance & tracing update",permalink:"/cardano-updates/2022-12-14-performance-and-tracing"},nextItem:{title:"Crypto Team Update",permalink:"/cardano-updates/2022-12-09-crypto"}},p={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"In last sprint the team focused on preparations for the conference talk at\n",(0,a.kt)("a",{parentName:"p",href:"https://sites.uclouvain.be/OPODIS2022/"},"OPODIS 2022"),".  We also worked on preparations to publish ",(0,a.kt)("inlineCode",{parentName:"p"},"io-sim")," and related\npackages on Hackage (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/io-sim/pull/57"},"PR #57"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/io-sim/pull/60"},"PR #60"),")."),(0,a.kt)("p",null,"We also started reviewing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ouroboros-network")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cardano-node")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cardano-ledger"),"\nrepositories for open-source readiness (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4218"},"PR #4128"),").")),(0,a.kt)("p",null,"We prepared a PR which changes how ",(0,a.kt)("inlineCode",{parentName:"p"},"node-to-node")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"node-to-client")," protocol\nversiones are serialised in ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-node")," log (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/pull/4691"},"PR #4691"),")."))}s.isMDXComponent=!0}}]);