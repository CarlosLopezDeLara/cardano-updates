"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[68115],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,h=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={title:"Network Team Update",slug:"2023-07-31-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},l=void 0,i={permalink:"/cardano-updates/2023-07-31-network",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-07-31-network.md",source:"@site/blog/2023-07-31-network.md",title:"Network Team Update",description:"Network Update (Sprints 39 & 40)",date:"2023-07-31T00:00:00.000Z",formattedDate:"July 31, 2023",tags:[{label:"network",permalink:"/cardano-updates/tags/network"}],readingTime:2.18,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2023-07-31-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"Network Team Update",permalink:"/cardano-updates/2023-08-04-network"},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-07-28-hydra"}},p={authorsImageUrls:[void 0]},u=[{value:"Network Update (Sprints 39 &amp; 40)",id:"network-update-sprints-39--40",level:2},{value:"Sprint 39 (Jun 26 - Jul 09)",id:"sprint-39-jun-26---jul-09",level:3},{value:"Major changes",id:"major-changes",level:4},{value:"<code>node-to-client</code> protocol",id:"node-to-client-protocol",level:5},{value:"<code>node-to-node</code> protocol",id:"node-to-node-protocol",level:5},{value:"Minor changes",id:"minor-changes",level:4},{value:"Sprint 40 (Jul 09 - Jul 23)",id:"sprint-40-jul-09---jul-23",level:3},{value:"Major changes",id:"major-changes-1",level:4}],c={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"network-update-sprints-39--40"},"Network Update (Sprints 39 & 40)"),(0,r.kt)("p",null,"The network updates got distracted.  Mostly because of me leaving for the meeting in Edinburgh, Scotland and the being away.\nIt was great to see and talk to so many of the community members."),(0,r.kt)("h3",{id:"sprint-39-jun-26---jul-09"},"Sprint 39 (Jun 26 - Jul 09)"),(0,r.kt)("h4",{id:"major-changes"},"Major changes"),(0,r.kt)("p",null,"Now the following ",(0,r.kt)("strong",{parentName:"p"},"list of traces will be turned on by default"),":"),(0,r.kt)("h5",{id:"node-to-client-protocol"},(0,r.kt)("inlineCode",{parentName:"h5"},"node-to-client")," protocol"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LocalConnectionManagerTracer")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LocalInboundGovernor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LocalHandshake")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LocalServer"))),(0,r.kt)("h5",{id:"node-to-node-protocol"},(0,r.kt)("inlineCode",{parentName:"h5"},"node-to-node")," protocol"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Server"))),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/pull/5353"},"cardano-node#5353"),".  This will be released in ",(0,r.kt)("inlineCode",{parentName:"p"},"node-8.2.0"),"."),(0,r.kt)("p",null,"We made sure that ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-client-0.1.0.x")," library (which is ",(0,r.kt)("inlineCode",{parentName:"p"},"db-sync"),") is not using the experimental ",(0,r.kt)("inlineCode",{parentName:"p"},"node-to-client")," protocol.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-client-0.2.0.0")," was not affected.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4612"},"ouroboros-network#4612"),"."),(0,r.kt)("p",null,"We merged the ",(0,r.kt)("strong",{parentName:"p"},"dynamic block production feature")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"ouroboros-consensus")," (also available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-node-8.2.0")," release).\nDynamic block production enables hot-swap p2p nodes, which are important for the p2p deployment of block-producing nodes.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/3159"},"ouroboros-network#3159"),", ","[ouroboros-consensu#140]","."),(0,r.kt)("p",null,"We continued to review the implementation of big ledger peers for eclipse evasion, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4462"},"ouroboros-network#4462"),"."),(0,r.kt)("h4",{id:"minor-changes"},"Minor changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We refactored the top level ",(0,r.kt)("inlineCode",{parentName:"li"},"cardano-node")," error handler: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5356"},"cardano-node#5356"))),(0,r.kt)("h3",{id:"sprint-40-jul-09---jul-23"},"Sprint 40 (Jul 09 - Jul 23)"),(0,r.kt)("h4",{id:"major-changes-1"},"Major changes"),(0,r.kt)("p",null,"We integrated ",(0,r.kt)("inlineCode",{parentName:"p"},"ouroboros-network-0.8.2.0")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch of ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-node")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"8.2.0")," release (the version match between ",(0,r.kt)("inlineCode",{parentName:"p"},"ouroboros-network")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-node")," is purely accidental).\nThis includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"integration with ",(0,r.kt)("strong",{parentName:"li"},"dynamic block production")," feature.\nThis feature is documented in the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5399"},"following PR"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Warm valency")," for local root peers (see below).")),(0,r.kt)("p",null,"For the full list of features included in the ",(0,r.kt)("inlineCode",{parentName:"p"},"8.2.0")," release from the network side, please take a look at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/releases/tag/8.2.0-pre"},"pre-release nodes"),"."),(0,r.kt)("p",null,"We ",(0,r.kt)("strong",{parentName:"p"},"improved the memory footprint")," of peer metrics measured by the P2P stack.\nPeer metrics are used to decide which peers to demote every churn interval (roughly every hour with some probabilistic fluctuation).\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4620"},"ouroboros-network#4620"),".\nThe improvement will be available in ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-node-8.2.0"),"."),(0,r.kt)("p",null,"We added an ",(0,r.kt)("strong",{parentName:"p"},"optional explicit warm valency")," to local root peers of the ",(0,r.kt)("strong",{parentName:"p"},"P2P topology file"),".\nPreviously we used an implicit valency, e.g. the node keeps connections to all of the local roots; with local warm valency the node will pick only that many peers from the local root peers group to connect to.\nThe hot valency (previously known simply as valency) hasn't changed, but it must be smaller than the warm valency as hot peers are selected from warm ones.\nWarm valency is a useful feature to limit resource consumption if one of the domain names in the local root peer group resolves to many IP addresses.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4575"},"ouroboros-network#4575"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/pull/5409"},"cardano-node#5409"),"."))}d.isMDXComponent=!0}}]);