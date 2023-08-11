"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[4615],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(n),p=a,g=d["".concat(c,".").concat(p)]||d[p]||u[p]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},65518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const i={title:"Performance & tracing update",slug:"2023-08-11-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2023-08-11-performance-and-tracing",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-08-11-performance-and-tracing.md",source:"@site/blog/2023-08-11-performance-and-tracing.md",title:"Performance & tracing update",description:"High level summary",date:"2023-08-11T00:00:00.000Z",formattedDate:"August 11, 2023",tags:[{label:"performance-tracing",permalink:"/cardano-updates/tags/performance-tracing"}],readingTime:1.335,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Team Lead",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Performance & tracing update",slug:"2023-08-11-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},nextItem:{title:"Mithril Team Update",permalink:"/cardano-updates/2023-08-10-mithril"}},c={authorsImageUrls:[void 0]},m=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level overview",id:"low-level-overview",level:2},{value:"Benchmarking",id:"benchmarking",level:3},{value:"Tracing",id:"tracing",level:3},{value:"Nomad backend",id:"nomad-backend",level:3}],s={toc:m},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Benchmarking: We've concluded benchmarking node version ",(0,a.kt)("inlineCode",{parentName:"li"},"8.2.0"),"."),(0,a.kt)("li",{parentName:"ul"},"Tracing: Optimization of the new tracing system has been merged; we're currently working on self-documenting tracing configuration."),(0,a.kt)("li",{parentName:"ul"},"Nomad backend: A PR that makes our backend take advantage of added flexibility of the new hardware cluster has been merged.")),(0,a.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("h3",{id:"benchmarking"},"Benchmarking"),(0,a.kt)("p",null,"As part of our release benchmarking cycle, we've completed and analysed the runs for the ",(0,a.kt)("inlineCode",{parentName:"p"},"8.2.0")," version of ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-node"),". In addition to the adjustment of sanity checks in our automation, we had to implement small changes in the analysis pipeline as well to accomodate the new version."),(0,a.kt)("h3",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"A significant amount of optimizations for the new tracing system has finally been merged to ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),". At the moment,\nwe're working on having a trace message self-document the final tracing configuration of a running node. Apart from adding\ninsight into the system, this feature also aims at making future hot reloading of tracing configuration explicit and straightforward.  "),(0,a.kt)("p",null,"Furthermore, we're setting up a final round of system integration level benchmarks comparing new against legacy tracing."),(0,a.kt)("h3",{id:"nomad-backend"},"Nomad backend"),(0,a.kt)("p",null,"The new hardware cluster permits greater flexibility as far as SSH access is concerned. By using nomad for a consistent\nand reliable deployment, but taking advantage of direct connections for healthchecks and data transfer we believe we were\nable to reduce overall network latency in the nomad cluster. This improves confidence when capturing all network related measurements during our benchmarks.  "),(0,a.kt)("p",null,"A PR that adds these capabalities to our nomad backend - along with very many quality-of-life improvements - has been merged to ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),"."))}u.isMDXComponent=!0}}]);