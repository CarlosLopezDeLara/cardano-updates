"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[84773],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),p=a,f=u["".concat(c,".").concat(p)]||u[p]||m[p]||i;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},77907:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const i={title:"Performance & tracing update",slug:"2023-06-14-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2023-06-14-performance-and-tracing",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-06-14-performance-and-tracing.md",source:"@site/blog/2023-06-14-performance-and-tracing.md",title:"Performance & tracing update",description:"High level summary",date:"2023-06-14T00:00:00.000Z",formattedDate:"June 14, 2023",tags:[{label:"performance-tracing",permalink:"/cardano-updates/tags/performance-tracing"}],readingTime:1.515,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Engineer",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Performance & tracing update",slug:"2023-06-14-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2023-06-14-consensus"},nextItem:{title:"Network Team Update",permalink:"/cardano-updates/2023-06-12-network"}},c={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level overview",id:"low-level-overview",level:2},{value:"Benchmarking",id:"benchmarking",level:3},{value:"Tracing",id:"tracing",level:3},{value:"Nomad backend",id:"nomad-backend",level:3}],d={toc:s};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Benchmarking: We've continued release benchmarking and established a new baseline for ",(0,a.kt)("inlineCode",{parentName:"li"},"8.0.0"),"."),(0,a.kt)("li",{parentName:"ul"},"New tracing: Our benchmarking profile for measuring new vs. legacy tracing performance has been refined."),(0,a.kt)("li",{parentName:"ul"},"Nomad backend: The healthcheck system for the the nomad cloud has been completed. We've performed the first full runs on the new backend.")),(0,a.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("h3",{id:"benchmarking"},"Benchmarking"),(0,a.kt)("p",null,"In our release benchmarking cycle, we established a new performance baseline for ",(0,a.kt)("inlineCode",{parentName:"p"},"8.0.0"),". Additionally, we've measured\nperformance under various workloads for ",(0,a.kt)("inlineCode",{parentName:"p"},"8.1.1-pre"),"; the results look promising and validate the optimization efforts\ndone on several system components.  "),(0,a.kt)("p",null,"In the meantime, we've finalized a build plan with GHC9.2 that matches the current one with GHC8.10; a requirement for\nbenchmarking as a large amount of differences in the dependency graph can confound the results for the application code proper."),(0,a.kt)("h3",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"The legacy and the new tracing system differ fundamentally in design, implementation and handling. So for metrics to be\nmeaningful in a comparison, benchmarking profiles have to be tuned such that not only log line frequency but frequency of specific\ntrace messages are closely aligned. We've found that higher granularity in this regard was necessary, and done additional work on our dedicated profiles.  "),(0,a.kt)("p",null,"Additionally, we've had a first glance of what additional traces could be valuable in the context of benchmarking UTxO-HD."),(0,a.kt)("h3",{id:"nomad-backend"},"Nomad backend"),(0,a.kt)("p",null,"As the new backend's healthcheck system in its first iteration can now serve as a guardrail to ensure sanity of a full-length run, we've performed our first 52-node cluster runs on nomad cloud. We're currently smoothing the edges around cluster deployment, and analysing the metrics gathered from those runs.  "),(0,a.kt)("p",null,"This means the backend is entering validation phase, where we systematically compare all metrics taken from the new\ninfrastructure to the existing ones, including determining reproducibility and variance."))}m.isMDXComponent=!0}}]);