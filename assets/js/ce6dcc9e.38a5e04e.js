"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[77644],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,s(s({ref:t},l),{},{components:n})):a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},56737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"DB Sync Team Update",slug:"2022-09-19-db-sync",authors:"kderme",tags:["db-sync"],hide_table_of_contents:!1},s=void 0,i={permalink:"/cardano-updates/2022-09-19-db-sync",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-09-19-db-sync.md",source:"@site/blog/2022-09-19-db-sync.md",title:"DB Sync Team Update",description:"DBSync Update",date:"2022-09-19T00:00:00.000Z",formattedDate:"September 19, 2022",tags:[{label:"db-sync",permalink:"/cardano-updates/tags/db-sync"}],readingTime:1.525,hasTruncateMarker:!1,authors:[{name:"Kostas Dermentzis",title:"Cardano DB-Sync Software Engineer",url:"https://github.com/kderme",imageURL:"https://github.com/kderme.png",key:"kderme"}],frontMatter:{title:"DB Sync Team Update",slug:"2022-09-19-db-sync",authors:"kderme",tags:["db-sync"],hide_table_of_contents:!1},prevItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2022-09-20-consensus"},nextItem:{title:"Ledger Team Update",permalink:"/cardano-updates/2022-09-16-ledger"}},p={authorsImageUrls:[void 0]},c=[{value:"DBSync Update",id:"dbsync-update",level:2},{value:"New Tag",id:"new-tag",level:3},{value:"Open source",id:"open-source",level:3},{value:"Progress on tech debt and new features",id:"progress-on-tech-debt-and-new-features",level:3}],l={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"dbsync-update"},"DBSync Update"),(0,r.kt)("h3",{id:"new-tag"},"New Tag"),(0,r.kt)("p",null,"We created a new db-sync tag 13.0.5 which addresses shortcomings of the last\nrelease 13.0.4. It is currently under testing.\nThe Changelog is\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-db-sync/blob/8ad98d48e0068f3768d48e18fdcbe254037cba3b/cardano-db-sync/CHANGELOG.md#1305"},"here")," and in more details:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We fixed fees for tx with phase 2 failure that didn't include a total collateral field.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1248"},"1248"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We fixed an issue that could cause db-sync to crash if a specific rollback occured.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1247"},"1247"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DBSync will now avoid reserialising data, especially Datums, which not only slows down db-sync but\ncould result in the wrong CBOR encoding being inserted.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1217"},"1217"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All the fixes above come with unit tests which validates the fix.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added support for preprod and preview from docker. DBSync no longer needs to include the configs\nfor different networks, these are directly fetched from the cardano world.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1254"},"1254"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We added better support from docker for the new disable options and the overall documentation.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1260"},"1260")))),(0,r.kt)("p",null,"All the above were also backported to the master branch"),(0,r.kt)("h3",{id:"open-source"},"Open source"),(0,r.kt)("p",null,"We made the db-sync ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orgs/input-output-hk/projects/52/views/1"},"board public"),", so\neveryone can have access on the issues we prioritise.\nWe also added new tasks to the board, some of them could be approachable to newcomers or people who\nwant to contribute."),(0,r.kt)("h3",{id:"progress-on-tech-debt-and-new-features"},"Progress on tech debt and new features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1223"},"1223")," was merged, which removes the\nforeign keys from the db schema. This opens the road to a number of optimizations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An additional fix on top of the previous work was added\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1250"},"1250"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An initial version where DBSync does not rollback on restart is done here\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-db-sync/pull/1266"},"1266"),".\nThis allows db-sync to restart much faster, without the need to delete data and reinsert them. In\nthe future it can also facilitate migrations in cases where the ledger snapshots have a breaking\nchange, without the need to resync everything from genesis."))))}u.isMDXComponent=!0}}]);