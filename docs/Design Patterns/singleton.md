---
title: Singleton Pattern 單例模式
---

> It's important for some classes to have exactly one instance. Although there can be many printers in a system, there should be only one printer spooler. There should be only one file system and one window manager...

確保該類別的物件只會有一個實例 (instance) 存在。

* 會有一個 static property ***instance*** 來存這個類別實體的引用
* 這個 instance 只能透過一個 static method 叫 getInstance() 來取得
* 這個類別的 constructor 必須為 private，也就是這個類別不能在外部實例化 (instantiate)。

按照定義的實作方式：

```dart
class Singleton {
  static Singleton? _instance;
  
  static Singleton getInstance() {
    return _instance ??= Singleton._internal();
  }
  
  Singleton._internal();
}
```
```dart
// get Singleton instance
final singleton = Singleton.getInstance();
```

Dart 提供了 Factory Constructor 方法：

```dart
class Singleton {
    static Singleton? _instance;

    factory Singleton() {
        return _instance ??= Singleton._internal();
    }

    Singleton._internal();
}
```
```dart
// get Singleton instance
final singleton = Singleton();
```

參考：
* [Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns)