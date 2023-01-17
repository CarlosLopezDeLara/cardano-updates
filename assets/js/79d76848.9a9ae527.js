"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[5379],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(r),h=a,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1256:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"Open-Source Update",slug:"2023-01-13-open-source",authors:"coot",tags:["open-source"],hide_table_of_contents:!1},i=void 0,p={permalink:"/cardano-updates/quarterly/2023-01-13-open-source",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/quarterly/2023-01-13-open-source.md",source:"@site/quarterly/2023-01-13-open-source.md",title:"Open-Source Update",description:"Open Source Quarterly Update",date:"2023-01-13T00:00:00.000Z",formattedDate:"January 13, 2023",tags:[{label:"open-source",permalink:"/cardano-updates/quarterly/tags/open-source"}],readingTime:2.215,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Open-Source Update",slug:"2023-01-13-open-source",authors:"coot",tags:["open-source"],hide_table_of_contents:!1},prevItem:{title:"Network Quarterly Update",permalink:"/cardano-updates/quarterly/2023-01-13-network"},nextItem:{title:"Consensus Quarterly Update",permalink:"/cardano-updates/quarterly/2022-11-15-consensus"}},l={authorsImageUrls:[void 0]},s=[{value:"Open Source Quarterly Update",id:"open-source-quarterly-update",level:2},{value:"2022-11 - 2023-01",id:"2022-11---2023-01",level:2},{value:"Summary",id:"summary",level:3},{value:"Detailed log",id:"detailed-log",level:3}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"open-source-quarterly-update"},"Open Source Quarterly Update"),(0,a.kt)("h2",{id:"2022-11---2023-01"},"2022-11 - 2023-01"),(0,a.kt)("h3",{id:"summary"},"Summary"),(0,a.kt)("p",null,"In the last quarter the open-source initiative delivered a comprehensive report\non the state of our repositories.  As part of this work stream we\nidentified the key open-source repositories for the cardano project across all\nthe projects  From a list of more than 500 repositories (some of which are\nforks) we identified key repositories which constitute the core of Cardano.\n20 of them were identified as to be transferred to the future MBO which will\ngovern Cardano development.  Some where excluded (like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/io-sim"},(0,a.kt)("inlineCode",{parentName:"a"},"io-sim"))," and\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/typed-protocols"},(0,a.kt)("inlineCode",{parentName:"a"},"typed-protocols")),"), to be govern by IOG, since they have a much broader\napplication than Cardano itself, and thus we think their open-source future\nwill be better outside of the Cardano umbrella."),(0,a.kt)("p",null,"Christian Taylor identified a number of ways we can improve our repositories to\nmake them more attractive for open-source contributions by analysing each of\nthem.  This includes adding or improving various documentation files, like\n",(0,a.kt)("inlineCode",{parentName:"p"},"CONTRIBUTING")," files, adding code of conduct, improving readme files, issue\n& pull request templates etc.  Christian also computed various interesting\nmetrics which gives a very good insight into the development practices: e.g.\naverage merge ratio, average number of reviews, comments and many more!  The\npresentation is available ",(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/127IFEavlrZeeoFrVXFYWzSt0ugOkSL7isxjyM1vmMzQ"},"here"),"."),(0,a.kt)("p",null,"We followed with work on the ",(0,a.kt)("a",{parentName:"p",href:"https://input-output-hk.github.io/cardano-engineering-handbook/"},"Cardano Engineering Handbook"),".  We included\na standard code of conduct which is now used by most important projects in the\nCardano space.  We included ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-node"),"'s security policy and added\na responsible disclosure policy.  We also described how roles and\nresponsibilities should be clarified.  This progress was made by\na collaborative effort of the Cardano Core, Plutus and Architecture teams, and\nit wouldn't be possible without Michael Peyton Jones, Arnaud Bailly, Kevin\nHammond, Jared Corduan and Marcin Szamotulski."),(0,a.kt)("p",null,"We also improved the documentation of key repositories, by adding description,\nimproving their ",(0,a.kt)("inlineCode",{parentName:"p"},"README")," file & ",(0,a.kt)("inlineCode",{parentName:"p"},"CONTRIBUTING")," files, adding code of conducts\nfollowing the ",(0,a.kt)("a",{parentName:"p",href:"https://input-output-hk.github.io/cardano-engineering-handbook/"},"Cardano Engineering Handbook"),".  This includes improvements to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network"},(0,a.kt)("inlineCode",{parentName:"a"},"ouroboros-network"))," (both ",(0,a.kt)("inlineCode",{parentName:"li"},"network")," & ",(0,a.kt)("inlineCode",{parentName:"li"},"consensus"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger"},(0,a.kt)("inlineCode",{parentName:"a"},"cardano-ledger"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node"},(0,a.kt)("inlineCode",{parentName:"a"},"cardano-node")))),(0,a.kt)("p",null,"And also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/io-sim"},(0,a.kt)("inlineCode",{parentName:"a"},"io-sim"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/typed-protocols"},(0,a.kt)("inlineCode",{parentName:"a"},"typed-protocols"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-prelude"},(0,a.kt)("inlineCode",{parentName:"a"},"cardano-prelude"))," (work in progress)")),(0,a.kt)("p",null,"The work was carried by Marcin Szamotulski, Addie Girouard and  Jared Corduan. "),(0,a.kt)("p",null,"In this quarter we also identified a number of projects which can be published to\n",(0,a.kt)("inlineCode",{parentName:"p"},"Hackage")," (Haskell's package repository) or ",(0,a.kt)("inlineCode",{parentName:"p"},"crate")," (Rust package repository).\nThe list contains 21 packages, 2 of which (",(0,a.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/hedgehog-extras"},(0,a.kt)("inlineCode",{parentName:"a"},"hedgehog-extras"))," and\n",(0,a.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/quickcheck-dynamic"},(0,a.kt)("inlineCode",{parentName:"a"},"quickcheck-dynamic")),") are already published on Hackage and another 5 (from\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/io-sim"},(0,a.kt)("inlineCode",{parentName:"a"},"io-sim"))," repository) are close to be published."),(0,a.kt)("h3",{id:"detailed-log"},"Detailed log"),(0,a.kt)("p",null,"The progress of the open-source project is tracked in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orgs/input-output-hk/projects/60/views/1"},"this project"),"."))}c.isMDXComponent=!0}}]);