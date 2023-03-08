"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[5812],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=i(t),g=l,m=d["".concat(c,".").concat(g)]||d[g]||p[g]||a;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var i=2;i<a;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3133:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var r=t(7462),l=(t(7294),t(3905));const a={sidebar_position:9,title:"Generics \u6cdb\u578b"},o="Generics \u6cdb\u578b",u={unversionedId:"Front-end/TypeScript/Generics",id:"Front-end/TypeScript/Generics",title:"Generics \u6cdb\u578b",description:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u6cdb\u578b",source:"@site/docs/Front-end/TypeScript/Generics.md",sourceDirName:"Front-end/TypeScript",slug:"/Front-end/TypeScript/Generics",permalink:"/docs/Front-end/TypeScript/Generics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Front-end/TypeScript/Generics.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Generics \u6cdb\u578b"},sidebar:"tutorialSidebar",previous:{title:"enum \u679a\u4e3e",permalink:"/docs/Front-end/TypeScript/enum"},next:{title:"\u8865\u5145",permalink:"/docs/Front-end/TypeScript/more"}},c={},i=[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u6cdb\u578b",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u6cdb\u578b",level:2},{value:"\u6cdb\u578b\u7ea6\u675f",id:"\u6cdb\u578b\u7ea6\u675f",level:2},{value:"\u6cdb\u578b\u5728\u7c7b\u4e2d\u7684\u5e94\u7528",id:"\u6cdb\u578b\u5728\u7c7b\u4e2d\u7684\u5e94\u7528",level:2},{value:"\u6cdb\u578b\u5728\u63a5\u53e3\u4e2d\u7684\u5e94\u7528",id:"\u6cdb\u578b\u5728\u63a5\u53e3\u4e2d\u7684\u5e94\u7528",level:2},{value:"\u6cdb\u578b\u5728\u51fd\u6570\u7c7b\u578b\u4e2d\u7684\u5e94\u7528",id:"\u6cdb\u578b\u5728\u51fd\u6570\u7c7b\u578b\u4e2d\u7684\u5e94\u7528",level:2}],s={toc:i};function p(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"generics-\u6cdb\u578b"},"Generics \u6cdb\u578b"),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u6cdb\u578b"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u6cdb\u578b"),(0,l.kt)("p",null,"\u5728 TypeScript \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6cdb\u578b\u6765\u521b\u5efa\u53ef\u91cd\u7528\u7684\u7ec4\u4ef6\uff0c\u4e00\u4e2a\u7ec4\u4ef6\u53ef\u4ee5\u652f\u6301\u591a\u79cd\u7c7b\u578b\u7684\u6570\u636e\u3002\u8fd9\u6837\u7528\u6237\u5c31\u53ef\u4ee5\u4ee5\u81ea\u5df1\u7684\u6570\u636e\u7c7b\u578b\u6765\u4f7f\u7528\u7ec4\u4ef6\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\u7b80\u5355\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'function echo<T>(arg: T): T {\n  return arg;\n}\n\nconst result = echo(true);\n\nfunction swap<T, U>(tuple: [T, U]): [U, T] {\n  return [tuple[1], tuple[0]];\n}\n\nconst result1 = swap(["string", 1234]);\nconsole.log(result1[0]); //1234\nconsole.log(result1[1]); //string\n')),(0,l.kt)("p",null,"\u4e0a\u8ff0\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e86\u4e24\u4e2a\u7c7b\u578b\u53c2\u6570\uff0c\u5206\u522b\u662f T \u548c U\u3002\u5f53\u6211\u4eec\u8c03\u7528 echo \u65f6\uff0c\u5373\u4f7f\u6bcf\u6b21\u4f20\u5165\u7684\u53c2\u6570\u7c7b\u578b\u4e0d\u540c\uff0c\u6211\u4eec\u90fd\u53ef\u4ee5\u63a7\u5236\u5b83\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u662f\u4ec0\u4e48\uff0c\u4fdd\u8bc1\u4e00\u81f4\u6027\u3002"),(0,l.kt)("h2",{id:"\u6cdb\u578b\u7ea6\u675f"},"\u6cdb\u578b\u7ea6\u675f"),(0,l.kt)("p",null,"\u5728\u4e00\u4e9b\u4f7f\u7528\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u5bf9\u6cdb\u578b\u7684\u7c7b\u578b\u8fdb\u884c\u7ea6\u675f\uff0c\u6bd4\u5982\u6211\u4eec\u60f3\u8981\u83b7\u53d6\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u4f46\u662f\u8fd9\u4e2a\u5c5e\u6027\u53ef\u80fd\u4e0d\u5b58\u5728\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528\u6cdb\u578b\u7ea6\u675f\u3002"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u662f\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5728\u4e00\u4e2a\u6cdb\u578b\u51fd\u6570\u4e2d\u4f7f\u7528\u4e86 length \u5c5e\u6027\uff0c\u4f46\u662f\u8fd9\u4e2a\u5c5e\u6027\u5e76\u4e0d\u662f\u6240\u6709\u7c7b\u578b\u90fd\u6709\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5bf9\u6cdb\u578b\u8fdb\u884c\u7ea6\u675f\uff0c\u4f7f\u5f97\u8fd9\u4e2a\u6cdb\u578b\u51fd\u6570\u53ef\u4ee5\u63a5\u53d7\u6240\u6709\u5305\u542b length \u5c5e\u6027\u7684\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u4e0d\u7528\u6cdb\u578b\u7ea6\u675f\u7684\u65b9\u5f0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"//\u5f53\u4f7f\u7528length\u5c5e\u6027\u65f6\uff0c\u6211\u4eec\u65e0\u6cd5\u786e\u5b9a\u8be5\u7c7b\u578b\u662f\u5426\u6709\u8be5\u53c2\u6570\uff0c\u6240\u4ee5\u53ef\u4ee5\u63d0\u524d\u8bbe\u7f6e\u6cdb\u578b\u4e3a\u4e00\u4e2a\u6570\u7ec4\u7c7b\u578b\uff0c\u4f46\u8be5\u65b9\u6cd5\u6709\u5c40\u9650\u6027\u3002\nfunction echoWithArr<T>(arg: T[]): T[] {\n  console.log(arg.length);\n  return arg;\n}\n\nconst arrs = echo([1, 2, 3]);\n")),(0,l.kt)("p",null,"\u4e0a\u8ff0\u7684\u89e3\u51b3\u65b9\u5f0f\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e86\u6cdb\u578b\u7ea6\u675f\uff0c\u4f46\u662f\u8fd9\u79cd\u65b9\u5f0f\u6709\u5c40\u9650\u6027\uff0c\u4e0d\u4ec5\u5931\u53bb\u4e86\u6cdb\u578b\u7684\u7075\u6d3b\u6027\uff0c\u800c\u4e14\u8fd8\u6709\u53ef\u80fd\u4e0d\u80fd\u6ee1\u8db3\u6211\u4eec\u7684\u9700\u6c42\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u7ea6\u675f\u7684\u65b9\u5f0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface IWithLength {\n  length: number;\n}\n\nfunction echoWithLength<T extends IWithLength>(arg: T): T {\n  console.log(arg.length);\n  return arg;\n}\n")),(0,l.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u4e86 extends \u5173\u952e\u5b57\uff0c\u521b\u5efa\u4e86\u4e00\u4e2a\u63a5\u53e3 IWithLength\uff0c\u7136\u540e\u4f7f\u7528\u8fd9\u4e2a\u63a5\u53e3\u548c extends \u5173\u952e\u5b57\u6765\u7ea6\u675f\u6cdb\u578b T\u3002\u8981\u6c42\u6240\u6709\u4f7f\u7528\u8fd9\u4e2a\u6cdb\u578b\u7684\u51fd\u6570\u5fc5\u987b\u4f20\u5165\u7684\u53c2\u6570\u5fc5\u987b\u5305\u542b length \u5c5e\u6027\u3002"),(0,l.kt)("h2",{id:"\u6cdb\u578b\u5728\u7c7b\u4e2d\u7684\u5e94\u7528"},"\u6cdb\u578b\u5728\u7c7b\u4e2d\u7684\u5e94\u7528"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u7c7b\u4e2d\u4f7f\u7528\u6cdb\u578b\uff0c\u4f46\u662f\u5728\u7c7b\u4e2d\u4f7f\u7528\u6cdb\u578b\u65f6\uff0c\u6211\u4eec\u9700\u8981\u5728\u7c7b\u7684\u5b9e\u4f8b\u5c5e\u6027\u4e0a\u4f7f\u7528\u6cdb\u578b\uff0c\u800c\u4e0d\u662f\u5728\u7c7b\u7684\u9759\u6001\u5c5e\u6027\u4e0a\u4f7f\u7528\u6cdb\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'class Queue<T> {\n  private data = [];\n  push(item: T) {\n    return this.data.push(item);\n  }\n  pop(): T {\n    return this.data.shift();\n  }\n}\n\nconst queue = new Queue<number>();\nqueue.push(1);\nconsole.log(queue.pop().toFixed()); //1\nconst queue2 = new Queue<string>();\nqueue2.push("str");\nconsole.log(queue2.pop().length); //3\n')),(0,l.kt)("h2",{id:"\u6cdb\u578b\u5728\u63a5\u53e3\u4e2d\u7684\u5e94\u7528"},"\u6cdb\u578b\u5728\u63a5\u53e3\u4e2d\u7684\u5e94\u7528"),(0,l.kt)("p",null,"\u6211\u4eec\u540c\u6837\u53ef\u4ee5\u5728\u63a5\u53e3\u4e2d\u4f7f\u7528\u6cdb\u578b\uff0c\u4f8b\u5b50\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'interface KeyPair<T, U> {\n  key: T;\n  value: U;\n}\n\nlet kp1: KeyPair<number, string> = { key: 1, value: "str" };\nlet kp2: KeyPair<string, number> = { key: "str", value: 123 };\n\nlet arr: number[] = [1, 2, 3];\nlet arrTwo: Array<number> = [1, 2, 3];\n')),(0,l.kt)("p",null,"\u5728\u4e0a\u8ff0\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u6cdb\u578b\u8ba9\u63a5\u53e3\u53d8\u5f97\u66f4\u52a0\u7075\u6d3b\uff0c\u6211\u4eec\u53ef\u4ee5\u4f20\u5165\u4efb\u610f\u7c7b\u578b\u7684\u53c2\u6570\u3002"),(0,l.kt)("p",null,"\u540c\u65f6\uff0c\u6211\u4eec\u4f7f\u7528\u4e86\u4e24\u79cd\u65b9\u5f0f\u6765\u5b9a\u4e49\u6570\u7ec4\uff0c\u4e00\u79cd\u662f\u4f7f\u7528\u4e86\u7c7b\u578b\u522b\u540d\uff0c\u53e6\u4e00\u79cd\u662f\u4f7f\u7528\u4e86\u6cdb\u578b\u3002\u8fd9\u4e24\u79cd\u65b9\u5f0f\u90fd\u53ef\u4ee5\u5b9a\u4e49\u6570\u7ec4\uff0c\u4f46\u662f\u4f7f\u7528\u6cdb\u578b\u7684\u65b9\u5f0f\u66f4\u52a0\u7075\u6d3b\uff0c\u56e0\u4e3a\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6cdb\u578b\u6765\u5b9a\u4e49\u591a\u7ef4\u6570\u7ec4\uff0c\u800c\u4f7f\u7528\u7c7b\u578b\u522b\u540d\u7684\u65b9\u5f0f\u5219\u4e0d\u884c\u3002"),(0,l.kt)("h2",{id:"\u6cdb\u578b\u5728\u51fd\u6570\u7c7b\u578b\u4e2d\u7684\u5e94\u7528"},"\u6cdb\u578b\u5728\u51fd\u6570\u7c7b\u578b\u4e2d\u7684\u5e94\u7528"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6cdb\u578b\u6765\u5b9a\u4e49\u51fd\u6570\u7c7b\u578b\uff0c\u4f8b\u5b50\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface IPlus<T> {\n  (a: T, b: T): T;\n}\n\nfunction plus(a: number, b: number): number {\n  return a + b;\n}\n\nfunction connect(a: string, b: string): string {\n  return a + b;\n}\n\nconst a: IPlus<number> = plus;\nconst b: IPlus<string> = connect;\n")),(0,l.kt)("p",null,"\u5728\u4e0a\u8ff0\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e2a\u63a5\u53e3 IPlus\uff0c\u8fd9\u4e2a\u63a5\u53e3\u7684\u4f5c\u7528\u662f\u7528\u6765\u7ea6\u675f\u51fd\u6570\u7684\u7c7b\u578b\uff0c\u6211\u4eec\u4f7f\u7528\u4e86\u6cdb\u578b\u6765\u5b9a\u4e49\u51fd\u6570\u7684\u7c7b\u578b\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u63a5\u53e3\u6765\u7ea6\u675f\u51fd\u6570\u7684\u7c7b\u578b\uff0c\u800c\u4e0d\u7528\u6bcf\u6b21\u90fd\u53bb\u5b9a\u4e49\u4e00\u4e2a\u65b0\u7684\u63a5\u53e3\u3002"))}p.isMDXComponent=!0}}]);