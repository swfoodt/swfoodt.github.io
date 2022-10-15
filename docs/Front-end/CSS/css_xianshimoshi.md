---
sidebar_position: 3
title: css显示与定位
---

## css 显示模式

<!-- #### css 块级元素 -->

- **css 块级元素**会独占一行，比如 div、p、h1 等等。

<!-- #### css 行内元素 -->

- **css 行内元素**不会独占一行，比如 span、a、strong 等等。

<!-- #### css 行内块级元素 -->

- **css 行内块级元素**不会独占一行，但是可以设置宽高，比如 img、input 等等。

## css 显示模式转换

<!-- #### css display: block -->

- **`css display: block`** 可以将行内元素转换为块级元素。

<!-- #### css display: inline -->

- **`css display: inline`** 可以将块级元素转换为行内元素。

<!-- #### css display: inline-block -->

- **`css display: inline-block`** 可以将块级元素转换为行内块级元素。

## 浮动定位

- **浮动定位** 可以让元素脱离文档流，不占据空间。属于是 “**半脱离状态**” ，会覆盖元素，但是被覆盖元素中的内容会避开上方的浮动元素显示（图文环绕效果）。

- 浮动找浮动，下一个浮动的元素会在上一个浮动的元素左右排列。

- 浮动的元素无法通过 `text-align` 或 `margin: 0 auto` 属性居中

### 清除浮动

- 当一个元素浮动后，它的父元素会因为没有足够的空间而塌陷，这时候就需要清除浮动。

#### 方法一

- 在浮动元素的父元素后面添加一个空的 div，设置 `clear: both` 属性。

```css
//加一个空的div调用clearfix类
.clearfix {
  clear: both;
}
```

#### 方法二

- 单伪元素清除浮动

```css
//用单伪元素
.clearfix::after {
  content: "";
  display: block;
  clear: both;
  //补充写法 为了兼容
  visibility: hidden;
  height: 0;
}
```

#### 方法三

- 给父元素添加 overflow：hidden 属性，这样父元素就会自动包裹住浮动元素，从而清除浮动。

```css
//用overflow
.clearfix {
  overflow: hidden;
}
```
