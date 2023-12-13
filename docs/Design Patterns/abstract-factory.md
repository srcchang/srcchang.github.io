---
title: Abstract Factory Pattern 抽象工廠模式
---

> Provide an interface for creating families of related or dependent objects without specifying their concret classes.

是一個創建型模式，又叫做 `Kit`。

將各個相關/相依的工廠組合起來的工廠。

抽象工廠模式把具有相同風格的一組工廠封裝起來的方法，而不需要指定各工廠具體的類別。

---

假設一個建商要蓋房子，需要門的備料，依據不同材質需求，會有木門、鐵門、塑膠門等的需求，因此會有對應不同的店家，以及對應不同的安裝工人。

定義 Door 介面以及不同材質的實作：
```dart
abstract class Door {
  void getDescription();
}

class WoodenDoor implements Door {
  @override
  void getDescription() {
    print('I\'m a wooden door');
  }
}

class IronDoor implements Door {
  @override
  void getDescription() {
    print('I\'m a iron door');
  }
}
```

定義不同材質的安裝工人：
```dart
abstract class DoorFittingExpert {
  void getDescription();
}

class Welder implements DoorFittingExpert {
  @override
  void getDescription() {
    print('I can only fit iron doors');
  }
}

class Carpenter implements DoorFittingExpert {
  @override
  void getDescription() {
    print('I can only fit wooden doors');
  }
}
```

最後定義了抽象工廠，此抽象工廠封裝了同一種材質的門與安裝工人：
```dart
abstract class DoorFactory {
  Door makeDoor();
  DoorFittingExpert makeFittingExpert();
}

class WoodenDoorFactory implements DoorFactory {
  @override
  Door makeDoor() {
    return WoodenDoor();
  }

  @override
  DoorFittingExpert makeFittingExpert() {
    return Carpenter();
  }
}

class IronDoorFactory implements DoorFactory {
  @override
  Door makeDoor() {
    return IronDoor();
  }

  @override
  DoorFittingExpert makeFittingExpert() {
    return Welder();
  }
}
```

使用時就不須自行處理材質的邏輯，因為門與安裝工人已經被封裝好了：
```dart
final woodenFactory = WoodenDoorFactory();

woodenFactory.makeDoor().getDescription();
woodenFactory.makeFittingExpert().getDescription();

final ironFactory = IronDoorFactory();

ironFactory.makeDoor().getDescription();
ironFactory.makeFittingExpert().getDescription();
```

執行結果：
```
I/flutter ( 4656): I'm a wooden door
I/flutter ( 4656): I can only fit wooden doors
I/flutter ( 4656): I'm a iron door
I/flutter ( 4656): I can only fit iron doors
```

參考：
* [Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns)
* [Abstract Factory](https://github.com/NoobTW/design-patterns-for-humans-cn#-%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%BB%A0abstract-factory)