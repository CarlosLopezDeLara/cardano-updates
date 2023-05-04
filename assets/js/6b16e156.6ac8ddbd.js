"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[2650],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,h=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(h,l(l({ref:t},p),{},{components:r})):n.createElement(h,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2133:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"DB-sync Team Update",slug:"2023-05-01-db-sync",authors:"kderme",tags:["db-sync"],hide_table_of_contents:!1},l=void 0,i={permalink:"/cardano-updates/2023-05-01-db-sync",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-05-01-db-sync.md",source:"@site/blog/2023-05-01-db-sync.md",title:"DB-sync Team Update",description:"High level summary",date:"2023-05-01T00:00:00.000Z",formattedDate:"May 1, 2023",tags:[{label:"db-sync",permalink:"/cardano-updates/tags/db-sync"}],readingTime:.515,hasTruncateMarker:!1,authors:[{name:"Kostas Dermentzis",title:"Cardano DB-Sync Software Engineer",url:"https://github.com/kderme",imageURL:"https://github.com/kderme.png",key:"kderme"}],frontMatter:{title:"DB-sync Team Update",slug:"2023-05-01-db-sync",authors:"kderme",tags:["db-sync"],hide_table_of_contents:!1},prevItem:{title:"Performance & tracing update",permalink:"/cardano-updates/2023-05-03-performance-and-tracing"},nextItem:{title:"Crypto Team Update",permalink:"/cardano-updates/2023-04-28-crypto"}},u={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2}],p={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prepared a schema change which is expected to speed up queries and help clients\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1389"},"#1389"),"."),(0,a.kt)("li",{parentName:"ul"},"Ran a big number of benchmarks on the above to evaluate if this change is reasonable."),(0,a.kt)("li",{parentName:"ul"},"Performance optimization related to rewards\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1382"},"#1382")),(0,a.kt)("li",{parentName:"ul"},"Using the cache in more places to reduce recourses usage\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1380"},"#1380")),(0,a.kt)("li",{parentName:"ul"},"Evaluated risks related to UTXO-HD integration"),(0,a.kt)("li",{parentName:"ul"},"Worked on a feauture request to split the ",(0,a.kt)("inlineCode",{parentName:"li"},"tx_out")," to an address table\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1396"},"#1396")),(0,a.kt)("li",{parentName:"ul"},"Worked on another feauture request to prune the consumed entries from the ",(0,a.kt)("inlineCode",{parentName:"li"},"tx_out")," table\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1398"},"#1398")),(0,a.kt)("li",{parentName:"ul"},"Prepared for CIP-1694 integration")))}s.isMDXComponent=!0}}]);