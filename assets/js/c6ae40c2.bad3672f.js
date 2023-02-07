"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[7693],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(r),c=n,h=m["".concat(u,".").concat(c)]||m[c]||s[c]||l;return r?a.createElement(h,i(i({ref:t},d),{},{components:r})):a.createElement(h,i({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8680:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={title:"SRE Team Update",slug:"2023-01-20-sre",authors:"manveru",tags:["sre"],hide_table_of_contents:!1},i=void 0,o={permalink:"/cardano-updates/2023-01-20-sre",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-01-20-sre.md",source:"@site/blog/2023-01-20-sre.md",title:"SRE Team Update",description:"High level summary",date:"2023-01-20T00:00:00.000Z",formattedDate:"January 20, 2023",tags:[{label:"sre",permalink:"/cardano-updates/tags/sre"}],readingTime:1.13,hasTruncateMarker:!1,authors:[{name:"Michael Fellinger",title:"SRE Team Lead",url:"https://github.com/manveru",imageURL:"https://github.com/manveru.png",key:"manveru"}],frontMatter:{title:"SRE Team Update",slug:"2023-01-20-sre",authors:"manveru",tags:["sre"],hide_table_of_contents:!1},prevItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-01-20-hydra"},nextItem:{title:"Ledger Team Update",permalink:"/cardano-updates/2023-01-19-ledger"}},u={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Lower level summary",id:"lower-level-summary",level:2},{value:"Cicero",id:"cicero",level:3},{value:"Tullia",id:"tullia",level:3},{value:"Bitte",id:"bitte",level:3},{value:"cardano-world",id:"cardano-world",level:3},{value:"bitte-world",id:"bitte-world",level:3},{value:"ci-world",id:"ci-world",level:3}],d={toc:p};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,n.kt)("p",null,"The SRE team continues work on Cicero, Tullia, and Bitte, as well as providing\nsupport for cardano-world."),(0,n.kt)("h2",{id:"lower-level-summary"},"Lower level summary"),(0,n.kt)("h3",{id:"cicero"},"Cicero"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed various race conditions around transformers."),(0,n.kt)("li",{parentName:"ul"},"Brought our CI up to date."),(0,n.kt)("li",{parentName:"ul"},"Migrated to the Nomad exec driver with Nix support for many actions."),(0,n.kt)("li",{parentName:"ul"},"Moved Nix builds to the Nomad clients for much better cache locality."),(0,n.kt)("li",{parentName:"ul"},"Ongoing work on vastly improving the action matching and evaluation speed."),(0,n.kt)("li",{parentName:"ul"})),(0,n.kt)("h3",{id:"tullia"},"Tullia"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Made it easier to support cloning from a PR's fork"),(0,n.kt)("li",{parentName:"ul"},"Update to latest std"),(0,n.kt)("li",{parentName:"ul"},"Add workaround for cgroup issue: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/nomad/issues/12877"},"nomad#12877")),(0,n.kt)("li",{parentName:"ul"},"github preset: add ",(0,n.kt)("inlineCode",{parentName:"li"},"github.ci.remote")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"(read|get)Repository")," functions"),(0,n.kt)("li",{parentName:"ul"},"Fix various issues around CUE handling")),(0,n.kt)("h3",{id:"bitte"},"Bitte"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Upgrade to NixOS 22.11"),(0,n.kt)("li",{parentName:"ul"},"Prototype usage of ",(0,n.kt)("a",{parentName:"li",href:"https://colmena.cli.rs"},"Colmena")," for deploys instead of ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serokell/deploy-rs"},"deploy-rs")),(0,n.kt)("li",{parentName:"ul"},"Finalized work on Equinix Metal support"),(0,n.kt)("li",{parentName:"ul"},"Prototype better secrets management with ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/yaxitech/ragenix"},"ragenix")," instead of ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Mic92/sops-nix"},"sops-nix")),(0,n.kt)("li",{parentName:"ul"},"Improve CI and bring it up to date")),(0,n.kt)("h3",{id:"cardano-world"},"cardano-world"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixd various OOM issues on preview and preprod"),(0,n.kt)("li",{parentName:"ul"},"Rotated KES keys on preview and preprod"),(0,n.kt)("li",{parentName:"ul"},"Optimize mainnet db-sync to cope with higher load"),(0,n.kt)("li",{parentName:"ul"},"Fix an issue where PostgreSQL would fail after a reboot")),(0,n.kt)("h3",{id:"bitte-world"},"bitte-world"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated to NixOS 22.11")),(0,n.kt)("h3",{id:"ci-world"},"ci-world"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated to NixOS 22.11"),(0,n.kt)("li",{parentName:"ul"},"Added Equnix cluster"),(0,n.kt)("li",{parentName:"ul"},"Improve caching of Nix builds")))}s.isMDXComponent=!0}}]);