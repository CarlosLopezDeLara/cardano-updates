"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[16002],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,c=m["".concat(p,".").concat(d)]||m[d]||h[d]||i;return a?r.createElement(c,o(o({ref:t},s),{},{components:a})):r.createElement(c,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},54903:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={title:"Hydra Team Update",slug:"2023-06-09-hydra",authors:"ffakenz",tags:["hydra"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2023-06-09-hydra",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-06-09-hydra.md",source:"@site/blog/2023-06-09-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-06-09T00:00:00.000Z",formattedDate:"June 9, 2023",tags:[{label:"hydra",permalink:"/cardano-updates/tags/hydra"}],readingTime:1.18,hasTruncateMarker:!1,authors:[{name:"Franco Testagrossa",title:"Hydra Software Engineer",url:"https://github.com/ffakenz",imageURL:"https://github.com/ffakenz.png",key:"ffakenz"}],frontMatter:{title:"Hydra Team Update",slug:"2023-06-09-hydra",authors:"ffakenz",tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Developer Experience Update",permalink:"/cardano-updates/2023-06-09-developer-experience"},nextItem:{title:"DB-sync Team Update",permalink:"/cardano-updates/2023-06-08-db-sync"}},p={authorsImageUrls:[void 0]},u=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],s={toc:u};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team worked on multiple fronts. They finished the\ninvestigation about the broken head on mainnet and re-opened their persistent\nhead instance. The team also fixed the monthly report publication on their\nwebsite and started sketching ideas and further improvements. Also, they are on\nthe last mile to deliver a new feature which will allow parties to commit funds\nfrom extern wallets. Finally the team started to work on optimizing the\nperformance on their benchmarks."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Finished investigation on broken head on mainnet ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/897"},"#897")," and re-opened it."),(0,n.kt)("li",{parentName:"ul"},"Added support for externally committing regular utxo ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/887"},"#887")),(0,n.kt)("li",{parentName:"ul"},"Fix monthly report publication on docs website and published the ",(0,n.kt)("a",{parentName:"li",href:"https://hydra.family/head-protocol/monthly/2023-05"},"monthly report"),". Odd problems when publishing monthly report:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Make us think about if we should change something about the website ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/908"},"#908")),(0,n.kt)("li",{parentName:"ul"},"Open issue to docusaurus ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebook/docusaurus/issues/9036"},"#9036")))),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug in the benchmark process ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/910"},"#910")),(0,n.kt)("li",{parentName:"ul"},"Explored performance of the ",(0,n.kt)("inlineCode",{parentName:"li"},"hydra-node"),"{.verbatim} and identified a\nbottleneck."),(0,n.kt)("li",{parentName:"ul"},"Timed transaction feature is being used by the auction project \ud83c\udf89 ")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Complete performance analysis and start/plan improvements and provide\nregular benchmarks for Hydra ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/186"},"#186")),(0,n.kt)("li",{parentName:"ul"},"Add hydra as tool to developer platform ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/872"},"#872"),"."),(0,n.kt)("li",{parentName:"ul"},"Authenticate network messages ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/727"},"#727"),"."),(0,n.kt)("li",{parentName:"ul"},"Complete journey for external commits using multiple script UTxOs ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/903"},"#903")),(0,n.kt)("li",{parentName:"ul"},"Start implementing ",(0,n.kt)("em",{parentName:"li"},"Option B")," for external commits ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/215"},"#215"),".")))}h.isMDXComponent=!0}}]);