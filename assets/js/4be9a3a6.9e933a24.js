"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[25480],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),h=n,m=d["".concat(u,".").concat(h)]||d[h]||c[h]||l;return r?a.createElement(m,o(o({ref:t},s),{},{components:r})):a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},47519:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={title:"Ledger Team Update",slug:"2023-03-03-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},o=void 0,i={permalink:"/cardano-updates/2023-03-03-ledger",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-03-03-ledger.md",source:"@site/blog/2023-03-03-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2023-03-03T00:00:00.000Z",formattedDate:"March 3, 2023",tags:[{label:"ledger",permalink:"/cardano-updates/tags/ledger"}],readingTime:1.57,hasTruncateMarker:!1,authors:[{name:"Jared Corduan",title:"Ledger Team Lead",url:"https://github.com/JaredCorduan",imageURL:"https://github.com/JaredCorduan.png",key:"JaredCorduan"}],frontMatter:{title:"Ledger Team Update",slug:"2023-03-03-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-03-03-hydra"},nextItem:{title:"Network Team Update",permalink:"/cardano-updates/2023-03-02-network"}},u={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2},{value:"Conway rules",id:"conway-rules",level:3},{value:"Constraint based generators",id:"constraint-based-generators",level:3},{value:"Preparing a release, now with proper versioning",id:"preparing-a-release-now-with-proper-versioning",level:3},{value:"Technical debt",id:"technical-debt",level:3}],s={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"We have focused the last two weeks on CIP-1694, integration of the last several months of ledger\nwork into consensus and node, and testing infrastrutcture that we will use in the conway ledger era."),(0,n.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,n.kt)("h3",{id:"conway-rules"},"Conway rules"),(0,n.kt)("p",null,"We made a major update to the conway era so that the implementation is now in sync with the spec\nwith respect to the ratification and enactment logic."),(0,n.kt)("p",null,"See the notes in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3291"},"pull-3291")," for more details."),(0,n.kt)("h3",{id:"constraint-based-generators"},"Constraint based generators"),(0,n.kt)("p",null,"This week we hit a major milestone in our efforts to build out better property based testing\nsupport for the main ledger properties.\nThe new constraint based generators can now generate full ledger states with what is probably\nvery close to the real constraints (if anything, it is under constrained).\nNext we will work on generating a transaction in the context of a ledger state, which would allow\nus to actually start using these generators for real tests."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3219"},"pull-3219"),"."),(0,n.kt)("h3",{id:"preparing-a-release-now-with-proper-versioning"},"Preparing a release, now with proper versioning"),(0,n.kt)("p",null,"After quite some time, we are ready to release a version of ledger that will work with a new\nversion of consensus, using CHaPs."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/pull/3308"},"pull-3308"),"."),(0,n.kt)("h3",{id:"technical-debt"},"Technical debt"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We cleaned up the redeemer serialization code (to prevent future mistakes). See ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3269"},"pull-3269"),"."),(0,n.kt)("li",{parentName:"ul"},"We added a note to the Alonzo spec, specifying that the transaction inputs are\nlexicographically ordered in the Plutus script context. See ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3306"},"pull-3306"),"."),(0,n.kt)("li",{parentName:"ul"},"We fixed a problem with the address deserialiazation\n(we mistakenly fixed a bug in the Babbage era which cannot be fixed until Conway).\nSee ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3307"},"pull-3307"),"."),(0,n.kt)("li",{parentName:"ul"},"We fixed a problem with our nix build. See ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3311"},"pull-3311"),"."),(0,n.kt)("li",{parentName:"ul"},"We fixed a problem with our ",(0,n.kt)("inlineCode",{parentName:"li"},"NoThunks")," tests. See ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3310"},"pull-3310"),"."),(0,n.kt)("li",{parentName:"ul"},"We improved our nightly tests. See ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3316"},"pull-3316"),".")))}c.isMDXComponent=!0}}]);