"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[16171],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return t?a.createElement(f,o(o({ref:n},d),{},{components:t})):a.createElement(f,o({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},21351:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const i={title:"Performance & tracing update",slug:"2023-05-03-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},o="High level summary",l={permalink:"/cardano-updates/2023-05-03-performance-and-tracing",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-05-03-performance-and-tracing.md",source:"@site/blog/2023-05-03-performance-and-tracing.md",title:"Performance & tracing update",description:"* Benchmarking: The benchmarks and performance investigations for the new 8.0 release branch are ongoing.",date:"2023-05-03T00:00:00.000Z",formattedDate:"May 3, 2023",tags:[{label:"performance-tracing",permalink:"/cardano-updates/tags/performance-tracing"}],readingTime:1.76,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Engineer",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Performance & tracing update",slug:"2023-05-03-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2023-05-03-consensus"},nextItem:{title:"DB-sync Team Update",permalink:"/cardano-updates/2023-05-01-db-sync"}},c={authorsImageUrls:[void 0]},s=[{value:"Dataflow documentation",id:"dataflow-documentation",level:3},{value:"Remove redundant Plutus flake input",id:"remove-redundant-plutus-flake-input",level:3},{value:"Nomad backend",id:"nomad-backend",level:3}],d={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Benchmarking: The benchmarks and performance investigations for the new ",(0,r.kt)("inlineCode",{parentName:"li"},"8.0")," release branch are ongoing."),(0,r.kt)("li",{parentName:"ul"},"New tracing: Performance optimization of the new tracing system is paying off and we could notably shrink its resource footprint."),(0,r.kt)("li",{parentName:"ul"},"Analysis pipeline: An exhaustive documentation and dataflow diagram for our analyses is being worked on."),(0,r.kt)("li",{parentName:"ul"},"Infrastructure: The ",(0,r.kt)("inlineCode",{parentName:"li"},"plutus-apps")," flake input for ",(0,r.kt)("inlineCode",{parentName:"li"},"cardano-node")," has finally been removed."),(0,r.kt)("li",{parentName:"ul"},"Nomad backend: A PR implementing placement of benchmarking clusters has been merged.")),(0,r.kt)("h1",{id:"benchmarking"},"Benchmarking"),(0,r.kt)("p",null,"The performance investigations on the ",(0,r.kt)("inlineCode",{parentName:"p"},"8.0")," release branch have lead to pinpointing and addressing incosistent behaviour. For that,\nwe created yet another local reproduction with the workbench's ",(0,r.kt)("inlineCode",{parentName:"p"},"forge-stress")," benchmark.  "),(0,r.kt)("p",null,"Currently we're working on scaling up the dataset size (UTxO and delegations) on the AWS cluster to gain further insight into ",(0,r.kt)("inlineCode",{parentName:"p"},"8.0")," and\nsubsequent releases.  "),(0,r.kt)("p",null,"Additionally, we've refined the ",(0,r.kt)("inlineCode",{parentName:"p"},"trace-bench")," family of profiles that target benchmarking our own new tracing system. "),(0,r.kt)("h1",{id:"tracing"},"Tracing"),(0,r.kt)("p",null,"Optimization of the tracing system has identified several locations where inefficient serializations were used; those were not originally\nintended to run on a performance-critical codepath. We've worked on improving those, as well as eliminating cases of redundant\nconversion between different serialization formats. This has brought down both memory and CPU impact of the tracing system."),(0,r.kt)("h1",{id:"infrastructure--analysis"},"Infrastructure & Analysis"),(0,r.kt)("h3",{id:"dataflow-documentation"},"Dataflow documentation"),(0,r.kt)("p",null,"The LogObject CLI ",(0,r.kt)("inlineCode",{parentName:"p"},"locli")," is at the heart of our analysis and reporting pipeline. To increase its accessibility and facilitate\nfurther development, we're creating a detailed and illustrated documentation of all dataflows that happen during analysis and reporting. "),(0,r.kt)("h3",{id:"remove-redundant-plutus-flake-input"},"Remove redundant Plutus flake input"),(0,r.kt)("p",null,"This step is the conclusion of porting Plutus benchmarking scripts to our own library. By finally removing the now unnecessary flake input,\nwe simplify the dependency graph for ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-node"),", as well as enable immediate feedback when developing Plutus benchmarks."),(0,r.kt)("h3",{id:"nomad-backend"},"Nomad backend"),(0,r.kt)("p",null,"Sophisticated placement of nodes across various regions of the globe is a cornerstone of the model cluster we use for benchmarking.\nThis capability has now been added to the Nomad backend and can be controlled with Nomad job descriptions. A PR with this, along\nwith various quality-of-life improvements, has been merged to ",(0,r.kt)("inlineCode",{parentName:"p"},"master"),"."))}u.isMDXComponent=!0}}]);