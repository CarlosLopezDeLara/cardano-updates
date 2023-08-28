"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[83247],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85869:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={title:"Performance & tracing update",slug:"2023-08-24-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2023-08-24-performance-and-tracing",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-08-24-performance-and-tracing.md",source:"@site/blog/2023-08-24-performance-and-tracing.md",title:"Performance & tracing update",description:"High level summary",date:"2023-08-24T00:00:00.000Z",formattedDate:"August 24, 2023",tags:[{label:"performance-tracing",permalink:"/cardano-updates/tags/performance-tracing"}],readingTime:1.7,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Team Lead",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Performance & tracing update",slug:"2023-08-24-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/cardano-updates/2023-08-28-mithril"},nextItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2023-08-23-consensus"}},c={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level overview",id:"low-level-overview",level:2},{value:"Benchmarking",id:"benchmarking",level:3},{value:"Infrastructure",id:"infrastructure",level:3},{value:"Tracing",id:"tracing",level:3},{value:"Nomad backend",id:"nomad-backend",level:3}],p={toc:s},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Benchmarking: Benchmarking node version ",(0,a.kt)("inlineCode",{parentName:"li"},"8.2.1")," has concluded. Additionally we're developing benchmarking setups for GHC9.6 and UTxO-HD."),(0,a.kt)("li",{parentName:"ul"},"Infrastructure: Our analysis pipeline has received improvements reducing memory footprint."),(0,a.kt)("li",{parentName:"ul"},"Tracing: Another batch of optimizations for the new tracing system has been merged; work on namespace consistency guarantees is ongoing."),(0,a.kt)("li",{parentName:"ul"},"Nomad backend: We're performing and analysing various runs for validation purposes on the new hardware cluster.")),(0,a.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("h3",{id:"benchmarking"},"Benchmarking"),(0,a.kt)("p",null,"We've performed and analysed the benchmarks for the ",(0,a.kt)("inlineCode",{parentName:"p"},"8.2.1")," version of ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-node")," as part of our release benchmarking cycle.  "),(0,a.kt)("p",null,"Setting up cluster benchmarks requires completing full system integration. This applies to both supporting a new build platform, as is GHC9.6, as well as targeting a specific feature, like a UTxO-HD enabled node. Currently, we're working on respective integrations on both those paths."),(0,a.kt)("h3",{id:"infrastructure"},"Infrastructure"),(0,a.kt)("p",null,"As cluster runs increase in duration, more and more data is accumulated for analysis. Batch analysis mode needs all data to be held\nin memory, which wouldn't fit anymore even on a 64GB RAM machine. Changes to the in-memory data representation improving on compactness were able to reduce the RAM requirements of our analysis pipeline."),(0,a.kt)("h3",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"The next portion of optimizations has been completed and merged to ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),", getting rid of Haskell's native ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," representation on critical code paths. This concludes the optimization phase of the new tracing system for all its components used by ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-node"),".  "),(0,a.kt)("p",null,"The implementation for validation of consistent naming and configuration is ongoing. We're splitting out everything that's verifiable at compile time into a seperate test case which we hope to integrate into CI - leaving only configuration constraints to be verified at or before node startup."),(0,a.kt)("h3",{id:"nomad-backend"},"Nomad backend"),(0,a.kt)("p",null,"The verification phase of the nomad cloud backend is ongoing. We're able to perform full runs on the new hardware cluster\nand porting profiles and configurations from the legacy one. The goal is to reproduce with confidence known regressions, or improvements, between runs performed on the legacy cluster and runs performed with the new backend."))}u.isMDXComponent=!0}}]);