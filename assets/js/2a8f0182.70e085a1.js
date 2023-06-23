"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[57227],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82749:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Node API & CLI Team Update",slug:"2023-03-22-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},i="Node-Api-Cli Update",l={permalink:"/cardano-updates/2023-03-22-node-cli-api",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-03-22-node-cli-api.md",source:"@site/blog/2023-03-22-node-cli-api.md",title:"Node API & CLI Team Update",description:"High level summary",date:"2023-03-22T00:00:00.000Z",formattedDate:"March 22, 2023",tags:[{label:"cli-api",permalink:"/cardano-updates/tags/cli-api"}],readingTime:.645,hasTruncateMarker:!1,authors:[{name:"Jordan Millar",title:"Node Team Lead",url:"https://github.com/Jimbo4350",imageURL:"https://github.com/Jimbo4350.png",key:"Jimbo4350"}],frontMatter:{title:"Node API & CLI Team Update",slug:"2023-03-22-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},prevItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2023-03-22-consensus"},nextItem:{title:"Performance & tracing update",permalink:"/cardano-updates/2023-03-22-performance-and-tracing"}},p={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2},{value:"docs",id:"docs",level:3},{value:"CI &amp; project maintenance",id:"ci--project-maintenance",level:3},{value:"Developer experience",id:"developer-experience",level:3},{value:"cardano-cli",id:"cardano-cli",level:3},{value:"cardano-api",id:"cardano-api",level:3},{value:"cardano-node",id:"cardano-node",level:3},{value:"cardano-testnet",id:"cardano-testnet",level:3}],u={toc:c},d="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2023-03-22---2023-04-05"},"2023-03-22 - 2023-04-05"),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added new cardano-cli ping command which allows users to ping remote cardano-nodes."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"transaction build")," command now can automatically balance multiassets"),(0,r.kt)("li",{parentName:"ul"},"New combinators for constructing transaction bodies. This allows us to construct transaction bodies in a composable manner.")),(0,r.kt)("h3",{id:"docs"},"docs"),(0,r.kt)("h3",{id:"ci--project-maintenance"},"CI & project maintenance"),(0,r.kt)("h3",{id:"developer-experience"},"Developer experience"),(0,r.kt)("h3",{id:"cardano-cli"},"cardano-cli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5041"},"Remove unused error constructors")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4909"},"Fix qKesKesKeyExpiry to not always be null")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4664"},"New cardano-cli ping command.")," ")),(0,r.kt)("h3",{id:"cardano-api"},"cardano-api"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5040"},"Remove use of AcquireFailure type")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5038"},"Simplify implementation of executeQueryAnyMode")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5002"},"Script data serialisation")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4956"},"Guard against overflows in Shelley TxIns")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4941"},"Combinators for TxBodyContent and related types")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4450"},"Auto-balance multiasset transactions")," ")),(0,r.kt)("h3",{id:"cardano-node"},"cardano-node"),(0,r.kt)("h3",{id:"cardano-testnet"},"cardano-testnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5011"},"Use Haskell variables for passing values.")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4879"},"Re-enable kes-period-info test."))))}s.isMDXComponent=!0}}]);