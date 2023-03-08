---
sidebar_position: 10
title: 补充
---

# 类型别名

类型别名用来给一个类型起个新名字。

```ts
function sum(x: number, y: number): number {
  return x + y;
}

const sum2: (x: number, y: number) => number = sum;
//这里sum2的类型是(x: number, y: number) => number，我们使用类型别名给它起个新名字

type PlusType = (x: number, y: number) => number;

const sum3: PlusType = sum; //两者的类型是一样的
```

在上面的代码中，我们使用类型别名给函数类型起了一个新名字，这样我们就可以在需要的时候复用它。

# 类型断言

当我们使用一个联合类型的变量时，我们只能访问此联合类型的所有类型里共有的属性或方法，但是有时候我们确实需要在还不确定类型的时候就访问其中一个类型的属性或方法，这个时候就可以使用类型断言。

一个例子：

```ts
//number没有length属性，但是string有length属性。
function getLength(input: string | number): number {
  const str = input as String;
  if (str.length) {
    return str.length;
  } else {
    const number = input as Number;
    return number.toString().length;
  }
}

//另一种写法
function getLength(input: string | number): number {
  if ((<string>input).length) {
    return (<string>input).length;
  } else {
    return input.toString().length;
  }
}
```

在上述的情况中，我们首先使用了一个联合类型，`string | number` ，number 没有 length 属性，string 有 length 属性，如果要完成返回输入值的长度的需求，我们需要单独处理 number 类型的情况，这时候就可以使用类型断言。

在上面的代码中，我们使用了两种类型断言的写法，第一种是使用 as，第二种是使用`<>`。

# 第三方库的引入

在 typescript 中使用第三方库，我们需要使用声明文件，来获得对应的代码补全、接口提示等功能。可以使用使用 daclare 关键字声明。以 jQuery 为例：

```ts
//声明文件
declare var jQuery: (selector: string) => any;
```

同样我们也可以使用官方提供好的声明文件，Types 组织提供了很多的第三方库的声明文件，我们可以直接使用，以 jQuery 为例：只需要键入指令`npm install --save @types/jquery`就可以安装对应的声明文件了。

