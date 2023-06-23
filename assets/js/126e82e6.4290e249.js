"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[96871],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(a),h=n,m=c["".concat(u,".").concat(h)]||c[h]||s[h]||o;return a?r.createElement(m,l(l({ref:t},d),{},{components:a})):r.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},67870:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"Ledger Team Update",slug:"2022-11-02-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},l=void 0,i={permalink:"/cardano-updates/2022-11-02-ledger",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-11-02-ledger.md",source:"@site/blog/2022-11-02-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2022-11-02T00:00:00.000Z",formattedDate:"November 2, 2022",tags:[{label:"ledger",permalink:"/cardano-updates/tags/ledger"}],readingTime:2.275,hasTruncateMarker:!1,authors:[{name:"Jared Corduan",title:"Ledger Team Lead",url:"https://github.com/JaredCorduan",imageURL:"https://github.com/JaredCorduan.png",key:"JaredCorduan"}],frontMatter:{title:"Ledger Team Update",slug:"2022-11-02-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2022-10-02-consensus"},nextItem:{title:"Node API & CLI Team Update",permalink:"/cardano-updates/2022-11-02-node-cli-api"}},u={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2},{value:"Axiomatic Set Theory",id:"axiomatic-set-theory",level:3},{value:"Completed Technical Debt",id:"completed-technical-debt",level:3}],d={toc:p},c="wrapper";function s(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"We have made the decision to use the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/formal-ledger-specifications"},"formal ledger repository"),"\nin place of a LaTeX spec for the next ledger era, and have added a lot of basic infrastructure\nto the model. In particular, we now have a lot of support for axiomatic set theory.\nWhile the next ledger era is still in the design phase, most of the team remains working\non technical debt.\nIn particular, we have moved a lot more code out of the Shelley specific modules and into\na ledger core module, we have finished up our benchmarking around the problematic ",(0,n.kt)("inlineCode",{parentName:"p"},"TICKF"),"\nledger transition (while improving the performance), made conveniences to the development\nenvironment, cleaned up all the recent changes to the cost model, added a lot of documentation,\nfixed some flaky tests, and deleted some dead code."),(0,n.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,n.kt)("h3",{id:"axiomatic-set-theory"},"Axiomatic Set Theory"),(0,n.kt)("p",null,"The formal ledger model now has support for much of the set theory that we make use of in\nthe formal ledger specifications. See [",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/formal-ledger-specifications/pull/20"},"pull-20"),"]."),(0,n.kt)("h3",{id:"completed-technical-debt"},"Completed Technical Debt"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We have addressed issues with two of our most problematic and flaky tests.\nSee [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3039"},"pull-3039"),"] and [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3093"},"pull-3093"),"]."),(0,n.kt)("li",{parentName:"ul"},"We have added more documentation and tests to the Twiddler module. This is a module which\nmakes our CBOR serialization round-trip tests much more robust, and will also hopefully\nhelp enforce the mandate for downstream libraries to never re-serialize data that needs\nto be hashed. See [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3073"},"pull-3073"),"] and [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3095"},"pull-3095"),"]\n(we cannot merge 3095 just yet, due to a preference for merging other features)."),(0,n.kt)("li",{parentName:"ul"},"We have finished our long analysis of the problematic ",(0,n.kt)("inlineCode",{parentName:"li"},"TICKF")," transition.\nWe now have a lot of benchmarks surrounding this code, and have added performance improvements.\nSee [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3068"},"pull-3068"),"] and [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/issues/3035"},"issue-3035"),"]."),(0,n.kt)("li",{parentName:"ul"},"We have restored support for\n",(0,n.kt)("a",{parentName:"li",href:"https://hackage.haskell.org/package/ghcid"},"ghcid"),"\nin our repository. This is a tool for developing with Haskell that many of us find greatly\nimproves our productivity by providing us with constant feedback from the type checker.\nSee [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3112"},"pull-3112"),"]."),(0,n.kt)("li",{parentName:"ul"},"After much activity on the cost model, we have done some final clean up of the code.\nSee [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3075"},"pull-3075"),"] and [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3101"},"pull-3101"),"]."),(0,n.kt)("li",{parentName:"ul"},"We moved a lot of the existing user facing documentation regarding native tokens into the\nledger repository, and cleaned it up\n(most of the heavy lifting was done by our amazing technical writers).\nSee [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3091"},"pull-3091"),"]."),(0,n.kt)("li",{parentName:"ul"},"We removed dead code. See [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3089"},"pull-3089"),"]."),(0,n.kt)("li",{parentName:"ul"},"We moved a lot of code from the Shelley specific libraries to the ledger core library.\nSee [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3109"},"pull-3109"),"] and [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3110"},"pull-3110"),"]."),(0,n.kt)("li",{parentName:"ul"},"We've removed more of the awkward legacy template Haskell names.\nSee [",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3108"},"pull-3108"),"].")))}s.isMDXComponent=!0}}]);