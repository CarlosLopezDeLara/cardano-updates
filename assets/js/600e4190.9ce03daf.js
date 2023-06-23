"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[80599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={title:"Network Team Update",slug:"2023-04-04-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/quarterly/2023-04-04-network",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/quarterly/2023-04-04-network.md",source:"@site/quarterly/2023-04-04-network.md",title:"Network Team Update",description:"Network Quarterly Update",date:"2023-04-04T00:00:00.000Z",formattedDate:"April 4, 2023",tags:[{label:"network",permalink:"/cardano-updates/quarterly/tags/network"}],readingTime:2.64,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2023-04-04-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"Consensus Quarterly Update",permalink:"/cardano-updates/quarterly/2023-04-25-consensus"},nextItem:{title:"Ledger Team Update",permalink:"/cardano-updates/quarterly/2023-04-03-ledger"}},p={authorsImageUrls:[void 0]},u=[{value:"Network Quarterly Update",id:"network-quarterly-update",level:2},{value:"2023-01 - 2023-03",id:"2023-01---2023-03",level:2},{value:"Main achievements",id:"main-achievements",level:3},{value:"Gradual dynamic P2P release on mainnet",id:"gradual-dynamic-p2p-release-on-mainnet",level:4},{value:"Peer Sharing",id:"peer-sharing",level:4},{value:"Eclipse Evasion",id:"eclipse-evasion",level:4},{value:"Cardano Network Service Assurance",id:"cardano-network-service-assurance",level:4},{value:"Cardano-Node",id:"cardano-node",level:4},{value:"Testing improvements",id:"testing-improvements",level:4},{value:"Technical Debt",id:"technical-debt",level:4},{value:"Documentation",id:"documentation",level:4},{value:"IO-Sim",id:"io-sim",level:4},{value:"NoThunks",id:"nothunks",level:4},{value:"Next steps",id:"next-steps",level:3}],s={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"network-quarterly-update"},"Network Quarterly Update"),(0,o.kt)("h2",{id:"2023-01---2023-03"},"2023-01 - 2023-03"),(0,o.kt)("h3",{id:"main-achievements"},"Main achievements"),(0,o.kt)("h4",{id:"gradual-dynamic-p2p-release-on-mainnet"},"Gradual dynamic P2P release on mainnet"),(0,o.kt)("p",null,"We released two version of ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node")," with dynamic P2P capabilities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/releases/tag/1.35.6"},(0,o.kt)("inlineCode",{parentName:"a"},"1.35.6")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"we found and fixed a bug in exception handling in ",(0,o.kt)("inlineCode",{parentName:"li"},"peer-state-actions"),(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4357"},"pull-4357")),(0,o.kt)("li",{parentName:"ul"},"we found and fixed a busy loop when demoting a peer from hot to warm ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4385"},"pull-4385")," "))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/releases/tag/1.35.7"},(0,o.kt)("inlineCode",{parentName:"a"},"1.35.7")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"includes interoperability in the legacy non-p2p network stack ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/outoboros-network/pull/4467"},"pull-4467")))),(0,o.kt)("li",{parentName:"ul"},"we fixed a busy loop of demotion & promotions: ",(0,o.kt)("inlineCode",{parentName:"li"},"warm -> hot -> warm"),"[pull-4485]"," /it will be included in ",(0,o.kt)("inlineCode",{parentName:"li"},"cardano-node-8.0.0")," release/.")),(0,o.kt)("p",null,"Currently there are more than 200 P2P relays on mainnet."),(0,o.kt)("h4",{id:"peer-sharing"},"Peer Sharing"),(0,o.kt)("p",null,"We implemented /peer sharing/ ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4019"},"pull-4019")," which will be available as an\nexperimental feature in one of the future ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node")," releases."),(0,o.kt)("p",null,"We implemented /light peer sharing/, e.g. adding inbound connections to the set\nof known peers of the outbound governor, which allows to bootstrap relays not\nregistered on chain.  This complements peer sharing.  The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4277"},"pull-4277")," is in\nlate review stages."),(0,o.kt)("h4",{id:"eclipse-evasion"},"Eclipse Evasion"),(0,o.kt)("p",null,"We finalised design of eclipse evasion and we started implementing it.  We\nhave an initial implementation (not merged). We are in the process of extending\nour test suite to cover new implementation details: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/3886"},"issue-3886"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/outoboros-network/pull/4462"},"pull-4462"),"."),(0,o.kt)("h4",{id:"cardano-network-service-assurance"},"Cardano Network Service Assurance"),(0,o.kt)("p",null,"Galois has been making progress on ",(0,o.kt)("em",{parentName:"p"},"Cardano Network Service Assurance")," project."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In cardano-node, they have developed a ",(0,o.kt)("inlineCode",{parentName:"p"},"datapoint")," abstraction that creates\na queue of (existing) log events, they now have two such ",(0,o.kt)("inlineCode",{parentName:"p"},"datapoint"),"s (of log\nevents) implemented.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"They have developed a ",(0,o.kt)("inlineCode",{parentName:"p"},"datapoint"),' client executable that can connect to a node\nwhich serves the "new tracing".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"They have been exploring approaches for the consolidation and analysis of\n",(0,o.kt)("inlineCode",{parentName:"p"},"datapoint")," data to extract actionable network health status."))),(0,o.kt)("h4",{id:"cardano-node"},"Cardano-Node"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We made it possible to configure accepted connections limit ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4902"},"pull-4902"),".")),(0,o.kt)("h4",{id:"testing-improvements"},"Testing improvements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We fixed a bug in network simulation implementation of TCP simultaneous open ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4265"},"pull-4265"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We introduced header-body split in the diffusion simulation ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/outoboros-network/pull/4419"},"pull-4419")," (in review).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We introduced initiator only nodes in the diffusion simulation ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4280"},"pull-4280"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We fixed a connection-manager test failure ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4370"},"issue-4370"),"."))),(0,o.kt)("h4",{id:"technical-debt"},"Technical Debt"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We refactored ",(0,o.kt)("inlineCode",{parentName:"p"},"Snocket")," interface decoupling it from the multiplexer\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4260"},"pull-4260"),". This simplified some aspects of the KES agent implementation.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We introduces a record for CBOR codecs which are used for various data\nstructures by mini-protocol codecs ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/outoboros-network/pull/4430"},"pull-4430"),"."))),(0,o.kt)("h4",{id:"documentation"},"Documentation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We explained some limitations of CDDL in our technical report ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4351"},"pull-4351"),".")),(0,o.kt)("h4",{id:"io-sim"},"IO-Sim"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We fixed implementation of ",(0,o.kt)("inlineCode",{parentName:"li"},"MVar"),"'s ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/io-sim/pull/70"},"pull-70"),".")),(0,o.kt)("h4",{id:"nothunks"},"NoThunks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We published a new version of ",(0,o.kt)("a",{parentName:"li",href:"https://hackage.haskell.org/package/nothunks"},(0,o.kt)("inlineCode",{parentName:"a"},"nothunks"))," library to Hackage.")),(0,o.kt)("h3",{id:"next-steps"},"Next steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Finish implementation & testing of eclipse evasion ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/3886"},"issue-3886"),"."),(0,o.kt)("li",{parentName:"ul"},"Optimise connectivity to peers behind firewall ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4381"},"issue-4381"),"."),(0,o.kt)("li",{parentName:"ul"},"Finish the work on enabling block production dynamically to allow using P2P\non block producers ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/3159"},"issue-3159"),"."),(0,o.kt)("li",{parentName:"ul"},"If time permits we would like also to reserve some time for finishing\npublication of ",(0,o.kt)("inlineCode",{parentName:"li"},"io-sim")," to Hackage.")))}c.isMDXComponent=!0}}]);