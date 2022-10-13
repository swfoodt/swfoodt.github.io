---
sidebar_position: 1
title: css书写顺序
---

- **css 书写顺序**：布局定位属性 > 自身样式 > 文本样式 > 其他样式。

- 注重 css 书写顺序可以减少浏览器 reflow，提高浏览器渲染性能。

样例：

```css
.box {
  /* 布局定位属性 */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* 自身样式 */
  width: 100px;
  height: 100px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #000;
  background: #fff;
  /* 文本样式 */
  font-size: 14px;
  font-weight: bold;
  color: #000;
  /* 其他样式 */
  cursor: pointer;
  opacity: 1;
}
```

<!-- - css 是层叠样式表，用来控制网页的样式，比如字体大小、颜色、背景颜色、边框、位置等等。

- css 由选择器和声明组成，选择器用来选中 html 中的元素，声明用来设置元素的样式。

### css 引入方式

- css 有三种引入方式，分别是内联、内部和外部。

### css 选择器

- css 选择器有很多种，比如元素选择器、类选择器、id 选择器、通配符选择器、后代选择器、子选择器、相邻兄弟选择器、通用兄弟选择器等等。

- css 选择器的优先级是由权重和顺序决定的，权重是由选择器的类型决定的，顺序是由选择器的位置决定的。权重从高到低依次是：内联样式 > id 选择器 > 类选择器 > 标签选择器 > 通配符选择器。

- css 选择器的优先级可以通过 !important 来提高。

### css 常用属性

- css 常用属性有 字体属性、文本属性、背景属性、边框属性、盒模型属性、定位属性、浮动属性、列表属性、表格属性、动画属性等等。

### css 常用单位

- css 常用单位有 px、em、rem、%、vh、vw、vmin、vmax、ex、ch、cm、mm、in、pt、pc 等等。

### css 常用布局方式

- css 常用布局方式有 float 布局、flex 布局、grid 布局、table 布局、position 布局等等。

### css 常用动画方式

- css 常用动画方式有 transition、animation 等等。 -->
