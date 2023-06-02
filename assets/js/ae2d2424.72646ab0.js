"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[17873],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=n,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},59274:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"Hydra Team Update",slug:"2022-10-14-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2022-10-14-hydra",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-10-14-hydra.md",source:"@site/blog/2022-10-14-hydra.md",title:"Hydra Team Update",description:"High level summary",date:"2022-10-14T00:00:00.000Z",formattedDate:"October 14, 2022",tags:[{label:"hydra",permalink:"/cardano-updates/tags/hydra"}],readingTime:1.26,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2022-10-14-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2022-10-18-consensus"},nextItem:{title:"Ledger Team Update",permalink:"/cardano-updates/2022-10-14-ledger"}},s={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"This week, the hydra team worked on implementing ADR18 to get backup & restore functionality of the ",(0,n.kt)("inlineCode",{parentName:"p"},"hydra-node"),' over the line. Although not fully there yet, an early version of that feature was already needed and succesfully tested by SundaeSwap in their recent demonstration of their DEX running on Hydra. The team also worked on the updated specificaton, met with the researchers and discussed a solution for how to secure rollbacks "past the opening of a Head". We also reponded to recent requests for static executables and prioritized that feature higher, implemented it and merged it.'),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Last week we thought we were done with ",(0,n.kt)("a",{parentName:"li",href:"https://hydra.family/head-protocol/adr/18/"},"ADR18"),", but were not ..."),(0,n.kt)("li",{parentName:"ul"},"... instead, SundaeSwap has been preparing their Rare bloom Hydra demo & needed assistence."),(0,n.kt)("li",{parentName:"ul"},"Implemented a first version for persistence ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/issues/187"},"#187")," in response."),(0,n.kt)("li",{parentName:"ul"},"Enhanced CI to publish test results ",(0,n.kt)("a",{parentName:"li",href:"https://hydra.family/head-protocol/benchmarks/tests/hydra-node/hspec-results"},"on our website")),(0,n.kt)("li",{parentName:"ul"},"Engineering meeting -> discussed rollbacks and discovered a solution for the rollback past open problem!"),(0,n.kt)("li",{parentName:"ul"},"Pulled static executable feature ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/issues/200"},"#200")," into scope, implemented it and merged it!"),(0,n.kt)("li",{parentName:"ul"},"Received and read through a project proposal by a vendor (building a Hydra platform).")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Get backup/recovery ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/issues/187"},"#187")," done with proper event sourcing (ADR18)"),(0,n.kt)("li",{parentName:"ul"},"Cut the next release, version ",(0,n.kt)("inlineCode",{parentName:"li"},"0.8.0")),(0,n.kt)("li",{parentName:"ul"},"Address open comments on specification document & complete the list of identified gaps between specification and implementation ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/issues/452"},"#452")),(0,n.kt)("li",{parentName:"ul"},"Have the CI build macos artifacts")))}u.isMDXComponent=!0}}]);