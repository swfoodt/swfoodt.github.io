---
sidebar_position: 1
title: HTML基础
---

## HTML 介绍

- `HTML` 是一种用于创建网页的标准**标记语言**，使用一套**标记标签**来描述**网页结构**。

下面是一个简单的 HTML 文档

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
```

可以看到上述在 `<>` 和 `</>` 之间的标签，这些标签就是 HTML 标记标签，它们用来描述网页的结构。

HTML 标签通常是成对出现的，比如 `<head>` 和 `</head>`，`<title>` 和 `</title>`，`<body>` 和 `</body>`，`<h1>` 和 `</h1>`，`<p>` 和 `</p>`。

:::info 语义 HTML

在一个网页中，`<h1>` 标签定义了**标题**，`<p>` 标签定义了**段落**，但是我仍然可以使用 `<div>` 标签来定义**标题**，可以使用 `<h1>` 标签来定义**段落**，这并不影响网页的正常显示，但是这样做会使得网页的结构变得混乱，不利于搜索引擎的优化，也不利于网页的维护。

`<strong>`和`<b>`两个标签都是表示加粗的意思，两者在**视觉效果上表现的是一致的**，但是在语义上，`<strong>`的语义更加的**强烈**，`<b>`只是表示加粗，而`<strong>`表示加粗的同时，**还表示这段文字的重要性更高**。在我们编写 HTML 代码的时候，应该尽量使用语义更加明确的标签。

所以**语义化的 HTML 文档**也就是一个写的很漂亮且便于理解与维护的 HTML 文档。

:::

## HTML 元素

- HTML 元素是由**开始标签**、**结束标签**和**内容**组成的。`<h1>My First Heading</h1>` 就是一个元素。

:::tip 空元素

- HTML 元素中的内容是可以为空的，比如 `<br>`，`<hr>`，`<img>`，`<input>`，`<link>`，他们的作用分别是在网页中插入一个**换行符，水平线，图片，输入框，链接**等等。

:::

## HTML 属性

- HTML 元素可以拥有**属性**，属性提供了有关元素的**额外信息**。

`<a>` 标签的 `href` 属性指定了链接的地址，`<img>` 标签的 `src` 属性指定了图片的地址。

```html title="<a>的href属性"
<a href="https://swfoodt.netlify.app">This is a link</a>
```

:::info HTML

更多 HTML 标签以及其属性请参考 **[HTML 标签参考手册](https://www.runoob.com/tags/ref-byfunc.html)**.

:::
