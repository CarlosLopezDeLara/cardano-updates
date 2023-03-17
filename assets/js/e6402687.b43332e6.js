"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[3524],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"Network Team Update",slug:"2022-11-28-network",authors:"coot",tags:["network","release"],hide_table_of_contents:!1},i=void 0,s={permalink:"/cardano-updates/2022-11-28-network",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-11-28-network.md",source:"@site/blog/2022-11-28-network.md",title:"Network Team Update",description:"Stake-Driven Data Diffusion Release for Relays",date:"2022-11-28T00:00:00.000Z",formattedDate:"November 28, 2022",tags:[{label:"network",permalink:"/cardano-updates/tags/network"},{label:"release",permalink:"/cardano-updates/tags/release"}],readingTime:3.675,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2022-11-28-network",authors:"coot",tags:["network","release"],hide_table_of_contents:!1},prevItem:{title:"Performance & tracing update",permalink:"/cardano-updates/2022-11-30-performance-and-tracing"},nextItem:{title:"Crypto Team Update",permalink:"/cardano-updates/2022-11-25-crypto"}},l={authorsImageUrls:[void 0]},p=[{value:"Stake-Driven Data Diffusion Release for Relays",id:"stake-driven-data-diffusion-release-for-relays",level:2},{value:"Peer Sharing",id:"peer-sharing",level:3},{value:"DeltaQ",id:"deltaq",level:3},{value:"What have we achieve last sprint",id:"what-have-we-achieve-last-sprint",level:2},{value:"DeltaQ",id:"deltaq-1",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"stake-driven-data-diffusion-release-for-relays"},"Stake-Driven Data Diffusion Release for Relays"),(0,o.kt)("p",null,"IOG networking team decided to release the ",(0,o.kt)("em",{parentName:"p"},"Stake-Driven Data Diffusion with\nRobust Optimised Peer Selection")," also more commonly known as ",(0,o.kt)("em",{parentName:"p"},"P2P"),".  In the\nlast update, we informed about a performance regression, but it turns out it\nonly affects block producers, and thus we highly advise against running it on\nsuch nodes.  Further investigation is required to find the cause of it."),(0,o.kt)("p",null,"On IOG's benchmarking cluster we have seen quite a good performance improvement\non block propagation itself.  The cluster is running a static topology with\nvalency 6 (each node is connected to 6 other nodes).  In which every of the 50\nnodes are block producers.  The setup of this network is the same as mainnet.\nWe've seen 40-50% performance improvement on block propagation comparing to the\nsame cluster deployed with the same topology but using non-P2P nodes.  We think\nthis performance improvement is caused by using full duplex connections.  Quite\nlikely the transaction traffic floating in both directions on the same TCP\nconnection helps to keep the TCP window open.  Note that in a cluster of 50\nnodes with valency 6 the probability of having at least one duplex connection\nis more than 50%.  We don't expect the same improvement on mainnet because the\nnetwork is much wider and the transaction traffic is not as large."),(0,o.kt)("p",null,"Just before the release we squashed two small bugs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4163"},"issue #4163")," - top level integration bug in ",(0,o.kt)("inlineCode",{parentName:"li"},"keep-alive"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4177"},"issue #4177")," - a bug in ",(0,o.kt)("inlineCode",{parentName:"li"},"outbound-governor"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4165"},"PR #4165")," - a fix ",(0,o.kt)("inlineCode",{parentName:"li"},"cardano-ping")," support of ",(0,o.kt)("inlineCode",{parentName:"li"},"NodeToNodeV_10"),".")),(0,o.kt)("h3",{id:"peer-sharing"},"Peer Sharing"),(0,o.kt)("p",null,"We were carrying a review of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4019"},"peer sharing PR"),"."),(0,o.kt)("h3",{id:"deltaq"},"DeltaQ"),(0,o.kt)("p",null,"Neil Davies was invited to give a guest lecture entitled ",(0,o.kt)("inlineCode",{parentName:"p"},"Avoiding System Catastrophes")," at ",(0,o.kt)("a",{parentName:"p",href:"https://uclouvain.be/en/index.html"},"UCLouvain"),"."),(0,o.kt)("h2",{id:"what-have-we-achieve-last-sprint"},"What have we achieve last sprint"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4163"},"issue #4163"),": we found out that a control message is not passed to the\n",(0,o.kt)("inlineCode",{parentName:"p"},"keep-alive")," mini-protocol, this results in every demotion executing demotion\ntimeout rather than a graceful termination.  With the fix the node will no longer log:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ "kind": "PeerStatusChangeFailure"\n, "peerStatusChangeType": "WarmToCold (ConnectionId {localAddress = 192.168.0.10:7000, remoteAddress = 3.129.186.40:3000})"\n, "reason": "TimeoutError"\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4177"},"issue #4177"),": we fixed an assertion failure in the ",(0,o.kt)("inlineCode",{parentName:"p"},"outbound-governor"),"; now\nwe don't try demoted peers which are being demoted already.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4155"},"PR #4155"),": we refactored ",(0,o.kt)("inlineCode",{parentName:"p"},"ouroboros-network")," packages.  There's a top level\n",(0,o.kt)("inlineCode",{parentName:"p"},"ouroboros-consensus-diffusion")," package which integrates ",(0,o.kt)("inlineCode",{parentName:"p"},"network"),"\n& ",(0,o.kt)("inlineCode",{parentName:"p"},"consensus")," code.  We also introduced:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ouroboros-network-api")," package which contains the API shared between\n",(0,o.kt)("inlineCode",{parentName:"li"},"network")," & ",(0,o.kt)("inlineCode",{parentName:"li"},"conensus"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ouroboros-network-mock")," package which contains mock API used for testing\n(e.g. a mock chain & chain producer, etc.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ouroboros-network-protocols")," package which contains implementation of all\n(but ",(0,o.kt)("inlineCode",{parentName:"li"},"handshake"),") mini-protocols, exposes a ",(0,o.kt)("inlineCode",{parentName:"li"},"testlib")," and contains ",(0,o.kt)("inlineCode",{parentName:"li"},"test"),"\nand ",(0,o.kt)("inlineCode",{parentName:"li"},"cddl")," components.")),(0,o.kt)("p",{parentName:"li"},"This made the dependency tree of ",(0,o.kt)("inlineCode",{parentName:"p"},"network")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"consensus")," packages much\ncleaner.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4169"},"PR #4169"),": we described the usage of release branches in ",(0,o.kt)("inlineCode",{parentName:"p"},"CONTRIBUTING.md"),"\ndoc.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4165"},"PR #4165"),": we fixed ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-ping")," support of ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeToNodeV_10")," protocol."))),(0,o.kt)("h3",{id:"deltaq-1"},"DeltaQ"),(0,o.kt)("p",null,"The abstract of the talk:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"An essential step to ensuring that distributed systems are fit for\npurpose."),(0,o.kt)("p",{parentName:"blockquote"},"Distributed systems have become an integral part of our society and\ndaily lives. We are, both implicitly and explicitly, individually as well as\ncollectively, placing ever more trust in them."),(0,o.kt)("p",{parentName:"blockquote"},"Are they worthy of this trust?  Our need for them to be \u2018fit-for-purpose\u2019 goes\nwell beyond notions of functional correctness (i.e. never getting the wrong\nanswer). We need them to deliver the desired outcomes in a timely, robust,\nreliable, resilient fashion, at scale and in a sustainable way (both\neconomically and environmentally)."),(0,o.kt)("p",{parentName:"blockquote"},"This all sounds like a worthy aspiration, but what would be a practical\napproach to capturing and reasoning about these issues? How can we ensure that\nsystems can meet their fit-for-purpose objectives, not just in their design but\nas they are deployed, encounter the imperfect world, are scaled to become\neconomic, and proceed into ongoing maintenance?"),(0,o.kt)("p",{parentName:"blockquote"},"This talk will illustrate how the notions of Outcomes and Quality Attenuation\n(as captured by \u2018\u2206Q\u2019) are being used to both frame the necessary notions and\nprovide a basis for assuring the refinement and reification of such systems,\nfrom initial concept to operational infrastructure.")),(0,o.kt)("p",null,"You can download the slides from ",(0,o.kt)("a",{target:"_blank",href:n(98946).Z},"here"),"."))}c.isMDXComponent=!0},98946:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/2022-11-24-UCL-60c46564c5dee25b0060304c060ab1cf.pdf"}}]);