"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[90178],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),c=n,h=m["".concat(u,".").concat(c)]||m[c]||d[c]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},42764:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={title:"Hydra Team Update",slug:"2023-03-31-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2023-03-31-hydra",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-03-31-hydra.md",source:"@site/blog/2023-03-31-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-03-31T00:00:00.000Z",formattedDate:"March 31, 2023",tags:[{label:"hydra",permalink:"/cardano-updates/tags/hydra"}],readingTime:.82,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2023-03-31-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Goedel Team Update",permalink:"/cardano-updates/2023-03-31-goedel"},nextItem:{title:"Ledger Team Update",permalink:"/cardano-updates/2023-03-31-ledger"}},u={authorsImageUrls:[void 0]},s=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra continued work on finishing mainnet compatibility. The\nsemi-automated smoke tests and some missing documentation is still preventing\nfrom calling that fully done. They fixed smaller issues and made a step in the\nHead protocol more robust. Besides development, they met with interested people\nfrom the community who want to get started collaborating on communication and\nmarketing materials."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Groomed and followed-up on ",(0,n.kt)("inlineCode",{parentName:"li"},"GetUTxO")," user request discussion ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/discussions/797"},"#797")),(0,n.kt)("li",{parentName:"ul"},"Fixed ",(0,n.kt)("inlineCode",{parentName:"li"},"hydra-node")," crashes after forks ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/560"},"#560")),(0,n.kt)("li",{parentName:"ul"},"Made ",(0,n.kt)("inlineCode",{parentName:"li"},"collectCom")," more robust and aligned with spec ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/786"},"#786")),(0,n.kt)("li",{parentName:"ul"},"Completed configurable API feature ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/380"},"#380")),(0,n.kt)("li",{parentName:"ul"},"Met potential contributors about Hydra communication and marketing materials"),(0,n.kt)("li",{parentName:"ul"},"Versioned documentation: we have a ",(0,n.kt)("inlineCode",{parentName:"li"},"unstable")," bleeding edge version available as well now, seperate from the last released version")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Follow-up backlog and roadmap clean-up"),(0,n.kt)("li",{parentName:"ul"},"Complete mainnet compatibility feature ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/713"},"#713")," (documentation updates)"),(0,n.kt)("li",{parentName:"ul"},"Integrate Hydra specification into repository ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/693"},"#693"))))}d.isMDXComponent=!0}}]);