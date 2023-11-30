---
title: Composite Pattern 複合模式
---

> Compose objects into tree structures to represent part-whole hierarchies.
> Composite lets clients treat individual objects and compositions of objects uniformly.

將物件之間的關聯組合成一個樹狀結構，讓 client 端對所有樹中的 node 都有一致的介面。   

![tree](./img/tree.jpeg)

資料夾 (the node whitch has subtree) 與資料夾內的檔案 (leaf node) 即為一個典型的 Composite Pattern。   

對每個資料夾以及資料夾內的檔案都可以取得它的 Size, 建立日期, 與名稱等等，就是他們有一致的介面。 

Flutter 的 Widget Tree 也是一個典型的範例。


參考：
* [Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns)
* [Flutter Design Patterns: Composite](https://kazlauskas.dev/flutter-design-patterns-4-composite/)