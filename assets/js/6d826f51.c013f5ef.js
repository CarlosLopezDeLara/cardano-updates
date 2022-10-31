"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[7729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,d=m["".concat(l,".").concat(c)]||m[c]||h[c]||o;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Consensus Team Update",slug:"2022-10-18-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},s=void 0,i={permalink:"/cardano-updates/2022-10-18-consensus",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-10-18-consensus.md",source:"@site/blog/2022-10-18-consensus.md",title:"Consensus Team Update",description:"High-level summary",date:"2022-10-18T00:00:00.000Z",formattedDate:"October 18, 2022",tags:[{label:"consensus",permalink:"/cardano-updates/tags/consensus"}],readingTime:3.245,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Team Update",slug:"2022-10-18-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2022-10-21-hydra"},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2022-10-14-hydra"}},l={authorsImageUrls:[void 0]},p=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"High-level status report",id:"high-level-status-report",level:2},{value:"Workstreams",id:"workstreams",level:2},{value:"Finish the UTxO HD prototype",id:"finish-the-utxo-hd-prototype",level:3},{value:"Era transition property tests",id:"era-transition-property-tests",level:4},{value:"Mempool state-machine tests",id:"mempool-state-machine-tests",level:4},{value:"Backing store property tests",id:"backing-store-property-tests",level:4},{value:"Benchmarking the CSJ prototype",id:"benchmarking-the-csj-prototype",level:3}],u={toc:p};function h(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,a.kt)("p",null,"During the past two weeks, the consensus team worked on adding property test for\ndifferent aspects of the UTxO HD prototype: era transitions, mempool, and\nbacking store. Thanks to these tests we were able to uncover a bug in the\nprototype. On the Genesis front, we benchmarked a different version of the\nChainSync jumping prototype to try to improve its performance, but this did not\nresult in any noticeable speedup."),(0,a.kt)("h2",{id:"high-level-status-report"},"High-level status report"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Finish the UTxO HD prototype: on track.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"We focused on increasing test coverage for the UTxO-HD prototype:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"We started implementing Cadano-eras transition property-tests."),(0,a.kt)("li",{parentName:"ul"},"We started implementing state-machine property-tests for the mempool."),(0,a.kt)("li",{parentName:"ul"},"We merged the mempool rewrite."),(0,a.kt)("li",{parentName:"ul"},"We started working on state-machine tests for the backing store. This\nuncovered a bug in the range-read implementation of the LMDB backing\nstore."))))),(0,a.kt)("li",{parentName:"ul"},"Genesis: on track.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"We benchmarked a version of the Genesis ChainSync Jumping prototype that\nspreads out the ChainSync updates over a longer period of time. This did not\nresult in any noticeable speedup."),(0,a.kt)("li",{parentName:"ul"},"We investigated the overhead introduced by non-ChainSync components, but no\nconclusions could be drawn from the benchmarks we ran.")))),(0,a.kt)("h2",{id:"workstreams"},"Workstreams"),(0,a.kt)("h3",{id:"finish-the-utxo-hd-prototype"},"Finish the UTxO HD prototype"),(0,a.kt)("p",null,"During the past two weeks, we focused on increasing test coverage for the\nUTxO-HD prototype. We also merged the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4049"},"mempool\nrewrite"),"."),(0,a.kt)("h4",{id:"era-transition-property-tests"},"Era transition property tests"),(0,a.kt)("p",null,"We started implementing ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4043"},"Cardano era transition property\ntests"),",\nwhich are needed for making sure that the ledger tables get updated in the\nright way when we move from one era to the next. There are at the moment two\nimportant transitions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Byron to Shelley: where all the UTxO is transferred from in-memory Byron\nstate (which has no tables) to the ledger tables of the Shelley state."),(0,a.kt)("li",{parentName:"ul"},"Shelley to Allegra: where the AVVM addresses must be deleted.")),(0,a.kt)("p",null,"We have tests for the Byron to Shelley transitions. We are working on adding\nthe remaining ones."),(0,a.kt)("h4",{id:"mempool-state-machine-tests"},"Mempool state-machine tests"),(0,a.kt)("p",null,"We started implementing ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4044"},"state-machine property tests for the\nmempool"),".\nThe mempool is currently tested via pure property tests, and use a ledger\nstate without tables. With the introduction of UTxO HD, testing the concurrent\nbehavior of the mempool became of crucial importance (eg now we have to\nacquire locks to flush the backing store). In addition, we need to test a\nledger state with tables. These needs led to the creation of a new set of\nproperty tests. In particular we aim to run parallel state-machine tests that\nexercise the mempool in a way similar to how the node would make use of it."),(0,a.kt)("h4",{id:"backing-store-property-tests"},"Backing store property tests"),(0,a.kt)("p",null,"We started working on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4081"},"state-machine tests for the backing\nstore")," that UTxO\nHD uses. The property tests uncovered errors in the range-reads implementation\nof the LMDB backing store. To facilitate fixing this bug, we made\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/lmdb-simple/pull/1"},"changes")," to the Haskell\nLMDB bindings."),(0,a.kt)("h3",{id:"benchmarking-the-csj-prototype"},"Benchmarking the CSJ prototype"),(0,a.kt)("p",null,"Prompted by previous benchmarks showing significant improvements in sync time by\nusing more capabilities, we implemented a way to spread out the ChainSync\nupdates over a larger period instead of firing them all at the same time. This\ndidn't result in a noticeable speedup."),(0,a.kt)("p",null,"We also benchmarked the prototype with CSJ disabled (such that just the dynamo\npeer is running ChainSync, but e.g. BlockFetch still sees all peers) to rule\nout/confirm overhead by non-ChainSync (mainly BlockFetch) related components.\nThis results in era-specific behavior (speed is like the prototype in Byron, but\nlike the baseline in Shelley). This deserves a closer look in the future."),(0,a.kt)("p",null,"This diagram shows the respective syncing progress, starting at Genesis and\ncontinuing a good part into Shelley (with the dashed line indicating the\nByron-to-Shelley transition)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Red: baseline"),(0,a.kt)("li",{parentName:"ul"},"Green: CSJ prototype, 10 peers, jumps every 3000/f slots, jumps in clumps."),(0,a.kt)("li",{parentName:"ul"},"Blue: like Green, jumps are spread out."),(0,a.kt)("li",{parentName:"ul"},"Orange: variant with no jumping, to measure unrelated overhead.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5555).Z,width:"654",height:"459"})))}h.isMDXComponent=!0},5555:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/happy-path-csj-prototype-bench-2-e23d2986ddef0a187df9ce336b2db116.svg"}}]);