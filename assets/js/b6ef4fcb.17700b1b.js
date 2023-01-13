"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[3516],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(a),u=n,m=c["".concat(d,".").concat(u)]||c[u]||h[u]||o;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3340:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={title:"Hydra Team Update",slug:"2022-12-16-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2022-12-16-hydra",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-12-16-hydra.md",source:"@site/blog/2022-12-16-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2022-12-16T00:00:00.000Z",formattedDate:"December 16, 2022",tags:[{label:"hydra",permalink:"/cardano-updates/tags/hydra"}],readingTime:1.27,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2022-12-16-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/cardano-updates/2023-01-05-ledger"},nextItem:{title:"Mithril Team Update",permalink:"/cardano-updates/2022-12-15-mithril"}},d={authorsImageUrls:[void 0]},s=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],p={toc:s};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team kicked off a new project together with Catalyst, the Cardano Foundation and researchers from IO: a proof of concept for voting on Hydra. The concluded work on validating the Head protocol using model-based testing and formulated next steps, fixed the transaction cost benchmark reporting on ",(0,n.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/benchmarks/transaction-cost/"},"the website")," and reduced the cost for commit transactions by ~30% with the help of reference scripts."),(0,n.kt)("p",null,"The year is coming to an end and velocity will slow down a bit while the team focuses on wrapping up loose ends. The updates here will pause until January 2023."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Kicked-off Hydra Voting project with Catalyst, CF, and IO Research."),(0,n.kt)("li",{parentName:"ul"},"Reduce commit transaction costs by ~30% with reference scripts."),(0,n.kt)("li",{parentName:"ul"},"Prepared an RFP for external audit of the Hydra Head solution."),(0,n.kt)("li",{parentName:"ul"},"Fixed transaction cost benchmarks for abort tx ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/631"},"#631"),"."),(0,n.kt)("li",{parentName:"ul"},"Recorded decision to use model-based testing (",(0,n.kt)("a",{parentName:"li",href:"https://hydra.family/head-protocol/adr/22/"},"ADR22"),") and improved Model ",(0,n.kt)("a",{parentName:"li",href:"https://hydra.family/head-protocol/haddock/hydra-node/tests/Hydra-Model.html"},"documentation"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Concluding the first increment on ","\u201c","Validate coordinated Head protocol","\u201d"," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/194"},"#194"),"."),(0,n.kt)("li",{parentName:"ul"},"Formulated next step / follow-up on testing the Soundness property of our protocol ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/656"},"#656"),"."))),(0,n.kt)("li",{parentName:"ul"},"Switched to using nix flakes for development setup and CI build ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/646"},"#646"),".")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Push ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/blob/7e532bd1c8a840a8155cf4b0858b982308dfc3f0/docs/adr/CloseTx-validity-bounds-and-deadline-calculation-DoS.md"},"ADR21")," & tx validity gap over the finish line (smoke tests missing)."),(0,n.kt)("li",{parentName:"ul"},"Integrate the ",(0,n.kt)("inlineCode",{parentName:"li"},"hydra-tutorial"),"."),(0,n.kt)("li",{parentName:"ul"},"Have a LaTeX write-up of the HeadV1 (Coordinated Hydra Head) spec."),(0,n.kt)("li",{parentName:"ul"},"Close & recap on the year with another monthly report (+ blog post).")))}h.isMDXComponent=!0}}]);