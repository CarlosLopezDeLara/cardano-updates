"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[1129],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,m=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return a?r.createElement(m,l(l({ref:t},h),{},{components:a})):r.createElement(m,l({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},25013:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"Hydra Team Update",slug:"2023-08-04-hydra",authors:["ch1bo"],tags:["hydra"],hide_table_of_contents:!1},l=void 0,i={permalink:"/cardano-updates/2023-08-04-hydra",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-08-04-hydra.md",source:"@site/blog/2023-08-04-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-08-04T00:00:00.000Z",formattedDate:"August 4, 2023",tags:[{label:"hydra",permalink:"/cardano-updates/tags/hydra"}],readingTime:1.06,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2023-08-04-hydra",authors:["ch1bo"],tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Crypto Team Update",permalink:"/cardano-updates/2023-08-04-crypto"},nextItem:{title:"Ledger Team Update",permalink:"/cardano-updates/2023-08-04-ledger"}},s={authorsImageUrls:[void 0]},p=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],h={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team achieved notable progress in various aspects of the\nproject. The team updated the use case section for auctions on the ",(0,n.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/unstable/use-cases/"},"/unstable"),"\nbranch of the website, improving the understanding of Hydra","\u2019","s applicability."),(0,n.kt)("p",null,"From the development side, the team successfully completed event-sourced\npersistence, a key enhancement in the project","\u2019","s architecture which improves\noff-chain transaction processing performance. They also added a\n","\u201c","submit-transaction","\u201d"," endpoint to the API."),(0,n.kt)("p",null,"In addition to project-related progress, the team actively engaged in community\nreviews for several catalyst proposals related to Hydra and Mithril,\ncontributing to the wider Cardano ecosystem."),(0,n.kt)("p",null,"Finally, the full report for the month of July was also published ",(0,n.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/monthly/2023-07"},"here"),"."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Published the ",(0,n.kt)("a",{parentName:"li",href:"https://hydra.family/head-protocol/monthly/2023-07"},"monthly report for July")),(0,n.kt)("li",{parentName:"ul"},"Updated the use case section for auctions (published on ",(0,n.kt)("a",{parentName:"li",href:"https://hydra.family/head-protocol/unstable/use-cases/"},"/unstable")," branch)"),(0,n.kt)("li",{parentName:"ul"},"Completed event sourced persistence ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/913"},"#913")),(0,n.kt)("li",{parentName:"ul"},"Added a ","\u201c","submit-transaction","\u201d"," endpoint to the API ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/966"},"#966")),(0,n.kt)("li",{parentName:"ul"},"Community reviews for several catalyst proposals related to Hydra and Mithril"),(0,n.kt)("li",{parentName:"ul"},"Created a network testing tool (hydra-net) ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/1006"},"#1006"))),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Update hydra-node to work with cardano-node version 8.x"),(0,n.kt)("li",{parentName:"ul"},"Remove the internal commit functionality"),(0,n.kt)("li",{parentName:"ul"},"Release version 0.12.0"),(0,n.kt)("li",{parentName:"ul"},"Update & streamline tutorial to work with latest version of hydra-node")))}c.isMDXComponent=!0}}]);