---
title: 基本介紹
---

> A design pattern names, abstracts, and identifies the key aspects of a common design structure that make it useful for creating a reusable object-oriented design.

Design Patterns 是經常性問題的解決方案; 是如何解決特定問題的指導方針。

它們不是類別、包或庫，只要加到程式中就能起作用。它們是關於如何在特定的情況下解決特定問題的指導方針。

:::warning

* Design Patterns 不是萬靈丹。
* 強迫套用設計模式常常會出問題。
* 設計模式是用來解決問題，而不是尋找問題，切記不要 over design。

:::

## Creational Patterns - 創建型模式

創建型模式關注於如何產生一個實體或一組相關的物件。

* [Singleton Pattern 單例模式](singleton.md)
* [Factory Method Pattern 工廠方法模式](factory-method.md)
* [Abstract Factory Pattern 抽象工廠模式](abstract-factory.md)

## Behavioral Patterns - 行為型模式

行為型模式處理的是物件之間的職責分配。不只指定結構，還勾勒出物件之間的通訊模式。

* [Template Method Pattern 模板方法模式](template-method.md)
* [Strategy Pattern 策略模式](strategy.md)
* [State Pattern 狀態模式](state.md)
* [Interpreter Pattern 解釋器模式](interpreter.md)
* [Command Pattern 命令模式](command.md)

## Structural Patterns - 結構型模式

結構型模式主要關注的是用什麼方式將類別或物件組合成更大的結構。

* [Adapter Pattern 轉接器模式](adapter.md)
* [Composite Pattern 複合模式](composite/composite.md)
* [Facade Pattern 外觀模式](facade.md)