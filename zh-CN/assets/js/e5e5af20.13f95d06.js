"use strict";(self.webpackChunksrc_dev=self.webpackChunksrc_dev||[]).push([[4029],{1447:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>i});var a=e(5893),s=e(1151);const c={title:"Adapter Pattern \u8f49\u63a5\u5668\u6a21\u5f0f"},o=void 0,r={id:"Design Patterns/adapter",title:"Adapter Pattern \u8f49\u63a5\u5668\u6a21\u5f0f",description:"Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.",source:"@site/docs/Design Patterns/adapter.md",sourceDirName:"Design Patterns",slug:"/Design Patterns/adapter",permalink:"/zh-CN/Design Patterns/adapter",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Adapter Pattern \u8f49\u63a5\u5668\u6a21\u5f0f"}},l={},i=[];function d(n){const t={a:"a",blockquote:"blockquote",code:"code",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["\u662f\u4e00\u500b\u7d50\u69cb\u5316\u7a0b\u5f0f\u78bc\u7684\u4e00\u7a2e\u6a21\u5f0f\uff0c\u4e5f\u5e38\u88ab\u53eb\u505a ",(0,a.jsx)(t.code,{children:"Wrapper"}),"\u3002"]}),"\n",(0,a.jsxs)(t.p,{children:["\u53ef\u4ee5\u60f3\u50cf\u6210\u51fa\u570b\u6642\u6703\u6e96\u5099\u7684 ",(0,a.jsx)(t.code,{children:"\u842c\u7528\u63d2\u982d"}),"\uff0c\u70ba\u4e86\u7b26\u5408\u5404\u570b\u7684\u63d2\u5ea7\u898f\u683c\uff0c\u8981\u5728\u539f\u672c\u96fb\u5668\u63d2\u982d\u4e0a\u5916\u52a0\u4e00\u500b\u842c\u7528\u63d2\u982d\u4f86\u8f49\u63a5\u3002"]}),"\n",(0,a.jsx)(t.p,{children:"\u5047\u8a2d\u4eca\u5929\u7a0b\u5f0f\u60f3\u8981\u5229\u7528\u4e00\u500b\u7b2c\u4e09\u65b9\u7684 library\uff0c\u4f46\u4ed6\u7684\u8cc7\u6599\u8207\u4ecb\u9762\u8207\u539f\u672c\u7684\u8a2d\u8a08\u4e0d\u76f8\u5bb9\uff0c\u9019\u6642\u5c31\u53ef\u4ee5\u6709\u4e00\u500b Adapter(Wrapper)\u5728\u5176\u4e2d\u9593\uff0c\u8ca0\u8cac\u5c07\u7b2c\u4e09\u65b9 library \u7684\u8cc7\u6599\u8207\u4ecb\u9762\u8f49\u6210\u8207\u8a2d\u8a08\u76f8\u7b26\u3002"}),"\n",(0,a.jsx)(t.p,{children:"Adapter Pattern \u4e5f\u5e38\u7528\u5728\u4e00\u5305\u7368\u7acb\u4e14\u53ef\u88ab\u5171\u7528\u7684\u7a0b\u5f0f\u78bc\uff0c\u5c07\u5b83\u7528 Adapter \u5305\u88dd\u8d77\u4f86\uff0c\u900f\u904e\u4ecb\u9762\u958b\u653e\u7d66\u5176\u4ed6\u7a0b\u5f0f\u78bc\u4f7f\u7528\u3002\u672a\u4f86\u958b\u767c\u7684\u65b0\u7a0b\u5f0f\u78bc\u5c31\u53ea\u6703\u76f8\u4f9d\u65bc Adapter \u4ecb\u9762\u800c\u4e0d\u662f\u5be6\u969b\u7684\u5be6\u4f5c\u3002"}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.p,{children:["\u5047\u8a2d\u6709\u4e00\u500b\u806f\u7d61\u4eba\u7684\u61c9\u7528\u7a0b\u5f0f\uff0c\u6211\u5011\u9700\u8981\u6536\u96c6\u4f86\u81ea\u65bc\u5169\u500b\u4e0d\u540c\u4f86\u6e90\u7684\u806f\u7d61\u4eba\u8cc7\u6599\uff0c\u4e26\u986f\u793a\u6210\u4e00\u500b\u5217\u8868\uff0c\u4f46\u9019\u5169\u7b46\u8cc7\u6599\u5206\u5225\u662f ",(0,a.jsx)(t.code,{children:"JSON"})," \u8ddf ",(0,a.jsx)(t.code,{children:"XML"}),"\u3002\u6b64\u6642\u6211\u5011\u5c31\u53ef\u4ee5\u7528 Adapter Pattern \u4f86\u8655\u7406\u9019\u500b\u554f\u984c\u3002"]}),"\n",(0,a.jsx)(t.p,{children:"\u61c9\u7528\u7a0b\u5f0f\u6240\u9700\u7684\u806f\u7d61\u4eba\u8cc7\u6599\u683c\u5f0f\uff1a"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"class Contact {\n  final String name;\n  final String email;\n\n  const Contact({\n    required this.name,\n    required this.email,\n  });\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u7b2c\u4e09\u65b9 JSON \u8cc7\u6599\u4f86\u6e90\uff1a"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:'class JsonContactsApi {\n  static const _contactsJson = \'\'\'\n  {\n    "contacts": [\n      {\n        "fullName": "John Doe (JSON)",\n        "email": "johndoe@json.com",\n        "address": "abc",\n      },\n      {\n        "fullName": "Emma Doe (JSON)",\n        "email": "emmadoe@json.com",\n        "address": "def",\n      },\n      {\n        "fullName": "Michael Roe (JSON)",\n        "email": "michaelroe@json.com",\n        "address": "ghi",\n      }\n    ]\n  }\n  \'\'\';\n\n  const JsonContactsApi();\n\n  String getContactsJson() => _contactsJson;\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"\u7b2c\u4e09\u65b9 XML \u8cc7\u6599\u4f86\u6e90\uff1a"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"class XmlContactsApi {\n  static const _contactsXml = '''\n  <?xml version=\"1.0\"?>\n  <contacts>\n    <contact>\n      <fullname>John Doe (XML)</fullname>\n      <email>johndoe@xml.com</email>\n      <phone>123</phone>\n    </contact>\n    <contact>\n      <fullname>Emma Doe (XML)</fullname>\n      <email>emmadoe@xml.com</email>\n      <phone>456</phone>\n    </contact>\n    <contact>\n      <fullname>Michael Roe (XML)</fullname>\n      <email>michaelroe@xml.com</email>\n      <phone>789</phone>\n    </contact>\n  </contacts>\n  ''';\n\n  const XmlContactsApi();\n\n  String getContactsXml() => _contactsXml;\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u5b9a\u7fa9 IContactsAdapter \u9019\u500b Interface\uff1a"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"abstract interface class IContactsAdapter {\n  List<Contact> getContacts();\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["JsonContactsAdapter \u5be6\u4f5c\u4e86 IContactsAdapter \u9019\u500b Adapter \u4ecb\u9762\uff0c\u5167\u90e8\u4f7f\u7528 JsonContactsApi \u4f86\u53d6\u5f97 JSON \u683c\u5f0f\u7684 Contacts \u8cc7\u6599\uff0c\u4e26\u8f49\u6210\u61c9\u7528\u7a0b\u5f0f\u6240\u9700\u7684 ",(0,a.jsx)(t.code,{children:"Contact"})," \u683c\u5f0f\u3002"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"class JsonContactsAdapter implements IContactsAdapter {\n  const JsonContactsAdapter({\n    this.api = const JsonContactsApi(),\n  });\n\n  final JsonContactsApi api;\n\n  @override\n  List<Contact> getContacts() {\n    final contactsJson = api.getContactsJson();\n    final contactsList = _parseContactsJson(contactsJson);\n\n    return contactsList;\n  }\n\n  List<Contact> _parseContactsJson(String contactsJson) {\n    final contactsMap = json.decode(contactsJson) as Map<String, dynamic>;\n    final contactsJsonList = contactsMap['contacts'] as List;\n    final contactsList = contactsJsonList.map((json) {\n      final contactJson = json as Map<String, dynamic>;\n\n      return Contact(\n        name: contactJson['fullName'] as String,\n        email: contactJson['email'] as String,\n      );\n    }).toList();\n\n    return contactsList;\n  }\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["\u540c\u6a23\u9053\u7406 XmlContactsAdapter \u5be6\u4f5c\u4e86 IContactsAdapter \u9019\u500b Adapter \u4ecb\u9762\uff0c\u5167\u90e8\u4f7f\u7528 XmlContactsApi \u4f86\u53d6\u5f97 XML \u683c\u5f0f\u7684 Contacts \u8cc7\u6599\uff0c\u4e26\u8f49\u6210\u61c9\u7528\u7a0b\u5f0f\u6240\u9700\u7684 ",(0,a.jsx)(t.code,{children:"Contact"})," \u683c\u5f0f\u3002"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"class XmlContactsAdapter implements IContactsAdapter {\n  const XmlContactsAdapter({\n    this.api = const XmlContactsApi(),\n  });\n\n  final XmlContactsApi api;\n\n  @override\n  List<Contact> getContacts() {\n    final contactsXml = api.getContactsXml();\n    final contactsList = _parseContactsXml(contactsXml);\n\n    return contactsList;\n  }\n\n  List<Contact> _parseContactsXml(String contactsXml) {\n    final xmlDocument = XmlDocument.parse(contactsXml);\n    final contactsList = <Contact>[];\n\n    for (final xmlElement in xmlDocument.findAllElements('contact')) {\n      final name = xmlElement.findElements('fullname').single.innerText;\n      final email = xmlElement.findElements('email').single.innerText;\n\n      contactsList.add(\n        Contact(\n          name: name,\n          email: email,\n        ),\n      );\n    }\n\n    return contactsList;\n  }\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["\u6700\u5f8c\u7a0b\u5f0f\u5c31\u53ef\u4ee5\u900f\u904e\u5169\u500b Adapter \u53d6\u5f97\u5404\u81ea\u7684\u8cc7\u6599\uff0c\u4e26\u5408\u4f75\u6210\u7b26\u5408\u898f\u683c\u7684 ",(0,a.jsx)(t.code,{children:"Contacts"})," \u5217\u8868\u3002"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"const jsonContactsAdapter = JsonContactsAdapter();\nconst xmlContactsAdapter = XmlContactsAdapter();\n\nfinal List<Contact> contacts = [];\ncontacts.addAll(jsonContactsAdapter.getContacts());\ncontacts.addAll(xmlContactsAdapter.getContacts());\n\nfor (Contact contact in contacts) {\n    print('name: ${contact.name}, email: ${contact.email}');\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u8f38\u51fa\u7d50\u679c\uff1a"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"I/flutter ( 5662): name: John Doe (JSON), email: johndoe@json.com\nI/flutter ( 5662): name: Emma Doe (JSON), email: emmadoe@json.com\nI/flutter ( 5662): name: Michael Roe (JSON), email: michaelroe@json.com\nI/flutter ( 5662): name: John Doe (XML), email: johndoe@xml.com\nI/flutter ( 5662): name: Emma Doe (XML), email: emmadoe@xml.com\nI/flutter ( 5662): name: Michael Roe (XML), email: michaelroe@xml.com\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u4ee5\u4e0a\u5373\u5b8c\u6210\u4e86\u900f\u904e Adapter Pattern \u5c07\u539f\u672c\u4e0d\u76f8\u5bb9\u7684\u7b2c\u4e09\u65b9\u8cc7\u6599\u8f49\u6210\u7b26\u5408\u898f\u683c\u7684\u5167\u5bb9\u3002"}),"\n",(0,a.jsx)(t.p,{children:"\u53c3\u8003\uff1a"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Design_Patterns",children:"Design Patterns"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://kazlauskas.dev/flutter-design-patterns-2-adapter/",children:"Flutter Design Patterns: Adapter"})}),"\n"]})]})}function m(n={}){const{wrapper:t}={...(0,s.a)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},1151:(n,t,e)=>{e.d(t,{Z:()=>r,a:()=>o});var a=e(7294);const s={},c=a.createContext(s);function o(n){const t=a.useContext(c);return a.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function r(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),a.createElement(c.Provider,{value:t},n.children)}}}]);