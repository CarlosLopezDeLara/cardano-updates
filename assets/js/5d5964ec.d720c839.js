"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[53931],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Consensus Team Update",slug:"2023-04-05-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},s=void 0,i={permalink:"/cardano-updates/2023-04-05-consensus",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-04-05-consensus.md",source:"@site/blog/2023-04-05-consensus.md",title:"Consensus Team Update",description:"High level summary",date:"2023-04-05T00:00:00.000Z",formattedDate:"April 5, 2023",tags:[{label:"consensus",permalink:"/cardano-updates/tags/consensus"}],readingTime:.66,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Team Update",slug:"2023-04-05-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},prevItem:{title:"Mithril Team Update",permalink:"/cardano-updates/2023-04-06-mithril"},nextItem:{title:"Node API & CLI Team Update",permalink:"/cardano-updates/2023-04-05-node-cli-api"}},l={authorsImageUrls:[void 0]},c=[{value:"High level summary",id:"high-level-summary",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,a.kt)("p",null,"This week the consensus team finished the UTxO-HD prototype refactoring. We are\nnow working on improving the DB lock mechanism to improve performance. We also\nintroduced several improvements to the file system abstraction and simulation\nlayer (",(0,a.kt)("inlineCode",{parentName:"p"},"fs-sim"),"), which culminated in the release of ",(0,a.kt)("inlineCode",{parentName:"p"},"fs-sim-0.1.0.0")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"fs-api-0.1.0.0")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"CHaP"),"."),(0,a.kt)("p",null,"On the Genesis front we distributed the updated Genesis design document,\nsoliciting feedback from Networking Team and IOG Researchers. We also opened up\na PR for the adversarial leader schedule ",(0,a.kt)("inlineCode",{parentName:"p"},"QuickCheck")," generator, which is being\nreviewed."),(0,a.kt)("p",null,"On the support front, we got a new Consensus version that can use different\nfundamental VRF crypto primitives for Babbage and Conway eras."),(0,a.kt)("p",null,"On the tech debt front we fixed an bug in the followers logic, which was\ndiscovered by our ",(0,a.kt)("inlineCode",{parentName:"p"},"QuickCheck")," property tests."))}d.isMDXComponent=!0}}]);