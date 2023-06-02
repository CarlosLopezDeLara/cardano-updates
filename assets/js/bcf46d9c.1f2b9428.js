"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[31617],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),h=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=h(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=h(a),c=n,m=d["".concat(p,".").concat(c)]||d[c]||s[c]||i;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var h=2;h<i;h++)o[h]=a[h];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},48880:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var r=a(87462),n=(a(67294),a(3905));const i={title:"Hydra Team Update",slug:"2023-01-20-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},o=void 0,l={permalink:"/cardano-updates/2023-01-20-hydra",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-01-20-hydra.md",source:"@site/blog/2023-01-20-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-01-20T00:00:00.000Z",formattedDate:"January 20, 2023",tags:[{label:"hydra",permalink:"/cardano-updates/tags/hydra"}],readingTime:1.13,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Hydra Team Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"Hydra Team Update",slug:"2023-01-20-hydra",authors:"ch1bo",tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"Crypto Team Update",permalink:"/cardano-updates/2023-01-20-crypto"},nextItem:{title:"Network Team Update",permalink:"/cardano-updates/2023-01-20-network"}},p={authorsImageUrls:[void 0]},h=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],u={toc:h};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team has been focusing on the write-up of the Hydra HeadV1\nspecification. Of which a first version has been aggregated and is currently\nunder review. They aligned the on-chain scripts of reimbursing funds on abort\nlike defined in the specification, improved the mutation test framework to have\nmore control when testing plutus scripts. The added HeadId in the API and the\nTUI example client make ",(0,n.kt)("inlineCode",{parentName:"p"},"hydra-node")," easier to use and a first experiment of a\nHydra Head explorer was showing the utility of this - see what Heads exist on\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"preview")," network ",(0,n.kt)("a",{parentName:"p",href:"http://explorer.hydra.family"},"here"),"."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"HeadId to API and display in the TUI ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/678"},"#678")),(0,n.kt)("li",{parentName:"ul"},"Experiment of creating a hydra explorer, first result hosted ",(0,n.kt)("a",{parentName:"li",href:"http://explorer.hydra.family"},"here")),(0,n.kt)("li",{parentName:"ul"},"Improved mutation framework allowing to fail for the right reason ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/679"},"#679")),(0,n.kt)("li",{parentName:"ul"},"Correctly reimburse funds in abort (matching the spec) ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/670"},"#670")),(0,n.kt)("li",{parentName:"ul"},"Finished a first write-up of the Hydra HeadV1 spec: ",(0,n.kt)("a",{parentName:"li",href:"https://www.overleaf.com/read/bbqzmptcxryj"},"Read it on overleaf")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/blob/master/SUPPORT.md"},"Communication channels")," for feedback)")),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Monthly review meeting with a broader audience"),(0,n.kt)("li",{parentName:"ul"},"Groom & plan actions required for a maintainable Head explorer"),(0,n.kt)("li",{parentName:"ul"},"Break \u201calign gaps\u201d feature into smaller chunks (at least on- /off-chain) and groom it"),(0,n.kt)("li",{parentName:"ul"},"Review the spec & discuss individual aborts with researchers (a bigger open question)")))}s.isMDXComponent=!0}}]);