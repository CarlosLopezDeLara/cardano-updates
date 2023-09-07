"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[15715],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Performance & tracing update",slug:"2023-09-07-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},o=void 0,c={permalink:"/cardano-updates/2023-09-07-performance-and-tracing",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-09-07-performance-and-tracing.md",source:"@site/blog/2023-09-07-performance-and-tracing.md",title:"Performance & tracing update",description:"High level summary",date:"2023-09-07T00:00:00.000Z",formattedDate:"September 7, 2023",tags:[{label:"performance-tracing",permalink:"/cardano-updates/tags/performance-tracing"}],readingTime:2.3,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Team Lead",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Performance & tracing update",slug:"2023-09-07-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},nextItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2023-09-06-consensus"}},s={authorsImageUrls:[void 0]},l=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level overview",id:"low-level-overview",level:2},{value:"Benchmarking",id:"benchmarking",level:3},{value:"Infrastructure",id:"infrastructure",level:3},{value:"Tracing",id:"tracing",level:3},{value:"Nomad backend",id:"nomad-backend",level:3}],m={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Benchmarking: We've performed and analysed feature benchmarks for both UTxO-HD and the current P2P stack."),(0,r.kt)("li",{parentName:"ul"},"Infrastructure: Various improvements of our analysis pipeline have been merged to ",(0,r.kt)("inlineCode",{parentName:"li"},"master"),", supporting safe log truncation."),(0,r.kt)("li",{parentName:"ul"},"Tracing: Namespace consistency checks have been merged to ",(0,r.kt)("inlineCode",{parentName:"li"},"master")," along with a curated configuration for benchmarking."),(0,r.kt)("li",{parentName:"ul"},"Nomad backend: We're productively using the new backend to measure new vs. legacy tracing system, adding many quality-of-life improvements.")),(0,r.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,r.kt)("h3",{id:"benchmarking"},"Benchmarking"),(0,r.kt)("p",null,"We've completed various runs and analyses targeting two distinct features of the node: UTxO-HD and Peer2Peer.  "),(0,r.kt)("p",null,"With our UTxO-HD benchmark we could clearly localize one point where this new way of maintaining ledger state is still costly, but at the same time confirm that in basically all other aspects UTxO-HD makes no difference in performance.  "),(0,r.kt)("p",null,"The Peer2Peer benchmarks focused on the effects that enabling this feature on a block producing node has on propagation times, as well as scrutinized a proposed change to the Peer2Peer network stack."),(0,r.kt)("h3",{id:"infrastructure"},"Infrastructure"),(0,r.kt)("p",null,"As a result of optimizing in-memory representation of log objects, which are constructed from a node's traces, we can now analyse runs that last longer in total. For runs that exceed their expected duration, analysis now supports a truncation\noperation that keeps the interdependencies of block events intact.  "),(0,r.kt)("p",null,"Truncation might happen at a slightly different point\nin time - and therefore in its log object stream - for each node in the cluster. An additional step validating the block hash timeline of the cluster has been implemented for the pipeline. It provides early feedback on whether a specific truncation will lead to a valid full analysis, which requires much more time."),(0,r.kt)("h3",{id:"tracing"},"Tracing"),(0,r.kt)("p",null,"Consistency checking of namespace implementation and configuration when using the new system has been completed.\nThis feature enables feedback on when tracer implementation details in some component might have changed. It's also able to detect when a configuration used for operating a ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-node")," shows inconsistencies with the namespaces the system provides - and hence needs attention.  "),(0,r.kt)("p",null,"Furthermore, we've created a fine-grained configuration of the new system that caters to benchmarking's need of very many\ndetailed trace messages. It's aimed at mirroring the same amount of trace messages, and information, we're seeing from our usage of the legacy system; an important step in making benchmarks between systems comparable."),(0,r.kt)("h3",{id:"nomad-backend"},"Nomad backend"),(0,r.kt)("p",null,"The new backend is currently being used for further validation with regard to the existing cluster. Additionally, we're using it in production mode to comparatively benchmark both tracing systems after merging past month's optimizations - which is the\nfirst real-life application of the nomad cluster. Hands-on experience in that phase translates into many small improvements which can be immediately applied to enhance user experience for the new backend."))}p.isMDXComponent=!0}}]);