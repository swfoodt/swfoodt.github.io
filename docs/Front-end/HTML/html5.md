---
sidebar_position: 3
title: HTML5新增内容
---

## html5 新增内容

### 更多的语义化标签

html 增加了很多语义化标签，比如`<header>`、`<footer>`、`<nav>`、`<article>`、`<section>`、`<aside>`、`<main>`等等，这些标签都是为了让我们的网页**更加语义化**，更加**容易被搜索引擎收录**，更加**容易被机器识别**。

许多原先使用 div 实现的区域划分可以使用更多的**语义化标签**来实现，使得 html 文档的结构更加清晰。

:::tip 标签改动

例如上一篇文章所提到的`<b>`,`<i>`标签，已经不在被用作加粗字体和斜体字体的标签，而是标识独立的语句片段，而加粗和斜体的样式可以通过 css 来实现。这样做的目的是**让内容的展示和样式的设置分离**。

:::

### 新增表单元素

- `<datalist>`：用于定义输入域的选项列表，配合`<input>`标签的`list`属性使用。

```html
<form action="demo-form.php" method="get">
  <input list="browsers" name="browser" />
  <datalist id="browsers">
    <option value="Internet Explorer"></option>
    <option value="Firefox"></option>
    <option value="Chrome"></option>
    <option value="Opera"></option>
    <option value="Safari"></option>
  </datalist>

  <input type="submit" />
</form>
```

- `<output>`：用于定义输出结果，配合`<input>`标签的`output`属性使用。

```html
<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
  0 <input type="range" id="a" value="50" />100 +<input
    type="number"
    id="b"
    value="50"
  />
  =<output name="x" for="a b"></output>
</form>
```

- `<keygen>`：用于定义密钥对生成器，配合`<form>`标签的`keygen`属性使用。

```html

<form action="demo_keygen.php" method="get">
  用户名: <input type="text" name="usr_name">
  加密: <keygen name="security">
  <input type="submit">
</form>

```

#### 新增表单属性

- `input`标签新增`color`,可以用来**选择颜色**。
- `input`标签新增`date`,可以用来**选择日期**。
- `input`标签新增`datetime`,可以用来**选择日期（UTC 时间）**。
- `input`标签新增`datetime-local`,可以用来**选择日期和时间**。
- `input`标签新增`email`,可以用来**输入邮箱地址**。
- `input`标签新增`month`,可以用来**选择月份**。
- `input`标签新增`number`,可以用来**输入数字**。
- `input`标签新增`range`,可以用来**输入范围**。
- `input`标签新增`search`,可以用来**输入搜索内容**。
- `input`标签新增`tel`,可以用来**输入电话号码**。
- `input`标签新增`time`,可以用来**选择时间**。

:::info 样例显示

可以移步[w3school](https://www.w3school.com.cn/html/html_form_attributes.asp)查看样例。

:::

- html5 的目的也有减少外部插件的依赖，例如`<video>`标签，可以直接在页面中播放视频，而不需要额外的插件。同样的，`<audio>`标签也可以直接在页面中播放音频。

- html5 的`<canvas>`标签，可以用来绘制图形，例如画板，游戏等，你可以[点击这里](#该博客文章还未完善)来看一个来自 codepen 的 canvas 应用。

- 对于 html5 的简单介绍就到这里，还有许多特性，包括浏览器储存机制的优化等等，这里就不一一介绍了，如果你想了解更多，可以移步[MDN](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)。接下来进入到 css 的部分。
