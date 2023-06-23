"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[1338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"DB-sync Team Update",slug:"2022-12-14-db-sync",authors:"kderme",tags:["db-sync"],hide_table_of_contents:!1},s=void 0,i={permalink:"/cardano-updates/2022-12-14-db-sync",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-12-14-db-sync.md",source:"@site/blog/2022-12-14-db-sync.md",title:"DB-sync Team Update",description:"High level summary",date:"2022-12-14T00:00:00.000Z",formattedDate:"December 14, 2022",tags:[{label:"db-sync",permalink:"/cardano-updates/tags/db-sync"}],readingTime:.73,hasTruncateMarker:!1,authors:[{name:"Kostas Dermentzis",title:"Cardano DB-Sync Software Engineer",url:"https://github.com/kderme",imageURL:"https://github.com/kderme.png",key:"kderme"}],frontMatter:{title:"DB-sync Team Update",slug:"2022-12-14-db-sync",authors:"kderme",tags:["db-sync"],hide_table_of_contents:!1},prevItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2022-12-14-consensus"},nextItem:{title:"Node API & CLI Team Update",permalink:"/cardano-updates/2022-12-14-node-cli-api"}},l={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"The DBSync team continued testing release ",(0,a.kt)("inlineCode",{parentName:"p"},"13.1.0.0"),". The QA team has reported that no issues have\nbeen found. The DBSync team also worked on cherry-picks back to master and on fixing bugs."),(0,a.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Release is cherry-picked back to master, which uses the new rollback mechanism which uses\nreverse indexes, same as the release\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1320"},"#1320"),"\nThis also fixes a bug number of issues on master."),(0,a.kt)("li",{parentName:"ul"},"Depenencies upgrade and CHaP integration\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1324"},"#1324")),(0,a.kt)("li",{parentName:"ul"},"AdaPots fix ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1323"},"#1323"),". This\nfixes an issue where the per epoch AdaPots didn't match the epoch boundary, but\nthey also included changes from the first block of the epoch."),(0,a.kt)("li",{parentName:"ul"},"Deposits Event fix ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ledger/pull/3212"},"#3212"),". This pr\nadjusts the Deposits ledger events, so that it can be better used by db-sync. This can reduce the\nnumber of queries that db-sync does during syncing an make syncing faster.")))}d.isMDXComponent=!0}}]);