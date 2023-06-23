"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[85442],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),h=n,m=u["".concat(p,".").concat(h)]||u[h]||c[h]||o;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},89790:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={title:"Hydra Team Update",slug:"2023-03-10-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2023-03-10-hydra",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-03-10-hydra.md",source:"@site/blog/2023-03-10-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-03-10T00:00:00.000Z",formattedDate:"March 10, 2023",tags:[{label:"hydra",permalink:"/cardano-updates/tags/hydra"}],readingTime:.825,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2023-03-10-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Goedel Team Update",permalink:"/cardano-updates/2023-03-16-goedel"},nextItem:{title:"Mithril Team Update",permalink:"/cardano-updates/2023-03-09-mithril"}},p={authorsImageUrls:[void 0]},s=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],d={toc:s},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team addressed issues with committing complex UTxOs into a\nHydra Head, prepared the ",(0,n.kt)("inlineCode",{parentName:"p"},"hydra-node")," to be run on mainnet (soon) and improved\nthe test suite of the ",(0,n.kt)("inlineCode",{parentName:"p"},"hydra-plutus")," scripts. The specification is constantly\ngetting improved upon reviewer feedback on overleaf - this week the graphical\nnotation was refined to be more transaction-focused."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Clarified ","\u201c","bug","\u201d"," of committing UTxOs with reference scripts to a Hydra head ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/737"},"#737")),(0,n.kt)("li",{parentName:"ul"},"Prepare usage of ",(0,n.kt)("inlineCode",{parentName:"li"},"hydra-node")," on mainnet by updating command line options ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/715"},"#715")),(0,n.kt)("li",{parentName:"ul"},"Improved our mutation test suite to all expected errors ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/705"},"#705")),(0,n.kt)("li",{parentName:"ul"},"Re-opened our persistent hydraw demo head on ",(0,n.kt)("inlineCode",{parentName:"li"},"preprod")," using version ",(0,n.kt)("inlineCode",{parentName:"li"},"0.9.0")),(0,n.kt)("li",{parentName:"ul"},"Updated on-chain graphs to be more transaction-focused in the specification")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Complete mainnet compatibility feature"),(0,n.kt)("li",{parentName:"ul"},"Prepare the Hydra workshop"),(0,n.kt)("li",{parentName:"ul"},"Address all todo\u2019s in the Hydra specification"),(0,n.kt)("li",{parentName:"ul"},"Unblock the auctions project with ","\u201c","commit from script","\u201d"," a solution")))}c.isMDXComponent=!0}}]);