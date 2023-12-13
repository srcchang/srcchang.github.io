"use strict";(self.webpackChunksrc_dev=self.webpackChunksrc_dev||[]).push([[7553],{9989:(n,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var e=r(5893),s=r(1151);const o={title:"Constructors \u5efa\u69cb\u51fd\u6578"},c="Constructors \u5efa\u69cb\u51fd\u6578",i={id:"Dart/constructors",title:"Constructors \u5efa\u69cb\u51fd\u6578",description:"\u7528\u4f86\u7522\u751f\u8a72\u985e\u5225\u7684\u5be6\u9ad4\u7684\u51fd\u6578\uff0c\u57fa\u672c\u5ba3\u544a\u65b9\u5f0f\u70ba\u4e00\u500b\u6c92\u6709\u56de\u50b3\u578b\u5225\u4e14\u51fd\u6578\u540d\u7a31\u70ba\u985e\u5225\u540d\u7a31\u7684\u51fd\u6578\u3002",source:"@site/docs/Dart/constructors.md",sourceDirName:"Dart",slug:"/Dart/constructors",permalink:"/zh-TW/Dart/constructors",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Constructors \u5efa\u69cb\u51fd\u6578"}},a={},l=[{value:"Default Constructors",id:"default-constructors",level:2},{value:"Named Constructors",id:"named-constructors",level:2},{value:"Initializer List \u521d\u59cb\u5316\u5217\u8868",id:"initializer-list-\u521d\u59cb\u5316\u5217\u8868",level:2},{value:"Redirecting Constructors",id:"redirecting-constructors",level:2},{value:"Constant Constructors",id:"constant-constructors",level:2},{value:"Factory Constructors",id:"factory-constructors",level:2}];function d(n){const t={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.h1,{id:"constructors-\u5efa\u69cb\u51fd\u6578",children:"Constructors \u5efa\u69cb\u51fd\u6578"}),"\n",(0,e.jsx)(t.p,{children:"\u7528\u4f86\u7522\u751f\u8a72\u985e\u5225\u7684\u5be6\u9ad4\u7684\u51fd\u6578\uff0c\u57fa\u672c\u5ba3\u544a\u65b9\u5f0f\u70ba\u4e00\u500b\u6c92\u6709\u56de\u50b3\u578b\u5225\u4e14\u51fd\u6578\u540d\u7a31\u70ba\u985e\u5225\u540d\u7a31\u7684\u51fd\u6578\u3002"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-dart",children:"class Point {\n  double x = 0;\n  double y = 0;\n\n  // Generative constructor with initializing formal parameters:\n  Point(this.x, this.y);\n}\n"})}),"\n",(0,e.jsx)(t.h2,{id:"default-constructors",children:"Default Constructors"}),"\n",(0,e.jsx)(t.p,{children:"\u5982\u679c\u6c92\u6709\u5b9a\u7fa9 constructor\uff0c\u9810\u8a2d\u6703\u6709\u4e00\u500b\u7121\u53c3\u6578\u7684 default constructor\u3002"}),"\n",(0,e.jsx)(t.h2,{id:"named-constructors",children:"Named Constructors"}),"\n",(0,e.jsx)(t.p,{children:"\u4f7f\u7528 named constructor \u53bb\u5be6\u4f5c\u984d\u5916\u7684 constructor\u3002"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-dart",children:"class Point {\n  double x; \n  double y;\n  Point(this.x, this.y);\n  Point.zero() : x = 0, y = 0;\n  Point.polar(num theta, num radius) {\n    x = cos(theta) * radius;\n    y = sin(theta) * radius;\n  }\n}\n"})}),"\n",(0,e.jsx)(t.admonition,{type:"note",children:(0,e.jsx)(t.p,{children:"Dart \u4e0d\u5141\u8a31 constructor overloading\uff0c\u4f46\u53ef\u7528 named constructor \u66f4\u6e05\u695a\u660e\u66b8\u7684\u5b9a\u7fa9\u4e0d\u540c\u65b9\u6cd5\u53bb\u5efa\u69cb\u985e\u5225\u5be6\u9ad4\u3002"})}),"\n",(0,e.jsx)(t.h2,{id:"initializer-list-\u521d\u59cb\u5316\u5217\u8868",children:"Initializer List \u521d\u59cb\u5316\u5217\u8868"}),"\n",(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsx)(t.li,{children:"\u521d\u59cb\u5316\u5217\u8868\u6703\u5728 constructor \u4e4b\u524d\u57f7\u884c"}),"\n",(0,e.jsx)(t.li,{children:"\u4f7f\u7528\u9017\u865f\u5206\u9694\u521d\u59cb\u5316\u8868\u9054\u5f0f"}),"\n",(0,e.jsx)(t.li,{children:"\u5e38\u7528\u4f86\u8a2d\u7f6e final \u8b8a\u6578\u7684\u521d\u59cb\u503c"}),"\n"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-dart",children:"class Point {\n  final double x;\n  final double y;\n\n  Point(Map<String, double> map): x = map['x']!, y = map['y']!;\n}\n"})}),"\n",(0,e.jsx)(t.h2,{id:"redirecting-constructors",children:"Redirecting Constructors"}),"\n",(0,e.jsxs)(t.p,{children:["\u5728 constructor \u5f8c\u9762\u52a0\u5165 colon ",(0,e.jsx)(t.code,{children:":"})," \u5f8c\uff0c\u5c31\u53ef\u4ee5\u5beb\u8981 redirect \u5230\u7684 constructor"]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-dart",children:"class Point {\n  double x, y;\n\n  // The main constructor for this class.\n  Point(this.x, this.y);\n\n  // Delegates to the main constructor.\n  Point.alongXAxis(double x) : this(x, 0);\n}\n"})}),"\n",(0,e.jsx)(t.h2,{id:"constant-constructors",children:"Constant Constructors"}),"\n",(0,e.jsx)(t.p,{children:"\u5982\u679c\u985e\u5225\u5167\u7684\u6240\u6709 instance variable \u7686\u70ba final\uff0c\u4fbf\u53ef\u5c07 constructor \u52a0\u5165 const \u4fee\u98fe\u3002\n\u4ee3\u8868\u5efa\u69cb\u51fa\u4f86\u7684\u7269\u4ef6\u4e0d\u6703\u518d\u6539\u8b8a\u3002"}),"\n",(0,e.jsxs)(t.admonition,{type:"note",children:[(0,e.jsxs)(t.p,{children:["Member Variables => Fields",(0,e.jsx)(t.br,{}),"\n","Instance Variables => Non-Static Fields",(0,e.jsx)(t.br,{}),"\n","Class Variables => Static Fields"]}),(0,e.jsxs)(t.p,{children:["Variables in a method or block of code => local variables",(0,e.jsx)(t.br,{}),"\n","Variables in method declarations => parameters"]})]}),"\n",(0,e.jsx)(t.h2,{id:"factory-constructors",children:"Factory Constructors"}),"\n",(0,e.jsx)(t.p,{children:"\u5982\u679c\u4e00\u500b constructor \u4e0d\u7e3d\u662f\u8fd4\u56de\u4e00\u500b\u65b0\u7684\u5be6\u9ad4\uff0c\u5c31\u53ef\u4ee5\u7528 factory constructor\u3002"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-dart",children:"class Logger {\n  final String name;\n  bool mute = false;\n\n  // _cache is library-private, thanks to\n  // the _ in front of its name.\n  static final Map<String, Logger> _cache = <String, Logger>{};\n\n  factory Logger(String name) {\n    return _cache.putIfAbsent(name, () => Logger._internal(name));\n  }\n\n  factory Logger.fromJson(Map<String, Object> json) {\n    return Logger(json['name'].toString());\n  }\n\n  Logger._internal(this.name);\n\n  void log(String msg) {\n    if (!mute) print(msg);\n  }\n}\n"})}),"\n",(0,e.jsx)(t.admonition,{type:"note",children:(0,e.jsxs)(t.p,{children:["Factor constructors \u4e0d\u80fd\u7528 ",(0,e.jsx)(t.code,{children:"this"}),"."]})})]})}function u(n={}){const{wrapper:t}={...(0,s.a)(),...n.components};return t?(0,e.jsx)(t,{...n,children:(0,e.jsx)(d,{...n})}):d(n)}},1151:(n,t,r)=>{r.d(t,{Z:()=>i,a:()=>c});var e=r(7294);const s={},o=e.createContext(s);function c(n){const t=e.useContext(o);return e.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function i(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),e.createElement(o.Provider,{value:t},n.children)}}}]);