"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[7816],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var h=r.createContext({}),p=function(e){var t=r.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(h.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,h=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=n,m=u["".concat(h,".").concat(c)]||u[c]||d[c]||o;return a?r.createElement(m,i(i({ref:t},s),{},{components:a})):r.createElement(m,i({ref:t},s))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var h in t)hasOwnProperty.call(t,h)&&(l[h]=t[h]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},52945:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"Hydra Team Update",slug:"2023-03-03-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2023-03-03-hydra",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-03-03-hydra.md",source:"@site/blog/2023-03-03-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-03-03T00:00:00.000Z",formattedDate:"March 3, 2023",tags:[{label:"hydra",permalink:"/cardano-updates/tags/hydra"}],readingTime:1.19,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2023-03-03-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Goedel Team Update",permalink:"/cardano-updates/2023-03-03-goedel"},nextItem:{title:"Ledger Team Update",permalink:"/cardano-updates/2023-03-03-ledger"}},h={authorsImageUrls:[void 0]},p=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],s={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team released version\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/releases/tag/0.9.0"},"0.9.0")," - a version\nof the ",(0,n.kt)("inlineCode",{parentName:"p"},"hydra-node")," with fully specified behavior of on-chain scripts and\noff-chain head-logic, decreased costs for opening/closing a Head and scalable\ncontestation deadline semantics. Check out the full release notes for details."),(0,n.kt)("p",null,"Furthermore, they published the ",(0,n.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/monthly/2023-03"},"monthly\nreport")," of the Hydra project\nand conducted a review meeting with an increasingly wider audience. The team\nplans to extend invitations through the new Hydra\n",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/Bwdy2jNdm2"},"#announcements")," discord channel for the next\nmonths, stay tuned!"),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Monthly review meeting with report published ",(0,n.kt)("a",{parentName:"li",href:"https://hydra.family/head-protocol/monthly/2023-03"},"on website")),(0,n.kt)("li",{parentName:"ul"},"Fixed smoke tests ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/726"},"#726")),(0,n.kt)("li",{parentName:"ul"},"Reduced the cost of opening/closing a Head (error codes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/748"},"#748")," + head reference script ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/701"},"#701"),")"),(0,n.kt)("li",{parentName:"ul"},"Released version ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/releases/tag/0.9.0"},"0.9.0")),(0,n.kt)("li",{parentName:"ul"},"Conducted a first experiment on mainnet compatibility ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/713"},"#713")),(0,n.kt)("li",{parentName:"ul"},"New discord category with ",(0,n.kt)("a",{parentName:"li",href:"https://discord.gg/Bwdy2jNdm2"},"#announcements")," channel"),(0,n.kt)("li",{parentName:"ul"},"Received a demo about the Hydra for Voting project"),(0,n.kt)("li",{parentName:"ul"},"Lightning talk on mutation-based testing (to be shared)"),(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/orgs/input-output-hk/projects/21/views/26"},"themes view")," in on our roadmap and some rearranging as we align it with high-level objectives"),(0,n.kt)("li",{parentName:"ul"},"Clarified things with researchers, but mostly identified action items for them")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Redraw transaction graphs and address TODOs specification"),(0,n.kt)("li",{parentName:"ul"},"Run hydraw with 0.9.0 on preprod"),(0,n.kt)("li",{parentName:"ul"},"Make smoke tests on mainnet possible"),(0,n.kt)("li",{parentName:"ul"},"Groom the explorer item"),(0,n.kt)("li",{parentName:"ul"},"Unblock the auctions projecth with ","\u201c","commit from script","\u201d"," a solution")))}d.isMDXComponent=!0}}]);