"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[2070],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var h=a.createContext({}),p=function(e){var t=a.useContext(h),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(h.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,h=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),c=i,d=m["".concat(h,".").concat(c)]||m[c]||s[c]||n;return r?a.createElement(d,o(o({ref:t},u),{},{components:r})):a.createElement(d,o({ref:t},u))}));function c(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=m;var l={};for(var h in t)hasOwnProperty.call(t,h)&&(l[h]=t[h]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3729:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>s,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=r(7462),i=(r(7294),r(3905));const n={title:"Mithril Team Update",slug:"2023-03-09-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2023-03-09-mithril",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-03-09-mithril.md",source:"@site/blog/2023-03-09-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2023-03-09T00:00:00.000Z",formattedDate:"March 9, 2023",tags:[{label:"mithril",permalink:"/cardano-updates/tags/mithril"}],readingTime:1.42,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2023-03-09-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},nextItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2023-03-08-consensus"}},h={authorsImageUrls:[void 0]},p=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,i.kt)("p",null,"The Mithril team worked on deploying the era activation mechanism to their test networks and preparing the upgrade procedure to be implemented on the signer nodes run by the SPOs. They also refactored the state machines of the aggregator and signer nodes so that they can better handle critical errors, which lead to node panic, from recoverable errors. Additionally, the team continued the deployment of a new test network that runs on the Cardano ",(0,i.kt)("inlineCode",{parentName:"p"},"mainnet")," and computes the stake distribution with the optimized unreleased Cardano CLI command."),(0,i.kt)("p",null,"Finally, they have designed the certification of generic types of data by a Mithril network and they have started implementing its first phase. Also they fixed a bug that made the client Docker image crash at startup."),(0,i.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Worked on the epic that implements eras behavior switch ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/707"},"#707"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Completed the deployment of the era behavior switch to the test networks ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/752"},"#752")),(0,i.kt)("li",{parentName:"ul"},"Completed the enhancement of datum generation for era markers ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/786"},"#786")),(0,i.kt)("li",{parentName:"ul"},"Worked on handling the API version with an era switch ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/727"},"#727")))),(0,i.kt)("li",{parentName:"ul"},"Worked on the epic that implements a relational store in the aggregator ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/779"},"#779"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Worked on the migration/adaptation of the ",(0,i.kt)("inlineCode",{parentName:"li"},"stake_pool")," table ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/787"},"#787")))),(0,i.kt)("li",{parentName:"ul"},"Completed the refactoring of errors in the signer and aggregator state machines ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/665"},"#665")),(0,i.kt)("li",{parentName:"ul"},"Worked on testing Mithril with a ",(0,i.kt)("inlineCode",{parentName:"li"},"mainnet")," Cardano network ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/777"},"#777")),(0,i.kt)("li",{parentName:"ul"},"Worked on fixing bugs with the Docker client image:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Fixed a bug that made the Docker client container crash at startup ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/769"},"#769")),(0,i.kt)("li",{parentName:"ul"},"Fixed a bug that prevented the restoration of a snapshot with a Docker client ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/791"},"#791")),(0,i.kt)("li",{parentName:"ul"},"Worked on testing the Docker client in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Mithril Client multi-platform test")," workflow ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/794"},"#794"))))))}s.isMDXComponent=!0}}]);