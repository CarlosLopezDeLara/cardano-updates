"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[9644],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,c=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(c,i(i({ref:t},h),{},{components:a})):r.createElement(c,i({ref:t},h))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26870:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"Hydra Team Update",slug:"2023-05-26-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2023-05-26-hydra",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-05-26-hydra.md",source:"@site/blog/2023-05-26-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-05-26T00:00:00.000Z",formattedDate:"May 26, 2023",tags:[{label:"hydra",permalink:"/cardano-updates/tags/hydra"}],readingTime:1.11,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2023-05-26-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2023-05-31-consensus"},nextItem:{title:"Ledger Team Update",permalink:"/cardano-updates/2023-05-26-ledger"}},s={authorsImageUrls:[void 0]},p=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],h={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,'This week, the Hydra team accomplished several important tasks. They held their\nmonthly review meeting and drafted the report for May. They made progress on\nimplementing the first end-to-end journey for external commits using "Option A"\nfor normal UTxOs, while still considering "Option B". The team also integrated a\nSpanish translation contributed by the community, created micro-benchmarks for\ntransaction validation and deserialization, and made improvements to\nhydra-node\'s version reporting. Last but not least, they implemented the ability\nto commit multiple UTxOs to a head at once.'),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Held the monthly review meeting (",(0,n.kt)("a",{parentName:"li",href:"https://drive.google.com/file/d/1_N6b4RDe579TgLawiJzbE0NLofD3ljE6/view"},"recording")," + ",(0,n.kt)("a",{parentName:"li",href:"https://docs.google.com/presentation/d/1anUC3Z1idloyR6uwiSHLZtV6-LQvUcByHPMUgCBOVIA"},"slides"),") & drafted the report for May."),(0,n.kt)("li",{parentName:"ul"},"Have a first end-to-end journey for external commits implementing ","\u201c","Option A","\u201d","\nfor normal UTxOs ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/887"},"#887")," (still considering ","\u201c","Option B","\u201d",")."),(0,n.kt)("li",{parentName:"ul"},"Integrated the spanish translation ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/866"},"#866"),"."),(0,n.kt)("li",{parentName:"ul"},"Created micro-benchmarks for transaction validation and deserialization ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/884"},"#884"),"."),(0,n.kt)("li",{parentName:"ul"},"Improve hydra-node ","\u2013","version reporting on non-released builds ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/849"},"#849")),(0,n.kt)("li",{parentName:"ul"},"Some minor CI improvements following up last weeks changes."),(0,n.kt)("li",{parentName:"ul"},"Allow commit transactions with multiple UTxO ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/774"},"#774"),".")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Investigate and re-open our team-internal head on mainnet."),(0,n.kt)("li",{parentName:"ul"},"Improve and provide regular benchmarks for Hydra ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/186"},"#186"),"."),(0,n.kt)("li",{parentName:"ul"},"Complete external commits with script UTxOs ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/215"},"#215"),"."),(0,n.kt)("li",{parentName:"ul"},"Authenticate network messages ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/727"},"#727"),"."),(0,n.kt)("li",{parentName:"ul"},"Add hydra as tool to developr platform ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/872"},"#872"),".")))}u.isMDXComponent=!0}}]);