"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[46846],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),u=a,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return t?r.createElement(h,o(o({ref:n},d),{},{components:t})):r.createElement(h,o({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},66876:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={title:"Performance & tracing update",slug:"2023-04-19-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},o="High level summary",l={permalink:"/cardano-updates/2023-04-19-performance-and-tracing",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-04-19-performance-and-tracing.md",source:"@site/blog/2023-04-19-performance-and-tracing.md",title:"Performance & tracing update",description:"* Benchmarking: We performed a series of benchmarks aimed at the new 8.0 release branch and built a timeline from the 1.35 releases to that branch.",date:"2023-04-19T00:00:00.000Z",formattedDate:"April 19, 2023",tags:[{label:"performance-tracing",permalink:"/cardano-updates/tags/performance-tracing"}],readingTime:2.575,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Engineer",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Performance & tracing update",slug:"2023-04-19-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2023-04-19-consensus"},nextItem:{title:"Incident Report",permalink:"/cardano-updates/2023-04-17-ledger"}},s={authorsImageUrls:[void 0]},c=[{value:"Detailed manifest",id:"detailed-manifest",level:3},{value:"GHC profiling inside workbench",id:"ghc-profiling-inside-workbench",level:3},{value:"Nomad backend",id:"nomad-backend",level:3}],d={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Benchmarking: We performed a series of benchmarks aimed at the new ",(0,a.kt)("inlineCode",{parentName:"li"},"8.0")," release branch and built a timeline from the ",(0,a.kt)("inlineCode",{parentName:"li"},"1.35")," releases to that branch."),(0,a.kt)("li",{parentName:"ul"},"New tracing: Work on safeguarding the new tracing system performance-wise is ongoing. A practical use case for data points is being tackled with Galois."),(0,a.kt)("li",{parentName:"ul"},"Analysis pipeline: We're working on automatically obtaining a detailed manifest for each run."),(0,a.kt)("li",{parentName:"ul"},"Infrastructure: The library for benchmarking Plutus scripts has been merged. Also, we've laid the ground for including GHC profiling data into our workbench."),(0,a.kt)("li",{parentName:"ul"},"Nomad backend: The first iteration of a distributed / multi-client Nomad cluster has been merged.")),(0,a.kt)("h1",{id:"benchmarking"},"Benchmarking"),(0,a.kt)("p",null,"We have performed various cluster runs targeting the ",(0,a.kt)("inlineCode",{parentName:"p"},"8.0")," release branch. That way we were able to catch an inconsistency in behaviour early on. This led to the creation of a specialized workbench profile ",(0,a.kt)("inlineCode",{parentName:"p"},"epoch-transition")," for local reproduction of what we observed on the benchmarking cluster.  "),(0,a.kt)("p",null,"Furthermore, we bridged the gap between the run data from the ",(0,a.kt)("inlineCode",{parentName:"p"},"1.35.x")," releases to the the new ",(0,a.kt)("inlineCode",{parentName:"p"},"8.0.x")," release branch. This included walking the\n",(0,a.kt)("inlineCode",{parentName:"p"},"master")," branch backwards and pinpointing the order, as well as the dates and commits of all relevant component bumps. This timeline is absolutely crucial\nin locating possible regressions for the new release branch, as it provides the exact points in history we would need to target with a comprehensive set of\nbenchmarks."),(0,a.kt)("h1",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"In-depth performance analysis of the new tracing system has already yielded results and helped us smoothing some rough edges. However, this work is still\nongoing.  "),(0,a.kt)("p",null,"In coordination with Galois, who are developing a system assurance service by observing a number of ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-node"),"s, we're working with the implementation\nof data points which the node provides during runtime. While making the view on data points expressive enough for the external service, the computational\nburden inside the node needs to be kept to an absolute minimum. We're currently in ideation about whether ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-tracer")," could be extended with a richer\nfeature set to that end."),(0,a.kt)("h1",{id:"infrastructure--analysis"},"Infrastructure & Analysis"),(0,a.kt)("h3",{id:"detailed-manifest"},"Detailed manifest"),(0,a.kt)("p",null,"A run manifest documents, among other things, the component dependencies that were used for a specific build the run has been performed with.\nThese dependencies come from different package sources, have different versioning policies, and an identical package version might provide different\nperformance characteristics depending on the exact commit used for the build. This manifest will greatly increase insight into where changes in measured behaviour might have originated\nby making all component bumps visible and accessible."),(0,a.kt)("h3",{id:"ghc-profiling-inside-workbench"},"GHC profiling inside workbench"),(0,a.kt)("p",null,"The workbench has been equipped with a new ",(0,a.kt)("inlineCode",{parentName:"p"},"-profnix")," profile flavour. This enforces a ",(0,a.kt)("inlineCode",{parentName:"p"},"-fprof-auto")," build for all node-related packages. The type of\nprofiling data generated by the GHC runtime can be customized and will enter statistical analysis. The relevant PR for this new feature has already\nbeen merged to ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),"."),(0,a.kt)("h3",{id:"nomad-backend"},"Nomad backend"),(0,a.kt)("p",null,"The added feature for a multi-client Nomad cluster greatly enhances how jobs are organized by the backend and mapped within specific instances.\nThis results in great maintainability while not giving up on flexibility. However, work on that feature is still ongoing."))}m.isMDXComponent=!0}}]);