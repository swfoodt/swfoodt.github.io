---
sidebar_position: 3
title: Ts 数据类型
---

# 数据类型

在 TypeScript 中，我们可以使用 `number`、`string`、`boolean`、`null`、`undefined`、`数组`、`元组`、`枚举`、`any`、`void`、`never`、`object`、`symbol`、`bigint` 来定义数据类型。

### 基础类型

```ts
let isDone: boolean = true;

let age: number = 21;
let brinaryNumber: number = 0b1010;

let student: string = `sw`;
let intro: string = `hello, ${student}, age is ${age}`;

let un: undefined = undefined;
let nu: null = null;
```

### any 类型

any 类型, 可以任意调用方法和属性,在明确类型的情况下尽量不要使用,以免引入不必要的错误。

```ts
let input: any = 12;
input = `string`;
input = true;
```

### 联合类型

联合类型可以使用 `|` 来表示多个类型。

```ts
let numberOrString: number | string = 123;
numberOrString = `string`;
```

### 数组

```ts
let arrOfNumbers: number[] = [1, 2, 3, 4];
arrOfNumbers.push(5);
```

### 元组

元组是固定长度的数组, 元组中每个元素的类型可以不同。

```ts
let user: [string, number] = [`sw`, 231];
```

这里只对一些相对基础的类型进行了介绍, 以便于后续的学习。
