"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[2818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Network Team Update",slug:"2023-02-17-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},i=void 0,l={permalink:"/cardano-updates/2023-02-17-network",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-02-17-network.md",source:"@site/blog/2023-02-17-network.md",title:"Network Team Update",description:"High level summary",date:"2023-02-17T00:00:00.000Z",formattedDate:"February 17, 2023",tags:[{label:"network",permalink:"/cardano-updates/tags/network"}],readingTime:.865,hasTruncateMarker:!1,authors:[{name:"Marcin Szamotulski",title:"Network Team Lead",url:"https://github.com/coot",imageURL:"https://github.com/coot.png",key:"coot"}],frontMatter:{title:"Network Team Update",slug:"2023-02-17-network",authors:"coot",tags:["network"],hide_table_of_contents:!1},prevItem:{title:"Ledger Team Update",permalink:"/cardano-updates/2023-02-17-ledger"},nextItem:{title:"Hydra Team Update",permalink:"/cardano-updates/2023-02-10-hydra"}},s={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,o.kt)("p",null,"Recently QA found a bug in P2P code, which results in busy loops.  We added one\nfix to ",(0,o.kt)("inlineCode",{parentName:"p"},"1.35.6")," release, another one will likely be part of next release.  The\nfirst one is already included in ",(0,o.kt)("inlineCode",{parentName:"p"},"ouroboros-network-0.3.0.1")," release.  These\nbugs could only affect nodes which are out of sync and thus should not impose\nrisk on well maintained nodes on mainnet.  We also advertise to deploy at most\none of the relays as a P2P node, which shields from possible consequences."),(0,o.kt)("p",null,"We recently finished design phase of eclipse evasion and we started\nimplementing it (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/input-output-hk/projects/19/views/16?pane=issue&itemId=19819205"},"issue #3886")," for progress)."),(0,o.kt)("p",null,"Galois finished implementing Handshake extension which will allow to query\nnetwork protocol versions (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4256"},"pr #4256"),")."),(0,o.kt)("p",null,"We also recently released a newer set of network packages to be integrated with\n",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node")," ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branch, this includes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"* monoidal-synchronisation-0.1.0.2\n* cardano-client-0.1.0.2\n* network-mux-0.3.0.0\n* ouroboros-network-api-0.1.0.0\n* ouroboros-network-protocols-0.2.0.0\n* ouroboros-network-testing-0.2.0.1\n* ouroboros-network-mock-0.1.0.0\n* ouroboros-network-framework-0.3.0.0\n* ouroboros-network-0.4.0.0 (it doesn't not yet include the fix we included\n  in `0.3.0.1`)\n")))}u.isMDXComponent=!0}}]);