"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[40160],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(o),d=r,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||a;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},45335:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const a={title:"Network Team Update",slug:"2023-03-02-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},i=void 0,p={permalink:"/cardano-updates/2023-03-02-network",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-03-02-network.md",source:"@site/blog/2023-03-02-network.md",title:"Network Team Update",description:"High level summary",date:"2023-03-02T00:00:00.000Z",formattedDate:"March 2, 2023",tags:[{label:"network",permalink:"/cardano-updates/tags/network"}],readingTime:1.85,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2023-03-02-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/cardano-updates/2023-03-03-ledger"},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-02-24-hydra"}},s={authorsImageUrls:[void 0]},l=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Detailed work log",id:"detailed-work-log",level:2}],u={toc:l};function h(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("p",null,"In the current sprint the networking team focused on fixing bugs and pushing\nforward implementation of eclipse evasion.  We also found a bug in our\nsimulation testing setup (in integration of test node).  We also overviewed the\nwork on extending handshake protocol which is delivered by Galois Inc."),(0,r.kt)("p",null,"We published ",(0,r.kt)("inlineCode",{parentName:"p"},"ouroboros-network-0.4.0.1")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"ouroboros-network-protocols-0.3.0.0")," to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-haskell-packages/pull/147"},"CHaP"),"."),(0,r.kt)("p",null,"We also fixed a bug in ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-node")," which results in not being able to\nconfigure inbound connection limits, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/pull/4902"},"PR #4902"),"."),(0,r.kt)("p",null,"Together with Karl Knutsson (CF) we realised an issue in ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-cli"),": it's\nvalidation of DNS names, IP address & ports when registering a stake pool\nshould be more strict to protect against common mistakes which we identified on\nthe chain.  See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/issues/4929"},"issue #4929"),"."),(0,r.kt)("h2",{id:"detailed-work-log"},"Detailed work log"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4385"},"PR #4385")," we fixed two bugs in peer state actions.  First one results in\na busy loop if demotion from hot to warm times outs.  This busy loop is\neventually exited when mux exits (we reported this in our previous report).\nThis fix made it to ",(0,r.kt)("inlineCode",{parentName:"p"},"1.35.6")," release as well."),(0,r.kt)("p",null,"In addition the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4385"},"PR #4385")," also fixes another bug which results in ",(0,r.kt)("inlineCode",{parentName:"p"},"hot -> warm\n-> hot")," demotion / promotion busy loop."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4385"},"PR #4385")," also fixed a bug in a node only used in simulation which\nresulted in not using ",(0,r.kt)("inlineCode",{parentName:"p"},"chain-sync")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"block-fetch")," mini-protocols.  In the\nreview process, we realised that the header-body split in the simulated node\nrequires further work (see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4419"},"PR #4419"),", which is under review)."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4385"},"PR #4385")," also extend our generators, which together with the above fix,\ncover the ",(0,r.kt)("inlineCode",{parentName:"p"},"hot -> warm -> hot")," demotion / promotion busy loop."),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4419"},"PR #4419")," we introduce a ",(0,r.kt)("inlineCode",{parentName:"p"},"ChainDB")," for our simulation node, which plays\nsimilar role to ",(0,r.kt)("inlineCode",{parentName:"p"},"ChainDB")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ouroboros-consensus"),": a persistent (across\nsimulated restarts) store of blocks which does chain selection.  This ensures\nthat the simulated node is using ",(0,r.kt)("inlineCode",{parentName:"p"},"block-fetch")," to download blocks announced by\n",(0,r.kt)("inlineCode",{parentName:"p"},"chain-sync")," mini-protocol."),(0,r.kt)("p",null,"We also made progress with reviewing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4019"},"PR #4019")," - peer sharing."),(0,r.kt)("p",null,"We also fixed ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4370"},"issue #4370")," - a connection manager test failure, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4384"},"PR #4384"),"."))}h.isMDXComponent=!0}}]);