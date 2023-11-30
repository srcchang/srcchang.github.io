---
title: Facade Pattern 外觀模式
---

> Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.

為一個複雜的子系統提供一個簡化的介面。

---

電腦的開機動作，對使用者來說只要按下電源鍵（簡化的介面），內部實際上完成了大量的工作（複雜的子系統）才完成開機。

定義電腦類別與其內部大量的工作：
```dart
class Computer {
  void getElectricShock() {
    print("Ouch!");
  }

  void makeSound() {
    print("Beep beep!");
  }

  void showLoadingScreen() {
    print("Loading..");
  }

  void bam() {
    print("Ready to be used!");
  }

  void closeEverything() {
    print("Bup bup bup buzzzz!");
  }

  void sooth() {
    print("Zzzzz");
  }

  void pullCurrent() {
    print("Haaah!");
  }
}
```

定義電腦外觀（Facade），只提供開機（turnOn）與關機（turnOff）介面：
```dart
class ComputerFacade {
  final Computer computer;

  const ComputerFacade({required this.computer});

  void turnOn() {
    computer.getElectricShock();
    computer.makeSound();
    computer.showLoadingScreen();
    computer.bam();
  }

  void turnOff() {
    computer.closeEverything();
    computer.pullCurrent();
    computer.sooth();
  }
}
```

執行電腦開關機動作：
```dart
final computer = ComputerFacade(computer: Computer());

    print('start turn on ---');
    computer.turnOn();

    print('now turn off ---');
    computer.turnOff();
```

結果：
```
I/flutter ( 4297): start turn on ---
I/flutter ( 4297): Ouch!
I/flutter ( 4297): Beep beep!
I/flutter ( 4297): Loading..
I/flutter ( 4297): Ready to be used!
I/flutter ( 4297): now turn off ---
I/flutter ( 4297): Bup bup bup buzzzz!
I/flutter ( 4297): Haaah!
I/flutter ( 4297): Zzzzz
```

參考：
* [Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns)
* [Facade](https://github.com/NoobTW/design-patterns-for-humans-cn#-%E5%A4%96%E8%A7%80facade)