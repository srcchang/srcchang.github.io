---
title: State Pattern 狀態模式
---

> Allow an object to alter its behaviour when its internal state changes. The object will appear to change its class.

是一種行為型的模式，簡單來說就是一個有限狀態機的實作，在狀態改變後類別的行為會跟著改變。

常見範例：
* JIRA task (OPEN -> IN PROGRESS -> RESOLVED -> CLOSED)
* 小畫家的畫筆，選擇不同顏色跟粗細將能畫出不同顏色跟粗細的線條。

---

一個文字編輯器，可以修改輸入文字的狀態，譬如切換成大寫，小寫或預設。

狀態定義：
```dart
abstract class WritingState {
  void write(String input);
}

class UpperCaseState implements WritingState {
  @override
  void write(String input) {
    print(input.toUpperCase());
  }
}

class LowerCaseState implements WritingState {
  @override
  void write(String input) {
    print(input.toLowerCase());
  }
}

class DefaultState implements WritingState {
  @override
  void write(String input) {
    print(input);
  }
}
```

文字編輯器：
```dart
class TextEditor {
  WritingState _state = DefaultState();

  void setState(WritingState state) {
    _state = state;
  }

  void type(String input) {
    _state.write(input);
  }
}
```

切換文字編輯器的狀態：
```dart
final editor = TextEditor();
editor.type('Aa Bb Cc');

editor.setState(UpperCaseState());
editor.type('Aa Bb Cc');

editor.setState(LowerCaseState());
editor.type('Aa Bb Cc');
```

執行結果：
```
I/flutter ( 4297): Aa Bb Cc
I/flutter ( 4297): AA BB CC
I/flutter ( 4297): aa bb cc
```