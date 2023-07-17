"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[74390],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(a),d=n,m=c["".concat(u,".").concat(d)]||c[d]||h[d]||o;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},87182:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={title:"Hydra Team Update",slug:"2023-07-14-hydra",authors:["ffakenz","v0d1ch"],tags:["hydra"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2023-07-14-hydra",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-07-14-hydra.md",source:"@site/blog/2023-07-14-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-07-14T00:00:00.000Z",formattedDate:"July 14, 2023",tags:[{label:"hydra",permalink:"/cardano-updates/tags/hydra"}],readingTime:.79,hasTruncateMarker:!1,authors:[{name:"Franco Testagrossa",title:"Hydra Software Engineer",url:"https://github.com/ffakenz",imageURL:"https://github.com/ffakenz.png",key:"ffakenz"},{name:"Sasha Bogicevic",title:"Hydra Software Engineer",url:"https://github.com/v0d1ch",imageURL:"https://github.com/v0d1ch.png",key:"v0d1ch"}],frontMatter:{title:"Hydra Team Update",slug:"2023-07-14-hydra",authors:["ffakenz","v0d1ch"],tags:["hydra"],hide_table_of_contents:!1},nextItem:{title:"Mithril Team Update",permalink:"/cardano-updates/2023-07-13-mithril"}},u={authorsImageUrls:[void 0,void 0]},s=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],p={toc:s},c="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week the team focused on exploring the event sourced persistence in order\nto improve ",(0,n.kt)("inlineCode",{parentName:"p"},"hydra-node")," performance. Because of this work the team noticed we\nneed to refactor the emit snapshot emission logic and update the spec in the\nlight of new changes. They also took the time to revisit their goals and product\nplans for the next quarter as well as doing some security fixes related to\nmultisignatures."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Finished spike about performance improvements of event sourced persistence ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/963"},"#963"),"."),(0,n.kt)("li",{parentName:"ul"},"Refactor snapshot emission in protocol logic."),(0,n.kt)("li",{parentName:"ul"},"Revisited our roadmap and goals."),(0,n.kt)("li",{parentName:"ul"},"Prepared and conducated a learning session on lean-waste."),(0,n.kt)("li",{parentName:"ul"},"Improve security of multi-signature checks, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/security/advisories/GHSA-c8qp-cv4h-vcc4"},"this Github security advisory"),"."),(0,n.kt)("li",{parentName:"ul"},"Implemented a cache friendly way to version our binaries ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/962"},"#962"),".")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Implement Event sourced persistence ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/913"},"#913"),"."),(0,n.kt)("li",{parentName:"ul"},"Remove deprecated internal commit ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/954"},"#954")," and close ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/728"},"#728"),".")))}h.isMDXComponent=!0}}]);