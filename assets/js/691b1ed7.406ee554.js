"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[4944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,m=d["".concat(l,".").concat(c)]||d[c]||h[c]||r;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"Consensus Team Update",slug:"2023-01-25-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},s=void 0,i={permalink:"/cardano-updates/2023-01-25-consensus",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-01-25-consensus.md",source:"@site/blog/2023-01-25-consensus.md",title:"Consensus Team Update",description:"High level summary",date:"2023-01-25T00:00:00.000Z",formattedDate:"January 25, 2023",tags:[{label:"consensus",permalink:"/cardano-updates/tags/consensus"}],readingTime:2.27,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Team Update",slug:"2023-01-25-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/cardano-updates/2023-01-26-mithril"},nextItem:{title:"Node API & CLI Team Update",permalink:"/cardano-updates/2023-01-25-node-cli-api"}},l={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Workstreams",id:"workstreams",level:2},{value:"UTxO HD Prototype",id:"utxo-hd-prototype",level:3},{value:"Genesis",id:"genesis",level:3},{value:"Technical debt",id:"technical-debt",level:3},{value:"Support",id:"support",level:3}],u={toc:p},d="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,o.kt)("p",null,"During the past two weeks, the consensus team finished the testing activities\naround the UTxO-HD prototype. This is a very important milestone which will\nenable us to run system-level tests and benchmarks, as well as start refactoring\nand cleaning the prototype. Regarding our Genesis workstream, we elaborated a\nroadmap that gives an indication of the remaining work. We also continued our\nwork on benchmarking chain-sync-jumping. We also continued working on improving\nthe way we handle blocks from the future, and advancing the integration of the\nnew VRF and KES crypto."),(0,o.kt)("h2",{id:"workstreams"},"Workstreams"),(0,o.kt)("h3",{id:"utxo-hd-prototype"},"UTxO HD Prototype"),(0,o.kt)("p",null,"As the prototype is nearing its completion, it was important to have enough\nconfidence that we will be able to move additional parts of the ledger state\nonto disk. We worked together with the Ledger team to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4296"},"elaborate a\nsketch")," on how the UTxO-HD design would accommodate the migration of\nadditional data from memory to disk. This gave us enough confidence that the\ncurrent architecture will be extensible in the future."),(0,o.kt)("p",null,"On the testing front, we ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4274"},"added")," property-based tests for the UTxO-HD\ntype classes. "),(0,o.kt)("p",null,"We also ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4289"},"enabled disabled components"),", and addressed several\ntechnical debt issues:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Implement ",(0,o.kt)("inlineCode",{parentName:"li"},"splitSized")," anti-diff split (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4269"},"#4269"),"), and integrate it\ninto consensus (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4273"},"#4273"),")."),(0,o.kt)("li",{parentName:"ul"},"Renaming of ",(0,o.kt)("inlineCode",{parentName:"li"},"peekVal")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"peekMDBVal")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/lmdb-simple/pull/7"},"#7"),").")),(0,o.kt)("p",null,"We ran ad-hoc benchmarks for syncing a chain from scratch and replaying. We\nfound a race condition in the LMDB backing store, which ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4283"},"we fixed"),".\nAfter the fix we were able to successfully run these benchmarks. The results\nwere published by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4295"},"this pull request"),"."),(0,o.kt)("p",null,"We used our ",(0,o.kt)("inlineCode",{parentName:"p"},"db-analyser")," tool to benchmark the cost of reading keys and\nflushing values to disk. The following plot shows the duration of these disk\noperation in relation to the main ledger operations, where we can see that the\ncost of the former are comparatively low. The spike at the beginning of the\ngraph is when, at the start of the Shelley era, the ",(0,o.kt)("em",{parentName:"p"},"entire")," UTxO set is flushed\nto disk."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"UTxO-HD read and flush benchmarks",src:n(90595).Z,width:"1600",height:"800"})),(0,o.kt)("p",null,"After months of hard work adding tests for the prototype, we are ready to run\nend-to-end tests on the node, and system level benchmarks. This signals a very\nimportant milestone for the UTxO-HD workstream \ud83c\udf89."),(0,o.kt)("h3",{id:"genesis"},"Genesis"),(0,o.kt)("p",null,"We elaborated a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/blob/a626c84f6df585dd27d735eb7eec73904a1f570e/ouroboros-consensus/docs/2023-Jan-Genesis-roadmap.md"},"high-level decomposition")," of the remaining\nwork for Genesis. We also continued benchmarking the chain-sync-jumping\nhappy-path."),(0,o.kt)("h3",{id:"technical-debt"},"Technical debt"),(0,o.kt)("p",null,"We continued working on improving the way we handle blocks from the future."),(0,o.kt)("h3",{id:"support"},"Support"),(0,o.kt)("p",null,"We completed the mapping of ",(0,o.kt)("inlineCode",{parentName:"p"},"Crypto")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"HeaderCrypto")," and body ",(0,o.kt)("inlineCode",{parentName:"p"},"Crypto"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"HeaderCrypto")," is moved to ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-protocol-tpraos"),". We created a draft ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3262"},"pull\nrequest")," to facilitate compiling consensus."))}h.isMDXComponent=!0},90595:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-01-25-consensus-utxo-hd-read-and-flush-benchmarks-6b129a1acaa4bb48443ee81add51fd39.png"}}]);