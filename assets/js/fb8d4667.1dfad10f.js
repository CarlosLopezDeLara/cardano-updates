"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[7161],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={title:"Network Team Update",slug:"2022-10-28-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2022-10-28-network",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-10-28-network.md",source:"@site/blog/2022-10-28-network.md",title:"Network Team Update",description:"High-level summary",date:"2022-10-28T00:00:00.000Z",formattedDate:"October 28, 2022",tags:[{label:"network",permalink:"/cardano-updates/tags/network"}],readingTime:2.665,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2022-10-28-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"hydra",permalink:"/cardano-updates/2022/10/28/hydra"},nextItem:{title:"SRE Team Update",permalink:"/cardano-updates/2022-08-12-sre"}},s={authorsImageUrls:[void 0]},u=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"Detailed description",id:"detailed-description",level:2},{value:"P2P Network Stack",id:"p2p-network-stack",level:3},{value:"Consensus",id:"consensus",level:3},{value:"Cardano Node",id:"cardano-node",level:3},{value:"Peer Sharing",id:"peer-sharing",level:3},{value:"Eclipse Evasion",id:"eclipse-evasion",level:3},{value:"IO-Sim",id:"io-sim",level:3},{value:"Open Source",id:"open-source",level:3},{value:"Mithril Cardano Integration",id:"mithril-cardano-integration",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,r.kt)("p",null,"The team has focused on debuging & fixing bugs for the ",(0,r.kt)("strong",{parentName:"p"},"P2P single relay release"),", which included"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"diagnosing, fixing and writing tests for a bug in ",(0,r.kt)("inlineCode",{parentName:"li"},"peer-state-actions")," which\nfortunately hasn't been released;"),(0,r.kt)("li",{parentName:"ul"},"diagnosing & preventing misconfiguration of DNS")),(0,r.kt)("p",null,"We also focused on developing ",(0,r.kt)("strong",{parentName:"p"},"peer sharing"),".  We also held a session with\nthe scientists on eclipse evasion."),(0,r.kt)("h2",{id:"detailed-description"},"Detailed description"),(0,r.kt)("h3",{id:"p2p-network-stack"},"P2P Network Stack"),(0,r.kt)("p",null,"During the past two weeks the team focused on p2p single relay release and peer\nsharing.  We found and fixed an important bug recently introduced in one of the\ncomponents of p2p networking stack (fortunately never released).  Together with\na fix, we designed a unit test diffusion simulation as well as quickcheck\nproperty test (both could reproduce it). We also changed the code in a way that\nif such a bug is reintroduced in the future, it will be obvious to diagnose.\nFor more see:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4067"},"ouroboros-network#4067")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4086"},"ouroboros-network#4086"))),(0,r.kt)("p",null,"Initial benchmarking run of the P2P code was executed.  The results where\nunlike what we see on the mainnet.  We found a possible misconfiguration of the\ncluster (caused by 0 TTL on domain names), which could be the direct cause of\nit.  We wrote a PR which rules out such misconfiguration.  We are awaiting on\nthe next benchmarking results.  See more at:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4106"},"ouroboros-network#4106")),(0,r.kt)("p",null,"We also started working on P2P single relay release.  The PR\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4120"},"ouroboros-network#4120"),"\nincludes ",(0,r.kt)("em",{parentName:"p"},"108")," patches cherry-picked from the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch.  We started\nworking toward integration these changes against the release branch of\n",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-node"),".  Early next week we ought to be able to have an early version\nof ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-node")," with ",(0,r.kt)("em",{parentName:"p"},"non experimental P2P support"),"!"),(0,r.kt)("p",null,"For more detailed release plan please see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/3888"},"P2P - Single\nRelay"),"\nissue."),(0,r.kt)("h3",{id:"consensus"},"Consensus"),(0,r.kt)("p",null,"We identified and fixed missing error reporting in consensus\ninitialisation phase.  See more at\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4015"},"ouroboros-network#4015")),(0,r.kt)("h3",{id:"cardano-node"},"Cardano Node"),(0,r.kt)("p",null,"We also made changes in ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-node")," in order to give better experience for\nnode operators.  This includes updating severities of some of the traces as\nwell as implementing new format of the p2p topology file.  For more see:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4563"},"cardano-node#4563"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4561"},"cardano-node#4561"))),(0,r.kt)("h3",{id:"peer-sharing"},"Peer Sharing"),(0,r.kt)("p",null,"We continued working on implementation of peer sharing.  We have an early\nimplementation which will be reviewed and analysed in next weeks.  We started\nworking on ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-node")," integration.  We need\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/pull/4392"},"PR #4392")," to be merged\nbefore such integration will be able to land in ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-node"),", although this\nis ",(0,r.kt)("em",{parentName:"p"},"not blocking")," us currently.  See more at:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4019"},"ouroboros-network#4019"))),(0,r.kt)("h3",{id:"eclipse-evasion"},"Eclipse Evasion"),(0,r.kt)("p",null,"We held a session which included Alexander Russel, Sandro Coretti-Drayton and\nNick Frisby from the consensus team.  We discussed high lever design of the\neclipse evasion scheme, which is important for the design and implementation of\n",(0,r.kt)("inlineCode",{parentName:"p"},"ouroboros-genesis"),".  We got a positive feedback from the researchers."),(0,r.kt)("h3",{id:"io-sim"},"IO-Sim"),(0,r.kt)("p",null,"In this period we made little progress towards releasing ",(0,r.kt)("inlineCode",{parentName:"p"},"IO-Sim")," on Hackage.\nA single ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/io-sim/pull/32"},"PR")," which added\na few missing instances of the ",(0,r.kt)("inlineCode",{parentName:"p"},"STM")," monad."),(0,r.kt)("h3",{id:"open-source"},"Open Source"),(0,r.kt)("p",null,"We made sure the CI runs for PRs which comes from forks (which is important to\naccept contributions from 3rd parties)."),(0,r.kt)("h3",{id:"mithril-cardano-integration"},"Mithril Cardano Integration"),(0,r.kt)("p",null,"We held initial discussions with Arnaud Bailly about possible path to integrate\nmithril to ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-node")," and take advantage of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ouroboros-network"),"\ndiffusion layer."))}d.isMDXComponent=!0}}]);