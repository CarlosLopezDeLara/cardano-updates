"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[35889],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,g=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2592:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={title:"Ledger Team Update",slug:"2023-05-05-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},o=void 0,i={permalink:"/cardano-updates/2023-05-05-ledger",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-05-05-ledger.md",source:"@site/blog/2023-05-05-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2023-05-05T00:00:00.000Z",formattedDate:"May 5, 2023",tags:[{label:"ledger",permalink:"/cardano-updates/tags/ledger"}],readingTime:1.235,hasTruncateMarker:!1,authors:[{name:"Jared Corduan",title:"Ledger Team Lead",url:"https://github.com/JaredCorduan",imageURL:"https://github.com/JaredCorduan.png",key:"JaredCorduan"}],frontMatter:{title:"Ledger Team Update",slug:"2023-05-05-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"Network Team Update",permalink:"/cardano-updates/2023-05-12-network"},nextItem:{title:"Node API & CLI Team Update",permalink:"/cardano-updates/2023-05-05-node-cli-api"}},u={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"Conway certificates",id:"conway-certificates",level:2},{value:"Constraint based testing",id:"constraint-based-testing",level:2},{value:"Integration work",id:"integration-work",level:2},{value:"Technical debt",id:"technical-debt",level:2}],p={toc:c};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"The ledger team focused mainly on the conway ledger era and node integration.\nFor conway, we completed a large structural change that now allows\nfor delegation certificates to be parameterized by era, and introducing\nnew certificates for the first time since Shelley.\nWe also continue to build out our contraint based generators that we will\nuse to property test the conway era.\nIn particular, we can now generate an entire ledger state and a\ntransaction which is balanced with respect to the ledger state."),(0,n.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,n.kt)("h2",{id:"conway-certificates"},"Conway certificates"),(0,n.kt)("p",null,"Certificiates are now abstracted as a type family in the ledger codebase.\nMoreover, there are new certificates in the Conway era to support CIP-1694,\nand MIR certificates have been removed."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3387"},"pull-3387"))),(0,n.kt)("h2",{id:"constraint-based-testing"},"Constraint based testing"),(0,n.kt)("p",null,"Our plan for property testing in the conway era is to no longer use the trace generators,\nbut instead generate ledger states and transactions based on constraints.\nWe hit a milestone this week, namely the ability to generate a balanced transaction in the context\nof a ledger state, all based on our ever growing constaint language."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3374"},"pull-3374")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3386"},"pull-3386"))),(0,n.kt)("h2",{id:"integration-work"},"Integration work"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3393"},"pull-3393")," - Performance improvements"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3395"},"pull-3395")," - Conway instances"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3398"},"pull-3398")," - Fix mint translation in the script context")),(0,n.kt)("h2",{id:"technical-debt"},"Technical debt"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3389"},"pull-3389")," - Reduce github pages size"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3390"},"pull-3390")," - Reinstate the tickf optimizations")))}s.isMDXComponent=!0}}]);