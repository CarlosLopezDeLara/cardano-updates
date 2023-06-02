"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[51727],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},86516:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"Node API & CLI Team Update",slug:"2022-10-07-node-cli-api",authors:"Jimbo4350",tags:["cli-api-quarterly"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/quarterly/2022-10-07-node-cli-api",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/quarterly/2022-11-07-nod-api-cli.md",source:"@site/quarterly/2022-11-07-nod-api-cli.md",title:"Node API & CLI Team Update",description:"Node-Api-Cli Quarterly Update",date:"2022-11-07T00:00:00.000Z",formattedDate:"November 7, 2022",tags:[{label:"cli-api-quarterly",permalink:"/cardano-updates/quarterly/tags/cli-api-quarterly"}],readingTime:1.355,hasTruncateMarker:!1,authors:[{name:"Jordan Millar",title:"Node Team Lead",url:"https://github.com/Jimbo4350",imageURL:"https://github.com/Jimbo4350.png",key:"Jimbo4350"}],frontMatter:{title:"Node API & CLI Team Update",slug:"2022-10-07-node-cli-api",authors:"Jimbo4350",tags:["cli-api-quarterly"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/cardano-updates/quarterly/2022-11-07-ledger"}},u={authorsImageUrls:[void 0]},p=[{value:"Node-Api-Cli Quarterly Update",id:"node-api-cli-quarterly-update",level:2},{value:"2022-09 - 2022-11-04",id:"2022-09---2022-11-04",level:2}],c={toc:p};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"node-api-cli-quarterly-update"},"Node-Api-Cli Quarterly Update"),(0,n.kt)("h2",{id:"2022-09---2022-11-04"},"2022-09 - 2022-11-04"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Various improvements to tests/CI/GHC 9.2.4 preparations/upgrade to cabal-3.8.1.0"),(0,n.kt)("li",{parentName:"ul"},"Major clean up of stale iusses + PRs."),(0,n.kt)("li",{parentName:"ul"},"Implementation of stale-bot to mitigate against a proliferation of outdated issues and PRs"),(0,n.kt)("li",{parentName:"ul"},"cardano-api refactoring with the aim of exposing more user friendly functions, particularly concerning transaction construction and querying the node."),(0,n.kt)("li",{parentName:"ul"},"cardano-cli refactoring with the aim of moving reusable functions to cardano-api. We have made strides here and have managed to improve the interface of transaction construction and validation."),(0,n.kt)("li",{parentName:"ul"},"General documentation updates and improvements"),(0,n.kt)("li",{parentName:"ul"},"Addition of tx-mempool command which allows users to:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Query the node about the current mempool's capacity and sizes"),(0,n.kt)("li",{parentName:"ul"},"Request the next transaction from the mempool's current list"),(0,n.kt)("li",{parentName:"ul"},"Query if a particular transaction exists in the mempool"))),(0,n.kt)("li",{parentName:"ul"},"Initial refactoring of cardano-testnet")),(0,n.kt)("p",null,"Next quarter"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"cardano-api",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Working with Konstantinos and his team to make cardano-api better for dapp developers - we have a google doc for this, I can send it to you privately."))),(0,n.kt)("li",{parentName:"ul"},"cardano-testnet",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Working with Marc Fontaine to create an easy to use executable to deploy testnets locally - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/issues/4598"},"https://github.com/input-output-hk/cardano-node/issues/4598")))),(0,n.kt)("li",{parentName:"ul"},"Serenity",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Continued refactoring of cardano-api and cardano-cli, with the particular focus on extracting re-usable components of cardano-cli and moving them to cardano-api. This is harder to define but will manifest in stuff moving from cardano-cli to cardano-api and is tied in to the cardano-api work specified above."))),(0,n.kt)("li",{parentName:"ul"},"General bug fixing and smaller feature requests for the api/cli that are always coming in. Robert is primarily handling this at the moment as he is relatively new.")))}s.isMDXComponent=!0}}]);