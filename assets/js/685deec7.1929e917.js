"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[2782],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=a(r),y=o,f=d["".concat(c,".").concat(y)]||d[y]||u[y]||l;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var a=2;a<l;a++)i[a]=r[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>a});var n=r(7462),o=(r(7294),r(3905));const l={sidebar_position:2,title:"Hello TypeScript"},i="Hello TypeScript",p={unversionedId:"Front-end/TypeScript/Hello",id:"Front-end/TypeScript/Hello",title:"Hello TypeScript",description:"\u4e00\u6bb5\u7b80\u5355\u7684 Hello World \u4ee3\u7801\uff1a",source:"@site/docs/Front-end/TypeScript/Hello.md",sourceDirName:"Front-end/TypeScript",slug:"/Front-end/TypeScript/Hello",permalink:"/docs/Front-end/TypeScript/Hello",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Front-end/TypeScript/Hello.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Hello TypeScript"},sidebar:"tutorialSidebar",previous:{title:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528 TypeScript",permalink:"/docs/Front-end/TypeScript/WhyTypeScript"},next:{title:"Ts \u6570\u636e\u7c7b\u578b",permalink:"/docs/Front-end/TypeScript/types"}},c={},a=[{value:"\u4e00\u6bb5\u7b80\u5355\u7684 Hello World \u4ee3\u7801\uff1a",id:"\u4e00\u6bb5\u7b80\u5355\u7684-hello-world-\u4ee3\u7801",level:2}],s={toc:a};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hello-typescript"},"Hello TypeScript"),(0,o.kt)("h2",{id:"\u4e00\u6bb5\u7b80\u5355\u7684-hello-world-\u4ee3\u7801"},"\u4e00\u6bb5\u7b80\u5355\u7684 Hello World \u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const hello = (name: string) => {\n  return `hello ${name}`;\n};\n\nhello(`xxx`);\n")))}u.isMDXComponent=!0}}]);