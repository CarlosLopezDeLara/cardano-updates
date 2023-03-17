"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[1972],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=p(a),c=n,m=h["".concat(s,".").concat(c)]||h[c]||u[c]||i;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},97898:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"Hydra Team Update",slug:"2022-11-18-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2022-11-18-hydra",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-11-18-hydra.md",source:"@site/blog/2022-11-18-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2022-11-18T00:00:00.000Z",formattedDate:"November 18, 2022",tags:[{label:"hydra",permalink:"/cardano-updates/tags/hydra"}],readingTime:1.085,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2022-11-18-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/cardano-updates/2022-11-23-ledger"},nextItem:{title:"Mithril Team Update",permalink:"/cardano-updates/2022-11-18-mithril"}},s={authorsImageUrls:[void 0]},p=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team released version ",(0,n.kt)("inlineCode",{parentName:"p"},"0.8.1"),", which includes several fixes and a user-wished extension of the persistence introduced by ",(0,n.kt)("inlineCode",{parentName:"p"},"0.8.0")," of replaying server outputs to make clients like the ",(0,n.kt)("inlineCode",{parentName:"p"},"hydra-tui")," be aware of the latest ",(0,n.kt)("inlineCode",{parentName:"p"},"hydra-node")," state. The team also worked on the specification and closing gaps in the on-chain scripts, collaborated with the education team on a Hydra tutorial and also renamed the repository from ",(0,n.kt)("inlineCode",{parentName:"p"},"hydra-poc")," to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra"},(0,n.kt)("inlineCode",{parentName:"a"},"hydra")),"!"),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Implemented replaying of server outputs to address ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/issues/580"},"#580")),(0,n.kt)("li",{parentName:"ul"},"Released version 0.8.1 containing this and other fixes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/releases/tag/0.8.1"},"Release notes")),(0,n.kt)("li",{parentName:"ul"},"Worked on the bounded tx validity as one of the on-chain script fixes, but couldn","\u2019","t finish it just yet ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/615"},"#615")),(0,n.kt)("li",{parentName:"ul"},"Collaborated with the education team on a Hydra tutorial."),(0,n.kt)("li",{parentName:"ul"},"Discovered and discussed issues with the ","\u201c","seen ledger","\u201d","."),(0,n.kt)("li",{parentName:"ul"},"Renamed the Hydra repository ",(0,n.kt)("inlineCode",{parentName:"li"},"hydra-poc")," -> ",(0,n.kt)("inlineCode",{parentName:"li"},"hydra"))),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create and discuss an ADR about handling tx validity correctly."),(0,n.kt)("li",{parentName:"ul"},"Attend the Cardano Summit in Lausanne. Hydra will be topic of one talk! Save the date+time: ",(0,n.kt)("strong",{parentName:"li"},'"Developing Hydra" on Day 2, Nov 21st, 13:50 CET')),(0,n.kt)("li",{parentName:"ul"},"Have a team workshop / hackathon after the summit:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Retrospective"),(0,n.kt)("li",{parentName:"ul"},"Roadmapping session"),(0,n.kt)("li",{parentName:"ul"},"Hack on something complex or useful")))))}u.isMDXComponent=!0}}]);