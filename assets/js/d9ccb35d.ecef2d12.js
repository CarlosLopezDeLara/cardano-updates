"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[3136],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"Network Team Update",slug:"2023-03-21-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},i=void 0,p={permalink:"/cardano-updates/2023-03-21-network",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-03-21-network.md",source:"@site/blog/2023-03-21-network.md",title:"Network Team Update",description:"High level summary",date:"2023-03-21T00:00:00.000Z",formattedDate:"March 21, 2023",tags:[{label:"network",permalink:"/cardano-updates/tags/network"}],readingTime:1.315,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2023-03-21-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"Performance & tracing update",permalink:"/cardano-updates/2023-03-22-performance-and-tracing"},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-03-17-hydra"}},l={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,o.kt)("p",null,"In the last spring we released ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node-1.35.6")," with dynamic P2P\nfunctionality."),(0,o.kt)("p",null,"We received reports from some SPOs who encountered problems with their non\nP2P block producing nodes not being able to connect to their P2P relay.  Karl\nKnutsson (from Cardano Foundation) reproduced this issue between two nodes (a\nnon P2P and a P2P one) on mainnet.  Karl and the IOG Networking Team analysed\nit and found a bug in the legacy non p2p code.  The bug is only possible to\ntrigger with a P2P node which is binding its outbound connection port to\na fixed IP address and port (default in p2p).  A possible solution was found.\nFor more information see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4465"},"#4465"),"."),(0,o.kt)("p",null,"We released ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-ping-0.1.0.0")," package to ",(0,o.kt)("inlineCode",{parentName:"p"},"CHaP"),".  ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-ping")," is no\nlonger available as a standalone binary, but instead it will become part of\n",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-cli")," (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/pull/4664"},"#4664"),")"),(0,o.kt)("p",null,"We are testing ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node")," with peer sharing functionality (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4019"},"#4019"),")."),(0,o.kt)("p",null,"We are working on ",(0,o.kt)("em",{parentName:"p"},"eclipse evasion"),".  We added new class of peers: big ledger\npeers to the outbound governor, implemented tests and fixed found issues\n(",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4462"},"#4462"),").  We also made the information if a given peer plays the role of\na big ledger peer to the mini-protocols.  This will allow to modify\nmini-protocol applications for such peers.   As part of this functionality we\nrefactored some core types in the network code which simplifies exposed API."),(0,o.kt)("p",null,"Together with Moritz Angerman we started to update ",(0,o.kt)("inlineCode",{parentName:"p"},"io-sim")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"ghc-9.6.1")," (see\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/io-sim/pull/73"},"#73"),")."),(0,o.kt)("p",null,"We merged a fix of configuration of accepted connections limit in\n",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node")," (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/pull/4902"},"#4902"),")."))}c.isMDXComponent=!0}}]);