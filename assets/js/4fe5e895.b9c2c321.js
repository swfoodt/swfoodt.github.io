"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[9453],{9136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>I,contentTitle:()=>V,default:()=>H,frontMatter:()=>E,metadata:()=>L,toc:()=>M});var a=n(7462),r=n(7294),l=n(3905),i=n(6010),o=n(2466),u=n(6775),s=n(1980),p=n(7392),d=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,s]=b({queryString:n,groupId:a}),[p,c]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),f=(()=>{const e=u??p;return h({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),c(e)}),[s,c,l]),tabValues:l}}var k=n(2389);const v="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=p.indexOf(t),a=s[n].value;a!==l&&(d(t),u(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},o,{className:(0,i.Z)("tabs__item",g,null==o?void 0:o.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function T(e){const t=(0,k.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}const x="tabItem_Ymn6";function C(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(x,a),hidden:n},t)}n(814);const E={sidebar_position:2,title:"HTML\u90e8\u5206\u6837\u4f8b"},V=void 0,L={unversionedId:"Front-end/HTML/example",id:"Front-end/HTML/example",title:"HTML\u90e8\u5206\u6837\u4f8b",description:"\u8bf4\u4e86\u4e9b\u67af\u71e5\u7684\u5b9a\u4e49\uff0c\u6240\u4ee5 html \u5177\u4f53\u53ef\u4ee5\u505a\u5230\u4ec0\u4e48\u5462\uff1f",source:"@site/docs/Front-end/HTML/example.md",sourceDirName:"Front-end/HTML",slug:"/Front-end/HTML/example",permalink:"/docs/Front-end/HTML/example",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Front-end/HTML/example.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"HTML\u90e8\u5206\u6837\u4f8b"},sidebar:"tutorialSidebar",previous:{title:"HTML\u57fa\u7840",permalink:"/docs/Front-end/HTML/basics"},next:{title:"HTML5\u65b0\u589e\u5185\u5bb9",permalink:"/docs/Front-end/HTML/html5"}},I={},M=[{value:"\u8bf4\u4e86\u4e9b\u67af\u71e5\u7684\u5b9a\u4e49\uff0c\u6240\u4ee5 html \u5177\u4f53\u53ef\u4ee5\u505a\u5230\u4ec0\u4e48\u5462\uff1f",id:"\u8bf4\u4e86\u4e9b\u67af\u71e5\u7684\u5b9a\u4e49\u6240\u4ee5-html-\u5177\u4f53\u53ef\u4ee5\u505a\u5230\u4ec0\u4e48\u5462",level:2},{value:"\u7528\u5404\u79cd\u6807\u7b7e\u5199\u4e00\u6bb5\u8bdd",id:"\u7528\u5404\u79cd\u6807\u7b7e\u5199\u4e00\u6bb5\u8bdd",level:3}],q={toc:M};function H(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},q,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8bf4\u4e86\u4e9b\u67af\u71e5\u7684\u5b9a\u4e49\u6240\u4ee5-html-\u5177\u4f53\u53ef\u4ee5\u505a\u5230\u4ec0\u4e48\u5462"},"\u8bf4\u4e86\u4e9b\u67af\u71e5\u7684\u5b9a\u4e49\uff0c\u6240\u4ee5 html \u5177\u4f53\u53ef\u4ee5\u505a\u5230\u4ec0\u4e48\u5462\uff1f"),(0,l.kt)("h3",{id:"\u7528\u5404\u79cd\u6807\u7b7e\u5199\u4e00\u6bb5\u8bdd"},"\u7528\u5404\u79cd\u6807\u7b7e\u5199\u4e00\u6bb5\u8bdd"),(0,l.kt)(T,{mdxType:"Tabs"},(0,l.kt)(C,{value:"html",label:"html\u4ee3\u7801",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="example.html"',title:'"example.html"'},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>learn</title>\n</head>\n\n<body>\n    <h1>\u6211\u7528h1\u6807\u7b7e\u5236\u4f5c\u4e86\u4e00\u4e2a\u6807\u9898</h1>\n    <h6>h1~h6\u662f\u5927\u5c0f\u4e0d\u540c\u7684\u6807\u9898,\u63a5\u4e0b\u6765\u7528hr\u6807\u7b7e\u5206\u5272\u4e00\u4e0b</h6>\n    <hr>\n    <p>\u6211\u7528p\u6807\u7b7e\u5236\u4f5c\u4e86\u4e00\u4e2a\u6bb5\u843d\uff0c\u867d\u7136\u5f88\u77ed\uff0c\u8ba9\u6211\u7528br\u6807\u7b7e\u6362\u4e2a\u884c\uff0c<br>\u5440\uff0c\u6210\u529f\u4e86</p>\n    <p>\u6211\u7528b\u6807\u7b7e\u52a0\u7c97\u4e86<b>\u8fd9\u51e0\u4e2a\u5b57</b>\uff0c\u7528i\u6807\u7b7e\u8ba9<i>\u8fd9\u51e0\u4e2a\u5b57</i>\u659c\u7740\u663e\u793a\u3002</p>\n    <a href="https://swfoodt.netlify.app">\u6211\u4f7f\u7528a\u6807\u7b7e\u8ba9\u8fd9\u53e5\u8bdd\u94fe\u63a5\u5230\u6211\u7684\u535a\u5ba2</a>\n    <hr>\n    <p>\u6211\u8fd8\u53ef\u4ee5\u7528img\u6807\u7b7e\u5c55\u793a\u6211\u559c\u6b22\u7684\u6e38\u620f\u56fe\u7247</p>\n    <img style="width: 200px;height: 100px;"\n        src="https://swfoodt-blog.oss-cn-beijing.aliyuncs.com/img/bg/indexbackground10.png" alt="bg.png">\n    <hr>\n    <p>\u63a5\u4e0b\u6765\u60f3\u7528table\uff0ctr\uff0ctd\u6765\u521b\u5efa\u4e00\u4e2a\u8868\u683c\u586b\u4e0a\u6211\u559c\u6b22\u548c\u4e0d\u559c\u6b22\u7684\u83dc</p>\n    <table border="2">\n        <tr>\n            <td>\u559c\u6b22\u7684</td>\n            <td>\u4e0d\u559c\u6b22\u7684</td>\n        </tr>\n        <tr>\n            <td>\u70e4\u9e2d</td>\n            <td>\u767d\u83dc</td>\n        </tr>\n    </table>\n    <hr>\n    <p>\u6211\u63a5\u4e0b\u6765\u60f3\u7528ul\uff0cli\u6765\u521b\u5efa\u4e00\u4e2a\u65e0\u5e8f\u5217\u8868</p>\n    <ul>\n        <li>\u767d\u83dc</li>\n        <li>\u83e0\u83dc</li>\n        <li>\u82b9\u83dc</li>\n    </ul>\n    <p>\u63a5\u4e0b\u6765\u60f3\u7528ol\uff0cli\u6765\u521b\u5efa\u4e00\u4e2a\u6709\u5e8f\u5217\u8868</p>\n    <ol>\n        <li>\u70e4\u9e2d</li>\n        <li>\u70e4\u9e21</li>\n        <li>\u70e4\u9c7c</li>\n        <dd>-\u6211\u90fd\u7231\u5403</dd>\n        <dd>-\u8fd9\u662f\u4e00\u4e2a\u4f7f\u7528dd\u6807\u7b7e\u6dfb\u52a0\u7684\u81ea\u5b9a\u4e49\u5217\u8868\u9879</dd>\n    </ol>\n    <hr>\n    <div style="width: 500px;height: 85px;background-color: aqua;">\n        <p>\u8fd9\u662f\u4e00\u4e2a\u7528div\u6807\u7b7e\u6765\u521b\u5efa\u7684div\u5757,div\u901a\u5e38\u88ab\u7528\u4f5c\u7f51\u9875\u5e03\u5c40\uff0c\u5212\u5206\u4e0d\u540c\u7684\u533a\u57df\u6765\u8868\u73b0\u4e0d\u540c\u7684\u5185\u5bb9\uff0c\n            \u63a5\u4e0b\u6765\u6211\u60f3\u7528span\u6807\u7b7e\u6765\u521b\u5efa\u4e00\u4e2aspan\u5757\uff0c\n            <span style="color: blue;">span\u901a\u5e38\u88ab\u7528\u6765\u5c06\u90e8\u5206\u6587\u672c\u6216\u8005\u6587\u6863\u72ec\u7acb\u51fa\u6765\u4ee5\u4fbf\u6539\u53d8\u4ed6\u4eec\u7684\u6837\u5f0f</span></p>\n        </p>\n    </div>\n\n    <div>\n        <p>\u63a5\u4e0b\u6765\u6211\u60f3\u7528form\u6807\u7b7e\u6765\u521b\u5efa\u4e00\u4e2a\u8868\u5355\uff0c\u8ba9\u7528\u6237\u8f93\u5165\u81ea\u5df1\u7684\u540d\u5b57\u548c\u5bc6\u7801</p>\n        <form>\n            username:<input type="text" name="username"><br>\n            password:<input type="password" name="password"><br>\n            <p>\u521b\u5efa\u4e00\u4e2a\u9009\u62e9\u6846\u6765\u786e\u5b9a\u4f60\u7684\u6027\u522b</p>\n            <input type="radio" name="sex" value="male">\u7537\n            <input type="radio" name="sex" value="female">\u5973\n            <p>\u521b\u5efa\u4e00\u4e2a\u590d\u9009\u6846\u6765\u6536\u96c6\u4f60\u559c\u6b22\u7684\u6c34\u679c</p>\n            <input type="checkbox" name="fruit" value="apple">\u82f9\u679c\n            <input type="checkbox" name="fruit" value="banana">\u9999\u8549\n            <input type="checkbox" name="fruit" value="pear">\u68a8\n            <p>\u521b\u5efa\u4e00\u4e2a\u63d0\u4ea4\u6309\u94ae\uff0c\u63d0\u4ea4\u8868\u5355</p>\n            <input type="submit" value="\u63d0\u4ea4">\n        </form>\n    </div>\n\n</body>\n\n</html>\n'))),(0,l.kt)(C,{value:"result",label:"\u8fd0\u884c\u540e\u7ed3\u679c",mdxType:"TabItem"},(0,l.kt)("iframe",{height:"1400px",width:"100%",scrolling:"no",title:"swfoodt-blog-example",src:"https://codepen.io/swfoodt/embed/VwxrboQ?default-tab=result&theme-id=dark",frameborder:"no"}))),(0,l.kt)("p",null,"\u5728\u4e0a\u8ff0\u7684\u4ee3\u7801\u4e2d\u6211\u4eec\u4f7f\u7528\u4e86\u5305\u62ec",(0,l.kt)("inlineCode",{parentName:"p"},"<h1>"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<h6>"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<hr>"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<p>"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<b>"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<i>"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<a>"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<img>"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<table>"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<tr>"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<td>"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<ul>"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<li>"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<ol>"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<dd>"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<div>"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<span>"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<input>"),"\u7b49\u6807\u7b7e\uff0c\u8fd9\u4e9b\u6807\u7b7e\u90fd\u662f html \u4e2d\u7684\u57fa\u672c\u6807\u7b7e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u6807\u7b7e\u6765\u521b\u5efa\u6211\u4eec\u60f3\u8981\u7684\u7f51\u9875\u3002"),(0,l.kt)("p",null,"\u4e0d\u8fc7\u53ef\u4ee5\u5728\u8fd0\u884c\u540e\u7684\u7ed3\u679c\u4e2d\u770b\u5230\uff0c\u8fd9\u4e2a\u7b80\u5355\u7f51\u9875\u5448\u73b0\u51fa\u7684\u6548\u679c",(0,l.kt)("strong",{parentName:"p"},"\u5e76\u4e0d\u7f8e\u89c2"),"\uff0c\u56e0\u4e3a\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u9664\u4e86\u9650\u5236\u90e8\u5206\u5143\u7d20\u7684\u5bbd\u9ad8\u4ee5\u5916"),"\uff0c\u6211\u4eec\u6ca1\u6709\u4f7f\u7528\u5176\u4ed6\u7684 css \u6837\u5f0f\u6765\u7f8e\u5316\u7f51\u9875\uff0c\u6709\u5173 css \u65b9\u9762\u7684\u4ee3\u7801\u5e94\u7528\u53ef\u4ee5\u53c2\u8003\u672c\u8bb0\u5f55\u7684",(0,l.kt)("a",{parentName:"p",href:"#"},"css \u90e8\u5206"),"\u3002"),(0,l.kt)("p",null,"\u8fd8\u6709\u4e00\u4e2a\u5f88\u6709\u7528\u7684\u7684\u6807\u7b7e\u6ca1\u6709\u5c55\u793a\u5728\u4e0a\u9762\u7684\u6837\u4f8b\u4ee3\u7801\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"iframe")," \u6807\u7b7e\uff0c",(0,l.kt)("strong",{parentName:"p"},"iframe \u6807\u7b7e"),"\u53ef\u4ee5\u7528\u6765\u5728\u7f51\u9875\u4e2d\u5d4c\u5165\u5176\u4ed6\u7f51\u9875\uff0c\u5728\u4e0a\u65b9\u7684\u4ee3\u7801\u7ed3\u679c\u6f14\u793a\u5c31\u662f\u4f7f\u7528\u4e86 iframe \u6807\u7b7e\u6765\u5d4c\u5165\u4e86\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"codepen"),"\u7684\u7f51\u9875\uff0c\u82e5\u672a\u80fd\u663e\u793a\u6210\u529f\u53ef\u80fd\u662f\u7f51\u7edc\u95ee\u9898\uff0c\u53ef\u4ee5\u81ea\u5df1\u52a8\u624b\u8fd0\u884c\u4e00\u4e0b\u3002"),(0,l.kt)("admonition",{title:"\u901f\u67e5\u5217\u8868",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u65e5\u5e38\u4f7f\u7528\u53ef\u4ee5\u53c2\u8003",(0,l.kt)("inlineCode",{parentName:"p"},"w3school"),"\u63d0\u4f9b\u7684",(0,l.kt)("a",{parentName:"p",href:"https://www.w3school.com.cn/html/html_quick.asp"},"\u901f\u67e5\u624b\u518c"),"\u3002")))}H.isMDXComponent=!0}}]);