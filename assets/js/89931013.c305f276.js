"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[173],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>d});var r=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(i),d=a,c=m["".concat(p,".").concat(d)]||m[d]||h[d]||n;return i?r.createElement(c,o(o({ref:t},s),{},{components:i})):r.createElement(c,o({ref:t},s))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<n;u++)o[u]=i[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},34101:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var r=i(87462),a=(i(67294),i(3905));const n={title:"Mithril Team Update",slug:"2023-04-06-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2023-04-06-mithril",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-04-06-mithril.md",source:"@site/blog/2023-04-06-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2023-04-06T00:00:00.000Z",formattedDate:"April 6, 2023",tags:[{label:"mithril",permalink:"/cardano-updates/tags/mithril"}],readingTime:1.075,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2023-04-06-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-04-07-hydra"},nextItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2023-04-05-consensus"}},p={authorsImageUrls:[void 0]},u=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],s={toc:u};function h(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,a.kt)("p",null,"The Mithril team released a new ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/mithril/releases/tag/2313.0"},(0,a.kt)("inlineCode",{parentName:"a"},"2313.0"))," distribution that implements minor improvements and bug fixes. They continued implementing the migration of the aggregator stores to a relational design. They finished adaptating and migrating the certificate, epoch settings, signed entity type, signer registration and open message stores. Additionally, they completed the refactoring of the dependency injector of the aggregator and simplified its multi-signer in order for it to sign multiple concurrent messages."),(0,a.kt)("p",null,"Finally, the team has worked on designing the new architecture of the network to support signing multiple types of data and upgraded the version of the Cardano node used in the Mithril testnets and devnet to ",(0,a.kt)("inlineCode",{parentName:"p"},"1.35.6"),"."),(0,a.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Released the new distribution ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/releases/tag/2313.0"},(0,a.kt)("inlineCode",{parentName:"a"},"2313.0"))),(0,a.kt)("li",{parentName:"ul"},"Worked on the epic that implements a relational store in the aggregator ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/779"},"#779"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Completed the migration/adaptation of the ",(0,a.kt)("inlineCode",{parentName:"li"},"epoch_settings")," table ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/813"},"#813")),(0,a.kt)("li",{parentName:"ul"},"Completed the migration/adaptation of the ",(0,a.kt)("inlineCode",{parentName:"li"},"signed-entity-type")," table ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/815"},"#815")),(0,a.kt)("li",{parentName:"ul"},"Completed the migration/adaptation of the ",(0,a.kt)("inlineCode",{parentName:"li"},"certificate")," table ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/817"},"#817")),(0,a.kt)("li",{parentName:"ul"},"Completed the migration/adaptation of the ",(0,a.kt)("inlineCode",{parentName:"li"},"open_message")," table ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/827"},"#827")),(0,a.kt)("li",{parentName:"ul"},"Completed the migration/adaptation of the ",(0,a.kt)("inlineCode",{parentName:"li"},"signer_registration")," table ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/828"},"#828")))),(0,a.kt)("li",{parentName:"ul"},"Completed the refactoring of the dependency injection of the aggregator ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/823"},"#823")),(0,a.kt)("li",{parentName:"ul"},"Completed the cleanup of the multi-signer of the aggregator ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/824"},"#824")),(0,a.kt)("li",{parentName:"ul"},"Completed the upgrade of the Cardano node to ",(0,a.kt)("inlineCode",{parentName:"li"},"1.35.6")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/843"},"#843"))))}h.isMDXComponent=!0}}]);