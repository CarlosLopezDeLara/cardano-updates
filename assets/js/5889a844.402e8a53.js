"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[8184],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),h=n,m=c["".concat(p,".").concat(h)]||c[h]||u[h]||o;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9282:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={title:"Hydra Team Update",slug:"2022-10-28-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2022-10-28-hydra",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-10-28-hydra.md",source:"@site/blog/2022-10-28-hydra.md",title:"Hydra Team Update",description:"High level summary",date:"2022-10-28T00:00:00.000Z",formattedDate:"October 28, 2022",tags:[{label:"hydra",permalink:"/cardano-updates/tags/hydra"}],readingTime:.795,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2022-10-28-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/cardano-updates/2022-10-14-ledger"},nextItem:{title:"Network Team Update",permalink:"/cardano-updates/2022-10-28-network"}},p={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],d={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"This week, the hydra team completed several user experience improvements to the\n",(0,n.kt)("inlineCode",{parentName:"p"},"hydra-tui")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"hydra-node"),", and delivered a first version of persisted head\nstates by publishing release version\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra-poc/releases/tag/0.8.0"},(0,n.kt)("inlineCode",{parentName:"a"},"0.8.0")),".\nBesides this, they met with researchers on topic of the HeadV1 specification and\nkicked-off work on the RFP for an external audit of the Hydra Head protocol and implementation."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Completed the UX improvements on the ",(0,n.kt)("inlineCode",{parentName:"li"},"hydra-tui")),(0,n.kt)("li",{parentName:"ul"},"Released version ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/releases/tag/0.8.0"},(0,n.kt)("inlineCode",{parentName:"a"},"0.8.0")),", which delivers a first version of persisted head states"),(0,n.kt)("li",{parentName:"ul"},"Met with researchers on the HeadV1 specification"),(0,n.kt)("li",{parentName:"ul"},"Started work on the RFP for our external audit")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Complete ADR18 implementation and get it merged"),(0,n.kt)("li",{parentName:"ul"},"Start work on event-sourced persistence ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/issues/580"},"#580")),(0,n.kt)("li",{parentName:"ul"},"Have a first plutus script gap closed ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra-poc/issues/452"},"#452")),(0,n.kt)("li",{parentName:"ul"},"Revamp CI to use flakes and build macos artifacts (stretch goal: migrate to cicero for nix builds)")))}u.isMDXComponent=!0}}]);