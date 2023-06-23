"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[47093],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(r),d=n,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return r?o.createElement(h,i(i({ref:t},u),{},{components:r})):o.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5136:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=r(87462),n=(r(67294),r(3905)),a=r(80175);const i={title:"Network Team Update",slug:"2022-11-11-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},p=void 0,s={permalink:"/cardano-updates/2022-11-11-network",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-11-11-network.md",source:"@site/blog/2022-11-11-network.md",title:"Network Team Update",description:"High-level summary",date:"2022-11-11T00:00:00.000Z",formattedDate:"November 11, 2022",tags:[{label:"network",permalink:"/cardano-updates/tags/network"}],readingTime:1.595,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2022-11-11-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/cardano-updates/2022-11-11-ledger"},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2022-11-04-hydra"}},l={authorsImageUrls:[void 0]},u=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"Detail description",id:"detail-description",level:2},{value:"Performance regression",id:"performance-regression",level:3},{value:"New P2P topology form",id:"new-p2p-topology-form",level:3},{value:"Tracing improvements",id:"tracing-improvements",level:3},{value:"Open Source Improvements",id:"open-source-improvements",level:3}],c={toc:u},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"In last sprint we got a performance report of P2P performance testing cluster\n(which consists of 50 nodes).  There is a performance regression in the header\nnotification metric.  The P2P cluster is constructed with the same\ntopology as the non-p2p reference one this indicates some regression which\nneeds to be further investigated.  This poses a risk for releasing P2P."),(0,n.kt)("p",null,"We also continued to work on peer sharing: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4019"},"pull #4019"),"."),(0,n.kt)("p",null,"We continued working on dynamic block production which is required for P2P\nrelease for BP nodes: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/3159"},"pull #3159"),"."),(0,n.kt)("p",null,"We simplified the P2P topology format: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/issues/4559"},"issue #4559"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/3888"},"pull #3888"),"."),(0,n.kt)("p",null,"We added a new trace point for asynchronous demotions of local peers with\n",(0,n.kt)("inlineCode",{parentName:"p"},"Warning")," severity.  This trace is ",(0,n.kt)("strong",{parentName:"p"},"important")," for SPOs."),(0,n.kt)("h2",{id:"detail-description"},"Detail description"),(0,n.kt)("h3",{id:"performance-regression"},"Performance regression"),(0,n.kt)("p",null,"Below we include a graph which shows the performance regression of the P2P code base vs non P2P."),(0,n.kt)("img",{src:a.Z}),(0,n.kt)("p",null,"On the ",(0,n.kt)("inlineCode",{parentName:"p"},"x")," axis is time in seconds which measures the delay from the start of\nthe slot to when a header was received. The ",(0,n.kt)("inlineCode",{parentName:"p"},"y")," axis is the percentile of nodes\nthat received a header.  We are currently investigating possible causes of the\nregression. "),(0,n.kt)("h3",{id:"new-p2p-topology-form"},"New P2P topology form"),(0,n.kt)("p",null,"The new topology file format is described in this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/issues/4559"},"issue #4559"),"."),(0,n.kt)("h3",{id:"tracing-improvements"},"Tracing improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We improved a handshake error reporting, ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4136"},"pull #4136")),(0,n.kt)("li",{parentName:"ul"},"We added ",(0,n.kt)("inlineCode",{parentName:"li"},"TraceDemoteLocalAsynchronous")," rendered as ",(0,n.kt)("inlineCode",{parentName:"li"},"DemoteLocalAsynchronous"),"\nin ",(0,n.kt)("inlineCode",{parentName:"li"},"json")," format, ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4127"},"pull #4127"),".  Such demotions should be investigated by the\npool operator.  They can indicate a problem in the deployed system, but also\nthey could indicate a remote problem in arranged connections with other SPOs.")),(0,n.kt)("h3",{id:"open-source-improvements"},"Open Source Improvements"),(0,n.kt)("p",null,"We improved documentation of ",(0,n.kt)("inlineCode",{parentName:"p"},"io-sim")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"typed-protocols")," for open-source\ncontributors and/or maintenance tasks: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/typed-protocols/pull/22"},"pull #22"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/io-sim/pull/45"},"pull #45"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/io-sim/pull/48"},"pull #48"),". "))}d.isMDXComponent=!0},80175:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/2022-11-11-noticed-headers-55bb0b4d41e8f0cff0066e1bec91bdd2.png"}}]);