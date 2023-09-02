"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[23599],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),p=n,m=u["".concat(s,".").concat(p)]||u[p]||h[p]||o;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},73363:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"Hydra Team Update",slug:"2023-09-01-hydra",authors:["v0d1ch"],tags:["hydra"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2023-09-01-hydra",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-09-01-hydra.md",source:"@site/blog/2023-09-01-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-09-01T00:00:00.000Z",formattedDate:"September 1, 2023",tags:[{label:"hydra",permalink:"/cardano-updates/tags/hydra"}],readingTime:.93,hasTruncateMarker:!1,authors:[{name:"Sasha Bogicevic",title:"Hydra Software Engineer",url:"https://github.com/v0d1ch",imageURL:"https://github.com/v0d1ch.png",key:"v0d1ch"}],frontMatter:{title:"Hydra Team Update",slug:"2023-09-01-hydra",authors:["v0d1ch"],tags:["hydra"],hide_table_of_contents:!1},nextItem:{title:"SRE Team Update",permalink:"/cardano-updates/2023-09-01-sre"}},s={authorsImageUrls:[void 0]},c=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],d={toc:c},u="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team focused primarily on changes needed in the network\nlayer and have the first draft document related to needed design. They also\nimproved the user experience by allowing a commit using inline datums.\nDiscussed the off-chain governance with researchers and improved internal model\ntests. "),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Monthly report published"),(0,n.kt)("li",{parentName:"ul"},"Small changes to hydraw and tutorial in light of the Masterclass"),(0,n.kt)("li",{parentName:"ul"},"Investigated a bug and saw it was solved by recent developments"),(0,n.kt)("li",{parentName:"ul"},"Improved the model tests by fully validating L1 transactions"),(0,n.kt)("li",{parentName:"ul"},"Enhanced the /commit API to also allow commit from scripts with inline datums (user request)"),(0,n.kt)("li",{parentName:"ul"},"Discussed off-chain governance with IOG and CF researchers"),(0,n.kt)("li",{parentName:"ul"},"Drafted a first network specification document in the context of Network resilience")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Have a clear understanding of the changes we need for the "Improve network resiliency" feature'),(0,n.kt)("li",{parentName:"ul"},"Groomed and agreed plan on incremental commits/decommits"),(0,n.kt)("li",{parentName:"ul"},"Updated tutorials including CI workflows to check consistency"),(0,n.kt)("li",{parentName:"ul"},"Update to GHC 9.6 and latest cardano dependencies (ledger/plutus)")))}h.isMDXComponent=!0}}]);