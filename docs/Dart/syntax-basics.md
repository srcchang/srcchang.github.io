---
title: 語法基礎
draft: true
---

## Variables 變數

產生一個變數並初始化：

```dart
var name = 'Bob';
```

* 以上產生了一個變數叫做 `name`，它包含了對一個 `String` 類型並且值為 `Bob` 的物件的參考 (reference)。

* 這個變數的型別被推論 (inferred) 為 `String` 。

通常也可以直接宣告這個變數的型態：

```dart
String name = 'Bob;
```

## Null safety 空安全

* 在指名一個變數的型態或 function 的參數型態等情況，可以控制該型態是否允許 null。

* 加一個 `?` 在型態後面即代表此型態為 nullable。
  
```dart
String? name
```

* 在使用變數之前一定要對它初始化。而一個 nullable 變數預設自動初始化為 null。
* non-nullable 變數則必須要手動初始化。
  
* Sound null safety 把執行期的問題提升到編譯期就能發現。
* 譬如 non-nullable 變數在以下狀況在編譯期就不會通過：
  * 沒有初始化一個 non-null 的值。
  * 被賦予一個 null 值。

## Default Value 預設值

任何只要是 nullable 的型態，其初始值預設為 null。
```dart
int? lineCount;
assert(lineCount == null);
```

而 non-nullable 型態的變數則必須初始化。
```dart
int lineCount = 0;
```