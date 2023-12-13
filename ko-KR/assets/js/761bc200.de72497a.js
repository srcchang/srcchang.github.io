"use strict";(self.webpackChunksrc_dev=self.webpackChunksrc_dev||[]).push([[6885],{1260:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(5893),s=n(1151);const i={title:"State Pattern \u72c0\u614b\u6a21\u5f0f"},a=void 0,c={id:"Design Patterns/state",title:"State Pattern \u72c0\u614b\u6a21\u5f0f",description:"Allow an object to alter its behaviour when its internal state changes. The object will appear to change its class.",source:"@site/docs/Design Patterns/state.md",sourceDirName:"Design Patterns",slug:"/Design Patterns/state",permalink:"/ko-KR/Design Patterns/state",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"State Pattern \u72c0\u614b\u6a21\u5f0f"}},o={},l=[];function d(t){const e={blockquote:"blockquote",code:"code",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Allow an object to alter its behaviour when its internal state changes. The object will appear to change its class."}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u662f\u4e00\u7a2e\u884c\u70ba\u578b\u7684\u6a21\u5f0f\uff0c\u7c21\u55ae\u4f86\u8aaa\u5c31\u662f\u4e00\u500b\u6709\u9650\u72c0\u614b\u6a5f\u7684\u5be6\u4f5c\uff0c\u5728\u72c0\u614b\u6539\u8b8a\u5f8c\u985e\u5225\u7684\u884c\u70ba\u6703\u8ddf\u8457\u6539\u8b8a\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5e38\u898b\u7bc4\u4f8b\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"JIRA task (OPEN -> IN PROGRESS -> RESOLVED -> CLOSED)"}),"\n",(0,r.jsx)(e.li,{children:"\u5c0f\u756b\u5bb6\u7684\u756b\u7b46\uff0c\u9078\u64c7\u4e0d\u540c\u984f\u8272\u8ddf\u7c97\u7d30\u5c07\u80fd\u756b\u51fa\u4e0d\u540c\u984f\u8272\u8ddf\u7c97\u7d30\u7684\u7dda\u689d\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.p,{children:"\u4e00\u500b\u6587\u5b57\u7de8\u8f2f\u5668\uff0c\u53ef\u4ee5\u4fee\u6539\u8f38\u5165\u6587\u5b57\u7684\u72c0\u614b\uff0c\u8b6c\u5982\u5207\u63db\u6210\u5927\u5beb\uff0c\u5c0f\u5beb\u6216\u9810\u8a2d\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u72c0\u614b\u5b9a\u7fa9\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-dart",children:"abstract class WritingState {\n  void write(String input);\n}\n\nclass UpperCaseState implements WritingState {\n  @override\n  void write(String input) {\n    print(input.toUpperCase());\n  }\n}\n\nclass LowerCaseState implements WritingState {\n  @override\n  void write(String input) {\n    print(input.toLowerCase());\n  }\n}\n\nclass DefaultState implements WritingState {\n  @override\n  void write(String input) {\n    print(input);\n  }\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u6587\u5b57\u7de8\u8f2f\u5668\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-dart",children:"class TextEditor {\n  WritingState _state = DefaultState();\n\n  void setState(WritingState state) {\n    _state = state;\n  }\n\n  void type(String input) {\n    _state.write(input);\n  }\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5207\u63db\u6587\u5b57\u7de8\u8f2f\u5668\u7684\u72c0\u614b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-dart",children:"final editor = TextEditor();\neditor.type('Aa Bb Cc');\n\neditor.setState(UpperCaseState());\neditor.type('Aa Bb Cc');\n\neditor.setState(LowerCaseState());\neditor.type('Aa Bb Cc');\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u57f7\u884c\u7d50\u679c\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"I/flutter ( 4297): Aa Bb Cc\nI/flutter ( 4297): AA BB CC\nI/flutter ( 4297): aa bb cc\n"})})]})}function p(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>a});var r=n(7294);const s={},i=r.createContext(s);function a(t){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:a(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);