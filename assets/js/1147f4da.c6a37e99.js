"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[21463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),p=a,g=c["".concat(s,".").concat(p)]||c[p]||m[p]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},75148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"Embedding Quality Workstream",slug:"2022-11-03-embedding-quality",authors:"dorin100",tags:["embedding-quality"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2022-11-03-embedding-quality",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-11-03-embedding-quality.md",source:"@site/blog/2022-11-03-embedding-quality.md",title:"Embedding Quality Workstream",description:"High level summary",date:"2022-11-03T00:00:00.000Z",formattedDate:"November 3, 2022",tags:[{label:"embedding-quality",permalink:"/cardano-updates/tags/embedding-quality"}],readingTime:.65,hasTruncateMarker:!1,authors:[{name:"Dorin Solomon",title:"System Test Team Lead",url:"https://github.com/dorin100",imageURL:"https://github.com/dorin100.png",key:"dorin100"}],frontMatter:{title:"Embedding Quality Workstream",slug:"2022-11-03-embedding-quality",authors:"dorin100",tags:["embedding-quality"],hide_table_of_contents:!1},prevItem:{title:"Open-Source Team",permalink:"/cardano-updates/2022-10-31-open-source"},nextItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2022-10-02-consensus"}},s={authorsImageUrls:[void 0]},u=[{value:"High level summary",id:"high-level-summary",level:2}],d={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"We made good progress on most of the Action Items we agreed on Lisbon, like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cardano System Tests was fully open to public (tools, tests, results)\nSee ",(0,a.kt)("a",{parentName:"li",href:"https://input-output-hk.github.io/cardano-node-tests"},"cardano-node-tests webpage"),"."),(0,a.kt)("li",{parentName:"ul"},"We defined an ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/blob/master/.github/ISSUE_TEMPLATE/user-facing-feature.md"},"user-facing-functionality template")," that is used with the cardano-cli team ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"this includes acceptance criteria & user stories, and definition of done"))),(0,a.kt)("li",{parentName:"ul"},"We are in the process of running the cardano-node-tests at commit & PR level in cardano-node (we are affected by the Cicero migration right now but we did most of the work already)"),(0,a.kt)("li",{parentName:"ul"},"We started to apply a ",(0,a.kt)("em",{parentName:"li"},"labelling convention")," on ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/issues"},"cardano-node issues")," that will be used to generate some visual dashboards with some metrics ","[TBD]"),(0,a.kt)("li",{parentName:"ul"},"Ziyand Liu started an ",(0,a.kt)("em",{parentName:"li"},"End-to-End Development and Testing Process for Plutus Features"))))}m.isMDXComponent=!0}}]);