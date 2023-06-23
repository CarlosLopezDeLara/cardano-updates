"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[32706],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(a),s=r,h=d["".concat(l,".").concat(s)]||d[s]||m[s]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},24879:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={title:"Node API & CLI Team Update",slug:"2023-05-24-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},i="Node-Api-Cli Update",p={permalink:"/cardano-updates/2023-05-24-node-cli-api",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-05-24-node-cli-api.md",source:"@site/blog/2023-05-24-node-cli-api.md",title:"Node API & CLI Team Update",description:"High level summary",date:"2023-05-24T00:00:00.000Z",formattedDate:"May 24, 2023",tags:[{label:"cli-api",permalink:"/cardano-updates/tags/cli-api"}],readingTime:1,hasTruncateMarker:!1,authors:[{name:"Jordan Millar",title:"Node Team Lead",url:"https://github.com/Jimbo4350",imageURL:"https://github.com/Jimbo4350.png",key:"Jimbo4350"}],frontMatter:{title:"Node API & CLI Team Update",slug:"2023-05-24-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},prevItem:{title:"Network Team Update",permalink:"/cardano-updates/2023-05-26-network"},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-05-19-hydra"}},l={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"docs",id:"docs",level:3},{value:"CI &amp; project maintenance",id:"ci--project-maintenance",level:3},{value:"Developer experience",id:"developer-experience",level:3},{value:"cardano-cli",id:"cardano-cli",level:3},{value:"cardano-api",id:"cardano-api",level:3},{value:"cardano-node",id:"cardano-node",level:3},{value:"cardano-testnet",id:"cardano-testnet",level:3}],c={toc:u},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2023-05-24---2023-06-06"},"2023-05-24 - 2023-06-06"),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The last sprint focused on removing cardano-cli and cardano-api from the cardano-node repository. We have successfully moved cardano-api to its own repository and will do the same for cardano-cli after the 8.1 node is released. "),(0,r.kt)("li",{parentName:"ul"},"We provided assitance where needed in the release"),(0,r.kt)("li",{parentName:"ul"},"An integration repository ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/fusion-flamingo"},"https://github.com/input-output-hk/fusion-flamingo")," was created to enable my team to more easily work on cardano-cli and cardano-api")),(0,r.kt)("h3",{id:"docs"},"docs"),(0,r.kt)("h3",{id:"ci--project-maintenance"},"CI & project maintenance"),(0,r.kt)("h3",{id:"developer-experience"},"Developer experience"),(0,r.kt)("h3",{id:"cardano-cli"},"cardano-cli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5290"},"Update ",(0,r.kt)("inlineCode",{parentName:"a"},"cardano-cli")," changelog")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5197"},"Propagate protocol parameters conversion errors")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5149"},"Command line option for parsing UTC time to slot number")," ")),(0,r.kt)("h3",{id:"cardano-api"},"cardano-api"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/31"},"Switch to ",(0,r.kt)("inlineCode",{parentName:"a"},"tasty-discover"))," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/30"},"Move tests to standard locations")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/26"},"Make cardano-api:internal component public")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/24"},"update chaps index")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/18"},"Make ",(0,r.kt)("inlineCode",{parentName:"a"},"ErrorSpec")," check for all constructors, move golden tests together")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/17"},"Expose toAlonzoCostModels")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/9"},"Make ",(0,r.kt)("inlineCode",{parentName:"a"},"ErrorsSpec"),"  use generated types and constructors names")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/32"},"Check changelog in tag script")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/34"},"Use tag script from ",(0,r.kt)("inlineCode",{parentName:"a"},"cardano-dev")," repository instead")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-api/pull/38"},"Use .x suffix for release branches")," ")),(0,r.kt)("h3",{id:"cardano-node"},"cardano-node"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5291"},"Use ",(0,r.kt)("inlineCode",{parentName:"a"},"cryptoInit")," instead of ",(0,r.kt)("inlineCode",{parentName:"a"},"sodiumInit"))," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5284"},"Move configuration tests to ",(0,r.kt)("inlineCode",{parentName:"a"},"cardano-node")," tests")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5243"},"update chaps & integration")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5240"},"#5222 Remove ",(0,r.kt)("inlineCode",{parentName:"a"},"ApplicationName")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"ApplicationVersion")," config parameters")," ")),(0,r.kt)("h3",{id:"cardano-testnet"},"cardano-testnet"))}m.isMDXComponent=!0}}]);