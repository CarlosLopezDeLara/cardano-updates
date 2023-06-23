"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[60247],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72396:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Performance & Tracing Team Update",slug:"2022-10-28-performance-and-tracing",authors:"deepfire",tags:["performance-tracing"],hide_table_of_contents:!1},i=void 0,c={permalink:"/cardano-updates/2022-10-28-performance-and-tracing",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-10-28-performance-and-tracing.md",source:"@site/blog/2022-10-28-performance-and-tracing.md",title:"Performance & Tracing Team Update",description:"High level summary",date:"2022-10-28T00:00:00.000Z",formattedDate:"October 28, 2022",tags:[{label:"performance-tracing",permalink:"/cardano-updates/tags/performance-tracing"}],readingTime:1.155,hasTruncateMarker:!1,authors:[{name:"Serge Kosyrev",title:"Performance and Tracing Team Lead",url:"https://github.com/deepfire",imageURL:"https://github.com/deepfire.png",key:"deepfire"}],frontMatter:{title:"Performance & Tracing Team Update",slug:"2022-10-28-performance-and-tracing",authors:"deepfire",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Network Team Update",permalink:"/cardano-updates/2022-10-28-network"},nextItem:{title:"SRE Team Update",permalink:"/cardano-updates/2022-08-12-sre"}},l={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Executive summary",id:"executive-summary",level:2}],p={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"On the performance side, the team ran benchmarks for the the P2P feature and the 1.35.4 release.  We finished a prototype for performance data publishing.  We almost finished the local deployment backend for the workbench using the new SRE deployment infra.  We worked on fixing and improving our data analysis pipeline."),(0,a.kt)("p",null,"On the tracing side, the team worked on isolating a critical issue causing message loss in the remote tracing backend.  The issue was resolved and we now have proper end-to-end coverage for the scenario."),(0,a.kt)("h2",{id:"executive-summary"},"Executive summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The new tracing system public release is getting closer, as we're resolving remaining rough edges that are discovered in full-scale deployments.  The local benchmarks we ran were already showing improvement relative to legacy tracing, so we expect similar results at full scale."),(0,a.kt)("li",{parentName:"ul"},"The first (local deployment) iteration of benchmarking adopting the new SRE deployment infra is nearly done.  We thank Michael Fellinger and Robin Stumm for their assistance.  Two further phases remain:  CI integration and cloud deployment."),(0,a.kt)("li",{parentName:"ul"},"The benchmarking data publishing prototype is ready.  This serves as a springboard for both opening our performance assessment workflow (to support the wider Cardano developer community), and for data provision to the business community.  Our next steps are to secure a permanent deployment for this mechanism and to integrate it into the benchmarking infrastructure.  This requires collaboration with SRE.")))}u.isMDXComponent=!0}}]);