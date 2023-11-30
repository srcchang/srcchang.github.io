---
title: Strategy Pattern 策略模式
---

> Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

是一種行為模式，又叫做 `Policy`。

主要概念為將一群相似或可以達到相同目的的不同演算法或程式碼，分別取出來包裝成策略類別並定義好統一的介面。

:::tip

策略模式允許你根據情況切換演算法或策略。

:::

常見的範例有：

* 排序演算法：每種演算法 (e.g. bubble sort, quicksort, etc.) 被分離成各自的策略類別，並透過一致的介面給 client 使用，clent 可以因應需求無痛抽換不同的演算法，甚至新增其他演算法。
* 付款策略：提供不同的付款方式 (e.g. Credit Card, Apple Pay, Line Pay, etc.) 給客戶選擇。
* RPG 遊戲的受傷計算：定義不同的攻擊模式 (輕攻擊, 重攻擊, Combo攻擊等等)，每種攻擊模式會造成不等的傷害值。

---

假設現在要對一筆資料做排序，首先我們實作了泡沫排序法 (bubble sort)，但隨著資料量變多後，泡沫排序法速度越來越慢，因此又針對大筆資料實作了快速排序法，但快速排序法在資料量不大的時候速度比較慢。因此可以針對不同資料量選擇不同的演算法或策略。

```dart

```



參考：
* [Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns)
* [Strategy](https://github.com/NoobTW/design-patterns-for-humans-cn#-%E7%AD%96%E7%95%A5strategy)