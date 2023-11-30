"use strict";(self.webpackChunksrc_dev=self.webpackChunksrc_dev||[]).push([[4014],{6372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(5893),s=n(1151);const i={title:"Strategy Pattern \u7b56\u7565\u6a21\u5f0f"},a=void 0,o={id:"Design Patterns/strategy",title:"Strategy Pattern \u7b56\u7565\u6a21\u5f0f",description:"Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.",source:"@site/docs/Design Patterns/strategy.md",sourceDirName:"Design Patterns",slug:"/Design Patterns/strategy",permalink:"/Design Patterns/strategy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Strategy Pattern \u7b56\u7565\u6a21\u5f0f"},sidebar:"docsSidebar",previous:{title:"Composite Pattern \u8907\u5408\u6a21\u5f0f",permalink:"/Design Patterns/composite/"},next:{title:"State Pattern \u72c0\u614b\u6a21\u5f0f",permalink:"/Design Patterns/state"}},c={},l=[];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["\u662f\u4e00\u7a2e\u884c\u70ba\u6a21\u5f0f\uff0c\u53c8\u53eb\u505a ",(0,r.jsx)(t.code,{children:"Policy"}),"\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u4e3b\u8981\u6982\u5ff5\u70ba\u5c07\u4e00\u7fa4\u76f8\u4f3c\u6216\u53ef\u4ee5\u9054\u5230\u76f8\u540c\u76ee\u7684\u7684\u4e0d\u540c\u6f14\u7b97\u6cd5\u6216\u7a0b\u5f0f\u78bc\uff0c\u5206\u5225\u53d6\u51fa\u4f86\u5305\u88dd\u6210\u7b56\u7565\u985e\u5225\u4e26\u5b9a\u7fa9\u597d\u7d71\u4e00\u7684\u4ecb\u9762\u3002"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"\u7b56\u7565\u6a21\u5f0f\u5141\u8a31\u4f60\u6839\u64da\u60c5\u6cc1\u5207\u63db\u6f14\u7b97\u6cd5\u6216\u7b56\u7565\u3002"})}),"\n",(0,r.jsx)(t.p,{children:"\u5e38\u898b\u7684\u7bc4\u4f8b\u6709\uff1a"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u6392\u5e8f\u6f14\u7b97\u6cd5\uff1a\u6bcf\u7a2e\u6f14\u7b97\u6cd5 (e.g. bubble sort, quicksort, etc.) \u88ab\u5206\u96e2\u6210\u5404\u81ea\u7684\u7b56\u7565\u985e\u5225\uff0c\u4e26\u900f\u904e\u4e00\u81f4\u7684\u4ecb\u9762\u7d66 client \u4f7f\u7528\uff0cclent \u53ef\u4ee5\u56e0\u61c9\u9700\u6c42\u7121\u75db\u62bd\u63db\u4e0d\u540c\u7684\u6f14\u7b97\u6cd5\uff0c\u751a\u81f3\u65b0\u589e\u5176\u4ed6\u6f14\u7b97\u6cd5\u3002"}),"\n",(0,r.jsx)(t.li,{children:"\u4ed8\u6b3e\u7b56\u7565\uff1a\u63d0\u4f9b\u4e0d\u540c\u7684\u4ed8\u6b3e\u65b9\u5f0f (e.g. Credit Card, Apple Pay, Line Pay, etc.) \u7d66\u5ba2\u6236\u9078\u64c7\u3002"}),"\n",(0,r.jsx)(t.li,{children:"RPG \u904a\u6232\u7684\u53d7\u50b7\u8a08\u7b97\uff1a\u5b9a\u7fa9\u4e0d\u540c\u7684\u653b\u64ca\u6a21\u5f0f (\u8f15\u653b\u64ca, \u91cd\u653b\u64ca, Combo\u653b\u64ca\u7b49\u7b49)\uff0c\u6bcf\u7a2e\u653b\u64ca\u6a21\u5f0f\u6703\u9020\u6210\u4e0d\u7b49\u7684\u50b7\u5bb3\u503c\u3002"}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:"\u5047\u8a2d\u73fe\u5728\u8981\u5c0d\u4e00\u7b46\u8cc7\u6599\u505a\u6392\u5e8f\uff0c\u9996\u5148\u6211\u5011\u5be6\u4f5c\u4e86\u6ce1\u6cab\u6392\u5e8f\u6cd5 (bubble sort)\uff0c\u4f46\u96a8\u8457\u8cc7\u6599\u91cf\u8b8a\u591a\u5f8c\uff0c\u6ce1\u6cab\u6392\u5e8f\u6cd5\u901f\u5ea6\u8d8a\u4f86\u8d8a\u6162\uff0c\u56e0\u6b64\u53c8\u91dd\u5c0d\u5927\u7b46\u8cc7\u6599\u5be6\u4f5c\u4e86\u5feb\u901f\u6392\u5e8f\u6cd5\uff0c\u4f46\u5feb\u901f\u6392\u5e8f\u6cd5\u5728\u8cc7\u6599\u91cf\u4e0d\u5927\u7684\u6642\u5019\u901f\u5ea6\u6bd4\u8f03\u6162\u3002\u56e0\u6b64\u53ef\u4ee5\u91dd\u5c0d\u4e0d\u540c\u8cc7\u6599\u91cf\u9078\u64c7\u4e0d\u540c\u7684\u6f14\u7b97\u6cd5\u6216\u7b56\u7565\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart"})}),"\n",(0,r.jsx)(t.p,{children:"\u53c3\u8003\uff1a"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Design_Patterns",children:"Design Patterns"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/NoobTW/design-patterns-for-humans-cn#-%E7%AD%96%E7%95%A5strategy",children:"Strategy"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var r=n(7294);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);