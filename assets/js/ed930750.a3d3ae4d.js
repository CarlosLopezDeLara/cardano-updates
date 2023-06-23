"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[23318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(h,s(s({ref:t},u),{},{components:n})):o.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={title:"Consensus Team Update",slug:"2023-05-03-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},s=void 0,i={permalink:"/cardano-updates/2023-05-03-consensus",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-05-03-consensus.md",source:"@site/blog/2023-05-03-consensus.md",title:"Consensus Team Update",description:"High level summary",date:"2023-05-03T00:00:00.000Z",formattedDate:"May 3, 2023",tags:[{label:"consensus",permalink:"/cardano-updates/tags/consensus"}],readingTime:1.755,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Team Update",slug:"2023-05-03-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/cardano-updates/2023-05-04-mithril"},nextItem:{title:"Performance & tracing update",permalink:"/cardano-updates/2023-05-03-performance-and-tracing"}},l={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Genesis",id:"genesis",level:2},{value:"Fostering collaboration",id:"fostering-collaboration",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"During the past two weeks we made some important progress in the Genesis design.\nIt seems the ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockFetch")," logic need not be modified for Genesis, although this\nneeds to be confirmed. We started a DoS mitigation handbook and updated our\nconceptual component diagram to guide the Genesis design. We engaged with the\nIOG researchers to work on the Limit on Patience attack vector, work in this\narea is still ongoing. We sketched a design to decouple the CPU load of the node\nfrom its responsiveness to the socket. Finally, we discussed with Networking our\napproach to lower the performance impact of the BlockFetch decision logic, and\ngot green light from them."),(0,a.kt)("p",null,"We migrated the consensus code to a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-consensus"},"new\nrepository"),", splitting\nit from the ",(0,a.kt)("inlineCode",{parentName:"p"},"ouroboros-network")," repository, and released version 0.6 of\nConsensus."),(0,a.kt)("p",null,"We also merged the mempool fairness improvement to main branch."),(0,a.kt)("p",null,"Another significant enhancement to our documentation was the addition of an\nexplanation of the hardfork combinator forecast horizon."),(0,a.kt)("p",null,"See the sections below for more details."),(0,a.kt)("h2",{id:"genesis"},"Genesis"),(0,a.kt)("p",null,"We reviewed the ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockFetch")," design documentation, and added some source-code\ncomments that emphasize certain properties of the decisions the ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockFetch"),"\nlogic makes that are helping us confirm that Genesis does not require any\nchanges to ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockFetch"),". We are waiting on input from our former system\narchitect to verify this."),(0,a.kt)("p",null,"We migrated and updated the conceptual component diagram in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ouroboros-consensus"),"\nrepository which helps us situate the Genesis design and argument."),(0,a.kt)("p",null,"We engaged with the IOG researchers about the Genesis design. We sketched out a\nway to address the concern that the Limit on Patiente (LoP) attack vector duty\ncycle is indeed low, but it's still non-trivial to ultimately conclude it's\nsufficiently low."),(0,a.kt)("p",null,"We also sketched a design to decouple the CPU load of the node from its\nresponsiveness to the socket, since the LoP is a relatively tight timeout, and\nnode performance bugs inducing seconds-worth of latency are unfortunately\nfamiliar phenomena."),(0,a.kt)("h2",{id:"fostering-collaboration"},"Fostering collaboration"),(0,a.kt)("p",null,"We ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-consensus/pull/62"},"added an\nexplanation")," of\na question that we had to explain many times about the exact behavior of the\nhardfork combinator forecast horizon."))}p.isMDXComponent=!0}}]);