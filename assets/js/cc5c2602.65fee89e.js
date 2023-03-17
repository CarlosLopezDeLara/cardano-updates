"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[8761],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),c=o,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const i={title:"Network Quarterly Update",slug:"2023-01-13-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},r=void 0,l={permalink:"/cardano-updates/quarterly/2023-01-13-network",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/quarterly/2023-01-13-network.md",source:"@site/quarterly/2023-01-13-network.md",title:"Network Quarterly Update",description:"Network Quarterly Update",date:"2023-01-13T00:00:00.000Z",formattedDate:"January 13, 2023",tags:[{label:"network",permalink:"/cardano-updates/quarterly/tags/network"}],readingTime:4.125,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Quarterly Update",slug:"2023-01-13-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"Consensus Quarterly Update",permalink:"/cardano-updates/quarterly/2023-01-18-consensus"},nextItem:{title:"Open-Source Update",permalink:"/cardano-updates/quarterly/2023-01-13-open-source"}},s={authorsImageUrls:[void 0]},u=[{value:"Network Quarterly Update",id:"network-quarterly-update",level:2},{value:"2022-11 - 2023-01",id:"2022-11---2023-01",level:2},{value:"Summary",id:"summary",level:3},{value:"Next steps",id:"next-steps",level:3},{value:"Risks",id:"risks",level:3},{value:"Detailed log",id:"detailed-log",level:3},{value:"Contributions to Ouroboros-Network",id:"contributions-to-ouroboros-network",level:4},{value:"Contributions to Cardano-Node",id:"contributions-to-cardano-node",level:4},{value:"Contributions to IOSim",id:"contributions-to-iosim",level:4}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"network-quarterly-update"},"Network Quarterly Update"),(0,o.kt)("h2",{id:"2022-11---2023-01"},"2022-11 - 2023-01"),(0,o.kt)("h3",{id:"summary"},"Summary"),(0,o.kt)("p",null,"The primary goal of the networking team was to focus on the single relay\nrelease of P2P.  We fixed a number of small late bugs, and concluded QA\n& performance testing.  Although it was discovered a regression in performance\nof  block production when P2P is enabled, relaying with P2P performs better\ncomparing to a non p2p.  We concluded that this is not a blocker for the Single\nRelay Release which is planned shortly."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4019"},"Peer sharing")," has gone through review and final review is\njust being done right now.  After merging it will still be disabled (hidden\nbehind a flag) as it's not safe without eclipse evasion.  We started\nimplementing light peer sharing (i.e. include inbound peers into known peer set\nof the outbound governor)."),(0,o.kt)("p",null,"We started a detailed eclipse evasion design, it will continue in the next\nquarter."),(0,o.kt)("p",null,"We also made a major revision of package structure of the network packages.  We\nended up with a very clean dependency graph (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4155"},"pr #4155"),")."),(0,o.kt)("p",null,"Armando Santos delivered a talk at the ",(0,o.kt)("a",{parentName:"p",href:"https://sites.uclouvain.be/OPODIS2022/armando-details.html"},"ODOPIS 2022")," conference on principles\nof distributed systems in Brussels.  The slides are available ",(0,o.kt)("a",{parentName:"p",href:"https://sites.uclouvain.be/OPODIS2022/slides/OPODIS2022-slides-Santos.pdf"},"here"),"."),(0,o.kt)("p",null,"Neil Davies gave an invited seminar on ",(0,o.kt)("inlineCode",{parentName:"p"},"DeltaQ")," at Universit\xe9 Catholique de\nLouvain."),(0,o.kt)("p",null,"We also found and fixed a few of bugs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"a bug in keep alive mini-protocol which resulted in warm to cold transitions\nto be always executed through a timeout path rather than do a clean demotion\n(","[pr #4168]",").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"fixed an assetion failure in the outbound governor (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4177"},"issue #4177"),") "))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"we fixed DNS test failure ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4191"},"issue #4191"))),(0,o.kt)("h3",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"We will work towards the next release of P2P for block producer nodes.  This includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"analysing performance regression for BP nodes when using P2P"),(0,o.kt)("li",{parentName:"ul"},"finish the work on controlling the block forger through node kernel (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/3800"},"pr #3800"),")"),(0,o.kt)("li",{parentName:"ul"},"address ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/3907"},"issue #3907")," and write a script to analyse deployment of P2P relays")),(0,o.kt)("p",null,"We would like also to push forward eclipse evasion.   Although most of the work\nhas be done already the release of ",(0,o.kt)("inlineCode",{parentName:"p"},"io-sim")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"Hackage")," will happen in the\nnext quarter."),(0,o.kt)("p",null,"We would also like to address ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4244"},"chain-sync timeout issue")," recently\ndiagnosed by Karl Knutsson."),(0,o.kt)("p",null,"If time permits we would also like to address some technical debt, especially:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/3387"},"enable nothunk in diffusion tests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4085"},"refactor diffusion testnet simulation"))),(0,o.kt)("h3",{id:"risks"},"Risks"),(0,o.kt)("p",null,"The performance regression for block producer with P2P needs to be investigated\nin the near future.  This is blocker for the release of P2P on BP nodes."),(0,o.kt)("h3",{id:"detailed-log"},"Detailed log"),(0,o.kt)("h4",{id:"contributions-to-ouroboros-network"},"Contributions to Ouroboros-Network"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We added ",(0,o.kt)("inlineCode",{parentName:"li"},"TraceDemoteLocalAsynchronous"),", which enables notification of critical issues for SPOs"),(0,o.kt)("li",{parentName:"ul"},"We fixed ",(0,o.kt)("inlineCode",{parentName:"li"},"cardano-ping")," compatibility with ",(0,o.kt)("inlineCode",{parentName:"li"},"NodeToNodeV_10")," (P2P, ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4165"},"pr #4165"),")"),(0,o.kt)("li",{parentName:"ul"},"We fixed a bug in demotion peers to cold which affected P2P nodes (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4170/commits/61058aa5c28a144d723aae183d1745552d757334"},"commit-61058aa5c2"),")"),(0,o.kt)("li",{parentName:"ul"},"Karl Knutsson enhanced ",(0,o.kt)("inlineCode",{parentName:"li"},"SendFetchRequest")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/pull/4170/commits/bb1c3dddeea78949f531c144bb4f2669eddf7f47"},"commit-bb1c3dddee"),"), open-source contribution)"),(0,o.kt)("li",{parentName:"ul"},"We turned ",(0,o.kt)("inlineCode",{parentName:"li"},"SizeInBytes")," into a newtype."),(0,o.kt)("li",{parentName:"ul"},"We extended ",(0,o.kt)("inlineCode",{parentName:"li"},"CONTRIBUTING.md"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"README.md"),", added ",(0,o.kt)("inlineCode",{parentName:"li"},"CODE_OF_CONDUCT"),"."),(0,o.kt)("li",{parentName:"ul"},"We fixed DNS test failure ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4191"},"issue #4191")),(0,o.kt)("li",{parentName:"ul"},"We fixed a simulation bug found in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4258"},"issue #4258")),(0,o.kt)("li",{parentName:"ul"},"[pr #4168]"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/issues/4177"},"issue #4177"))),(0,o.kt)("h4",{id:"contributions-to-cardano-node"},"Contributions to Cardano-Node"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We maintained the Single Relay Release ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4612"},"pr #4612"),", (e.g. fixing CI issues,\nRebasing it when necessary, publishing packages to Cardano Haskell Packages);"),(0,o.kt)("li",{parentName:"ul"},"We enhanced ",(0,o.kt)("inlineCode",{parentName:"li"},"JSON")," serialisation / deserialisation of ",(0,o.kt)("inlineCode",{parentName:"li"},"NodeToNodeVersion")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"NodeToClientVersion"),";")),(0,o.kt)("h4",{id:"contributions-to-iosim"},"Contributions to IOSim"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We started to use Cardano Haskell Packages for ",(0,o.kt)("inlineCode",{parentName:"li"},"IOSim")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/io-sim/pull/48"},"pr #48"),")"),(0,o.kt)("li",{parentName:"ul"},"We updated change log files"),(0,o.kt)("li",{parentName:"ul"},"We added support of ",(0,o.kt)("inlineCode",{parentName:"li"},"ghc-9.4")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/io-sim/pull/50"},"pr #50"),")")),(0,o.kt)("p",null,"We also addressed the following issues in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/io-sim/pull/57"},"pr #57")," in order to prepare the package for publication on Hackage:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"refactored ",(0,o.kt)("inlineCode",{parentName:"li"},"io-classes")," timers API (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/io-sim/issues/46"},"issue #46"),");"),(0,o.kt)("li",{parentName:"ul"},"created a new package ",(0,o.kt)("inlineCode",{parentName:"li"},"si-timers")," which exposes an interface using SI units\nand is safe on 32-bit systems (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/io-sim/issues/59"},"issue #59"),");"),(0,o.kt)("li",{parentName:"ul"},"added monad transformers instances for classes defined in ",(0,o.kt)("inlineCode",{parentName:"li"},"io-classes")," (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/io-sim/issues/58"},"issue #58"),");"),(0,o.kt)("li",{parentName:"ul"},"created ",(0,o.kt)("inlineCode",{parentName:"li"},"io-classes-mtl")," package which includes (experimental) instances for monad transformers;"),(0,o.kt)("li",{parentName:"ul"},"provide ",(0,o.kt)("inlineCode",{parentName:"li"},"MonadMonotonicTimeNSec")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"io-classes")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"MonadMonotonicTime")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"si-timers")," (so that ",(0,o.kt)("inlineCode",{parentName:"li"},"io-classes")," follow the ",(0,o.kt)("inlineCode",{parentName:"li"},"base")," package);"),(0,o.kt)("li",{parentName:"ul"},"added  ",(0,o.kt)("inlineCode",{parentName:"li"},"registerCancellableDelay")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"si-timers")," (which allowed us to hide fancy timer api and clean ",(0,o.kt)("inlineCode",{parentName:"li"},"io-classes"),")"),(0,o.kt)("li",{parentName:"ul"},"added support for ",(0,o.kt)("inlineCode",{parentName:"li"},"js_HOST_ARCH")," (the new GHC JS backend)")),(0,o.kt)("p",null,"Note the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/io-sim/pull/57"},"pr #57")," contains almost 40 commits, and was a major step forward for\n",(0,o.kt)("inlineCode",{parentName:"p"},"io-sim")," ecosystem.  We also prepared a draft ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/pull/4281"},"pr #4281")," which updates\n",(0,o.kt)("inlineCode",{parentName:"p"},"ouroboros-network"),"."),(0,o.kt)("p",null,"Other changes for ",(0,o.kt)("inlineCode",{parentName:"p"},"1.0.0.0")," release on Hackage:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Refactored test suite (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/io-sim/pull/47"},"pr #47"),")"),(0,o.kt)("li",{parentName:"ul"},"Updated documentation, cabal files, ",(0,o.kt)("inlineCode",{parentName:"li"},"CONTRIBUTING"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"SECURITY")," documents, etc in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/io-sim/pull/60"},"pr #60"),", currently under review.")))}d.isMDXComponent=!0}}]);