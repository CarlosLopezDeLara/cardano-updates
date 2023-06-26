"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[40309],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,h=c["".concat(p,".").concat(m)]||c[m]||s[m]||o;return r?a.createElement(h,i(i({ref:t},d),{},{components:r})):a.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52303:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={title:"SRE Team Update",slug:"2023-06-23-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2023-06-23-sre",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-06-23-sre.md",source:"@site/blog/2023-06-23-sre.md",title:"SRE Team Update",description:"High level summary",date:"2023-06-23T00:00:00.000Z",formattedDate:"June 23, 2023",tags:[{label:"sre",permalink:"/cardano-updates/tags/sre"}],readingTime:.98,hasTruncateMarker:!1,authors:[{name:"John Lotoski",title:"Service Reliability Engineer",url:"https://github.com/johnalotoski",imageURL:"https://github.com/johnalotoski.png",key:"johnalotoski"}],frontMatter:{title:"SRE Team Update",slug:"2023-06-23-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},prevItem:{title:"Network Team Update",permalink:"/cardano-updates/2023-06-23-network"},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-06-16-hydra"}},p={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2},{value:"Cardano-node",id:"cardano-node",level:3},{value:"Cardano-ops",id:"cardano-ops",level:3},{value:"Cardano-world",id:"cardano-world",level:3},{value:"Ci-ops",id:"ci-ops",level:3},{value:"Ci-world",id:"ci-world",level:3},{value:"Devx-ci",id:"devx-ci",level:3},{value:"Iohk-nix",id:"iohk-nix",level:3}],d={toc:u},c="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"The SRE team continues work on CI and cardano environment improvements.  Some notable recent improvements include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A devx-ci cluster containing a Hydra build server and Linux build farm was stood up and is intended to replace Cicero functionality"),(0,n.kt)("li",{parentName:"ul"},"Cardano Sanchonet environment was stood up to test Conway era functionality"),(0,n.kt)("li",{parentName:"ul"},"Cardano-node nixos service was updated to support the latest p2p topology format and non-systemd socket activation use case"),(0,n.kt)("li",{parentName:"ul"},"Cardano-node 8.1.1 was deployed to preview, preprod and mainnet environments")),(0,n.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,n.kt)("h3",{id:"cardano-node"},"Cardano-node"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Update cardano-node nixos service for updated p2p topology and non-systemd socket activation: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/pull/5318"},"cardano-node-pull-5318"))),(0,n.kt)("h3",{id:"cardano-ops"},"Cardano-ops"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updates required for node 8.1.1 nixos service: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ops/pull/414"},"cardano-ops-pull-414")),(0,n.kt)("li",{parentName:"ul"},"Work in progress continues on mixed legacy and p2p topology clusters in cardano-ops: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ops/tree/ops-local"},"cardano-ops-ops-local"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ops/tree/mn-mixed-p2p"},"cardano-ops-mn-mixed-p2p"))),(0,n.kt)("h3",{id:"cardano-world"},"Cardano-world"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add Sanchonet environment: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-world/pull/96"},"cardano-world-pull-96"))),(0,n.kt)("h3",{id:"ci-ops"},"Ci-ops"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add devx-ci cluster integration for legacy darwin ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ci-ops/compare/b158b17...ed875b9"},"ci-ops-compare"))),(0,n.kt)("h3",{id:"ci-world"},"Ci-world"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add devx-ci cluster integration for caching, monitoring during cicero to devx-ci transition: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ci-world/compare/840cdb6...b08c250"},"ci-world-compare"))),(0,n.kt)("h3",{id:"devx-ci"},"Devx-ci"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A CI cluster with a hydra build server was stood up and is intended to replace usage of Cicero: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/devx-ci"},"devx-ci-repo"))),(0,n.kt)("h3",{id:"iohk-nix"},"Iohk-nix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add Sanchonet environment: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/iohk-nix/pull/545"},"iohk-nix-pull-545"))))}s.isMDXComponent=!0}}]);