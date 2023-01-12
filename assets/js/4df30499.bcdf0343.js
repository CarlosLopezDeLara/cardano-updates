"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[1951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Performance & tracing update",slug:"2023-01-11-performance-and-tracing",authors:"deepfire",tags:["performance-tracing"],hide_table_of_contents:!1},i=void 0,c={permalink:"/cardano-updates/2023-01-11-performance-and-tracing",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-01-11-performance-and-tracing.md",source:"@site/blog/2023-01-11-performance-and-tracing.md",title:"Performance & tracing update",description:"High level summary",date:"2023-01-11T00:00:00.000Z",formattedDate:"January 11, 2023",tags:[{label:"performance-tracing",permalink:"/cardano-updates/tags/performance-tracing"}],readingTime:1.865,hasTruncateMarker:!1,authors:[{name:"Serge Kosyrev",title:"Performance and Tracing Team Lead",url:"https://github.com/deepfire",imageURL:"https://github.com/deepfire.png",key:"deepfire"}],frontMatter:{title:"Performance & tracing update",slug:"2023-01-11-performance-and-tracing",authors:"deepfire",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2023-01-11-consensus"},nextItem:{title:"Crypto Team Update",permalink:"/cardano-updates/2023-01-06-crypto"}},l={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Performance",id:"performance",level:2},{value:"Tracing",id:"tracing",level:2},{value:"Infrastructure",id:"infrastructure",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"Since our last update, we focused on infrastructure work:  benchmark enablement, tracing system, benchmark environment merge and open source support:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"SECP benchmarking enablement is underway:  enabling SECP runs in our cardano-ops benchmarking environment is still in progress."),(0,a.kt)("li",{parentName:"ol"},"The new tracing system:  the improved API of the new tracing system was implemented, and we're now porting the tracing integration layer over."),(0,a.kt)("li",{parentName:"ol"},"Infrastructure:  the mainnet protocol parameter history is now encoded in the workbench profile machinery at epoch-level granularity, which gives us a systematic approach towards description of past and future benchmarks."),(0,a.kt)("li",{parentName:"ol"},"New benchmark deployment infrastructure:  we've made some progress on Nomad deployment backend, shared by both of the data publishing and benchmarking needs."),(0,a.kt)("li",{parentName:"ol"},"Legacy benchmarking:  we've started merging the legacy benchmark deployment infrastructure into the workbench."),(0,a.kt)("li",{parentName:"ol"},"Open sourcing:  the benchmarking data publishing tool was adapted to the Nomad execution environment provided by SRE, pending final deployment.")),(0,a.kt)("h2",{id:"performance"},"Performance"),(0,a.kt)("p",null,"The AWS cluster infrastructure necessary for SECP benchmarking is still being worked on."),(0,a.kt)("h2",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"The improved tracing internals were implemented, and we're now into the phase of updating the tracing integration, which is also mostly done."),(0,a.kt)("h2",{id:"infrastructure"},"Infrastructure"),(0,a.kt)("p",null,"Thanks to collaboration with the DevX team, we have identified and pursued a design that would enable our Nomad workbench backend to execute deployments of both the benchmarking cluster and our data publishing components."),(0,a.kt)("p",null,"On the benchmark parametrisation front, we have eliminated a long-standing weakness in the way we were specifying the protocol parameters.\nWe now have a very clear and granular method to keep track of protocol parameter evolution -- e.g. the mainnet history changes are now tracked at epoch granularity, while also allowing for systematically described change overlays.  This makes the benchmark profile definition much more clear and robust against mistakes."),(0,a.kt)("p",null,"We also started a merge of the legacy benchmarking environment (based on cardano-ops) into the workbench.  The separation between environments was too costly, causing us to reimplement any benchmarking change twice -- first, during development, in the workbench, then in cardano-ops.  In addition, maintenance of compatibility code was incurring additional costs, slowing benchmark data analysis development.\nOnce this merge is complete, this will allow us to sharply cut the benchmark development cycle and overheads."))}m.isMDXComponent=!0}}]);