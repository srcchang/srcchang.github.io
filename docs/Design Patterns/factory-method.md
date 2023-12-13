---
title: Factory Method Pattern 工廠方法模式
---

> Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

是一個創建型模式，又叫做 `Virtual Constructor`。

物件的建立是透過工廠方法而不是 Constructor，而工廠方法可以利用介面定義，再透過子類別實作：也可以在父類別實作，在子類別 override。

---

假設有一個人事招募活動，根據不同職缺，需要將面試工作委派給不同的面試官來處理。

定義面試官介面：
```dart
abstract class Interviewer {
    void askQuestions();
}
```

不同職缺的面試官：
```dart
class Developer implements Interviewer {
  @override
  void askQuestions() {
    print('Asking about design patterns!');
  }
}

class Designer implements Interviewer {
  @override
  void askQuestions() {
    print('Asking about material design!');
  }
}
```

定義 HiringManager：
```dart
abstract class HiringManager {

  // Factory method
  Interviewer makeInterviewer();

  void takeInterView() {
    final interviewer = makeInterviewer();
    interviewer.askQuestions();
  }
}
``` 

針對不同職缺擴展所需的面試介面：
```dart
class DevelopmentManager extends HiringManager {
  @override
  Interviewer makeInterviewer() {
    return Developer();
  }
}

class DesignManager extends HiringManager {
  @override
  Interviewer makeInterviewer() {
    return Designer();
  }
}
```

執行面試：
```dart
final devManager = DevelopmentManager();
devManager.takeInterView();

final designManager = DesignManager();
designManager.takeInterView();
```

執行結果：
```dart
I/flutter ( 4656): Asking about design patterns!
I/flutter ( 4656): Asking about material design!
```

透過 override 工廠方法 makeInterviewer() 來建立對應的實體 Developer or Designer 去做面試官。

參考：
* [Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns)
* [Factory Method](https://github.com/NoobTW/design-patterns-for-humans-cn#-%E5%B7%A5%E5%BB%A0%E6%96%B9%E6%B3%95factory-method)