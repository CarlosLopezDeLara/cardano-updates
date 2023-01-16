"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[2578],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,d=c["".concat(s,".").concat(m)]||c[m]||h[m]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1895:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={title:"Mithril Team Update",slug:"2023-01-12-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2023-01-12-mithril",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-01-12-mithril.md",source:"@site/blog/2023-01-12-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2023-01-12T00:00:00.000Z",formattedDate:"January 12, 2023",tags:[{label:"mithril",permalink:"/cardano-updates/tags/mithril"}],readingTime:1.165,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2023-01-12-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"System Test Team Update",permalink:"/cardano-updates/2023-01-13-system-test"},nextItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2023-01-11-consensus"}},s={authorsImageUrls:[void 0]},p=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],u={toc:p};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,a.kt)("p",null,"The Mithril team has been designing a mechanism for handling seamless updates of the Mithril networks in case of breaking-changes that require synchronous update of the signer nodes. This design has been formalized in an ",(0,a.kt)("a",{parentName:"p",href:"https://mithril.network/doc/adr/4"},"ADR"),". They have been working on an implementation of a proof of concept to rely on an on-chain transaction to synchronously trigger the version switch of all the signer nodes. They have also worked on implementing prototype solutions to minimize the use of breaking changes where soft updates are possible."),(0,a.kt)("p",null,"Finally, they have worked on upgrading the ",(0,a.kt)("inlineCode",{parentName:"p"},"devnet")," and fixing some flakiness in the end to end tests of the CI."),(0,a.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implemented the redaction of an ADR for handling graceful updates of the Mithril Network ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/671"},"#671")),(0,a.kt)("li",{parentName:"ul"},"Worked on a proof of concept to handle backward compatibilty of exchanged messages with ",(0,a.kt)("inlineCode",{parentName:"li"},"protobuf")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/677"},"#677")),(0,a.kt)("li",{parentName:"ul"},"Worked on a proof of concept to handle backward compatibilty of exchanged messages with ",(0,a.kt)("inlineCode",{parentName:"li"},"avro")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/678"},"#678")),(0,a.kt)("li",{parentName:"ul"},"Worked on a proof of concept for reading/writing era activation markers with a Cardano chain transaction ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/672"},"#672")),(0,a.kt)("li",{parentName:"ul"},"Worked on upgrading the Cardano node of the Mithril ",(0,a.kt)("inlineCode",{parentName:"li"},"devnet"),", as well as fixing flakiness of the CI ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/523"},"#523")),(0,a.kt)("li",{parentName:"ul"},"Prepared and tested the new ",(0,a.kt)("inlineCode",{parentName:"li"},"2302")," distribution pre-release ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/releases/tag/2302.0-prerelease"},"2302.0-prerelease")),(0,a.kt)("li",{parentName:"ul"},"Updated the documentation for SPO to build a signer node in order to better reflect the new release process ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/681"},"#681"))))}h.isMDXComponent=!0}}]);