"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[34891],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:n,l[1]=p;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},73908:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={title:"SRE Team Update",slug:"2023-09-01-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},l=void 0,p={permalink:"/cardano-updates/2023-09-01-sre",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-09-01-sre.md",source:"@site/blog/2023-09-01-sre.md",title:"SRE Team Update",description:"High level summary",date:"2023-09-01T00:00:00.000Z",formattedDate:"September 1, 2023",tags:[{label:"sre",permalink:"/cardano-updates/tags/sre"}],readingTime:1.075,hasTruncateMarker:!1,authors:[{name:"John Lotoski",title:"Service Reliability Engineer",url:"https://github.com/johnalotoski",imageURL:"https://github.com/johnalotoski.png",key:"johnalotoski"}],frontMatter:{title:"SRE Team Update",slug:"2023-09-01-sre",authors:"johnalotoski",tags:["sre"],hide_table_of_contents:!1},prevItem:{title:"Network Team Update",permalink:"/cardano-updates/2023-09-01-network"},nextItem:{title:"Mithril Team Update",permalink:"/cardano-updates/2023-08-28-mithril"}},i={authorsImageUrls:[void 0]},s=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2},{value:"Capkgs",id:"capkgs",level:3},{value:"Cardano-ops",id:"cardano-ops",level:3},{value:"Cardano-parts",id:"cardano-parts",level:3},{value:"Cardano-perf",id:"cardano-perf",level:3},{value:"Cardano-world",id:"cardano-world",level:3},{value:"Sanchonet-demo",id:"sanchonet-demo",level:3}],u={toc:s},d="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"The SRE team continues work on cardano environment improvements and general environment maintenance."),(0,n.kt)("p",null,"Some notable recent updates or improvements include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Work on cardano-parts repo continues and was utilized by the sanchonet-demo repository for demonstration purposes"),(0,n.kt)("li",{parentName:"ul"},"Work on a new ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/capkgs"},"capkgs"),' repository started -- "Content Addressed Packages"',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This repository provides common Cardano release and pre-release binaries in a pure content addressed nix package type via flake output"),(0,n.kt)("li",{parentName:"ul"},"These packages don't have the associated IFD, long eval times and large source dependencies that the originating source repositories often do"),(0,n.kt)("li",{parentName:"ul"},"Consumers of such packages, such as devShells or nixos machines, can benefit from the improved performance this offers")))),(0,n.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,n.kt)("h3",{id:"capkgs"},"Capkgs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Content addressed packages -- new repo: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/capkgs"},"capkgs"))),(0,n.kt)("h3",{id:"cardano-ops"},"Cardano-ops"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cardano p2p relay updates, dbSync snapshots server update, monitoring adjustments: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-ops/compare/5a0eabe...03e8e42"},"cardano-ops-compare"))),(0,n.kt)("h3",{id:"cardano-parts"},"Cardano-parts"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Flake devShell module improvements: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/pull/4"},"cardano-parts-pull-4")),(0,n.kt)("li",{parentName:"ul"},"Cardano-world entrypoints migrated to flake parts module: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/pull/5"},"cardano-parts-pull-5")),(0,n.kt)("li",{parentName:"ul"},"Cardano-world jobs migrated to flake parts module: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/pull/6"},"cardano-parts-pull-6")),(0,n.kt)("li",{parentName:"ul"},"Drep delegation fixups: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/pull/7"},"cardano-parts-pull-7")),(0,n.kt)("li",{parentName:"ul"},"Utilize content addressed binaries, WIP: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/pull/8"},"cardano-parts-pull-8")),(0,n.kt)("li",{parentName:"ul"},"Cardano-node module preparation branch, WIP: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-parts/compare/capkgs...node-module"},"cardano-parts-compare"))),(0,n.kt)("h3",{id:"cardano-perf"},"Cardano-perf"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Availability zone pinning and explorer mods: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-perf/compare/d3a8644...9f9917c"},"cardano-perf-compare"))),(0,n.kt)("h3",{id:"cardano-world"},"Cardano-world"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Remove performance nodes for migration to cardano-perf: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-world/commit/306ef6c6dd6c09d9b90b9768f2b84a1d05cded26"},"cardano-world-commit"))),(0,n.kt)("h3",{id:"sanchonet-demo"},"Sanchonet-demo"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sanchonet demonstration repository: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/sanchonet-demo"},"sanchonet-demo"))))}c.isMDXComponent=!0}}]);