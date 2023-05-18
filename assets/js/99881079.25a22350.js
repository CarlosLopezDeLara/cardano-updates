"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[3004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Performance & tracing update",slug:"2023-05-17-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2023-05-17-performance-and-tracing",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-05-17-performance-and-tracing.md",source:"@site/blog/2023-05-17-performance-and-tracing.md",title:"Performance & tracing update",description:"High level summary",date:"2023-05-17T00:00:00.000Z",formattedDate:"May 17, 2023",tags:[{label:"performance-tracing",permalink:"/cardano-updates/tags/performance-tracing"}],readingTime:3.21,hasTruncateMarker:!1,authors:[{name:"Michael Karg",title:"Performance and Tracing Engineer",url:"https://github.com/mgmeier",imageURL:"https://github.com/mgmeier.png",key:"mgmeier"}],frontMatter:{title:"Performance & tracing update",slug:"2023-05-17-performance-and-tracing",authors:"mgmeier",tags:["performance-tracing"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/cardano-updates/2023-05-17-mithril"},nextItem:{title:"Crypto Team Update",permalink:"/cardano-updates/2023-05-12-crypto"}},s={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level overview",id:"low-level-overview",level:2},{value:"Benchmarking",id:"benchmarking",level:3},{value:"Tracing",id:"tracing",level:3},{value:"Analysis",id:"analysis",level:3},{value:"Open Sourcing",id:"open-sourcing",level:3},{value:"Nomad backend",id:"nomad-backend",level:3},{value:"Performance &amp; Tracing Meetup",id:"performance--tracing-meetup",level:3},{value:"Offboarding",id:"offboarding",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Benchmarking: We're preparing our model cluster to perform GHC9.2 benchmarks, as well as experimenting with increased dataset sizes."),(0,a.kt)("li",{parentName:"ul"},"New tracing: After optimization work on the new tracing system, another cycle of validation and documentation is due."),(0,a.kt)("li",{parentName:"ul"},"Analysis pipeline: First steps on implementing incremental analysis have been untertaken."),(0,a.kt)("li",{parentName:"ul"},"Open Sourcing: Exhaustive dataflow charts for both our analysis tool ",(0,a.kt)("inlineCode",{parentName:"li"},"locli")," and our ",(0,a.kt)("inlineCode",{parentName:"li"},"workbanch")," have been merged to ",(0,a.kt)("inlineCode",{parentName:"li"},"master")),(0,a.kt)("li",{parentName:"ul"},"Nomad backend: The first set of CI-centric workbench profiles have been adjusted and run on the nomad backend; currently we're porting the definition of our model cluster."),(0,a.kt)("li",{parentName:"ul"},"P&T Meetup: We had a very productive personal meetup in Lugano, Switzerland."),(0,a.kt)("li",{parentName:"ul"},"Offboarding: Sadly, we have to say goodbye to our team lead. Currently, we're busy with the handover.")),(0,a.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("h3",{id:"benchmarking"},"Benchmarking"),(0,a.kt)("p",null,"As a compiler switch to GHC 9.2.7 for ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-node"),"'s default build environment is around the corner, we're setting up our benchmarking cluster to\nhandle the new version. Special attention is given to the fact that we might need more flexibility in switching compiler versions in the future. This\nalso involves choosing a reliable baseline as reference point for inter-version comparisons.  "),(0,a.kt)("p",null,"Additionally we've been working on refining our model cluster: by increasing UTxO and delegation map sizes to closer match those of current mainnet,\nwe strive to have a more accurate model - and thus be able to make more detailed predictions regarding performance. However, this still needs to\nbe balanced against resource demand for all our cluster's nodes."),(0,a.kt)("h3",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"For our new tracing system, we're currently validating the behaviour of the system after optimizations have been applied. Furthermore, some\nquality-of-life details that have changed required us to revision the system documentation."),(0,a.kt)("h3",{id:"analysis"},"Analysis"),(0,a.kt)("p",null,"As a mid-term goal, we aim to provide incremental analysis of our benchmarking metrics. While currently, we can only reliably process runs that have been\nnormally (or abnormally) terminated, we see the possibility of incrementally analysing ongoing runs, or any data source yielding our key metrics, as a\nhuge opportunity to increase our operational flexibility. All in all, this approach entails building completely new features for our pipeline. A first effort to accomodate incrementally incoming data points has been undertaken. "),(0,a.kt)("h3",{id:"open-sourcing"},"Open Sourcing"),(0,a.kt)("p",null,"A very involved and exhaustive documentation and visualization effort has been undertaken to make the data flow through our key benchmarking\ncopmonents more accessible. As a result, detailed charts for both our LogObject CLI ",(0,a.kt)("inlineCode",{parentName:"p"},"locli")," and our ",(0,a.kt)("inlineCode",{parentName:"p"},"workbench")," have been merged to ",(0,a.kt)("inlineCode",{parentName:"p"},"master"),". "),(0,a.kt)("h3",{id:"nomad-backend"},"Nomad backend"),(0,a.kt)("p",null,"While our Nomad backend is reaching completion, and hardware setup is being implemented in collaboration with SRE, we've been adjusting\nthose profiles of our ",(0,a.kt)("inlineCode",{parentName:"p"},"workbench")," that target CI-oriented workloads to the new backend. Those profiles should demonstrate the full functionality\nof the nomad cloud backend.  "),(0,a.kt)("p",null,"Additionally, we're porting a first deployable version of our model cluster to nomad cloud, which will form the basis for validation of our actual key metrics with regard to those from the existing cluster."),(0,a.kt)("h3",{id:"performance--tracing-meetup"},"Performance & Tracing Meetup"),(0,a.kt)("p",null,"We held a personal team meetup in Lugano, Switzerland. In an amazing location, and with a great seminar room to focus, we had 2 very productive\ndays together. Being able to discuss live and in colour, we could effectively synchronize on where the team is at, and how we want to develop in the future.\nAlso, it was a great opportunity to finally meet in person."),(0,a.kt)("h3",{id:"offboarding"},"Offboarding"),(0,a.kt)("p",null,"Last not least we regret that our team lead is leaving at the end of May. Currently, he's handing over all his obligations, which requires reorganisation\nof team structure, and responsabilities of team members for specific tasks. Serge, we all want to thank you for your excellent and reliable lead; we very much enjoyed the time with you, and wish you all the best for your future endeavours!"))}d.isMDXComponent=!0}}]);