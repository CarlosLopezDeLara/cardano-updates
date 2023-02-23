"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[9773],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(r),c=a,d=h["".concat(p,".").concat(c)]||h[c]||m[c]||n;return r?i.createElement(d,o(o({ref:t},u),{},{components:r})):i.createElement(d,o({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<n;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7358:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var i=r(7462),a=(r(7294),r(3905));const n={title:"Mithril Team Update",slug:"2023-02-23-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2023-02-23-mithril",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-02-23-mithril.md",source:"@site/blog/2023-02-23-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2023-02-23T00:00:00.000Z",formattedDate:"February 23, 2023",tags:[{label:"mithril",permalink:"/cardano-updates/tags/mithril"}],readingTime:1.47,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2023-02-23-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},nextItem:{title:"Performance & tracing update",permalink:"/cardano-updates/2023-02-23-performance-and-tracing"}},p={authorsImageUrls:[void 0]},s=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],u={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,a.kt)("p",null,"The Mithril team released a new ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/mithril/releases/tag/2306.0"},(0,a.kt)("inlineCode",{parentName:"a"},"2306.0"))," distribution that implements minor fixes and updates and completes the wiring of the era activation markers reader into the signer and aggregator nodes. They also designed an event store in the aggregator and completed its implementation as a monitoring solution to provide figures for deployment rates of versions on signer nodes before activating an era switch. Additionally, the team created a dedicated command on their nodes\u2019 CLI that allows generating and signing an era marker\u2019s payload to be stored on the Cardano chain, as well as creating dynamic cases for the end-to-end tests they run on the CI."),(0,a.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Released the new distribution ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/releases/tag/2306.0"},(0,a.kt)("inlineCode",{parentName:"a"},"2306.0"))),(0,a.kt)("li",{parentName:"ul"},"Completed the epic that implements signer versions deployment monitoring ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/718"},"#718"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Completed the implementation an event producer/consumer via channel ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/738"},"#738")),(0,a.kt)("li",{parentName:"ul"},"Completed the creation of a database and its configuration to save the events on the consumer side ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/740"},"#740")),(0,a.kt)("li",{parentName:"ul"},"Completed the creation of events and sending them on the channel on the producer side ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/741"},"#741")),(0,a.kt)("li",{parentName:"ul"},"Completed the creation of the signer registration event ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/742"},"#742")),(0,a.kt)("li",{parentName:"ul"},"Completed the creation a query to extract the node versions stakes distribution ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/743"},"#743")))),(0,a.kt)("li",{parentName:"ul"},"Worked on the epic that implements eras behavior switch ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/707"},"#707"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Completed the loading of era reader adapters from config in the signer and the aggregator ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/732"},"#732")),(0,a.kt)("li",{parentName:"ul"},"Completed the implementation of an era cli command in the aggregator ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/755"},"#755")),(0,a.kt)("li",{parentName:"ul"},"Completed the implementation of a dynamic matrix of cases in CI end to end tests ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/760"},"#760")))),(0,a.kt)("li",{parentName:"ul"},"Fixed some bugs:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Fixed the unsupported ",(0,a.kt)("inlineCode",{parentName:"li"},"unixepoch()")," function ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/757"},"#757")),(0,a.kt)("li",{parentName:"ul"},"Fixed the problem that prevented some signers from signing on the ",(0,a.kt)("inlineCode",{parentName:"li"},"testing-preview")," network ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/730"},"#730")),(0,a.kt)("li",{parentName:"ul"},"Update SQLite version to ",(0,a.kt)("inlineCode",{parentName:"li"},"3.40")," in aggregator infrastructure ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/765"},"#765"))))))}m.isMDXComponent=!0}}]);