"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[48622],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=d(a),c=n,m=h["".concat(s,".").concat(c)]||h[c]||u[c]||o;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},36391:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const o={title:"Hydra Team Update",slug:"2023-01-13-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2023-01-13-hydra",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-01-13-hydra.md",source:"@site/blog/2023-01-13-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-01-13T00:00:00.000Z",formattedDate:"January 13, 2023",tags:[{label:"hydra",permalink:"/cardano-updates/tags/hydra"}],readingTime:1.56,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2023-01-13-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"DB-sync Team Update",permalink:"/cardano-updates/2023-01-14-db-sync"},nextItem:{title:"Node Release Team Update",permalink:"/cardano-updates/2023-01-13-release"}},s={authorsImageUrls:[void 0]},d=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],p={toc:d},h="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"Since last weekly update before christmas, the Hydra team worked on the\ntechnical specification, closed gaps in ",(0,n.kt)("inlineCode",{parentName:"p"},"hydra-plutus")," scripts, made the unique\n",(0,n.kt)("inlineCode",{parentName:"p"},"headId")," available to Hydra clients through the API, allow the ",(0,n.kt)("inlineCode",{parentName:"p"},"hydra-node")," to\nexplicitly synchronize from genesis (if configured), and fixed smaller log and\nbuild issues reported by new users."),(0,n.kt)("p",null,"Besides this, a retrospective ",(0,n.kt)("a",{parentName:"p",href:"https://cardanofoundation.org/en/news/hydra-head-protocol-an-open-source-solution-for-scalability/"},"blog\npost"),"\nwas published by Matthias Benkort (CF) on Hydra, summarizing our progress made\nin 2022 also an outlook where Hydra is headed for in 2023. Also, the team had\nsome first sessions on the voting project with Catalyst and the CF."),(0,n.kt)("p",null,"A full digest monthly digest for December 2022 can be found on the ",(0,n.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/monthly/2022-12"},"hydra\nwebsite"),"."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Had some first sessions on the voting project with Catalyst and CF"),(0,n.kt)("li",{parentName:"ul"},"Published retrospective ",(0,n.kt)("a",{parentName:"li",href:"https://cardanofoundation.org/en/news/hydra-head-protocol-an-open-source-solution-for-scalability/"},"blog\npost"),"\nby Matthias Benkort (CF) on Hydra, summarizing our progress made in 2022 also\nan outlook where Hydra is headed for in 2023."),(0,n.kt)("li",{parentName:"ul"},"Worked on the LaTeX spec for HydraHeadV1, not final or published yet - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ch1bo/hydra-spec"},"latest\nversion in this repository"),"."),(0,n.kt)("li",{parentName:"ul"},"Add unique ",(0,n.kt)("inlineCode",{parentName:"li"},"headId")," to API and hence make it available to clients."),(0,n.kt)("li",{parentName:"ul"},"Allow ",(0,n.kt)("inlineCode",{parentName:"li"},"hydra-node")," to explicitly synchronize from genesis using ",(0,n.kt)("inlineCode",{parentName:"li"},"--start-chain-from 0"),"."),(0,n.kt)("li",{parentName:"ul"},"Closed gaps in ",(0,n.kt)("inlineCode",{parentName:"li"},"hydra-plutus")," scripts",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"bounded transaction validity (",(0,n.kt)("a",{parentName:"li",href:"https://hydra.family/head-protocol/adr/21/"},"ADR21"),")"),(0,n.kt)("li",{parentName:"ul"},"enforcing contract continuity via state token in output"))),(0,n.kt)("li",{parentName:"ul"},"Fixed JSON for some logs and smaller build issues reported by new users.")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reach out to have ",(0,n.kt)("inlineCode",{parentName:"li"},"hydra-tutorial")," integrated."),(0,n.kt)("li",{parentName:"ul"},"Plan the next couple of months."),(0,n.kt)("li",{parentName:"ul"},"Complete checking reimbursing of commits in head validator."),(0,n.kt)("li",{parentName:"ul"},"Align plutus scripts to spec and simplify them (identified some simplifications)"),(0,n.kt)("li",{parentName:"ul"},"Improve mutation framework to be sure we fail tests for the right reasons"),(0,n.kt)("li",{parentName:"ul"},"Complete the spec except the open points (<5) and also discuss them with researchers.")))}u.isMDXComponent=!0}}]);