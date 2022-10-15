---
sidebar_position: 6
title: css查漏补缺
---

## css 属性收录规则

- 一些我之前不太确定的 css 属性，一些有用但不太常能想到的标签，包括一些有意思的标签都会被收录在这里。

### 已收录属性

`box-sizing: border-box;`：这个属性**可以让我们设置的盒子宽高包括内边距和边框**。

`overflow: hidden;`：这个属性可以让我们设置的盒子超出部分隐藏。**可以解决嵌套块级元素时发生的塌陷现象**。

## 概念不清

### 脱离文档流的方式

`float：left/right`、`position：absolute/fixed`会脱离文档流。
但是`position：relative`不会脱离文档流。