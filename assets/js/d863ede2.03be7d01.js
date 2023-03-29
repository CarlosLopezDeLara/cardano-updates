"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[5766],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||a;return n?o.createElement(m,s(s({ref:t},u),{},{components:n})):o.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Consensus Team Update",slug:"2023-02-22-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},s=void 0,i={permalink:"/cardano-updates/2023-02-22-consensus",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-02-22-consensus.md",source:"@site/blog/2023-02-22-consensus.md",title:"Consensus Team Update",description:"High level summary",date:"2023-02-22T00:00:00.000Z",formattedDate:"February 22, 2023",tags:[{label:"consensus",permalink:"/cardano-updates/tags/consensus"}],readingTime:2.45,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Team Update",slug:"2023-02-22-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},prevItem:{title:"Performance & tracing update",permalink:"/cardano-updates/2023-02-23-performance-and-tracing"},nextItem:{title:"Node API & CLI Team Update",permalink:"/cardano-updates/2023-02-22-node-cli-api"}},l={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Workstreams",id:"workstreams",level:2},{value:"UTxO HD Prototype",id:"utxo-hd-prototype",level:3},{value:"Genesis",id:"genesis",level:3},{value:"Technical debt",id:"technical-debt",level:3},{value:"Support",id:"support",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("p",null,"During the past two weeks we got the results from the system level benchmarks\nfor UTxO HD. They showed a substantial performance regression, so we spent some\ntime analyzing the results. We found out the frequency at which ledger snapshots\nwere taken was too high, so we requested the benchmarking team a new run with a\nmore realistic snapshotting policy. We continued refactoring and improving the\nprototype, and we released UTxO-HD related packages to CHaP."),(0,r.kt)("p",null,"We met with IOG researchers and networking specialists to discuss the Genesis\ndesign, which was well received. We continued working on testing and\nbenchmarking different Genesis prototypes."),(0,r.kt)("p",null,"We are also working on solving a test failure related to iterators. This work\nderived in several improvements such as better documentation, a framework for\nwriting unit (and regression) tests, and the possibility of debugging\n",(0,r.kt)("inlineCode",{parentName:"p"},"QuickCheck")," counter examples in the REPL."),(0,r.kt)("p",null,"Finally, we released ",(0,r.kt)("inlineCode",{parentName:"p"},"ouroboros-consensus")," 0.2.0.0 and\n",(0,r.kt)("inlineCode",{parentName:"p"},"ouroboros-consensus-cardano")," 0.3.0.0 to CHaP"),(0,r.kt)("h2",{id:"workstreams"},"Workstreams"),(0,r.kt)("h3",{id:"utxo-hd-prototype"},"UTxO HD Prototype"),(0,r.kt)("p",null,"We got the results of the first system level benchmarks for UTxO HD. They seemed\nto indicate a significant regression in performance. After looking into the\nbenchmark logs we found that the benchmark runs took ledger state snapshots too\noften, due to the default snapshotting policy depending on ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," being so\nsmall in the benchmark runs. Therefore, the next step is to re-run the\nbenchmarks with a snapshotting policy that more closely resembles the one from\nmainnet."),(0,r.kt)("p",null,"At the same time, we continued refactoring and cleaning up the prototype. "),(0,r.kt)("p",null,"Also, we prepared the ",(0,r.kt)("inlineCode",{parentName:"p"},"anti-diff")," packages (",(0,r.kt)("inlineCode",{parentName:"p"},"fingertree-rm"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"diff-containers"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"simple-semigroupoids"),") and the ",(0,r.kt)("inlineCode",{parentName:"p"},"lmdb")," related packages (",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-lmdb")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-lmdb-simple"),") to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-haskell-packages"},"CHaP"),"."),(0,r.kt)("h3",{id:"genesis"},"Genesis"),(0,r.kt)("p",null,"The Genesis design was presented to the IOG researchers and Peter Thompson from\nNSol. It was well received. They pointed out one blindspot, but we think it'll\nbe relatively simple to mitigate."),(0,r.kt)("p",null,"In parallel, we continued developing test and benchmarks for the Genesis\nprototypes. I particular we tested and implemented a potential fix for\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4037#issuecomment-1439708022"},"increased ChainDB dequeue timings"),", which partly\nbehaved as we expected, but still needs further investigation. Also we obtained\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4037#issuecomment-1434745031"},"new benchmarking data")," for the prototype."),(0,r.kt)("h3",{id:"technical-debt"},"Technical debt"),(0,r.kt)("p",null,"Related to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4183"},"#4183"),", we developed a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4379"},"DSL")," for specifying\n",(0,r.kt)("inlineCode",{parentName:"p"},"ChainDB")," unit tests. This will allow us to better understand the\ncounter-examples returned by QuickCheck tests, and to write ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4383"},"regression\ntests")," for them. Also, we ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4358"},"added a module")," to enable\nQuickCheck counter-examples to be run on the REPL, allowing for faster debugging\nfeedback. Also, we improved the documentation related to followers\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4372"},"#4372"),")."),(0,r.kt)("p",null,"We are also working on a design for optimizing the way we handle blocks from the\nfuture."),(0,r.kt)("h3",{id:"support"},"Support"),(0,r.kt)("p",null,"We released ",(0,r.kt)("inlineCode",{parentName:"p"},"ouroboros-consensus")," 0.2.0.0 and ",(0,r.kt)("inlineCode",{parentName:"p"},"ouroboros-consensus-cardano"),"\n0.3.0.0 to CHaP. Remember that we decided to split the packages related to\nConsensus into two bundles, one with the core functionality, Cardano-agnostic\ncode, and another bundle with instantiations specific to Cardano."))}d.isMDXComponent=!0}}]);