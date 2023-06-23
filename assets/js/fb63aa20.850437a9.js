"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[58470],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),p=a,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},62389:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Performance & tracing update",slug:"2022-12-14-performance-and-tracing",authors:"deepfire",tags:["performance-tracing"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2022-12-14-performance-and-tracing",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-12-14-performance-and-tracing.md",source:"@site/blog/2022-12-14-performance-and-tracing.md",title:"Performance & tracing update",description:"High level summary",date:"2022-12-14T00:00:00.000Z",formattedDate:"December 14, 2022",tags:[{label:"performance-tracing",permalink:"/cardano-updates/tags/performance-tracing"}],readingTime:3.095,hasTruncateMarker:!1,authors:[{name:"Serge Kosyrev",title:"Performance and Tracing Team Lead",url:"https://github.com/deepfire",imageURL:"https://github.com/deepfire.png",key:"deepfire"}],frontMatter:{title:"Performance & tracing update",slug:"2022-12-14-performance-and-tracing",authors:"deepfire",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Node API & CLI Team Update",permalink:"/cardano-updates/2022-12-14-node-cli-api"},nextItem:{title:"Network Team Update",permalink:"/cardano-updates/2022-12-12-network"}},s={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Performance",id:"performance",level:2},{value:"Tracing",id:"tracing",level:2},{value:"Infrastructure",id:"infrastructure",level:2}],u={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"SECP benchmarking enablement was completed:  we are now able to do local runs of the SECP workloads.  The next step is to port this to the AWS environment."),(0,a.kt)("li",{parentName:"ol"},"A new workstream for Plutus cost modeling improvement:  we've planned and started implementing the smart contract call overhead measurement machinery."),(0,a.kt)("li",{parentName:"ol"},"The new tracing system:  after doing more benchmarking to address inter-run variance, we discovered that the regression, while still there, is small enough not to be release critical.  Nevertheless, we're continuing with the further performance-oriented rework of the internals."),(0,a.kt)("li",{parentName:"ol"},"Infrastructure:  a significant refactoring of the workbench internals was merged.  We also started improving the denotation for ever-evolving protocol parameters.  Comparative analysis of multi-run batches implementation started."),(0,a.kt)("li",{parentName:"ol"},"Open sourcing:  our plans matured sufficiently so that we now expect actual deployment work to start this week.")),(0,a.kt)("h2",{id:"performance"},"Performance"),(0,a.kt)("p",null,"The SECP benchmarking workload has been fully implemented in the workbench.  We are now porting it over to AWS, and after that we'll be running the model cluster workload."),(0,a.kt)("p",null,"We've also started implementing mechanics for the upcoming investigation of the Plutus smart contract call overhead, which is expected to lead us to improved Plutus cost modeling."),(0,a.kt)("h2",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"After the initial model-scale performance data caused us to panic, among other things we've done more benchmarks, and it turned out that inter-run variance increase was the culprit.  The actual regression averages to barely noticeable 1-2% in key metrics -- which is certainly not release critical."),(0,a.kt)("p",null,"To understand the impact of the new tracing system, we have to bear in mind the extra functionality it provides:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"We are now processing all messages generated by the system, without making any shortcuts that the old system had to resort to.  That causes the new tracing to do more work, but is more useful for all users and developers involved -- since it leads to a simple, non-confusing configuration.  Incidentally, that's also the area where we are reworking the internals, to deduce and enable the optimisations that are implied by the particular configuration."),(0,a.kt)("li",{parentName:"ol"},"The new tracing system is benchmarked with remote tracing as the default backend (whereas the old one was using local, builtin log storage mechanism).  In some sense it's the fair benchmark, because that's the way we expect SPO's to set up tracing.  That, however also causes it to do more work.")),(0,a.kt)("p",null,"All that said, since we've established the performance of the new system to be adequate for the release, we won't be delaying it much further."),(0,a.kt)("p",null,"In addition, we're still pursuing our performance-enhancing rework of the new tracing internals."),(0,a.kt)("h2",{id:"infrastructure"},"Infrastructure"),(0,a.kt)("p",null,"After implementing the multi-backend capability in the workbench, we got the opportunity to reassess the generic/backend boundaries and perform some long-awaited cleanups and simplifications in that area.  The results of this work have been merged and will serve as a solid foundation for the CI and cloud backends."),(0,a.kt)("p",null,"Moving to analysis, we've also improved provenance of the raw data, by collecting more identification information and statistics about it.\nThis means, e.g. that we now record checksums, message frequencies and timestamps from the log files coming into analysis.\nThis will be used to enable us to see more data anomalies earlier, and lift that information directly into the generated reports."),(0,a.kt)("p",null,"A new feature is now under implementation -- the ability to provide comparative analysis of multi-run batches.\nPreviously we only had automation for two aspects separately, so we only could either:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"compare individual runs (used for different node configurations / versions)"),(0,a.kt)("li",{parentName:"ul"},"collect variance statistics from a batch of runs (used to enhance statistical confidence for a single node configuration / version)\nNaturally, combining these two capabilities was a long-desired feature of our analysis pipeline.")))}d.isMDXComponent=!0}}]);