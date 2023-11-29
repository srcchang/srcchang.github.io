---
title: Template Method Pattern 模板方法模式
---

> Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.

當有一段流程一致的邏輯，但這段流程的實作可能對應不同物件有不同的實作，我們將這段邏輯與流程獨立出來建立 Template Method，重複使用不變的邏輯流程，然後覆寫不同的部分。

---

假設有一款遊戲，角色的攻擊流程不變，都是：
* 舉起武器
* 攻擊敵人
* 放下武器

將攻擊流程做成一個 Template Method：
```dart
abstract class AttackFlow {
  void pickUpWeapon();

  void hitEnemy();

  void putDownWeapon();

  void attack() {
    pickUpWeapon();
    hitEnemy();
    putDownWeapon();
  }
}
```

設計兩種攻擊模式，分別為巫師跟戰士：
```dart
class WizardAttack extends AttackFlow {
  @override
  void pickUpWeapon() {
    print('raise the wand');
  }

  @override
  void hitEnemy() {
    print('Wingardium Leviosa!');
  }

  @override
  void putDownWeapon() {
    print('lowering the wand');
  }
}
```

```dart
class WarriorAttack extends AttackFlow {
  @override
  void pickUpWeapon() {
    print('raise the sword');
  }

  @override
  void hitEnemy() {
    print('slash attack');
  }

  @override
  void putDownWeapon() {
    print('lowering the sword');
  }
}
```

角色類別，可以注入攻擊模式介面的實作：
```dart
class Character {
  final AttackFlow attackFlow;

  const Character({required this.attackFlow});

  void attack() {
    attackFlow.attack();
  }
}
```

使用時就可以建立兩種不同攻擊模式的角色：
```dart
final wizardAttack = WizardAttack();
final warriorAttack = WarriorAttack();

final wizard = Character(attackFlow: wizardAttack);
final warrior = Character(attackFlow: warriorAttack);

wizard.attack();
warrior.attack();
```

輸出結果：
```dart
I/flutter (13504): raise the wand
I/flutter (13504): Wingardium Leviosa!
I/flutter (13504): lowering the wand
I/flutter (13504): raise the sword
I/flutter (13504): slash attack
I/flutter (13504): lowering the sword
```

以上我們就將攻擊流程邏輯建立成 Template Method，而依照不同的攻擊再分別去實作其不同的內容。

參考：
* [Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns)
* [Template Method Pattern](https://medium.com/bucketing/behavioral-patterns-template-method-pattern-fb2a7766b501)