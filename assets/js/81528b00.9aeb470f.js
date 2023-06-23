"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[50471],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(r),c=n,d=h["".concat(s,".").concat(c)]||h[c]||m[c]||a;return r?i.createElement(d,o(o({ref:t},u),{},{components:r})):i.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},67938:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=r(87462),n=(r(67294),r(3905));const a={title:"Mithril Team Update",slug:"2022-12-01-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2022-12-01-mithril",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-12-01-mithril.md",source:"@site/blog/2022-12-01-mithril.md",title:"Mithril Team Update",description:"High level overview",date:"2022-12-01T00:00:00.000Z",formattedDate:"December 1, 2022",tags:[{label:"mithril",permalink:"/cardano-updates/tags/mithril"}],readingTime:1.04,hasTruncateMarker:!1,authors:[{name:"Jean-Philippe Raynaud",title:"Mithril Tech Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"Mithril Team Update",slug:"2022-12-01-mithril",authors:"jpraynaud",tags:["mithril"],hide_table_of_contents:!1},prevItem:{title:"DB sync Team Update",permalink:"/cardano-updates/2022-12-01-db-sync"},nextItem:{title:"System Test Team Update",permalink:"/cardano-updates/2022-12-01-system-test"}},s={authorsImageUrls:[void 0]},p=[{value:"High level overview",id:"high-level-overview",level:2},{value:"Low level overview",id:"low-level-overview",level:2}],u={toc:p},h="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-overview"},"High level overview"),(0,n.kt)("p",null,"The Mithril team worked on finalizing their release process by adding new features: publishing their cryptographic library to the Rust community, adding node versions manifest in the release notes, and signing the binaries embedded in the distributions. They deprecated the declarative signer node registration that will be decommissioned in a few weeks. The team also completed the automatic store upgrade process for the signer and aggregator nodes. "),(0,n.kt)("p",null,"Finally, the team continued working on the redaction of the CIP that will allow the decentralization of Mithril by using the Cardano networking layer."),(0,n.kt)("h2",{id:"low-level-overview"},"Low level overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Implemented custom Mithril SPOs on testing/pre-release networks ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/563"},"#563")),(0,n.kt)("li",{parentName:"ul"},"Deprecated Signer Declarative Pool Id registration mode ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/585"},"#585")),(0,n.kt)("li",{parentName:"ul"},"Completed the second stage of the store automatic migration process ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/600"},"#600")),(0,n.kt)("li",{parentName:"ul"},"Completed the deployment pipelines to crates.io registry ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/588"},"#588")),(0,n.kt)("li",{parentName:"ul"},"Completed automatic generation of nodes/libraries versions manifest in releases notes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/599"},"#599")),(0,n.kt)("li",{parentName:"ul"},"Completed CI/CD handling of PR from forks ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/597"},"#597")),(0,n.kt)("li",{parentName:"ul"},"Worked on the CIP design for Mithril piggybacked on the Cardano network layer ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/586"},"#586")),(0,n.kt)("li",{parentName:"ul"},"Worked on signing the artifacts released in the distributions by the CI/CD ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/587"},"#587")),(0,n.kt)("li",{parentName:"ul"},"Worked on multi-platforms end to end test ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/601"},"#601")),(0,n.kt)("li",{parentName:"ul"},"Worked on the refactorizaton of the aggregator multi-signer engine ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/mithril/issues/398"},"#398"))))}m.isMDXComponent=!0}}]);