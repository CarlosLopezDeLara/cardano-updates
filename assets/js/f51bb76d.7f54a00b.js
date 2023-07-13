"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[12626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,g=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"Performance & tracing update",slug:"2023-03-08-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},o="High level summary",l={permalink:"/cardano-updates/2023-03-08-performance-and-tracing",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-03-08-performance-and-tracing.md",source:"@site/blog/2023-03-08-performance-and-tracing.md",title:"Performance & tracing update",description:"* Release benchmarking: We again performed benchmarks for the next 1.35.6 release candidate.",date:"2023-03-08T00:00:00.000Z",formattedDate:"March 8, 2023",tags:[{label:"performance-tracing",permalink:"/cardano-updates/tags/performance-tracing"}],readingTime:1.805,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Team Lead",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Performance & tracing update",slug:"2023-03-08-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Node API & CLI Team Update",permalink:"/cardano-updates/2023-03-08-node-cli-api"},nextItem:{title:"Crypto Team Update",permalink:"/cardano-updates/2023-03-03-crypto"}},c={authorsImageUrls:[void 0]},s=[{value:"1.35.6 release",id:"1356-release",level:3},{value:"Analysis pipeline",id:"analysis-pipeline",level:3},{value:"Open Sourcing",id:"open-sourcing",level:3},{value:"Nomad backend",id:"nomad-backend",level:3}],m={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Release benchmarking: We again performed benchmarks for the next 1.35.6 release candidate."),(0,r.kt)("li",{parentName:"ul"},"New tracing: Backwards compatibility with legacy tracer nomenclature is being implemented to smoothe the transition for end users."),(0,r.kt)("li",{parentName:"ul"},"Analysis pipeline: A major refinement of benchmarking metrics has been realized, along with a structural improvementents regarding metrics denomination."),(0,r.kt)("li",{parentName:"ul"},"Open Sourcing: Work on going live with our benchmarking data has begun, as well as creating an API demo and documentation."),(0,r.kt)("li",{parentName:"ul"},"Nomad backend: The backend was adapted to a major refactoring in workbench and is being equipped with a nomad-exec based task driver.")),(0,r.kt)("h1",{id:"performance"},"Performance"),(0,r.kt)("h3",{id:"1356-release"},"1.35.6 release"),(0,r.kt)("p",null,"Benchmarking the second release candidate for 1.35.6 could again attest to a perfectly clean bill of health."),(0,r.kt)("h3",{id:"analysis-pipeline"},"Analysis pipeline"),(0,r.kt)("p",null,"Our analysis pipeline has seen an introduction of additional metrics, especially when focusing on the block producing node. They allow us to better\ndifferentiate the timing of ledger ticking and mempool snapshotting in the forging loop - a feature that promises much deeper insight into UTxO-HD performance.\nAdditionally, a restructuring of metrics names has been undertaken along with improvements in their data dictionary; a measure that will make benchmarking\ndata more easily accessible."),(0,r.kt)("h3",{id:"open-sourcing"},"Open Sourcing"),(0,r.kt)("p",null,"As a prerequisite for going live with our benchmarking data, we're currently working on consolidation of existing analyses, such as to provide a common foundation when accessing them externally. Additionally, we've begun working on a small visualization demo and interactive API documentation. Those will enable\nthird parties to make use of that data much more easily, by having reliable guidelines and a working example."),(0,r.kt)("h1",{id:"tracing"},"Tracing"),(0,r.kt)("p",null,"The new tracing system is being outfitted with a comprehensive mapping of its structure to the legacy tracer nomenclature. This feature will make\nthe switch to the new system as smooth as possible for end users, allowing them to gradually adapt their tooling without breaking any functionality in the process."),(0,r.kt)("h1",{id:"infrastructure"},"Infrastructure"),(0,r.kt)("h3",{id:"nomad-backend"},"Nomad backend"),(0,r.kt)("p",null,"The Nomad backend was adapted to the latest major refactoring in workbench. Work was done on making stateful Nomad clients more autonomous, which will greatly facilitate any automation building on that backend. A task driver based on nomad-exec is currently being implemented."))}p.isMDXComponent=!0}}]);