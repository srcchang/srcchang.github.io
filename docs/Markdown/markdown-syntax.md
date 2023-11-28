---
title: Markdown 語法筆記
---

此篇紀錄關於 markdown 我較常用的寫作語法與最佳實踐。

## Headings 標題

產生標題的方式為加入符號 "#" 在標題文字之前，有幾個"#"即代表第幾個level的標題，符號越多代表level越低。

|  Markdown 語法   | 效果  |
|  ----  | ----  |
| \# Heading Level 1  | <h1>Heading Level 1</h1> |
| \## Heading Level 2  | <h2 data-toc-skip>Heading Level 2</h2> |
| \### Heading Level 3  | <h3 data-toc-skip>Heading Level 3</h3> |
| \#### Heading Level 4  | <h4 data-toc-skip>Heading Level 4</h4> |
| \##### Heading Level 5  | <h5 data-toc-skip>Heading Level 5</h5> |
| \###### Heading Level 6  | <h6 data-toc-skip>Heading Level 6</h6> |

:::note

請務必加入一個空格在 "#" 與標題之中

| &#x2B55; 正確         | &#x274C; 錯誤  |
| ------------------- | ------------------ |
| \# Heading | \#Heading |

:::

## Paragraph 段落

直觀使用空行就可以來做文字的分段。

|  Markdown 語法   | 效果  |
|  ----  | ----  |
| 這是一個段落<br /> <br />這是另一個有很多行很多行很多行很多行很多行很多行很多行很多行的段落  | <p>這是一個段落</p><p>這是另一個有很多行很多行很多行很多行很多行很多行很多行很多行的段落</p> |

:::note

段落首行請不要加入 `空白` 或 `tabs` 來縮排

:::

## Line Breaks 換行

文字要換行直接輸入兩個或以上的行尾空格(trailing whitespaces)即可。  
但由於空格在編輯器內不易閱讀，所以如果有支援 HTML 的話也可以用`<br>`來做換行。

## Emphasis 強調

文字的強調主要有兩種：Bold 粗體, Italic 斜體  

使用 \*\***兩個星號**\*\* 或 \_\___兩個底線__\_\_ 來包圍想變粗體的字。  
使用 \**一個星號*\* 或 \__一個底線_\_ 來包圍想變斜體的字。  
使用 \*\*\****三個星號***\*\*\* 或 \_\_\____三個底線___\_\_\_ 來包圍想變粗又變斜的字。  

但因為底線不能用在文字之中，所以 `建議用星號 *` 來做強調。

## Blockquotes 區塊引言標籤

在段落前面加 `>` 來加入一個 Blockquotes


輸入： 
```markdown
> 這是一個 Blockquotes
```
效果：

> 這是一個 Blockquotes

輸入： 
```markdown
> 這是另一個有很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行的 Blockquotes
```
效果：

> 這是另一個有很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行很多行的 Blockquotes

輸入：
```markdown
> 一個 Blockquotes 裡面也可以有多個段落
>
> 例如這是另一個段落
>
> 居然後面還有一個段路
```
效果：

> 一個 Blockquotes 裡面也可以有多個段落
>
> 例如這是另一個段落
>
> 居然後面還有一個段路

### 巢狀 Nested Blockquotes 

輸入：
```
> 這是一個 Blockquotes
>
>> 這是一個 Nested Blockquotes
```
效果：

> 這是一個 Blockquotes
>
>> 這是一個 Nested Blockquotes

### Blockquotes 內可含有其他元素

至於可以含有什麼元素就需要做個實驗。

輸入：
```
> #### 這是一個 Level 4 的 Heading
>
> - 123
> - 456
> 
> 來個 **粗體** 跟 *斜體*
```
效果：  

>
> - 123
> - 456
> 
> 來個 **粗體** 跟 *斜體*
>

:::note

建議在 Blockquotes 前後都加一行空白。

:::

## Lists 列表
### Ordered List 有序列表

輸入數字與一個點(period)在每行的前面即可，數字不須按照行數，但會按照第一行的行數去累加。  

輸入：
```
1. 第一行
2. 第二行
3. 第三行
```
效果：

1. 第一行
2. 第二行
3. 第三行

輸入：
```
2. 第一行
4. 第二行
8. 第三行
```
效果：

2. 第一行
4. 第二行
8. 第三行

也可以縮排：
```
1. 第一行
    5. 第二行
    9. 第三行
```
效果：  
1. 第一行
    1. 第二行
    1. 第三行

:::note

建議行數按照正確規則寫會比較好閱讀。

:::

### Unordered List 無序列表

輸入 dashes (-), asterisks (*) 或 plus signs (+) 在每行前面即可。

輸入：
```markdown
- 第一行
- 第二行
- 第三行

* 第四行
* 第五行
* 第六行

+ 第七行
+ 第八行
+ 第九行
```

效果：
- 第一行
- 第二行
- 第三行

* 第四行
* 第五行
* 第六行

+ 第七行
+ 第八行
+ 第九行

也可以縮排：
```markdown
* 第一行
    * 第二行
    * 第三行
        * 第四行
        * 第五行
```
效果：  
* 第一行
    * 第二行
    * 第三行
        * 第四行
        * 第五行

:::note

為了相容性問題，建議不要混用不同符號在同一個列表裡面

:::

### 插入其他元素在列表中

透過縮排 `四個空格` 或是 `Tab` 來將其他元素插入列表之中。

#### 插入段落

```markdown
- 第一行
- 第二行

    這是一個段落這是一個段落這是一個段落這是一個段落
    
- 第三行
```
效果：
- 第一行
- 第二行

    這是一個段落這是一個段落這是一個段落這是一個段落
    
- 第三行

#### 插入 Blockquote 區塊引言

```markdown
- 第一行
- 第二行

    > 這是一個 Blockquote
    
- 第三行
```
效果：
- 第一行
- 第二行

    > 這是一個 Blockquote
    
- 第三行

#### 插入程式碼區塊

```markdown
- 第一行
- 第二行

    > 這是一個 Blockquote
    
- 第三行
```
效果：
- 第一行
- 第二行

    > 這是一個 Blockquote
    
- 第三行

## Horizontal Rules 分隔線

使用三個以上的 asterisks (***), dashes (---) 或 underscores (___) 來產生分隔線

:::note
建議在分隔線的上下都加入空行
:::

## Links 超連結

用中括號 [] 包圍超連結的標題，後面用小括號 () 包圍實際的網址。

```markdown
這是一個超連結 [Google](https://www.google.com)
```
效果：

這是一個超連結 [Google](https://www.google.com)

### 強調超連結

一樣可以透過對文字的強調方式來強調超連結

使用 \*\***兩個星號**\*\* 或 \_\___兩個底線__\_\_ 來包圍 **[超連結](https://www.google.com)** 。  
使用 \**一個星號*\* 或 \__一個底線_\_ 來包圍想變斜體的 *[超連結](https://www.google.com)*。  
使用 \*\*\****三個星號***\*\*\* 或 \_\_\____三個底線___\_\_\_ 來包圍想變粗又變斜的 ***[超連結](https://www.google.com)*** 。  

### 參考類型的連結

包含兩個部分，第一個部分是寫在文章中，第二個部分寫在文末。

#### 文章中的寫法

```markdown
[google] [1]
```

#### 文末的寫法

```markdown
* [1]: https://www.google.com 'google'
```

#### 實際範例

```markdown
這是一篇文章，文章裡面有參考[某個連結][1]的內容，同時又參考了[第二個連結][2]的內容。

[1]: https://www.google.com '某個連結'
[2]: https://www.google.com '第二個連結'
```

效果：

> 這是一篇文章，文章裡面有參考[某個連結][1]的內容，同時又參考了[第二個連結][2]的內容。
> 
> [1]: https://www.google.com '某個連結'
> [2]: https://www.google.com '第二個連結'

## 圖片

在文件中加入圖片的方式與超連結類似，只需多加一個驚嘆號 (!) 在前面即可。

```markdown
![Google Logo](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png "Google Logo")
```

效果：

![Google Logo](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png "Google Logo")

### 有超連結的圖片

用中括號 [] 包住圖片的所有內容，再用小括號 () 將超連結網址寫在後面即可。

```markdown
[![Google Logo](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png "Google Logo")](https://www.google.com)
```

效果：

[![Google Logo](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png "Google Logo")](https://www.google.com)


參考：
* [Markdown Guide - Basic Syntax](https://www.markdownguide.org/basic-syntax/)