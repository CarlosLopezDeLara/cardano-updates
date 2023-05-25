"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[101],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(a),s=r,h=m["".concat(p,".").concat(s)]||m[s]||c[s]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94885:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={title:"Node API & CLI Team Update",slug:"2023-05-05-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},o="Node-Api-Cli Update",l={permalink:"/cardano-updates/2023-05-05-node-cli-api",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-05-05-node-cli-api.md",source:"@site/blog/2023-05-05-node-cli-api.md",title:"Node API & CLI Team Update",description:"High level summary",date:"2023-05-05T00:00:00.000Z",formattedDate:"May 5, 2023",tags:[{label:"cli-api",permalink:"/cardano-updates/tags/cli-api"}],readingTime:1.81,hasTruncateMarker:!1,authors:[{name:"Jordan Millar",title:"Node Team Lead",url:"https://github.com/Jimbo4350",imageURL:"https://github.com/Jimbo4350.png",key:"Jimbo4350"}],frontMatter:{title:"Node API & CLI Team Update",slug:"2023-05-05-node-cli-api",authors:"Jimbo4350",tags:["cli-api"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/cardano-updates/2023-05-05-ledger"},nextItem:{title:"Mithril Team Update",permalink:"/cardano-updates/2023-05-04-mithril"}},p={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"docs",id:"docs",level:3},{value:"CI &amp; project maintenance",id:"ci--project-maintenance",level:3},{value:"Developer experience",id:"developer-experience",level:3},{value:"cardano-cli",id:"cardano-cli",level:3},{value:"cardano-api",id:"cardano-api",level:3},{value:"cardano-node",id:"cardano-node",level:3},{value:"cardano-testnet",id:"cardano-testnet",level:3}],d={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2023-05-05---2023-05-23"},"2023-05-05 - 2023-05-23"),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Golden tests for cardano-cli command help output were added."),(0,r.kt)("li",{parentName:"ul"},"Documentation was updated with new libsodium installation instructions."),(0,r.kt)("li",{parentName:"ul"},"There were several updates for the cardano-cli:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Deletion of the deprecated shelley command group."),(0,r.kt)("li",{parentName:"ul"},"Addition of golden tests for CLI help."),(0,r.kt)("li",{parentName:"ul"},"An improvement to avoid bare IO in tests, allowing better error reporting in failed tests."),(0,r.kt)("li",{parentName:"ul"},"Generation of UTCTime test values without leap seconds (avoids erroneous test failures)"),(0,r.kt)("li",{parentName:"ul"},"Support for signing transactions with GenesisDelegateSigningKey_ed25519_bip32."))),(0,r.kt)("li",{parentName:"ul"},"The cardano-api underwent multiple refinements:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Implementing deposit handling when balancing transactions (necessary for Conway)"),(0,r.kt)("li",{parentName:"ul"},"Cleaning up socket file path code."))),(0,r.kt)("li",{parentName:"ul"},"Several changes were made to the cardano-testnet:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Adding golden tests for cardano-testnet help."),(0,r.kt)("li",{parentName:"ul"},"Removing all hardcoded yaml files in cardano-testnet"),(0,r.kt)("li",{parentName:"ul"},"Improving cardano-testnet help output."),(0,r.kt)("li",{parentName:"ul"},"Parameterizing default yaml configuration value, allowing for easier hardforking to the era of choice.")))),(0,r.kt)("h3",{id:"docs"},"docs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5181"},"Update libsodium installation instructions")," ")),(0,r.kt)("h3",{id:"ci--project-maintenance"},"CI & project maintenance"),(0,r.kt)("h3",{id:"developer-experience"},"Developer experience"),(0,r.kt)("h3",{id:"cardano-cli"},"cardano-cli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5264"},"Delete deprecated ",(0,r.kt)("inlineCode",{parentName:"a"},"shelley")," command group")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5206"},"Add golden tests for CLI help")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5201"},"Avoid bare IO in tests")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5200"},"Split ",(0,r.kt)("inlineCode",{parentName:"a"},"cardano-cli")," test files into separate directories")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5198"},"Make UTCTime test generator generate values without leap seconds")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5189"},"Add support with signing transactions with ",(0,r.kt)("inlineCode",{parentName:"a"},"GenesisDelegateSigningKey_ed25519_bip32"))," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5184"},"Rename --signed-tx-file argument to --tx-file argument in verify-poll command")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5120"},"Simplify socket path code")," ")),(0,r.kt)("h3",{id:"cardano-api"},"cardano-api"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5221"},"refactor: make renderScriptWitnessIndex output more explicit")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5218"},"Implement deposit handling when balancing transactions")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5217"},"Replace remaining ",(0,r.kt)("inlineCode",{parentName:"a"},"FilePath")," use in ",(0,r.kt)("inlineCode",{parentName:"a"},"cardano-api"))," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5215"},"Cleanup socket file path code")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5207"},"Delete ",(0,r.kt)("inlineCode",{parentName:"a"},"readEnvSocketPath")," function")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5194"},"IO functions for reading. Remove PoolMetadataFile type")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5191"},"Expose config reader")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5188"},"Golden tests for ",(0,r.kt)("inlineCode",{parentName:"a"},"cardano-api")," errors")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5175"},"Fix ",(0,r.kt)("inlineCode",{parentName:"a"},"toEraInMode")," for conway")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5168"},"Use machine readable output for ToJSON ScriptWitnessIndex")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5096"},"Expose LocalTxSubmissionClient data constructor")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5047"},"Use cardano-api from separate repository")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/4684"},"[cardano-api] Export fromConsensusPointHF")," ")),(0,r.kt)("h3",{id:"cardano-node"},"cardano-node"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5022"},"Provide orphan ",(0,r.kt)("inlineCode",{parentName:"a"},"ToJSON")," instances for ",(0,r.kt)("inlineCode",{parentName:"a"},"HardForkNodeToClientVersion")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"HardForkNodeToNodeVersion"))," ")),(0,r.kt)("h3",{id:"cardano-testnet"},"cardano-testnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5254"},"Add golden test for ",(0,r.kt)("inlineCode",{parentName:"a"},"cardano-testnet")," help")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5242"},"Remove all hardcoded yaml files from cardano-testnet")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5234"},"Fix cardano-testnet help")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5211"},"Parameterize default yaml configuration value in cardano-testnet")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5165"},"Freeze callstack in integration and integrationRetryWorkspace functions")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5128"},"Create defaultYamlValue for cardano-testnet"))))}c.isMDXComponent=!0}}]);