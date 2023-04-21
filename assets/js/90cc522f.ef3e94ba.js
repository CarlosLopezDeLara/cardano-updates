"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[5696],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(a),c=n,m=h["".concat(s,".").concat(c)]||h[c]||d[c]||i;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},73887:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"Hydra Team Update",slug:"2023-04-21-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2023-04-21-hydra",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-04-21-hydra.md",source:"@site/blog/2023-04-21-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-04-21T00:00:00.000Z",formattedDate:"April 21, 2023",tags:[{label:"hydra",permalink:"/cardano-updates/tags/hydra"}],readingTime:1.26,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2023-04-21-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},nextItem:{title:"Mithril Team Update",permalink:"/cardano-updates/2023-04-20-mithril"}},s={authorsImageUrls:[void 0]},p=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team worked on several fronts, including fixing state\nmachine continuity on-chain, discussing voting project solutions, exploring\nadding Hydra support to kupo, and improving API navigation with a sidebar. The\nteam also updated dependencies and fixed issues in their test suites. Moving\nforward, the team plans to hold the next monthly review meeting, address a user\nissue, prepare for the 0.10.0 release, and work on a dirt road fix for the\nrollbacks issue with proper test coverage."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed scripts to enforce state machine continuity on-chain ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/777"},"#777"),"."),(0,n.kt)("li",{parentName:"ul"},"Took part in a twitter space on ",(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/thepizzaknight_/status/1647833904282320896"},"\u201c","Scaling Cardano","\u201d"),"."),(0,n.kt)("li",{parentName:"ul"},"Joined a CBIA meeting to discuss Cardano network protocols & how to specify them."),(0,n.kt)("li",{parentName:"ul"},"Discussed potential solutions of ensuring vote uniqueness in the voting project."),(0,n.kt)("li",{parentName:"ul"},"Updated dependencies to match ",(0,n.kt)("inlineCode",{parentName:"li"},"cardano-node")," master to prepare for upcoming releases and hard-forks"),(0,n.kt)("li",{parentName:"ul"},"Explored adding Hydra ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/CardanoSolutions/kupo/pull/117"},"support to kupo"),", a lightweight Cardano chain indexer - some more work required."),(0,n.kt)("li",{parentName:"ul"},"Improved navigation of the API Reference with a sidebar, see ",(0,n.kt)("a",{parentName:"li",href:"https://hydra.family/head-protocol/unstable/api-reference/"},"unstable API version"),"."),(0,n.kt)("li",{parentName:"ul"},"Fixed two things in our test suites (random port conflicts and an arithmetic underflow in smoke test)")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Monthly review meeting (join via ",(0,n.kt)("a",{parentName:"li",href:"https://discord.gg/inputoutput?event=1097863746216538194"},"Discord")," or ",(0,n.kt)("a",{parentName:"li",href:"https://www.addevent.com/event/ck16794110"},"AddEvent"),") & report"),(0,n.kt)("li",{parentName:"ul"},"Dirt road fix for rollbacks ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/784"},"#784")," properly covered by a test."),(0,n.kt)("li",{parentName:"ul"},"Groom and ideally address user issue ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/823"},"#823"),"."),(0,n.kt)("li",{parentName:"ul"},"Put the spec into the repo ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/693"},"#693")," and prepare release 0.10.0.")))}d.isMDXComponent=!0}}]);