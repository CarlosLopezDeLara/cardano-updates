"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[63824],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,c=m["".concat(l,".").concat(d)]||m[d]||h[d]||i;return a?r.createElement(c,o(o({ref:t},u),{},{components:a})):r.createElement(c,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},40671:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={title:"Hydra Team Update",slug:"2023-06-02-hydra",authors:"ffakenz",tags:["hydra"],hide_table_of_contents:!1},o=void 0,p={permalink:"/cardano-updates/2023-06-02-hydra",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2023-06-02-hydra.md",source:"@site/blog/2023-06-02-hydra.md",title:"Hydra Team Update",description:"High-level summary",date:"2023-06-02T00:00:00.000Z",formattedDate:"June 2, 2023",tags:[{label:"hydra",permalink:"/cardano-updates/tags/hydra"}],readingTime:1.215,hasTruncateMarker:!1,authors:[{name:"Franco Testagrossa",title:"Hydra Software Engineer",url:"https://github.com/ffakenz",imageURL:"https://github.com/ffakenz.png",key:"ffakenz"}],frontMatter:{title:"Hydra Team Update",slug:"2023-06-02-hydra",authors:"ffakenz",tags:["hydra"],hide_table_of_contents:!1},prevItem:{title:"System Test Team Update",permalink:"/cardano-updates/2023-06-08-system-test"},nextItem:{title:"Mithril Team Update",permalink:"/cardano-updates/2023-06-01-mithril"}},l={authorsImageUrls:[void 0]},s=[{value:"High-level summary",id:"high-level-summary",level:2},{value:"What did the team achieve this week",id:"what-did-the-team-achieve-this-week",level:2},{value:"What are the goals of next week",id:"what-are-the-goals-of-next-week",level:2}],u={toc:s};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-level-summary"},"High-level summary"),(0,n.kt)("p",null,"This week, the Hydra team has put their effort on finding solutions on many\ndifferent problems, such as our broken head on mainnet\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/897"},"#897"),", our fragile monthly\nreport publications on the website and implementing ","\u201c","Option A","\u201d"," for\nexternal commits ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/215"},"#215"),".\nAlthough most of these items are still open, huge progress has been made. To\naccelerate the investigation, they improved their logging to give more precise\nerrors when a transition requirement fails, and to reduce duplication on effets\nlogged content. Last but not least, the team is exploring formal methods and\nattended a workshop on formalizing cryptographic protocols in Agda."),(0,n.kt)("h2",{id:"what-did-the-team-achieve-this-week"},"What did the team achieve this week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Continued investigating broken head and opened an issue to keep track ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/897"},"#897"),"."),(0,n.kt)("p",{parentName:"li"},"As part of this issue, improvements were made to the node logs:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Give a precise error when a transition requirement fails ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/pull/895"},"#895"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Reduce duplication for effects logged content by using sequential eventId and effectId pair  ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/pull/896"},"#896"),".")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fixed references in the hydra specification ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/pull/893"},"#893"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Attended a workshop on formal methods and crypto in Agda."))),(0,n.kt)("h2",{id:"what-are-the-goals-of-next-week"},"What are the goals of next week"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Investigate and re-open our team-internal head on mainnet."),(0,n.kt)("li",{parentName:"ul"},"Improve and provide regular benchmarks for Hydra ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/186"},"#186"),"."),(0,n.kt)("li",{parentName:"ul"},"Complete journey for external commits implementing ","\u201c","Option A","\u201d"," and start implementing ","\u201c","Option B","\u201d"," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/215"},"#215"),"."),(0,n.kt)("li",{parentName:"ul"},"Authenticate network messages ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/727"},"#727"),"."),(0,n.kt)("li",{parentName:"ul"},"Add hydra as tool to developr platform ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/872"},"#872"),"."),(0,n.kt)("li",{parentName:"ul"},"Fix monthly report publication on docs website.")))}h.isMDXComponent=!0}}]);