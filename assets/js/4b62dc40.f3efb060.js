"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[10335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"DB-sync Team Update",slug:"2023-02-21-db-sync",authors:"kderme",tags:["db-sync"],hide_table_of_contents:!1},i=void 0,s={permalink:"/cardano-updates/2023-02-21-db-sync",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-02-21-db-sync.md",source:"@site/blog/2023-02-21-db-sync.md",title:"DB-sync Team Update",description:"High level summary",date:"2023-02-21T00:00:00.000Z",formattedDate:"February 21, 2023",tags:[{label:"db-sync",permalink:"/cardano-updates/tags/db-sync"}],readingTime:.75,hasTruncateMarker:!1,authors:[{name:"Kostas Dermentzis",title:"Cardano DB-Sync Software Engineer",url:"https://github.com/kderme",imageURL:"https://github.com/kderme.png",key:"kderme"}],frontMatter:{title:"DB-sync Team Update",slug:"2023-02-21-db-sync",authors:"kderme",tags:["db-sync"],hide_table_of_contents:!1},prevItem:{title:"Node API & CLI Team Update",permalink:"/cardano-updates/2023-02-22-node-cli-api"},nextItem:{title:"Crypto Team Update",permalink:"/cardano-updates/2023-02-17-crypto"}},l={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Low level summary",id:"low-level-summary",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"The db-sync team created a new tag ",(0,a.kt)("inlineCode",{parentName:"p"},"13.1.0.2")," which is ready to release.\nWe also investigated and had the first working UTxO-HD integration which is one\nof the potential future risks for db-sync."),(0,a.kt)("h2",{id:"low-level-summary"},"Low level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Integrated the UTxO-HD feauture branch in ",(0,a.kt)("inlineCode",{parentName:"li"},"kderme/utxo-hd-1"),". This doesn't\nuse the full on disk storage but keeps things in memory and the plan is to keep\nit this way for the first iteration. The integration still has some performance\nissues which we investigate"),(0,a.kt)("li",{parentName:"ul"},"Created tag ",(0,a.kt)("inlineCode",{parentName:"li"},"13.1.0.2")," which upgrades the dependencies of db-sync"),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue related to errors appearing in SMASH\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1353"},"#1353")),(0,a.kt)("li",{parentName:"ul"},"Continued with ghc-9.2 integration\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1339"},"#1339")),(0,a.kt)("li",{parentName:"ul"},"Worked on an new fixing procedure for\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-db-sync/issues/1348"},"#1348"),".\nWe try to make these procedures work also on older schema version, without the\nneed to migrate to newer schema, which can be very useful for fixing existing\nsnapshots.")))}d.isMDXComponent=!0}}]);