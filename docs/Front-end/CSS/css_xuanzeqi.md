---
sidebar_position: 2
title: css选择器
---

## css 标签选择器

- **css 标签选择器**用来选中 html 中的标签，比如 h1、p、div 等等。

```css title="改变所有 h1 标签的字体颜色为红色"
h1 {
  color: red;
}
```

## css 类选择器

- **css 类选择器**用来选中 html 中的类，比如 .title、.content 等等。

```css title="改变所有类为 title 的元素的字体颜色为红色"
.title {
  color: red;
}
```

## css id 选择器

- **css id 选择器**用来选中 html 中的 id，比如 #title、#content 等等。

```css title="改变 id 为 title 的元素的字体颜色为红色"
#title {
  color: red;
}
```

:::caution 注意

id 是唯一的，所以一个页面中只能有一个 id 为 title 的元素。而我们不会使用`id选择器`来设置元素的样式，`id`一般与 js 相配合用来**实现动效设置等等效果**的呈现。

:::

## css 通配符选择器

- **css 通配符选择器**用来选中 html 中的所有元素。

```css title="改变所有元素的字体颜色为红色"
* {
  color: red;
}
```

:::caution 注意

通配符选择器所运用到的样式会影响到所有的元素，所以我们一般情况下只用它清除一些默认的样式。比如清除所有元素的默认边距。

:::

## css 后代选择器

- **css 后代选择器**用来选中 html 中的后代元素，比如 div p、div .title 等等。

```css title="改变所有 div 的后代 p 元素的字体颜色为红色"
div p {
  color: red;
}
```

## css 子代选择器

- **css 子代选择器**用来选中 html 中的子元素，比如 div > p、div > .title 等等。

```css title="改变所有 div 的子元素的字体颜色为红色"
div > * {
  color: red;
}
```

:::caution 注意

后代选择器与子代选择器之间的区别是，子代选择器只选中直接的子元素，不能选中后代元素。

:::

## css 并集选择器

- **css 并集选择器**用来选中多个元素赋予一样的样式。

```css title="改变所有 h1 和 p 的字体颜色为红色"
h1,
p {
  color: red;
}
```

## css 交集选择器

- **css 交集选择器**用于选中同时满足选择器条件的标签。

```css title="改变一个拥有box类的p标签内的字体颜色为红色"
p.box {
  color: red;
}
```

## css 伪类选择器

- **css 伪类选择器**用来选中 html 中的伪类元素，比如 :hover、:active 等等。

```css title="改变鼠标悬浮在 p 标签上时的字体颜色为红色"
p:hover {
  color: red;
}
```

### 结构伪类选择器

- 选择某种标签的第 n 次出现，并赋予其样式。

例子如下：

```css
//所有li标签中的第一个li标签
li:first-child {
  background-color: red;
}

//所有li标签中的最后一个li标签
li:last-child {
  background-color: red;
}

//所有li标签中的第5个li标签
li:nth-child(5) {
  background-color: red;
}

//所有li标签中的倒数第5个li标签
li:nth-last-child(5) {
  background-color: red;
}

//所有li标签中的第偶数个li标签
li:nth-child(even) {
  background-color: red;
}
//或者
li:nth-child(2n) {
  background-color: red;
}
```

:::tip 提示

结构伪类选择器中，`nth-child`的 n 可以是数字、关键字、公式。例如想要选择所有 li 标签中的第 2n+1 个 li 标签，可以使用`li:nth-child(2n+1)`。n 的取值是从 0 开始的（0，1，2，3...）。

:::

## 伪元素

- **伪元素**是一个"假标签"，它可以在某个标签的前面或者后面插入一个标签，这个标签是不在 html 中的，但是它可以给我们带来很多便利。

- 我们可以使用伪元素来添加一些装饰性的内容，比如添加一个小图标。

```css
//在p标签的前面添加一个小图标
p::before {
  content: url(./images/1.png);
  display: inline-block;
}

//在p标签的后面添加一个小图标
p::after {
  content: url(./images/1.png);
  display: inline-block;
}
```

:::tip 提示

'content'属性是必须的，若没有这个属性，伪元素不会显示。

:::
