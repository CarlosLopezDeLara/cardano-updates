"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[5369],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=d(a),c=n,m=h["".concat(s,".").concat(c)]||h[c]||p[c]||i;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},94306:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={title:"Hydra Team Update",slug:"2023-04-27-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2023-04-27-hydra",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-04-27-hydra.md",source:"@site/blog/2023-04-27-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-04-27T00:00:00.000Z",formattedDate:"April 27, 2023",tags:[{label:"hydra",permalink:"/cardano-updates/tags/hydra"}],readingTime:1.11,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2023-04-27-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-04-21-hydra"}},s={authorsImageUrls:[void 0]},d=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team held their Monthly review meeting and drafted the\nreport which likely is published next week. They put the spec into the\nrepository and website, addressed a user issue and fixed the TUI peer list.\nFurthermore, they updated dependencies, conducted a Twitter space on Auctions\nuse cases, covered the rollback bug with tests and implemented a solution.\nLooking ahead, their goals for next week include releasing 0.10.0, implementing\ntimed transactions support, writing a Query API ADR, and grooming work items\nlike off-chain benchmarks."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Held the Monthly review meeting and drafted the report (to be published next week)"),(0,n.kt)("li",{parentName:"ul"},"Added the spec into the repository\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/693"},"#693")," and published on\n",(0,n.kt)("a",{parentName:"li",href:"https://hydra.family/head-protocol/unstable/core-concepts/specification"},"the\nwebsite")),(0,n.kt)("li",{parentName:"ul"},"Groom and addressed user issue ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/823"},"#823")),(0,n.kt)("li",{parentName:"ul"},"Covered the rollback bug with tests and implemented a solution (to be reviewed) ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/784"},"#784")),(0,n.kt)("li",{parentName:"ul"},"Fixed the TUI peer list"),(0,n.kt)("li",{parentName:"ul"},"Updated dependencies to match ",(0,n.kt)("inlineCode",{parentName:"li"},"cardano-node")," master"),(0,n.kt)("li",{parentName:"ul"},"Conducted a twitter space on Auctions use cases")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Release 0.10.0"),(0,n.kt)("li",{parentName:"ul"},"Support timed transactions solution drafted and validated API with users"),(0,n.kt)("li",{parentName:"ul"},"Write Query API ADR and groom a concrete step"),(0,n.kt)("li",{parentName:"ul"},"Groom and solve ",(0,n.kt)("inlineCode",{parentName:"li"},"PostTxOnChainFailed")," UX problem ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/832"},"#832")),(0,n.kt)("li",{parentName:"ul"},"Groom off-chain benchmarks idea ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/186"},"#186")," and turn it into a ","\u201c","feature","\u201d")))}p.isMDXComponent=!0}}]);