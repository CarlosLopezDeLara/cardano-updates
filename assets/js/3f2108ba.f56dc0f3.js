"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[99610],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>d});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(i),c=n,d=h["".concat(p,".").concat(c)]||h[c]||m[c]||a;return i?r.createElement(d,o(o({ref:t},u),{},{components:i})):r.createElement(d,o({ref:t},u))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[h]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=i[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}c.displayName="MDXCreateElement"},48560:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=i(87462),n=(i(67294),i(3905));const a={title:"Mithril Team Update",slug:"2023-08-10-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2023-08-10-mithril",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-08-10-mithril.md",source:"@site/blog/2023-08-10-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2023-08-10T00:00:00.000Z",formattedDate:"August 10, 2023",tags:[{label:"mithril",permalink:"/cardano-updates/tags/mithril"}],readingTime:1.7,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2023-08-10-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},nextItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2023-08-09-consensus"}},p={authorsImageUrls:[void 0]},s=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],u={toc:s},h="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(h,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,n.kt)("p",null,"The Mithril team completed the ",(0,n.kt)("strong",{parentName:"p"},"Mithril protocol\u2019s mainnet beta")," launch: the ",(0,n.kt)("inlineCode",{parentName:"p"},"release-mainnet")," network is now consistently producing new certificates and snapshots! The team has released a new distribution ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/mithril/releases/tag/2331.1"},(0,n.kt)("inlineCode",{parentName:"a"},"2331.1"))," which includes some optimizations and bug fixes: the bootstrap time of a Cardano node restored from a Mithril snapshot has been significantly reduced, and a bug that made the aggregator produce corrupted archives has been fixed. They also kept working on the implementation of the stress test tool for benchmarking the aggregator: the first phase has been implemented, as well as a monitoring feature. Additionally, they kept implementing the refactoring of the serialization/deserialization of the entities of the cryptographic library, and working on the post deployment of the ",(0,n.kt)("inlineCode",{parentName:"p"},"mainnet")," infrastructure."),(0,n.kt)("p",null,"Finally, they completed the rewriting and enhancements of the documentation website, and they completed the runbook for operating a production Mithril network."),(0,n.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Released the new distribution ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/releases/tag/2331.1"},(0,n.kt)("inlineCode",{parentName:"a"},"2331.1"))),(0,n.kt)("li",{parentName:"ul"},"Completed the epic ",(0,n.kt)("inlineCode",{parentName:"li"},"Release 'mainnet' Mithril network")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/918"},"#918")),(0,n.kt)("li",{parentName:"ul"},"Worked on the epic ",(0,n.kt)("inlineCode",{parentName:"li"},"Benchmark performances of Mithril Aggregator")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/904"},"#904"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Design & implement basic stress test tool for aggregator - phase 1")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/991"},"#991")))),(0,n.kt)("li",{parentName:"ul"},"Worked on the epic ",(0,n.kt)("inlineCode",{parentName:"li"},"Post deployment 'mainnet' infrastructure")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1091"},"#1091"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Create Production Infrastructure Runbook")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1085"},"#1085")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Ingest 'mainnet' metrics/logs in Grafana")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1122"},"#1122")))),(0,n.kt)("li",{parentName:"ul"},"Worked on optimizations:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Add a 'clean' file to extracted database in client")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1131"},"#1131")),(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Create explorer page with registered signers")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1097"},"#1097")))),(0,n.kt)("li",{parentName:"ul"},"Worked on refactoring:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Worked on the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Refactor (de)serialization of crypto entities")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/668"},"#668")))),(0,n.kt)("li",{parentName:"ul"},"Worked on bugs:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Client fails to unpack some snapshot archive")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1137"},"#1137")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"The 'release-preprod' network stopped producing certificates")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1114"},"#1114")),(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"The 'release-mainnet' network does not show up in the explorer")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1111"},"#1111")))),(0,n.kt)("li",{parentName:"ul"},"Worked on dependencies:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Upgrade Cardano node to '8.1.2'")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1090"},"#1090")))),(0,n.kt)("li",{parentName:"ul"},"Worked on troubleshooting:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Completed the issue ",(0,n.kt)("inlineCode",{parentName:"li"},"Signer can't sign with 'Invalid signature for party' error")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/1125"},"#1125"))))))}m.isMDXComponent=!0}}]);