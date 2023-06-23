"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[80113],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),s=r,h=c["".concat(p,".").concat(s)]||c[s]||m[s]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},10331:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={title:"Node API & CLI Team Update",slug:"2022-10-04-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2022-10-04-node-cli-api",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-10-04-node-cli-api.md",source:"@site/blog/2022-10-04-node-cli-api.md",title:"Node API & CLI Team Update",description:"Node-Api-Cli Update",date:"2022-10-04T00:00:00.000Z",formattedDate:"October 4, 2022",tags:[{label:"cli-api",permalink:"/cardano-updates/tags/cli-api"}],readingTime:.98,hasTruncateMarker:!1,authors:[{name:"Jordan Millar",title:"Node Team Lead",url:"https://github.com/Jimbo4350",imageURL:"https://github.com/Jimbo4350.png",key:"Jimbo4350"}],frontMatter:{title:"Node API & CLI Team Update",slug:"2022-10-04-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},prevItem:{title:"DB Sync Team Update",permalink:"/cardano-updates/2022-10-04-db-sync"},nextItem:{title:"Ledger Team Update",permalink:"/cardano-updates/2022-09-30-ledger"}},p={authorsImageUrls:[void 0]},u=[{value:"Node-Api-Cli Update",id:"node-api-cli-update",level:2},{value:"2022-10-04 - 2022-10-18",id:"2022-10-04---2022-10-18",level:2},{value:"Executive Summary",id:"executive-summary",level:3},{value:"Completed",id:"completed",level:3},{value:"cardano-cli",id:"cardano-cli",level:4},{value:"cardano-api",id:"cardano-api",level:4},{value:"cardano-node",id:"cardano-node",level:4},{value:"In Progress",id:"in-progress",level:3},{value:"cardano-cli",id:"cardano-cli-1",level:4},{value:"cardano-api",id:"cardano-api-1",level:3},{value:"cardano-node",id:"cardano-node-1",level:3}],d={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"node-api-cli-update"},"Node-Api-Cli Update"),(0,r.kt)("h2",{id:"2022-10-04---2022-10-18"},"2022-10-04 - 2022-10-18"),(0,r.kt)("h3",{id:"executive-summary"},"Executive Summary"),(0,r.kt)("p",null,"The majority of the team's time was spent between getting ",(0,r.kt)("inlineCode",{parentName:"p"},"1.34.4")," ready, addressing various feature requests/issues/bugs that have arisen and refactoring components in the api and cli. The current refactoring is aimed at the long term goal of empowering users to be able to easily build applications similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-cli"),"."),(0,r.kt)("h3",{id:"completed"},"Completed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4504"},"GHC 9.2.4 preparations"))),(0,r.kt)("h4",{id:"cardano-cli"},"cardano-cli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Serenity]"," - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4491"},"Separate IO from txBuild and txBuildRaw functions"))),(0,r.kt)("h4",{id:"cardano-api"},"cardano-api"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[BUGFIX]"," - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4501"},"TxWitness text envelope format does not roundtrip in Shelley era"))),(0,r.kt)("h4",{id:"cardano-node"},"cardano-node"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4526"},"Fix MacOS GHA CI"))),(0,r.kt)("h3",{id:"in-progress"},"In Progress"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4508"},"Release 1.34.4"))),(0,r.kt)("h4",{id:"cardano-cli-1"},"cardano-cli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[BUGFIX]"," - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4538"},"Fix query era mismatch bug in transaction build command")),(0,r.kt)("li",{parentName:"ul"},"[Serenity]"," - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4516"},"Condense Read and Validation modules in cardano-cli")),(0,r.kt)("li",{parentName:"ul"},"[BUGFIX]","- ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4537"},"Stop the cli from changing the bytes in user-supplied data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4431"},"Infer protocol params in transaction build")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4408"},"Allow assembling transactions with no witnesses")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4276"},"Add tx-mempool command to CLI"))),(0,r.kt)("h3",{id:"cardano-api-1"},"cardano-api"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4482"},"Return Lovelace for calculateMinimumUTxO")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4458"},"Make TxBodyContent an instance of Monoid")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4450"},"Auto-balance multiasset transactions"))),(0,r.kt)("h3",{id:"cardano-node-1"},"cardano-node"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4263"},"Stop running CI when the only changes are to docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4341"},"Rename TestEnableDevelopmentHardForkEras"))))}m.isMDXComponent=!0}}]);