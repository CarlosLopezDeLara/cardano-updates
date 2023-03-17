"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[7176],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,h=p["".concat(d,".").concat(m)]||p[m]||c[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},52901:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"Ledger Team Update",slug:"2022-09-01-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2022-09-01-ledger",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-09-01-ledger.md",source:"@site/blog/2022-09-01-ledger.md",title:"Ledger Team Update",description:"Ledger Update",date:"2022-09-01T00:00:00.000Z",formattedDate:"September 1, 2022",tags:[{label:"ledger",permalink:"/cardano-updates/tags/ledger"}],readingTime:1.94,hasTruncateMarker:!1,authors:[{name:"Jared Corduan",title:"Ledger Team Lead",url:"https://github.com/JaredCorduan",imageURL:"https://github.com/JaredCorduan.png",key:"JaredCorduan"}],frontMatter:{title:"Ledger Team Update",slug:"2022-09-01-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/cardano-updates/2022-09-16-ledger"},nextItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2022-08-31-consensus"}},d={authorsImageUrls:[void 0]},s=[{value:"Ledger Update",id:"ledger-update",level:2},{value:"New minimal ledger era",id:"new-minimal-ledger-era",level:3},{value:"Addressing technical debt",id:"addressing-technical-debt",level:3}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ledger-update"},"Ledger Update"),(0,r.kt)("p",null,"Since finishing up support for the Vasil Hardfork, the ledger team has been\nfocused on two main things: a new ledger era and technical debt."),(0,r.kt)("h3",{id:"new-minimal-ledger-era"},"New minimal ledger era"),(0,r.kt)("p",null,"We have implemented a new ledger era named ",(0,r.kt)("inlineCode",{parentName:"p"},"conway")," which is nearly identical\nto the ",(0,r.kt)("inlineCode",{parentName:"p"},"babbage")," era. This has been the first time that we have been able to see\nwhat a minimal ledger era looks like. We have finished this task, modulo any\nintegration issues that might come up. The only thing that the ",(0,r.kt)("inlineCode",{parentName:"p"},"conway")," era\ndoes differently from the ",(0,r.kt)("inlineCode",{parentName:"p"},"babbage")," era is provide support for rotating\nthe master keys using the hardfork combinator's state translation.\nWe may end up adding features to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conway")," era, but it is a nice exercise\nseeing what it looks like to get a minimal ledger era supported in all the\ndownstream components."),(0,r.kt)("h3",{id:"addressing-technical-debt"},"Addressing technical debt"),(0,r.kt)("p",null,"We have been addressing technical debt, mostly in an effort to make the\nrepository a more friendly code base to work in."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We have begun work on a ledger API, called ",(0,r.kt)("inlineCode",{parentName:"li"},"cardano-ledger-api"),"."),(0,r.kt)("li",{parentName:"ul"},"We have done a big re-design of the major type classes used in the ledger.\nWith hindsight on our side, we now have something much more organized and\neasier to use."),(0,r.kt)("li",{parentName:"ul"},"We have done a lot of re-naming. The names across eras are now much more\nuniform, avoid certain confusions that plagued us, and are clearer in where\nthey are from."),(0,r.kt)("li",{parentName:"ul"},"We have reduced a lot of code duplication that could lead to bugs if you\ndo not have the whole code base in your head."),(0,r.kt)("li",{parentName:"ul"},"We have added a handful of performance improvements."),(0,r.kt)("li",{parentName:"ul"},"We added type safety in a number of locations. In particular, the type of\nvalues that can be minted in a transaction no longer allow for Lovelace\nin the type, and some functions which used to handle both timelock scripts\nand plutus script now correctly enoforce at the type level that only one of\nthem can be used."),(0,r.kt)("li",{parentName:"ul"},"We made our generators so that they now produce a much richer set of\nvalid serializations. There is room within CBOR to serialize the same\ndata structure in multiple ways, and it is helpful to have the generators\nuse a wide variety."),(0,r.kt)("li",{parentName:"ul"},"We have begun re-organizing our test suites.")))}c.isMDXComponent=!0}}]);