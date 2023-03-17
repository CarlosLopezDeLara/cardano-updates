"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[6959],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},66401:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Performance & tracing update",slug:"2023-02-23-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},i="High level summary",l={permalink:"/cardano-updates/2023-02-23-performance-and-tracing",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-02-23-performance-and-tracing.md",source:"@site/blog/2023-02-23-performance-and-tracing.md",title:"Performance & tracing update",description:"* SECP benchmarking: we concluded our benchmarking runs and analyses of the new SECP primitives for the Valentine hard-fork.",date:"2023-02-23T00:00:00.000Z",formattedDate:"February 23, 2023",tags:[{label:"performance-tracing",permalink:"/cardano-updates/tags/performance-tracing"}],readingTime:2.245,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Engineer",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Performance & tracing update",slug:"2023-02-23-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/cardano-updates/2023-02-23-mithril"},nextItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2023-02-22-consensus"}},c={authorsImageUrls:[void 0]},s=[{value:"SECP",id:"secp",level:3},{value:"UTxO-HD",id:"utxo-hd",level:3},{value:"1.35.6 release",id:"1356-release",level:3},{value:"Nomad backend",id:"nomad-backend",level:3},{value:"NixOps backend",id:"nixops-backend",level:3}],u={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SECP benchmarking: we concluded our benchmarking runs and analyses of the new SECP primitives for the Valentine hard-fork."),(0,a.kt)("li",{parentName:"ul"},"Release benchmarking: we performed a round of benchmarks for the 1.35.6 release."),(0,a.kt)("li",{parentName:"ul"},"UTxO-HD benchmarking: we performed first runs for UTxO-HD and are currently refining the benchmarking setup."),(0,a.kt)("li",{parentName:"ul"},"New tracing: for better accessibility, the new tracing system is being outfitted with introspective capabilities."),(0,a.kt)("li",{parentName:"ul"},"Infrastructure: with the Nomad cloud workbench backend we were able to perform our first test cluster runs successfully on SRE infrastructure."),(0,a.kt)("li",{parentName:"ul"},"Infrastructure: the initial NixOps workbench backend has been completed; a PR containing this work, along with many quality-of-life improvements of our tooling, got merged.")),(0,a.kt)("h1",{id:"performance"},"Performance"),(0,a.kt)("h3",{id:"secp"},"SECP"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"For SECP, we settled on a fixed tx count per block, while simultaneously spending as much as possible of the block budget. Thus we were able to minimize the impact of per-SC-call overhead."),(0,a.kt)("li",{parentName:"ol"},"The final runs were performed with various fractions, e.g. half, of the current block budget to ascertain how these workloads would fare compared to a value-only run."),(0,a.kt)("li",{parentName:"ol"},"The SECP machinery and profiles are currently being generalized into an approach to aim for very specific aspects of a smart contract for benchmarking. ")),(0,a.kt)("h3",{id:"utxo-hd"},"UTxO-HD"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"After analyzing initial UTxO-HD runs, it turned out that mempool snapshotting had to be throttled for benchmarking; it affects a lock that UTxO-HD had to introduce into the forging loop."),(0,a.kt)("li",{parentName:"ol"},"We're currently adapting the benchmark setup to that, and will then perform a new combination of baseline and UTxO-HD runs.")),(0,a.kt)("h3",{id:"1356-release"},"1.35.6 release"),(0,a.kt)("p",null,"Benchmarking the 1.35.6 release candidate could attest to a perfectly clean bill of health."),(0,a.kt)("h1",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"Work on the new tracing system's introspective capabilites is ongoing: Immediate use cases of the new API include being able to statically validate generated tracer documentation, as well as providing information of a specific tracing setup in the node via traces themselves. These features will make the new system both more robust, and more accessible."),(0,a.kt)("h1",{id:"infrastructure"},"Infrastructure"),(0,a.kt)("h3",{id:"nomad-backend"},"Nomad backend"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Work on the cloud deployment capability of the Nomad workbench backend continued; for testing we can automate multiple Nomad clients."),(0,a.kt)("li",{parentName:"ol"},"Locality assumptions were removed and job monitoring was refactored."),(0,a.kt)("li",{parentName:"ol"},"To facilitate directly-executable derivations, Nomad Job specification files are now self contained with GitHub references and configs needed to run a cluster."),(0,a.kt)("li",{parentName:"ol"},"We're currently evaluating different options for genesis distribution in said cluster.")),(0,a.kt)("h3",{id:"nixops-backend"},"NixOps backend"),(0,a.kt)("p",null,"The NixOps workbench backend has reached an initial functional stage. Consequently, the relevant PR was merged. It also contained many improvements to our analysis tooling, as well as a structural overhaul of workbench itself. We consider this an important step of future-proofing our benchmarking machinery."))}m.isMDXComponent=!0}}]);