"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[60715],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),g=n,h=d["".concat(u,".").concat(g)]||d[g]||c[g]||o;return r?a.createElement(h,l(l({ref:t},p),{},{components:r})):a.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},33286:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={title:"Ledger Team Update",slug:"2023-02-02-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},l=void 0,i={permalink:"/cardano-updates/2023-02-02-ledger",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-02-02-ledger.md",source:"@site/blog/2023-02-02-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2023-02-02T00:00:00.000Z",formattedDate:"February 2, 2023",tags:[{label:"ledger",permalink:"/cardano-updates/tags/ledger"}],readingTime:1.23,hasTruncateMarker:!1,authors:[{name:"Jared Corduan",title:"Ledger Team Lead",url:"https://github.com/JaredCorduan",imageURL:"https://github.com/JaredCorduan.png",key:"JaredCorduan"}],frontMatter:{title:"Ledger Team Update",slug:"2023-02-02-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-02-03-hydra"},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-01-27-hydra"}},u={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2},{value:"Ledger evolution CIP",id:"ledger-evolution-cip",level:3},{value:"Serialization issues",id:"serialization-issues",level:3},{value:"New tests",id:"new-tests",level:3},{value:"Progress on a better cost model serialization situation.",id:"progress-on-a-better-cost-model-serialization-situation",level:3},{value:"Nightly tests",id:"nightly-tests",level:3},{value:"Constraint based generators",id:"constraint-based-generators",level:3}],p={toc:s},d="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"Much of the work the past two weeks involved integration efforts,\ncleaning up and debugging some serialization issues,\nadding tests, and work on large projects that are still ongoing.\nWe also released a CIP this week that aims to make the ledger\na registered CIP category."),(0,n.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,n.kt)("h3",{id:"ledger-evolution-cip"},"Ledger evolution CIP"),(0,n.kt)("p",null,"We published a\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cardano-foundation/CIPs/pull/456"},"CIP"),"\nthat will make the Cardano ledger a registered category of the CIP process."),(0,n.kt)("h3",{id:"serialization-issues"},"Serialization issues"),(0,n.kt)("p",null,"We had previously thought that we had found a serialization problem with the redeemers,\nbut it turned out to just be particularly confusing code.\nWe have now clarified the issue for the future."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3263"},"pull-3263"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3269"},"pull-3269"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3268"},"pull-3268"),"."),(0,n.kt)("p",null,"Starting in protocol version 9, we will no longer accept duplicate keys in CBOR maps."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3277"},"pull-3277"),"."),(0,n.kt)("h3",{id:"new-tests"},"New tests"),(0,n.kt)("p",null,"We added a new property test suite for some of our custom containers."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3270"},"pull-3270"),"."),(0,n.kt)("h3",{id:"progress-on-a-better-cost-model-serialization-situation"},"Progress on a better cost model serialization situation."),(0,n.kt)("p",null,"We are still working our way through ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/issues/2902"},"issue-2902"),".\nTowards this end, we are now properly gating the new flexible encoders\nuntil version 9."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3274"},"pull-3274"),"."),(0,n.kt)("h3",{id:"nightly-tests"},"Nightly tests"),(0,n.kt)("p",null,"We are still experimenting with moving more CI actions to GitHub actions."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3276"},"pull-3276"),"."),(0,n.kt)("h3",{id:"constraint-based-generators"},"Constraint based generators"),(0,n.kt)("p",null,"We continue to add to our proof of concept for constraint based generators.\nSee the previous ledger update for more information about this project."))}c.isMDXComponent=!0}}]);