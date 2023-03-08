"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[9283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4,title:"interface \u63a5\u53e3"},i="interface \u63a5\u53e3",c={unversionedId:"Front-end/TypeScript/interface",id:"Front-end/TypeScript/interface",title:"interface \u63a5\u53e3",description:"\u63a5\u53e3\uff08Interfaces\uff09\u662f TypeScript \u7684\u4e00\u4e2a\u91cd\u8981\u6982\u5ff5\uff0c\u5b83\u662f\u5bf9\u884c\u4e3a\u7684\u62bd\u8c61\uff0c\u800c\u5177\u4f53\u5982\u4f55\u884c\u52a8\u9700\u8981\u7531\u7c7b\uff08classes\uff09\u53bb\u5b9e\u73b0\uff08implement\uff09\u3002",source:"@site/docs/Front-end/TypeScript/interface.md",sourceDirName:"Front-end/TypeScript",slug:"/Front-end/TypeScript/interface",permalink:"/docs/Front-end/TypeScript/interface",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Front-end/TypeScript/interface.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"interface \u63a5\u53e3"},sidebar:"tutorialSidebar",previous:{title:"Ts \u6570\u636e\u7c7b\u578b",permalink:"/docs/Front-end/TypeScript/types"},next:{title:"function \u51fd\u6570",permalink:"/docs/Front-end/TypeScript/function"}},p={},l=[],s={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-\u63a5\u53e3"},"interface \u63a5\u53e3"),(0,a.kt)("p",null,"\u63a5\u53e3\uff08Interfaces\uff09\u662f TypeScript \u7684\u4e00\u4e2a\u91cd\u8981\u6982\u5ff5\uff0c\u5b83\u662f\u5bf9\u884c\u4e3a\u7684\u62bd\u8c61\uff0c\u800c\u5177\u4f53\u5982\u4f55\u884c\u52a8\u9700\u8981\u7531\u7c7b\uff08classes\uff09\u53bb\u5b9e\u73b0\uff08implement\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'//\u5b9a\u4e49\u4e00\u4e2a\u5bf9\u8c61\u5e94\u5f53\u957f\u6210\u4ec0\u4e48\u6837\u5b50\ninterface Person {\n  //\u5c5e\u6027\n  readonly id: number;\n  name: string;\n  age: number;\n  sex?: string; //\u53ef\u9009\u5c5e\u6027\n}\n\nlet sw: Person = {\n  id: 1234,\n  name: "sw",\n  age: 21,\n};\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e2a\u63a5\u53e3\u5728\u8fd9\u4e2a\u63a5\u53e3\u4e2d\u6709\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"p"},"\u53ea\u8bfb\u5143\u7d20 id"),"\uff0c\u7528\u4e8e\u8868\u660e\u5176\u53ea\u8bfb\u6027\u8d28\u7684\u5173\u952e\u5b57\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly"),"\uff0c\u8fd9\u6837\u7684\u8bdd\uff0c\u6211\u4eec\u5c31\u4e0d\u80fd\u518d\u7ed9 id \u8d4b\u503c\u4e86\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"readonly")," \u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," \u7684\u533a\u522b\u5728\u4e8e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"const")," \u7528\u4e8e\u4fee\u9970\u53d8\u91cf\uff0c\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly")," \u7528\u4e8e\u4fee\u9970\u5143\u7d20\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sex?: string;")," \u8fd9\u79cd\u8868\u8fbe\u65b9\u5f0f\u8868\u793a\u6027\u522b\u662f\u4e00\u4e2a\u53ef\u9009\u5143\u7d20\u3002"),(0,a.kt)("p",null,"\u62bd\u8c61\u5730\u6765\u8bf4 interface \u5b9a\u4e49\u4e86\u4e00\u4e2a\u5bf9\u8c61\u5e94\u5f53\u5305\u542b\u54ea\u4e9b\u5143\u7d20\u3002"))}u.isMDXComponent=!0}}]);