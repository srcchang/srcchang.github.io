---
title: Constructors 建構函數
---

# Constructors 建構函數

用來產生該類別的實體的函數，基本宣告方式為一個沒有回傳型別且函數名稱為類別名稱的函數。

```dart
class Point {
  double x = 0;
  double y = 0;

  // Generative constructor with initializing formal parameters:
  Point(this.x, this.y);
}
```

## Default Constructors

如果沒有定義 constructor，預設會有一個無參數的 default constructor。

## Named Constructors

使用 named constructor 去實作額外的 constructor。

```dart
class Point {
  double x; 
  double y;
  Point(this.x, this.y);
  Point.zero() : x = 0, y = 0;
  Point.polar(num theta, num radius) {
    x = cos(theta) * radius;
    y = sin(theta) * radius;
  }
}
```

:::note

Dart 不允許 constructor overloading，但可用 named constructor 更清楚明暸的定義不同方法去建構類別實體。

:::

## Initializer List 初始化列表

* 初始化列表會在 constructor 之前執行
* 使用逗號分隔初始化表達式
* 常用來設置 final 變數的初始值

```dart
class Point {
  final double x;
  final double y;

  Point(Map<String, double> map): x = map['x']!, y = map['y']!;
}
```

## Redirecting Constructors

在 constructor 後面加入 colon `:` 後，就可以寫要 redirect 到的 constructor

```dart
class Point {
  double x, y;

  // The main constructor for this class.
  Point(this.x, this.y);

  // Delegates to the main constructor.
  Point.alongXAxis(double x) : this(x, 0);
}
```

## Constant Constructors

如果類別內的所有 instance variable 皆為 final，便可將 constructor 加入 const 修飾。
代表建構出來的物件不會再改變。

:::note

Member Variables => Fields   
Instance Variables => Non-Static Fields   
Class Variables => Static Fields   

Variables in a method or block of code => local variables   
Variables in method declarations => parameters   

:::

## Factory Constructors

如果一個 constructor 不總是返回一個新的實體，就可以用 factory constructor。

```dart
class Logger {
  final String name;
  bool mute = false;

  // _cache is library-private, thanks to
  // the _ in front of its name.
  static final Map<String, Logger> _cache = <String, Logger>{};

  factory Logger(String name) {
    return _cache.putIfAbsent(name, () => Logger._internal(name));
  }

  factory Logger.fromJson(Map<String, Object> json) {
    return Logger(json['name'].toString());
  }

  Logger._internal(this.name);

  void log(String msg) {
    if (!mute) print(msg);
  }
}
```
:::note

Factor constructors 不能用 `this`.

:::