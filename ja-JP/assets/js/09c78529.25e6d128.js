"use strict";(self.webpackChunksrc_dev=self.webpackChunksrc_dev||[]).push([[6752],{5859:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=r(5893),o=r(1151);const i={title:"Abstract Factory Pattern \u62bd\u8c61\u5de5\u5ee0\u6a21\u5f0f"},s=void 0,c={id:"Design Patterns/abstract-factory",title:"Abstract Factory Pattern \u62bd\u8c61\u5de5\u5ee0\u6a21\u5f0f",description:"Provide an interface for creating families of related or dependent objects without specifying their concret classes.",source:"@site/docs/Design Patterns/abstract-factory.md",sourceDirName:"Design Patterns",slug:"/Design Patterns/abstract-factory",permalink:"/ja-JP/Design Patterns/abstract-factory",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Abstract Factory Pattern \u62bd\u8c61\u5de5\u5ee0\u6a21\u5f0f"}},a={},d=[];function l(n){const e={a:"a",blockquote:"blockquote",code:"code",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"Provide an interface for creating families of related or dependent objects without specifying their concret classes."}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["\u662f\u4e00\u500b\u5275\u5efa\u578b\u6a21\u5f0f\uff0c\u53c8\u53eb\u505a ",(0,t.jsx)(e.code,{children:"Kit"}),"\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u5c07\u5404\u500b\u76f8\u95dc/\u76f8\u4f9d\u7684\u5de5\u5ee0\u7d44\u5408\u8d77\u4f86\u7684\u5de5\u5ee0\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u62bd\u8c61\u5de5\u5ee0\u6a21\u5f0f\u628a\u5177\u6709\u76f8\u540c\u98a8\u683c\u7684\u4e00\u7d44\u5de5\u5ee0\u5c01\u88dd\u8d77\u4f86\u7684\u65b9\u6cd5\uff0c\u800c\u4e0d\u9700\u8981\u6307\u5b9a\u5404\u5de5\u5ee0\u5177\u9ad4\u7684\u985e\u5225\u3002"}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.p,{children:"\u5047\u8a2d\u4e00\u500b\u5efa\u5546\u8981\u84cb\u623f\u5b50\uff0c\u9700\u8981\u9580\u7684\u5099\u6599\uff0c\u4f9d\u64da\u4e0d\u540c\u6750\u8cea\u9700\u6c42\uff0c\u6703\u6709\u6728\u9580\u3001\u9435\u9580\u3001\u5851\u81a0\u9580\u7b49\u7684\u9700\u6c42\uff0c\u56e0\u6b64\u6703\u6709\u5c0d\u61c9\u4e0d\u540c\u7684\u5e97\u5bb6\uff0c\u4ee5\u53ca\u5c0d\u61c9\u4e0d\u540c\u7684\u5b89\u88dd\u5de5\u4eba\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5b9a\u7fa9 Door \u4ecb\u9762\u4ee5\u53ca\u4e0d\u540c\u6750\u8cea\u7684\u5be6\u4f5c\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-dart",children:"abstract class Door {\n  void getDescription();\n}\n\nclass WoodenDoor implements Door {\n  @override\n  void getDescription() {\n    print('I\\'m a wooden door');\n  }\n}\n\nclass IronDoor implements Door {\n  @override\n  void getDescription() {\n    print('I\\'m a iron door');\n  }\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5b9a\u7fa9\u4e0d\u540c\u6750\u8cea\u7684\u5b89\u88dd\u5de5\u4eba\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-dart",children:"abstract class DoorFittingExpert {\n  void getDescription();\n}\n\nclass Welder implements DoorFittingExpert {\n  @override\n  void getDescription() {\n    print('I can only fit iron doors');\n  }\n}\n\nclass Carpenter implements DoorFittingExpert {\n  @override\n  void getDescription() {\n    print('I can only fit wooden doors');\n  }\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u6700\u5f8c\u5b9a\u7fa9\u4e86\u62bd\u8c61\u5de5\u5ee0\uff0c\u6b64\u62bd\u8c61\u5de5\u5ee0\u5c01\u88dd\u4e86\u540c\u4e00\u7a2e\u6750\u8cea\u7684\u9580\u8207\u5b89\u88dd\u5de5\u4eba\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-dart",children:"abstract class DoorFactory {\n  Door makeDoor();\n  DoorFittingExpert makeFittingExpert();\n}\n\nclass WoodenDoorFactory implements DoorFactory {\n  @override\n  Door makeDoor() {\n    return WoodenDoor();\n  }\n\n  @override\n  DoorFittingExpert makeFittingExpert() {\n    return Carpenter();\n  }\n}\n\nclass IronDoorFactory implements DoorFactory {\n  @override\n  Door makeDoor() {\n    return IronDoor();\n  }\n\n  @override\n  DoorFittingExpert makeFittingExpert() {\n    return Welder();\n  }\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u4f7f\u7528\u6642\u5c31\u4e0d\u9808\u81ea\u884c\u8655\u7406\u6750\u8cea\u7684\u908f\u8f2f\uff0c\u56e0\u70ba\u9580\u8207\u5b89\u88dd\u5de5\u4eba\u5df2\u7d93\u88ab\u5c01\u88dd\u597d\u4e86\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-dart",children:"final woodenFactory = WoodenDoorFactory();\n\nwoodenFactory.makeDoor().getDescription();\nwoodenFactory.makeFittingExpert().getDescription();\n\nfinal ironFactory = IronDoorFactory();\n\nironFactory.makeDoor().getDescription();\nironFactory.makeFittingExpert().getDescription();\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u57f7\u884c\u7d50\u679c\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"I/flutter ( 4656): I'm a wooden door\nI/flutter ( 4656): I can only fit wooden doors\nI/flutter ( 4656): I'm a iron door\nI/flutter ( 4656): I can only fit iron doors\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u53c3\u8003\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Design_Patterns",children:"Design Patterns"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://github.com/NoobTW/design-patterns-for-humans-cn#-%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%BB%A0abstract-factory",children:"Abstract Factory"})}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},1151:(n,e,r)=>{r.d(e,{Z:()=>c,a:()=>s});var t=r(7294);const o={},i=t.createContext(o);function s(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);