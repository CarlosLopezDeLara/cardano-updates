"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[7411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||a;return n?o.createElement(m,s(s({ref:t},u),{},{components:n})):o.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={title:"Consensus Team Update",slug:"2023-02-08-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},s=void 0,i={permalink:"/cardano-updates/2023-02-08-consensus",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-02-08-consensus.md",source:"@site/blog/2023-02-08-consensus.md",title:"Consensus Team Update",description:"High level summary",date:"2023-02-08T00:00:00.000Z",formattedDate:"February 8, 2023",tags:[{label:"consensus",permalink:"/cardano-updates/tags/consensus"}],readingTime:1.5,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Team Update",slug:"2023-02-08-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/cardano-updates/2023-02-09-mithril"},nextItem:{title:"Performance & tracing update",permalink:"/cardano-updates/2023-02-08-performance-and-tracing"}},l={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Workstreams",id:"workstreams",level:2},{value:"UTxO HD Prototype",id:"utxo-hd-prototype",level:3},{value:"Genesis",id:"genesis",level:3},{value:"Technical debt",id:"technical-debt",level:3},{value:"Fostering collaboration",id:"fostering-collaboration",level:3},{value:"Support",id:"support",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("p",null,"We continue refactoring the UTxO HD prototype while we wait for the system level\nbenchmarks. We have created a new repository that contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"anti-diff"),"\npackages used in this prototype."),(0,r.kt)("p",null,"On the Genesis front, we are preparing another meeting with the researchers to\naudit the implementation design, and we continued working on basic tests and\nsimplifications."),(0,r.kt)("p",null,"During the past two weeks we also introduced two new tools. One for dumping CBOR\nencoded blocks to JSON, and another to serve a local immutable DB."),(0,r.kt)("h2",{id:"workstreams"},"Workstreams"),(0,r.kt)("h3",{id:"utxo-hd-prototype"},"UTxO HD Prototype"),(0,r.kt)("p",null,"We are in the process of refactoring the UTxO HD prototype, while we wait for\nthe system level benchmarks to confirm if the performance of the prototype is\nsatisfactory."),(0,r.kt)("p",null,"We also set up a repository for the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/anti-diffs"},(0,r.kt)("inlineCode",{parentName:"a"},"anti-diff"))," package, which\nrequired us to refactor the code, write documentation, and prepare a release to\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-haskell-packages"},"CHaP"),"."),(0,r.kt)("h3",{id:"genesis"},"Genesis"),(0,r.kt)("p",null,"We worked on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4347"},"basic tests")," for the ",(0,r.kt)("em",{parentName:"p"},"Limit on Eagerness")," property of\nGenesis. We also introduced further robustness and simplifications in the\nGenesis Density governor. Finally, we developed a presentation to engage again\nwith the researchers on our Genesis implementation design."),(0,r.kt)("h3",{id:"technical-debt"},"Technical debt"),(0,r.kt)("h3",{id:"fostering-collaboration"},"Fostering collaboration"),(0,r.kt)("p",null,"We are in the process of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-consensus/pull/6"},"polishing")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"ouroboros-consensus"),"\ndocumentation site, which we will use a the entry point for Consensus related\ndocumentation. The first version will not be complete, but we plan on\nsystematically improving it."),(0,r.kt)("h3",{id:"support"},"Support"),(0,r.kt)("p",null,"We ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4335"},"added a tool")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"ouroboros-consensus-cardano-tools")," which allows\nto dump the Chain DB blocks or any given CBOR encoded blocks as JSON."),(0,r.kt)("p",null,"We also added ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4339"},"another tool")," that serves an existing immutable DB via\nBlockFetch and ChainSync. This tool can help in assisting our local benchmarking\nefforts (for instance Genesis' ChainSync jumping prototype)."))}c.isMDXComponent=!0}}]);