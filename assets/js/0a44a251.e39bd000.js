"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[63565],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(a),s=r,h=m["".concat(p,".").concat(s)]||m[s]||d[s]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},51604:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={title:"Node API & CLI Team Update",slug:"2022-12-14-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},l="Node-Api-Cli Update",i={permalink:"/cardano-updates/2022-12-14-node-cli-api",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-12-14-node-cli-api.md",source:"@site/blog/2022-12-14-node-cli-api.md",title:"Node API & CLI Team Update",description:"High level summary",date:"2022-12-14T00:00:00.000Z",formattedDate:"December 14, 2022",tags:[{label:"cli-api",permalink:"/cardano-updates/tags/cli-api"}],readingTime:1.46,hasTruncateMarker:!1,authors:[{name:"Jordan Millar",title:"Node Team Lead",url:"https://github.com/Jimbo4350",imageURL:"https://github.com/Jimbo4350.png",key:"Jimbo4350"}],frontMatter:{title:"Node API & CLI Team Update",slug:"2022-12-14-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},prevItem:{title:"DB-sync Team Update",permalink:"/cardano-updates/2022-12-14-db-sync"},nextItem:{title:"Performance & tracing update",permalink:"/cardano-updates/2022-12-14-performance-and-tracing"}},p={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Completed",id:"completed",level:2},{value:"docs",id:"docs",level:3},{value:"CI &amp; project maintenance",id:"ci--project-maintenance",level:3},{value:"Developer experience",id:"developer-experience",level:3},{value:"cardano-cli",id:"cardano-cli",level:3},{value:"cardano-api",id:"cardano-api",level:3},{value:"cardano-node",id:"cardano-node",level:3},{value:"cardano-testnet",id:"cardano-testnet",level:3},{value:"In Progress",id:"in-progress",level:2},{value:"CI &amp; project mainteance",id:"ci--project-mainteance",level:2},{value:"cardano-cli",id:"cardano-cli-1",level:3},{value:"cardano-api",id:"cardano-api-1",level:3},{value:"cardano-node",id:"cardano-node-1",level:3},{value:"cardano-testnet",id:"cardano-testnet-1",level:3}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2022-12-14---2022-12-27"},"2022-12-14 - 2022-12-27"),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("p",null,"PRs merged in this sprint focused on clean up and resolving existing issues. The majority of the time during this sprint was spent on the In Progress PRs which have dependencies on consensus. This has been since rectified i.e cardano-node dependencies have been bumped. "),(0,r.kt)("h2",{id:"completed"},"Completed"),(0,r.kt)("h3",{id:"docs"},"docs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4703"},"Move style guide to wiki"))),(0,r.kt)("h3",{id:"ci--project-maintenance"},"CI & project maintenance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4734"},"Cache secp256k1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4717"},"Use cabal-cache")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4699"},"build(deps): bump certifi from 2020.4.5.2 to 2022.12.7 in /doc/.sphinx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4724"},"Update cabal.project"))),(0,r.kt)("h3",{id:"developer-experience"},"Developer experience"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4125"},"Add aarch64-darwin to nix-shell"))),(0,r.kt)("h3",{id:"cardano-cli"},"cardano-cli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4626"},"Improved error message for failed asset name decode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4250"},"Optimise query leadership schedule command")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4700"},"Remove cardano-cli address build-script"))),(0,r.kt)("h3",{id:"cardano-api"},"cardano-api"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4698"},"Move signing key reading to cardano-api"))),(0,r.kt)("h3",{id:"cardano-node"},"cardano-node"),(0,r.kt)("h3",{id:"cardano-testnet"},"cardano-testnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4712"},"Only run chairman test on latest era")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4679"},"Add fix and test for ",(0,r.kt)("inlineCode",{parentName:"a"},"foldBlocks")))),(0,r.kt)("h2",{id:"in-progress"},"In Progress"),(0,r.kt)("h2",{id:"ci--project-mainteance"},"CI & project mainteance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4755"},"Copyright updates"))),(0,r.kt)("h3",{id:"cardano-cli-1"},"cardano-cli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[BUGFIX]","- ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4537"},"Stop the cli from changing the bytes in user-supplied data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4431"},"Infer protocol params in transaction build")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4408"},"Allow assembling transactions with no witnesses")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4279"},"Multiple pools support in query stake snapshot")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4250"},"Optimise query leadership schedule command")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4179"},"Optimise query stake snapshot command")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/3819"},"Debug output for transaction submit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4625"},"Handle pipes in cardano-cli")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4713"},"Fully remove the cli intermediate TxBody format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4659"},"Render consistent plutus script failure output")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4666"},"Read network ID from environment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4647"},"CLI option to append additional signatures to a transactions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4664"},"Cardano ping"))),(0,r.kt)("h3",{id:"cardano-api-1"},"cardano-api"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4458"},"Make TxBodyContent an instance of Monoid")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4450"},"Auto-balance multiasset transactions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4713"},"Fully remove the cli intermediate TxBody format"))),(0,r.kt)("h3",{id:"cardano-node-1"},"cardano-node"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4263"},"Stop running CI when the only changes are to docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4341"},"Rename TestEnableDevelopmentHardForkEras"))),(0,r.kt)("h3",{id:"cardano-testnet-1"},"cardano-testnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4636"},"Cleanup exports of cardano-testnet"))))}d.isMDXComponent=!0}}]);