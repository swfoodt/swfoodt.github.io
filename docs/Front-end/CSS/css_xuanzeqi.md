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

- **css 交集选择器**用来选中多个元素赋予一样的样式。

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
