"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[22393],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(a),d=n,m=s["".concat(p,".").concat(d)]||s[d]||h[d]||o;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},98294:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"Hydra Team Update",slug:"2023-07-21-hydra",authors:["ch1bo"],tags:["hydra"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2023-07-21-hydra",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-07-21-hydra.md",source:"@site/blog/2023-07-21-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-07-21T00:00:00.000Z",formattedDate:"July 21, 2023",tags:[{label:"hydra",permalink:"/cardano-updates/tags/hydra"}],readingTime:.7,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2023-07-21-hydra",authors:["ch1bo"],tags:["hydra"],hide_table_of_contents:!1},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-07-14-hydra"}},p={authorsImageUrls:[void 0]},c=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],u={toc:c},s="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team updated the specification to align with recent\noff-chain protocol changes, completed refactoring the snapshot emission\nin preparation for event-sourced protocol logic, and updated to GHC\n9.2.7, resulting in improved compile times and slightly smaller Plutus\nscripts."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated the specification to match the recent off-chain protocol\nchanges to complete\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/728"},"#728")),(0,n.kt)("li",{parentName:"ul"},"Refactored the snapshot emission logic in preparation for event\nsourced protocol logic."),(0,n.kt)("li",{parentName:"ul"},"Updated to GHC 9.2.7, which led to improved compile times and\nslightly smaller plutus scripts.")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Monthly review meeting next wednesday and July report"),(0,n.kt)("li",{parentName:"ul"},"Reflect latest information onto our roadmap."),(0,n.kt)("li",{parentName:"ul"},"Actual implemention of event-sourced persistence\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/913"},"#913"),"."),(0,n.kt)("li",{parentName:"ul"},"Update the use cases section on ",(0,n.kt)("a",{parentName:"li",href:"https://hydra.family"},"https://hydra.family")),(0,n.kt)("li",{parentName:"ul"},"Remove deprecated internal commit\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/954"},"#954"),".")))}h.isMDXComponent=!0}}]);