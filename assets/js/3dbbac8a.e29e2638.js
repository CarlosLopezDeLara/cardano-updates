"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[16855],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>c});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=u(i),d=n,c=h["".concat(p,".").concat(d)]||h[d]||m[d]||r;return i?a.createElement(c,l(l({ref:t},s),{},{components:i})):a.createElement(c,l({ref:t},s))}));function c(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[h]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<r;u++)l[u]=i[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},22358:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=i(87462),n=(i(67294),i(3905));const r={title:"Mithril Team Update",slug:"2023-07-13-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},l=void 0,o={permalink:"/cardano-updates/2023-07-13-mithril",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-07-13-mithril.md",source:"@site/blog/2023-07-13-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2023-07-13T00:00:00.000Z",formattedDate:"July 13, 2023",tags:[{label:"mithril",permalink:"/cardano-updates/tags/mithril"}],readingTime:1.92,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2023-07-13-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},nextItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2023-07-12-consensus"}},p={authorsImageUrls:[void 0]},u=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],s={toc:u},h="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(h,(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,n.kt)("p",null,"The Mithril team created a new ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/mithril/releases/tag/2327.0"},(0,n.kt)("inlineCode",{parentName:"a"},"2327.0"))," distribution. They focused on preparing the beta launch on the ",(0,n.kt)("inlineCode",{parentName:"p"},"mainnet"),": they tested the new production signer deployment model with the pioneer SPOs, they prepared an SPO on-boarding guide, and they kept working on the deployment and monitoring of the ",(0,n.kt)("inlineCode",{parentName:"p"},"mainnet")," infrastructure. The team also worked on the implementation of a simple stress test tool for benchmarking the aggregator. Additionally, they completed the refactoring of the interface to the cryptographic library. "),(0,n.kt)("p",null,"Finally, they fixed a bug that sporadically prevented the latest signer registration of a SPO to be used in the associated signing epoch, they fixed a bug in the epoch gap detection of the certificate chain in the aggregator, and worked on multiple other optimizations and bugs."),(0,n.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Released the new distribution ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/releases/tag/2327.0"},(0,n.kt)("inlineCode",{parentName:"a"},"2327.0"))),(0,n.kt)("li",{parentName:"ul"},"Worked on the epic that prepares the Mithril infrastructure for ",(0,n.kt)("inlineCode",{parentName:"li"},"mainnet")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/767"},"#767"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Add infrastructure monitoring")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/987"},"#987")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Deploy 'mainnet' infrastructure")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/988"},"#988")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Handle Secrets management")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/989"},"#989")))),(0,n.kt)("li",{parentName:"ul"},"Worked on the epic ",(0,n.kt)("inlineCode",{parentName:"li"},"Benchmark performances of Mithril Aggregator")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/904"},"#904"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Design & implement basic stress test tool for aggregator")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/991"},"#991")))),(0,n.kt)("li",{parentName:"ul"},"Worked on optimizations:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Remove certificate hash from Artifact")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/932"},"#932")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Check vulnerabilities in CI")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1037"},"#1037")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Add 'created_at' in Mithril Stake Distribution messages")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1030"},"#1030")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Add a 'run-only' option in end to end test")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1048"},"#1048")))),(0,n.kt)("li",{parentName:"ul"},"Worked on refactoring:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Factorize protocol crypto operations")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/669"},"#669")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Refactor aggregator dependency injection and services")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1058"},"#1058")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Build static binaries in CI")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/874"},"#874")))),(0,n.kt)("li",{parentName:"ul"},"Worked on documentation:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Prepare SPO on-boarding guide")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1049"},"#1049")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Add instructions to set firewall using iptables")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1040"},"#1040")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Update ufw command to set firewall on Mithril Signer installation instructions")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1041"},"#1041")))),(0,n.kt)("li",{parentName:"ul"},"Worked on bugs:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Aggregator does not detect certificate chain epoch gap")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/952"},"#952")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"'testing-preview' network does not create certificates")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1015"},"#1015")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"SQLite compatibility in aggregator")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/837"},"#837")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Q&A followup fixes")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1035"},"#1035")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"E2E tests are flaky in CI")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1023"},"#1023"))))))}m.isMDXComponent=!0}}]);