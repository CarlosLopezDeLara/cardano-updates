"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[95018],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},10437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Performance & tracing update",slug:"2023-06-28-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},i=void 0,c={permalink:"/cardano-updates/2023-06-28-performance-and-tracing",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-06-28-performance-and-tracing.md",source:"@site/blog/2023-06-28-performance-and-tracing.md",title:"Performance & tracing update",description:"High level summary",date:"2023-06-28T00:00:00.000Z",formattedDate:"June 28, 2023",tags:[{label:"performance-tracing",permalink:"/cardano-updates/tags/performance-tracing"}],readingTime:1.885,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Engineer",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Performance & tracing update",slug:"2023-06-28-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2023-06-28-consensus"},nextItem:{title:"Goedel Team Update",permalink:"/cardano-updates/2023-06-23-goedel"}},l={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level overview",id:"low-level-overview",level:2},{value:"Benchmarking",id:"benchmarking",level:3},{value:"Infrastructure",id:"infrastructure",level:3},{value:"Tracing",id:"tracing",level:3},{value:"Nomad backend",id:"nomad-backend",level:3}],d={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Benchmarking: We've performed several new benchmarks and a performance investigation in preparation of switching the default compiler to GHC9."),(0,a.kt)("li",{parentName:"ul"},"Infrastructure: The first batch of refactoring and documentation for our ",(0,a.kt)("inlineCode",{parentName:"li"},"tx-generator")," has been merged to ",(0,a.kt)("inlineCode",{parentName:"li"},"master"),"."),(0,a.kt)("li",{parentName:"ul"},"Tracing: We've looked into an issue where the tracing system's concurrency could prevent a graceful node shutdown."),(0,a.kt)("li",{parentName:"ul"},"Nomad backend: Our new cloud backend has seen various improvements regarding deployment and monitoring; validation runs for the backend are ongoing.")),(0,a.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("h3",{id:"benchmarking"},"Benchmarking"),(0,a.kt)("p",null,"The compiler switch to GHC9 as the default build platform for ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-node")," and its components still has noticeable effects on system-wide performance metrics. An investigation into the different resource usage profiles of compiler versions does seem to indicate GHC9's significantly different inlining behaviour may produce those effects. We're currently locating the specific places in component code that have the most extensive effect in that regard.  "),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"forge-stress")," approximation we set up, we could determine that above effect is not due to a range of RTS parameters, as for example the number of capabilites used by the node."),(0,a.kt)("h3",{id:"infrastructure"},"Infrastructure"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tx-generator")," is a crucial part of our tooling responsible for producing very specific workloads for our benchmarking cluster. In an effort to flesh out an API to make it reusable for more general use cases, a first set of refactorings has been merged to ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),". Additionally, this merge contained systematic documentation both for internal and for exposed areas of the code base."),(0,a.kt)("h3",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"The tracing system's concurrency could under certain conditions prevent a graceful shutdown of the node. This issue did occur only after adding specific new traces on a development branch. We could localize and address that issue."),(0,a.kt)("h3",{id:"nomad-backend"},"Nomad backend"),(0,a.kt)("p",null,"With the data gathered from running the new nomad cloud backend, we've been able to address many, many small and medium-sized improvements. The deployment process has been restructured for better efficiency, and the healthcheck system could be fine-tuned to recognize severity of various conditions that might occur. Optimization of fetching all run data from the cloud for evaluation is in progress."),(0,a.kt)("p",null,"Additionally, we're continuing the new backend's validation by setting up test runs and looking into comparative analyses with metrics gathered from the current cluster backend."))}m.isMDXComponent=!0}}]);