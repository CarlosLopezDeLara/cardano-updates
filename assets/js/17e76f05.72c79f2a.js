"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[64966],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),h=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=h(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=h(a),c=n,m=u["".concat(s,".").concat(c)]||u[c]||p[c]||i;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var h=2;h<i;h++)o[h]=a[h];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},24065:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var r=a(87462),n=(a(67294),a(3905));const i={title:"Hydra Team Update",slug:"2023-05-12-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2023-05-12-hydra",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-05-12-hydra.md",source:"@site/blog/2023-05-12-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-05-12T00:00:00.000Z",formattedDate:"May 12, 2023",tags:[{label:"hydra",permalink:"/cardano-updates/tags/hydra"}],readingTime:1.145,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2023-05-12-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Goedel Team Update",permalink:"/cardano-updates/2023-05-12-goedel"},nextItem:{title:"Network Team Update",permalink:"/cardano-updates/2023-05-12-network"}},s={authorsImageUrls:[void 0]},h=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],d={toc:h},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team achieved a number of milestones, including the release\nof the first mainnet compatible version. Besides this they also addressed\ninconsistencies in rollback handling, added an architecture page to the website,\nreducing the size of logs using event IDs. They also had productive discussions\nwith researchers on plans for incremental commits/decommits and had a whiteboard\nsession on DeFi and lending protocols. The goals for next week include\ncompleting the validation of the timed transactions feature, exploring stateless\nobservation, refining the Hydra explorer ticket, writing ops instructions and\ntroubleshooting, and implementing the first end-to-end journey for external\ncommits."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Released first mainnnet compatible version ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/releases/tag/0.10.0"},"0.10.0")),(0,n.kt)("li",{parentName:"ul"},"Addressed inconsist handling of rollbacks ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/784"},"#784")),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("a",{parentName:"li",href:"https://hydra.family/head-protocol/core-concepts/architecture/"},"architecture page")," and fixed haddock links on our website ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/838"},"#838")),(0,n.kt)("li",{parentName:"ul"},"Opened a new hydra head on mainnet"),(0,n.kt)("li",{parentName:"ul"},"Talked with researchers on initial plan for incremental commits/decommits"),(0,n.kt)("li",{parentName:"ul"},"Had a Whiteboard session on DeFi and lending protocols"),(0,n.kt)("li",{parentName:"ul"},"Reduced size of logs using event ids ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/859"},"#859")),(0,n.kt)("li",{parentName:"ul"},"Published the ",(0,n.kt)("a",{parentName:"li",href:"https://hydra.family/head-protocol/monthly/2023-04"},"monthly report for April"))),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Complete validation of timed transactions feature ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/196"},"#196")),(0,n.kt)("li",{parentName:"ul"},"Explored stateless observation and refined hydra explorer ticket ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/696"},"#696")),(0,n.kt)("li",{parentName:"ul"},"Write ","\u201c","ops","\u201d"," instructions and troubleshooting ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/569"},"#569")," and improve logs"),(0,n.kt)("li",{parentName:"ul"},"Have a first end-to-end journey for external commits implemented ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/215"},"#215"))))}p.isMDXComponent=!0}}]);