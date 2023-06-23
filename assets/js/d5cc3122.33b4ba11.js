"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[28669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"DB-sync Team Update",slug:"2023-06-08-db-sync",authors:"kderme",tags:["db-sync"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2023-06-08-db-sync",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-06-08-db-sync.md",source:"@site/blog/2023-06-08-db-sync.md",title:"DB-sync Team Update",description:"High level summary",date:"2023-06-08T00:00:00.000Z",formattedDate:"June 8, 2023",tags:[{label:"db-sync",permalink:"/cardano-updates/tags/db-sync"}],readingTime:.745,hasTruncateMarker:!1,authors:[{name:"Kostas Dermentzis",title:"Cardano DB-Sync Software Engineer",url:"https://github.com/kderme",imageURL:"https://github.com/kderme.png",key:"kderme"}],frontMatter:{title:"DB-sync Team Update",slug:"2023-06-08-db-sync",authors:"kderme",tags:["db-sync"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-06-09-hydra"},nextItem:{title:"Goedel Team Update",permalink:"/cardano-updates/2023-06-08-goedel"}},u={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("p",null,"We've made progress in all high level objectives"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CIP-1694 integration design"),(0,r.kt)("li",{parentName:"ul"},"UTxO-HD integration proof of concept"),(0,r.kt)("li",{parentName:"ul"},"schema migrations with a focus on speeding up frequent queries is part of release 13.1.1.2"),(0,r.kt)("li",{parentName:"ul"},"A new hire will help us with devx issues.")),(0,r.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We have an initial design for the Conway integration in db-sync"),(0,r.kt)("li",{parentName:"ul"},"The initial UTxO-HD integration resulted in a requested feuture that\nthe consensus team is working on\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-consensus/issues/88"},"#88"),"."),(0,r.kt)("li",{parentName:"ul"},"Added two optional migrations that speed up querying UTxO\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1416"},"#1416")),(0,r.kt)("li",{parentName:"ul"},"Work on improving the above feauture by adding tests and fixing tech debt\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1429"},"#1429"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1419"},"#1419")),(0,r.kt)("li",{parentName:"ul"},"Fixed issue with ada_pots being wrong\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1407/commits/1ad4521a5601e8e98dc06bba2826d6b2f9b4fcf4"},"https://github.com/input-output-hk/cardano-db-sync/pull/1407/commits/1ad4521a5601e8e98dc06bba2826d6b2f9b4fcf4")),(0,r.kt)("li",{parentName:"ul"},"Added a process which fixes in place scripts with wrong CBOR serialisation.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1407/commits/8792f72e2485b320de26c02dacc4d504d377ba17"},"https://github.com/input-output-hk/cardano-db-sync/pull/1407/commits/8792f72e2485b320de26c02dacc4d504d377ba17")),(0,r.kt)("li",{parentName:"ul"},"Prepared a tag ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-db-sync/releases"},(0,r.kt)("inlineCode",{parentName:"a"},"13.1.1.2")),"\nwhich is tested and ready to release. It contains many of the above.")))}d.isMDXComponent=!0}}]);