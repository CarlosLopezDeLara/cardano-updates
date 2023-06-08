"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[96410],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>s});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(a),s=l,h=m["".concat(p,".").concat(s)]||m[s]||c[s]||o;return a?r.createElement(h,n(n({ref:t},d),{},{components:a})):r.createElement(h,n({ref:t},d))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,n=new Array(o);n[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,n[1]=i;for(var u=2;u<o;u++)n[u]=a[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},73677:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(87462),l=(a(67294),a(3905));const o={title:"SRE Team Update",slug:"2023-06-08-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},n=void 0,i={permalink:"/cardano-updates/2023-06-08-sre",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-06-08-sre.md",source:"@site/blog/2023-06-08-sre.md",title:"SRE Team Update",description:"High level summary",date:"2023-06-08T00:00:00.000Z",formattedDate:"June 8, 2023",tags:[{label:"sre",permalink:"/cardano-updates/tags/sre"}],readingTime:1.795,hasTruncateMarker:!1,authors:[{name:"John Lotoski",title:"Service Reliability Engineer",url:"https://github.com/johnalotoski",imageURL:"https://github.com/johnalotoski.png",key:"johnalotoski"}],frontMatter:{title:"SRE Team Update",slug:"2023-06-08-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},prevItem:{title:"Goedel Team Update",permalink:"/cardano-updates/2023-06-08-goedel"},nextItem:{title:"System Test Team Update",permalink:"/cardano-updates/2023-06-08-system-test"}},p={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2},{value:"Bitte",id:"bitte",level:3},{value:"Bitte-cells",id:"bitte-cells",level:3},{value:"Cardano-graphql",id:"cardano-graphql",level:3},{value:"Cardano-node",id:"cardano-node",level:3},{value:"Cardano-ops",id:"cardano-ops",level:3},{value:"Cardano-world",id:"cardano-world",level:3},{value:"Ci-ops",id:"ci-ops",level:3},{value:"Ci-world",id:"ci-world",level:3},{value:"Cicero",id:"cicero",level:3},{value:"Iohk-nix",id:"iohk-nix",level:3},{value:"Openziti",id:"openziti",level:3}],d={toc:u};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,l.kt)("p",null,"The SRE team continues work on CI and cardano environment improvements.  Some notable recent improvements include: expanding the darwin CI cluster and providing new aarch64 builder support; adding bare metal bitte cluster capability with network overlay for high IOPS workload performance, such as explorer."),(0,l.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,l.kt)("h3",{id:"bitte"},"Bitte"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Equinix bare metal capability was added to bitte: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/bitte/pull/194"},"bitte-pull-194")),(0,l.kt)("li",{parentName:"ul"},"Update bitte nixpkgs, nix version, nomad driver, equinix lifecycle, misc bug fixes: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/bitte/pull/201"},"bitte-pull-201"))),(0,l.kt)("h3",{id:"bitte-cells"},"Bitte-cells"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Improvements made for patroni cluster recovery of large databases: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/bitte-cells/compare/main...patroni-flex"},"bitte-cells-branch"))),(0,l.kt)("h3",{id:"cardano-graphql"},"Cardano-graphql"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Update cardano-graphql and nixos service: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-graphql/pull/815"},"cardano-graphql-pull-815"))),(0,l.kt)("h3",{id:"cardano-node"},"Cardano-node"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Update cardano-node to use the updated iohk-nix environments: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5241"},"cardano-node-pull-5241"))),(0,l.kt)("h3",{id:"cardano-ops"},"Cardano-ops"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Update cardano-graphql, adds monitoring improvements and misc bug fixes: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ops/pull/411"},"cardano-ops-pull-411")),(0,l.kt)("li",{parentName:"ul"},"Work in progress on mixed legacy and p2p topology clusters in cardano-ops: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ops/compare/master...ops-local"},"cardano-ops-branch"))),(0,l.kt)("h3",{id:"cardano-world"},"Cardano-world"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add a declarative cardano-faucet dashboard: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-world/commit/e7d40d34aff52bbeb309f87939bd0d40f585e60a"},"cardano-world-commit")),(0,l.kt)("li",{parentName:"ul"},"Remove a requirement for root user in Nomad docker images: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-world/pull/68"},"cardano-world-pull-68")),(0,l.kt)("li",{parentName:"ul"},"Enable explorer in cardano-world for high IOPS metal access: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-world/pull/69"},"cardano-world-pull-69")),(0,l.kt)("li",{parentName:"ul"},"Migrate explorer cluster to cardano-world: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-world/pull/75"},"cardano-world-pull-75")),(0,l.kt)("li",{parentName:"ul"},"Migrate testnet metadata server to cardano-world, cleanup envs: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-world/pull/77"},"cardano-world-pull-77")),(0,l.kt)("li",{parentName:"ul"},"Add a faucet restore delegation script to cardano-world for non-functioning delegated pools: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-world/pull/79"},"cardano-world-pull-79")),(0,l.kt)("li",{parentName:"ul"},"Integrate node 8.x into cardano-world: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-world/pull/84"},"cardano-world-pull-84")),(0,l.kt)("li",{parentName:"ul"},"Update cardano-world to use iohk-nix for node environments: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-world/pull/87"},"cardano-world-pull-87")),(0,l.kt)("li",{parentName:"ul"},"Create a stakepool analysis query for cluster pool performance overview: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-world/commit/64fe3b9d4067c24eef028ac1c561d6f9a7d5a9a8"},"cardano-world-commit")),(0,l.kt)("li",{parentName:"ul"},"Added an iptables fixup script for broken bridged networking nomad jobs: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-world/commit/02550206e4e34d121135794b6e54084635e55a50"},"cardano-world-commit")),(0,l.kt)("li",{parentName:"ul"},"Improve cardano-world job automation with additional parameterization: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-world/pull/92"},"cardano-world-pr-92")),(0,l.kt)("li",{parentName:"ul"},"Update preview network experimental config defaults: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-world/pull/93"},"cardano-world-pr-93"))),(0,l.kt)("h3",{id:"ci-ops"},"Ci-ops"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Update legacy darwin builders and buildkite agent for ci-world network overlay and monitoring: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ci-ops/pull/108"},"ci-ops-pull-108"))),(0,l.kt)("h3",{id:"ci-world"},"Ci-world"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Resolve ci-world linux buildkite agent cleanup bug: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ci-world/commit/3d053b202a6e40fab23db49801de7d6e580fab1f"},"ci-world-commit")),(0,l.kt)("li",{parentName:"ul"},"Integrate new darwin builders into ci-world: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ci-world/pull/22"},"ci-world-pull-22")),(0,l.kt)("li",{parentName:"ul"},"Migrate patroni HA db to it's own namespace in ci-world: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ci-world/pull/24"},"ci-world-pull-24"))),(0,l.kt)("h3",{id:"cicero"},"Cicero"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Implement a cicero webhook backoff with exponential decay plus jitter: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cicero/pull/79"},"cicero-pull-79"))),(0,l.kt)("h3",{id:"iohk-nix"},"Iohk-nix"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Update iohk-nix to be source of truth for node environments: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/iohk-nix/pull/534"},"iohk-nix-pull-534")),(0,l.kt)("li",{parentName:"ul"},"Update preview network experimental config defaults: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/iohk-nix/pull/544"},"iohk-nix-pull-544"))),(0,l.kt)("h3",{id:"openziti"},"Openziti"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add darwin intel and arm support to ziti-edge-tunnel nix modules: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/johnalotoski/openziti-bins/pull/1"},"openziti-bins-pull-1"))))}c.isMDXComponent=!0}}]);