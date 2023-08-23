"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[11952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=l(n),d=a,m=c["".concat(u,".").concat(d)]||c[d]||h[d]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Consensus Team Update",slug:"2023-08-23-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},s=void 0,i={permalink:"/cardano-updates/2023-08-23-consensus",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-08-23-consensus.md",source:"@site/blog/2023-08-23-consensus.md",title:"Consensus Team Update",description:"High level summary",date:"2023-08-23T00:00:00.000Z",formattedDate:"August 23, 2023",tags:[{label:"consensus",permalink:"/cardano-updates/tags/consensus"}],readingTime:1.42,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Team Update",slug:"2023-08-23-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-08-18-hydra"}},u={authorsImageUrls:[void 0]},l=[{value:"High level summary",id:"high-level-summary",level:2},{value:"UTxO-HD",id:"utxo-hd",level:2},{value:"Tech debt",id:"tech-debt",level:2},{value:"Support",id:"support",level:2}],p={toc:l},c="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"On the UTxO-HD front we reached another important milestone, where we handed over the implementation for benchmarking and testing. We are working on addressing the first issues that were found during the integration tests.\nOn the Genesis front we are finalizing the argument that a checkpoint is not necessary for the initial release, including supporting to support said argument. We are also working on the new node release, and several improvements to our code-base."),(0,a.kt)("h2",{id:"utxo-hd"},"UTxO-HD"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We addressed the issues that came from the benchmarking and testing phase (see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus/issues/314"},"#314"),").",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"We fixed the operational-certificate update exception (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus/pull/305"},"#305"),").")))),(0,a.kt)("h2",{id:"tech-debt"},"Tech debt"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We elaborated an inventory of the symbols used by downstream clients in an effort to clearly define the Consensus API, which will help managing changes and their impact to the downstream clients (see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/tree/jasagredo/consensus-api"},"this branch"),")."),(0,a.kt)("li",{parentName:"ul"},"We extracted the SOP modules to a separate package as part of our effort to reduce the Consensus API surface area (see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus/tree/jasagredo/test-sop"},"this branch"),")."),(0,a.kt)("li",{parentName:"ul"},"We took the first step towards improving how the Cardano hard-fork block is instantiated when running a node (see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus/issues/275"},"#275"),")."),(0,a.kt)("li",{parentName:"ul"},"We decreased the flakiness for our test suite (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus/pull/284"},"#284"),")."),(0,a.kt)("li",{parentName:"ul"},"We incorporated and merged the pull-request on query versioning (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus/pull/273"},"#273"),")."),(0,a.kt)("li",{parentName:"ul"},"We started working on new performance-based regression tests for mempool operations.")),(0,a.kt)("h2",{id:"support"},"Support"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nfrisby"},"Nick Frisby")," continues with his engineer responsibilities. Notably getting the Consensus release out for node ",(0,a.kt)("inlineCode",{parentName:"li"},"pre-release 8.3"),". Nick also began integrating it into downstream branches (",(0,a.kt)("inlineCode",{parentName:"li"},"cardano{-api,-cli,-node}"),"). The Node team has now taken over, since Nick had progressed up to the point where they needed to start making new design decisions. Related PRs:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus/pull/283"},"#283")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus/pull/301"},"#301")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus/pull/304"},"#304")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus/pull/308"},"#308"))))))}h.isMDXComponent=!0}}]);