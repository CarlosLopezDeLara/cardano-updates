"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[18303],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,m=d["".concat(c,".").concat(h)]||d[h]||s[h]||o;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},22472:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={title:"Hydra Team Update",slug:"2023-02-17-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2023-02-17-hydra",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-02-17-hydra.md",source:"@site/blog/2023-02-17-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-02-17T00:00:00.000Z",formattedDate:"February 17, 2023",tags:[{label:"hydra",permalink:"/cardano-updates/tags/hydra"}],readingTime:.75,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2023-02-17-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Goedel Team Update",permalink:"/cardano-updates/2023-02-17-goedel"},nextItem:{title:"Ledger Team Update",permalink:"/cardano-updates/2023-02-17-ledger"}},c={authorsImageUrls:[void 0]},u=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],p={toc:u};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team completed work on dealing differently with contests\nduring the contestation period. These will now always push out the deadline and\nhence contestation periods are easier to pick (depending on the network a Head\nruns on). Furthermore, they added an important acceptance test and completed\ninternal refactoring of the protocol logic making future changes easier."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Push contestation deadline on each contest ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/716"},"#716")),(0,n.kt)("li",{parentName:"ul"},"Wrote an acceptance (property) test ","\u201c","can always close/fanout when collect is successful","\u201d"),(0,n.kt)("li",{parentName:"ul"},"Internal refactoring of our ",(0,n.kt)("inlineCode",{parentName:"li"},"HeadLogic")),(0,n.kt)("li",{parentName:"ul"},"Groomed remaining things from ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/452"},"#452")," into dedicated features")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Complete full minting policy ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/720"},"#720")),(0,n.kt)("li",{parentName:"ul"},"Release 0.9.0 with updated scripts"),(0,n.kt)("li",{parentName:"ul"},"Plan mainnet milestone and a 0.10.0 version"),(0,n.kt)("li",{parentName:"ul"},"Redraw transaction graphs for specification (upon feedback)"),(0,n.kt)("li",{parentName:"ul"},"Have smoke tests fixed and running regularly")))}s.isMDXComponent=!0}}]);