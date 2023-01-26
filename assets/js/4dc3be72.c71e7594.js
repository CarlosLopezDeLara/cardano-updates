"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[6074],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>c});var r=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(i),c=a,d=m["".concat(p,".").concat(c)]||m[c]||h[c]||n;return i?r.createElement(d,o(o({ref:t},u),{},{components:i})):r.createElement(d,o({ref:t},u))}));function c(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<n;s++)o[s]=i[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},5804:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=i(7462),a=(i(7294),i(3905));const n={title:"Mithril Team Update",slug:"2023-01-26-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2023-01-26-mithril",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-01-26-mithril.md",source:"@site/blog/2023-01-26-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2023-01-26T00:00:00.000Z",formattedDate:"January 26, 2023",tags:[{label:"mithril",permalink:"/cardano-updates/tags/mithril"}],readingTime:1.175,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2023-01-26-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"SRE Team Update",permalink:"/cardano-updates/2022-01-20-sre"},nextItem:{title:"Consensus Team Update",permalink:"/cardano-updates/2023-01-25-consensus"}},p={authorsImageUrls:[void 0]},s=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],u={toc:s};function h(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,a.kt)("p",null,"The Mithril team released a new ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/mithril/releases/tag/2302.0"},(0,a.kt)("inlineCode",{parentName:"a"},"2302.0"))," distribution that activates the optimization of the snapshot digest computation on the signer and aggregator nodes. They have implemented a backward/forward compatibility mechanism for handling seamless soft updates of the Mithril networks without using synchronous updates when possible. The team also worked on the proof of concept to rely on an on-chain transaction to synchronously trigger the era switch of all the signer and aggregator nodes."),(0,a.kt)("p",null,"Finally, they finished upgrading the devnet, fixed the flakiness issues in the end-to-end tests of the CI, and upgraded the SPO documentation to set up a Mithril signer node."),(0,a.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Released the new distribution ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/releases/tag/2302.0"},(0,a.kt)("inlineCode",{parentName:"a"},"2302.0"))),(0,a.kt)("li",{parentName:"ul"},"Implemented a backward/forward compatibility mechanism for API messages ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/688"},"#688"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Implement the mechanism for the signer registration ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/689"},"#689")),(0,a.kt)("li",{parentName:"ul"},"Implement the mechanism for the signature registration ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/693"},"#693")),(0,a.kt)("li",{parentName:"ul"},"Implement the mechanism for epoch settings ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/695"},"#695")),(0,a.kt)("li",{parentName:"ul"},"Implement the mechanism for certificate pending ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/696"},"#696")),(0,a.kt)("li",{parentName:"ul"},"Implement the mechanism for certificate ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/697"},"#697")),(0,a.kt)("li",{parentName:"ul"},"Implement the mechanism for snapshots list ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/698"},"#698")),(0,a.kt)("li",{parentName:"ul"},"Implement the mechanism for snapshot ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/699"},"#699")),(0,a.kt)("li",{parentName:"ul"},"Update enforcement of API version with Semver ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/705"},"#705")))),(0,a.kt)("li",{parentName:"ul"},"Completed the PoC implementation of backward compatibility with ",(0,a.kt)("inlineCode",{parentName:"li"},"protobuf")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/677"},"#677")),(0,a.kt)("li",{parentName:"ul"},"Completed the PoC implementation of backward compatibility with ",(0,a.kt)("inlineCode",{parentName:"li"},"avro")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/678"},"#678")),(0,a.kt)("li",{parentName:"ul"},"Completed the PoC to Read/Write transaction on chain for Era activations ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/672"},"#672")),(0,a.kt)("li",{parentName:"ul"},"Completed the upgrade Cardano devnet to 1.35.4 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/523"},"#523"))))}h.isMDXComponent=!0}}]);