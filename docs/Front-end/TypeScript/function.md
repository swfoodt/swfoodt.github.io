---
sidebar_position: 5
title: function 函数
---

# function 函数

函数是 JavaScript 中的基本组成部分，TypeScript 为 JavaScript 中的函数提供了完整的定义类型。

函数(function)可以作为参数传递，可以存入数组，可以作为返回值返回等等，这些都是 JavaScript 中的基本特性。

下面是一段简单的函数代码：

```ts
function add(x: number, y: number, z?: number): number {
  if (typeof z === "number") return x + y + z;
  else return x + y;
}

//函数表达式
const add1 = function (x: number, y: number, z?: number): number {
  if (typeof z === "number") return x + y + z;
  else return x + y;
};

let res = add(23, 23, 12);
```

其中可以看到，在 typescript 中，我们需要对于一个函数地参数和其返回值进行类型的定义，这样的话，我们就可以在编译的时候就能够发现一些错误。

## 可选参数

在 TypeScript 中，我们可以使用 `?` 来标记一个参数为可选参数，可选参数必须放在必选参数的后面。在上面的代码之中，z 就是一个可选参数。我们同样可以给可选参数一个默认值，这样的话，当我们没有传入这个参数的时候，就会使用默认值。

例子：

```ts
function add(x: number, y: number, z: number = 10): number {
  return x + y + z;
}

let res = add(23, 23);
```
