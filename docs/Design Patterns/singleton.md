---
title: Singleton Pattern 單例模式
---

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



