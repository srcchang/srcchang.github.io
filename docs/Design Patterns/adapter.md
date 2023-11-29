---
title: Adapter Pattern 轉接器模式
---

> Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.

是一個結構化程式碼的一種模式，也常被叫做 `Wrapper`。

可以想像成出國時會準備的 `萬用插頭`，為了符合各國的插座規格，要在原本電器插頭上外加一個萬用插頭來轉接。

假設今天程式想要利用一個第三方的 library，但他的資料與介面與原本的設計不相容，這時就可以有一個 Adapter(Wrapper)在其中間，負責將第三方 library 的資料與介面轉成與設計相符。

Adapter Pattern 也常用在一包獨立且可被共用的程式碼，將它用 Adapter 包裝起來，透過介面開放給其他程式碼使用。未來開發的新程式碼就只會相依於 Adapter 介面而不是實際的實作。

---

假設有一個聯絡人的應用程式，我們需要收集來自於兩個不同來源的聯絡人資料，並顯示成一個列表，但這兩筆資料分別是 `JSON` 跟 `XML`。此時我們就可以用 Adapter Pattern 來處理這個問題。

應用程式所需的聯絡人資料格式：
```dart
class Contact {
  final String name;
  final String email;

  const Contact({
    required this.name,
    required this.email,
  });
}
```

第三方 JSON 資料來源：
```dart
class JsonContactsApi {
  static const _contactsJson = '''
  {
    "contacts": [
      {
        "fullName": "John Doe (JSON)",
        "email": "johndoe@json.com",
        "address": "abc",
      },
      {
        "fullName": "Emma Doe (JSON)",
        "email": "emmadoe@json.com",
        "address": "def",
      },
      {
        "fullName": "Michael Roe (JSON)",
        "email": "michaelroe@json.com",
        "address": "ghi",
      }
    ]
  }
  ''';

  const JsonContactsApi();

  String getContactsJson() => _contactsJson;
}
```

第三方 XML 資料來源：
```dart
class XmlContactsApi {
  static const _contactsXml = '''
  <?xml version="1.0"?>
  <contacts>
    <contact>
      <fullname>John Doe (XML)</fullname>
      <email>johndoe@xml.com</email>
      <phone>123</phone>
    </contact>
    <contact>
      <fullname>Emma Doe (XML)</fullname>
      <email>emmadoe@xml.com</email>
      <phone>456</phone>
    </contact>
    <contact>
      <fullname>Michael Roe (XML)</fullname>
      <email>michaelroe@xml.com</email>
      <phone>789</phone>
    </contact>
  </contacts>
  ''';

  const XmlContactsApi();

  String getContactsXml() => _contactsXml;
}
```

定義 IContactsAdapter 這個 Interface：
```dart
abstract interface class IContactsAdapter {
  List<Contact> getContacts();
}
```

JsonContactsAdapter 實作了 IContactsAdapter 這個 Adapter 介面，內部使用 JsonContactsApi 來取得 JSON 格式的 Contacts 資料，並轉成應用程式所需的 `Contact` 格式。

```dart
class JsonContactsAdapter implements IContactsAdapter {
  const JsonContactsAdapter({
    this.api = const JsonContactsApi(),
  });

  final JsonContactsApi api;

  @override
  List<Contact> getContacts() {
    final contactsJson = api.getContactsJson();
    final contactsList = _parseContactsJson(contactsJson);

    return contactsList;
  }

  List<Contact> _parseContactsJson(String contactsJson) {
    final contactsMap = json.decode(contactsJson) as Map<String, dynamic>;
    final contactsJsonList = contactsMap['contacts'] as List;
    final contactsList = contactsJsonList.map((json) {
      final contactJson = json as Map<String, dynamic>;

      return Contact(
        name: contactJson['fullName'] as String,
        email: contactJson['email'] as String,
      );
    }).toList();

    return contactsList;
  }
}
```

同樣道理 XmlContactsAdapter 實作了 IContactsAdapter 這個 Adapter 介面，內部使用 XmlContactsApi 來取得 XML 格式的 Contacts 資料，並轉成應用程式所需的 `Contact` 格式。

```dart
class XmlContactsAdapter implements IContactsAdapter {
  const XmlContactsAdapter({
    this.api = const XmlContactsApi(),
  });

  final XmlContactsApi api;

  @override
  List<Contact> getContacts() {
    final contactsXml = api.getContactsXml();
    final contactsList = _parseContactsXml(contactsXml);

    return contactsList;
  }

  List<Contact> _parseContactsXml(String contactsXml) {
    final xmlDocument = XmlDocument.parse(contactsXml);
    final contactsList = <Contact>[];

    for (final xmlElement in xmlDocument.findAllElements('contact')) {
      final name = xmlElement.findElements('fullname').single.innerText;
      final email = xmlElement.findElements('email').single.innerText;

      contactsList.add(
        Contact(
          name: name,
          email: email,
        ),
      );
    }

    return contactsList;
  }
}
```

最後程式就可以透過兩個 Adapter 取得各自的資料，並合併成符合規格的 `Contacts` 列表。

```dart
const jsonContactsAdapter = JsonContactsAdapter();
const xmlContactsAdapter = XmlContactsAdapter();

final List<Contact> contacts = [];
contacts.addAll(jsonContactsAdapter.getContacts());
contacts.addAll(xmlContactsAdapter.getContacts());

for (Contact contact in contacts) {
    print('name: ${contact.name}, email: ${contact.email}');
}
```

輸出結果：
```
I/flutter ( 5662): name: John Doe (JSON), email: johndoe@json.com
I/flutter ( 5662): name: Emma Doe (JSON), email: emmadoe@json.com
I/flutter ( 5662): name: Michael Roe (JSON), email: michaelroe@json.com
I/flutter ( 5662): name: John Doe (XML), email: johndoe@xml.com
I/flutter ( 5662): name: Emma Doe (XML), email: emmadoe@xml.com
I/flutter ( 5662): name: Michael Roe (XML), email: michaelroe@xml.com
```

以上即完成了透過 Adapter Pattern 將原本不相容的第三方資料轉成符合規格的內容。

參考：
* [Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns)
* [Flutter Design Patterns: Adapter](https://kazlauskas.dev/flutter-design-patterns-2-adapter/)