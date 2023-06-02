"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[62083],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),h=a,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"Consensus Team Update",slug:"2022-10-05-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},i=void 0,s={permalink:"/cardano-updates/2022-10-05-consensus",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-10-05-consensus.md",source:"@site/blog/2022-10-05-consensus.md",title:"Consensus Team Update",description:"High level summary",date:"2022-10-05T00:00:00.000Z",formattedDate:"October 5, 2022",tags:[{label:"consensus",permalink:"/cardano-updates/tags/consensus"}],readingTime:1.825,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Team Update",slug:"2022-10-05-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/cardano-updates/2022-10-14-ledger"},nextItem:{title:"DB Sync Team Update",permalink:"/cardano-updates/2022-10-04-db-sync"}},l={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Executive summary",id:"executive-summary",level:2},{value:"Additional information",id:"additional-information",level:2},{value:"Genesis",id:"genesis",level:3}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"During the past two weeks, the consensus team worked on improving the\nperformance of the ChainSync jumping logic, which is needed for Genesis. We also\nrewrote the implementation of the mempool in the UTxO HD prototype which solved\nthe issues that prevented us from running system level benchmarks. Also on the\nUTxO HD front, we have an improved implementation of the sequence-of-differences\n(a crucial piece of UTxO HD), and we also elaborated a test sign-off list for\nthe UTxO HD feature."),(0,a.kt)("h2",{id:"executive-summary"},"Executive summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"With the latest implementation of ChainSync jumping we are closer to the\nbaseline performance. In particular, the prototype seems to benefit from the\nextra concurrency provided by additional capabilities."),(0,a.kt)("li",{parentName:"ul"},"We rewrote the implementation of the mempool in the UTxO HD prototype. This\nrewrite was required due to performance problems we observed when running the\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/blob/master/Makefile#L51"},"workbench"),".\nThese performance problems prevented us from running system level benchmarks.\nThe rewrite solved these issues. After the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4049"},"UTxO-HD: mempool\nrewrite")," PR is\nmerged, we will contact the Benchmarking team so that they run the system\nlevel benchmarks."),(0,a.kt)("li",{parentName:"ul"},"The implementation of sequences of differences based on anti-diffs was\nintegrated into the UTxO HD prototype. It is pending\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4036"},"review")," and\nwe also need to run replay and syncing benchmarks to confirm that this will\ndeliver a performance improvement, as observed in our micro-benchmarks."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/3944"},"The UTxO HD prototype\ninspection"),"\nresulted in a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4045"},"list of\ntests"),"\nneeded for consensus to consider the UTxO HD prototype as fully tested.")),(0,a.kt)("h2",{id:"additional-information"},"Additional information"),(0,a.kt)("h3",{id:"genesis"},"Genesis"),(0,a.kt)("p",null,"Benchmarking setup: 50MBit/s, 50ms latency"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Red: baseline"),(0,a.kt)("li",{parentName:"ul"},"Green: Current CSJ prototype, 10 peers, jumps every 3000/f slots.")),(0,a.kt)("p",null,"As ChainSync Jumping involves many concurrent network operations at every jump,\nwe tried to run the node with 6 instead of the default 2 capabilties."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Orange: baseline with 6 capabilities"),(0,a.kt)("li",{parentName:"ul"},"Blue: CSJ prototype with 6 capabilities")),(0,a.kt)("p",null,"This diagram shows the respective syncing progress, starting at Genesis and\ncontinuing a good part into Shelley (with the dashed line indicating the\nByron-to-Shelley transition)."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(36276).Z,width:"654",height:"459"})),(0,a.kt)("p",null,"Further work includes whether we can tune the prototype to better handle few\ncapabilities, or to adapt the default number of capabilities (potentially just\nwhile syncing)."))}c.isMDXComponent=!0},36276:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/happy-path-csj-prototype-bench-1-2c33ba45f44a086415e703fe8f0f7ad1.svg"}}]);