"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[8592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,d=c["".concat(l,".").concat(m)]||c[m]||h[m]||r;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},68472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={title:"Consensus Team Update",slug:"2023-03-08-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},i=void 0,s={permalink:"/cardano-updates/2023-03-08-consensus",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-03-08-consensus.md",source:"@site/blog/2023-03-08-consensus.md",title:"Consensus Team Update",description:"High level summary",date:"2023-03-08T00:00:00.000Z",formattedDate:"March 8, 2023",tags:[{label:"consensus",permalink:"/cardano-updates/tags/consensus"}],readingTime:2.46,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Team Update",slug:"2023-03-08-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/cardano-updates/2023-03-09-mithril"},nextItem:{title:"Node API & CLI Team Update",permalink:"/cardano-updates/2023-03-08-node-cli-api"}},l={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Workstreams",id:"workstreams",level:2},{value:"UTxO HD Prototype",id:"utxo-hd-prototype",level:3},{value:"Genesis",id:"genesis",level:3},{value:"Technical debt",id:"technical-debt",level:3},{value:"Fostering collaboration",id:"fostering-collaboration",level:3},{value:"Support",id:"support",level:3}],u={toc:p};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"The Consensus team continued working on refactoring and improving the UTxO-HD\nprototype, and introducing improvements to the ",(0,a.kt)("inlineCode",{parentName:"p"},"lmdb")," related packages. In\nparticular we identified an opportunity to gain performance by handling locks in\na more optimal way."),(0,a.kt)("p",null,"On the Genesis front, we sketched a mitigation for an issue that ",(0,a.kt)("inlineCode",{parentName:"p"},"PNSol")," and\nResearchers caught. We also came op with a road map for not only testing the\nGenesis prototypes, but also for enriching the tests we already have."),(0,a.kt)("p",null,"Regarding technical debt, next to some minor improvements, we created\ncomponent-level micro-benchmarks for adding transactions to the mempool. The\nresults of these benchmarks will be published in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ouroboros-consensus")," ",(0,a.kt)("a",{parentName:"p",href:"https://input-output-hk.github.io/ouroboros-consensus/"},"web\npage"),"."),(0,a.kt)("p",null,"We also finished moving the Consensus documentation to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ouroboros-consensus"),"\nrepository, released ",(0,a.kt)("inlineCode",{parentName:"p"},"ouroboros-consensus")," ",(0,a.kt)("inlineCode",{parentName:"p"},"0.3.0.0"),", and reduced the time\nGitHub actions take in ",(0,a.kt)("inlineCode",{parentName:"p"},"ouroboros-network"),"."),(0,a.kt)("h2",{id:"workstreams"},"Workstreams"),(0,a.kt)("h3",{id:"utxo-hd-prototype"},"UTxO HD Prototype"),(0,a.kt)("p",null,"We continued working on refactoring and improving the UTxO-HD prototype. As a\nresult of the first round of sytem-level benchmarks, we identified an\nopportunity to optimise the way we handle locks to improve performance\n(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4393"},"#4393"),")."),(0,a.kt)("p",null,"Also, we introduced several improvements to the ",(0,a.kt)("inlineCode",{parentName:"p"},"lmdb")," related packages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/lmdb-simple/pull/19"},"New tests")," for read-only transaction handles."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/lmdb-simple/pull/18"},"New functions")," and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/lmdb-simple/pull/13"},"data types"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/lmdb-simple/pull/11"},"Updates")," to support improved type safety and smaller constraints in\nthe UTxO HD prototype."),(0,a.kt)("li",{parentName:"ul"},"Windows and MacOS ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/haskell-lmdb/pull/8"},"CI support"),".")),(0,a.kt)("h3",{id:"genesis"},"Genesis"),(0,a.kt)("p",null,"We sketched out a mitigation of the issue that ",(0,a.kt)("inlineCode",{parentName:"p"},"PNSol")," and Researchers caught in\nthe Genesis design."),(0,a.kt)("p",null,"We came up with a road map for testing the Genesis prototypes, including early\nmilestones that are applicable to today's master branch, ie tests that are\nuseful before Genesis, and that will be nicely enriched when we do add Genesis."),(0,a.kt)("p",null,"We developed the aforementioned tests, specifically a ",(0,a.kt)("inlineCode",{parentName:"p"},"QuickCheck")," generator for\nthe Honest leader schedule and one as-aggressive-as-possible Adversarial\nleader schedule that together satisfy the Praos properties that the Consensus\ndesign takes as invariants."),(0,a.kt)("p",null,"We investigated why the improved ",(0,a.kt)("inlineCode",{parentName:"p"},"ChainDB")," queueing implementation behaves\ndifferently in the baseline compared to the prototype, and we are close to\nhaving a full picture of how the Consensus components interact during bulk sync."),(0,a.kt)("h3",{id:"technical-debt"},"Technical debt"),(0,a.kt)("p",null,"We ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4400"},"created")," component-level micro-benchmarks for adding transactions\nto the mempool. We plan on extending this to more mempool actions and different\ntypes of blocks. We ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4422"},"store")," the benchmark data to make it available\nto the GitHub action that ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-consensus/pull/12"},"publishes")," the benchmarks results."),(0,a.kt)("p",null,"Other minor improvements include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4429"},"Removal")," of ",(0,a.kt)("inlineCode",{parentName:"li"},"Test.Util.Classify")," in favour of ",(0,a.kt)("inlineCode",{parentName:"li"},"Test.StateMachine.Labelling"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4423"},"Addition")," of ",(0,a.kt)("inlineCode",{parentName:"li"},"-Wunused-packages")," to the default ",(0,a.kt)("inlineCode",{parentName:"li"},"ghc-options")," for Consensus\npackages.")),(0,a.kt)("h3",{id:"fostering-collaboration"},"Fostering collaboration"),(0,a.kt)("p",null,"We finished moving the Consensus documentation ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4374"},"from"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"ouroboros-network")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/haskell-lmdb/pull/8"},"to")," ",(0,a.kt)("inlineCode",{parentName:"p"},"ouroboros-consensus"),", in preparation for\nmigrating the code to the latter repository."),(0,a.kt)("h3",{id:"support"},"Support"),(0,a.kt)("p",null,"We ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4412"},"released")," ouroboros-consensus 0.3.0.0."),(0,a.kt)("p",null,"We ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4421"},"reduced")," the load in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ouroboros-network")," GitHub actions,\nthereby reducing the time CI jobs take."))}h.isMDXComponent=!0}}]);