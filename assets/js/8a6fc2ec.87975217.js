"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[2154],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(r),h=a,m=c["".concat(u,".").concat(h)]||c[h]||s[h]||l;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},82391:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"Ledger Team Update",slug:"2023-01-19-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},o=void 0,i={permalink:"/cardano-updates/2023-01-19-ledger",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-01-19-ledger.md",source:"@site/blog/2023-01-19-ledger.md",title:"Ledger Team Update",description:"High level summary",date:"2023-01-19T00:00:00.000Z",formattedDate:"January 19, 2023",tags:[{label:"ledger",permalink:"/cardano-updates/tags/ledger"}],readingTime:2.665,hasTruncateMarker:!1,authors:[{name:"Jared Corduan",title:"Ledger Team Lead",url:"https://github.com/JaredCorduan",imageURL:"https://github.com/JaredCorduan.png",key:"JaredCorduan"}],frontMatter:{title:"Ledger Team Update",slug:"2023-01-19-ledger",authors:"JaredCorduan",tags:["ledger"],hide_table_of_contents:!1},prevItem:{title:"SRE Team Update",permalink:"/cardano-updates/2023-01-20-sre"},nextItem:{title:"DB-sync Team Update",permalink:"/cardano-updates/2023-01-14-db-sync"}},u={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2},{value:"Restructuring the ledger state",id:"restructuring-the-ledger-state",level:3},{value:"PDF hosting",id:"pdf-hosting",level:3},{value:"Powering the new ledger API",id:"powering-the-new-ledger-api",level:3},{value:"Constraint-based generators",id:"constraint-based-generators",level:3},{value:"Technical debt",id:"technical-debt",level:3}],d={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"The ledger team completed some preliminary ground work in preparation for CIP-1694\n(restructuring the ledger state),\nfixed the PDF hosting problem (mostly the formal specs),\nbuilt out more of the new user-friendly ledger API,\nfinished a proof of concept for constraint-based generators for property tests\n(with the hopes of being able to replace our trace generators one day),\nand addressed technical debt."),(0,a.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,a.kt)("h3",{id:"restructuring-the-ledger-state"},"Restructuring the ledger state"),(0,a.kt)("p",null,"The existing governance structures will be replace in the conway ledger era,\nas described in CIP-1694.\nIn particular, the ledger rules will be restructured as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   BBODY\n    |\n    |-------------------------------|\n    v                               v\n   TICK                            LEDGERS\n    |                               |\n    |---------|                     |\n    v         v                     v\n   RUPD     ~NEWEPOCH~            ~LEDGER~\n              |                     |\n              |----------|          |--------|-------------------|-----------|\n              v          v                   v                   v           v\n            ~EPOCH~     +ENACTMENT+         DELEGS              UTXOW       +TALLY+\n              |                              |                   |\n              |---------|------------|       v                   |\n              v         v            v      DELPL                v\n             SNAP      POOLREAP    -UPEC-    |                  UTXO\n                                             |--------|          |\n                                             v        v          v\n                                            POOL     DELEG     ~UTXOS~\n\n-..- Removed\n+..+ Added\n~..~ Modified\n")),(0,a.kt)("p",null,"Moreover, the ledger state will also be restructured in accordance with the new rules.\nIn the conway code, we have now removed UPEC, added TALLY, and stubbed ENACTMENT.\nWe have also adapted all the data structures in the ledger state."),(0,a.kt)("p",null,"See:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3216"},"pull-3216"))),(0,a.kt)("h3",{id:"pdf-hosting"},"PDF hosting"),(0,a.kt)("p",null,"We now build all of our PDFs using a GitHub action which is triggered by pushing a tag\nwith a specific form, ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-ledger-spec-YYYY-MM-DD"),".\nThe action creates a GitHub release containing the PDFs.\nThe links in the main ledger README now point to the PDFs in the latest release."),(0,a.kt)("p",null,"See:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3245"},"pull-3245")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3260"},"pull-3260"))),(0,a.kt)("h3",{id:"powering-the-new-ledger-api"},"Powering the new ledger API"),(0,a.kt)("p",null,"We have now removed all the ",(0,a.kt)("inlineCode",{parentName:"p"},"HasField")," instances from the protocol parameter data types,\nand replaced them with lenses.\nThis is probably the last major restructuring that the ledger team will do on the code base\nfor the API for a while\n(the Plutus tools team will be working on it next, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-ledger/projects/5"},"here"),").\nWe also added a new helpful function ",(0,a.kt)("inlineCode",{parentName:"p"},"ensureMinCoinTxOut"),"."),(0,a.kt)("p",null,"See:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3242"},"pull-3242")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3248"},"pull-3248"))),(0,a.kt)("h3",{id:"constraint-based-generators"},"Constraint-based generators"),(0,a.kt)("p",null,"Our largest scale property tests generate an initial ledger state and a long sequence of valid blocks\nwhich span several epochs, mimicking a real network.\nThese tests are, in theory, excellent for checking properties.\nThey are, however, very difficult to maintain and are not as random as we would like\n(a lot of bias has to be introduced to keep the ledger state in enough order to keep generating blocks)."),(0,a.kt)("p",null,"We would like to switch to tests which instead generate a random ledger state representative\nof not just an initial state, generate a single random valid block, and then test our properties.\nThe hope is that these will be much more random and easier to maintain."),(0,a.kt)("p",null,"We have finished a proof of concept are encouraged that this approach could work!"),(0,a.kt)("p",null,"See:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3219"},"pull-3219"))),(0,a.kt)("h3",{id:"technical-debt"},"Technical debt"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3244"},"pull-3244")," massive CI speedup"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3249"},"pull-3249")," better types for fees in the protocol parameters"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3264"},"pull-3264")," move our annotator code to the ",(0,a.kt)("inlineCode",{parentName:"li"},"cardano-ledger-binary")," package where it belongs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3239"},"pull-3239")," move the ",(0,a.kt)("inlineCode",{parentName:"li"},"Wdrls")," type to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Core")," module.")))}s.isMDXComponent=!0}}]);