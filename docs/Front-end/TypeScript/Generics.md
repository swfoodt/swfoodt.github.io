---
sidebar_position: 9
title: Generics 泛型
---

# Generics 泛型

## 为什么使用泛型

在 TypeScript 中，我们可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。这样用户就可以以自己的数据类型来使用组件。

一个简单例子：

```ts
function echo<T>(arg: T): T {
  return arg;
}

const result = echo(true);

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const result1 = swap(["string", 1234]);
console.log(result1[0]); //1234
console.log(result1[1]); //string
```

上述的例子中，我们使用了两个类型参数，分别是 T 和 U。当我们调用 echo 时，即使每次传入的参数类型不同，我们都可以控制它返回值的类型是什么，保证一致性。

## 泛型约束

在一些使用场景中，我们需要对泛型的类型进行约束，比如我们想要获取对象的属性，但是这个属性可能不存在，这时候我们就可以使用泛型约束。

接下来是一个例子，在这个例子中，我们在一个泛型函数中使用了 length 属性，但是这个属性并不是所有类型都有的，所以我们需要对泛型进行约束，使得这个泛型函数可以接受所有包含 length 属性的类型。

不用泛型约束的方式：

```ts
//当使用length属性时，我们无法确定该类型是否有该参数，所以可以提前设置泛型为一个数组类型，但该方法有局限性。
function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

const arrs = echo([1, 2, 3]);
```

上述的解决方式中，我们使用了泛型约束，但是这种方式有局限性，不仅失去了泛型的灵活性，而且还有可能不能满足我们的需求。

使用约束的方式：

```ts
interface IWithLength {
  length: number;
}

function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}
```

我们使用了 extends 关键字，创建了一个接口 IWithLength，然后使用这个接口和 extends 关键字来约束泛型 T。要求所有使用这个泛型的函数必须传入的参数必须包含 length 属性。

## 泛型在类中的应用

我们可以在类中使用泛型，但是在类中使用泛型时，我们需要在类的实例属性上使用泛型，而不是在类的静态属性上使用泛型。

```ts
class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop(): T {
    return this.data.shift();
  }
}

const queue = new Queue<number>();
queue.push(1);
console.log(queue.pop().toFixed()); //1
const queue2 = new Queue<string>();
queue2.push("str");
console.log(queue2.pop().length); //3
```

## 泛型在接口中的应用

我们同样可以在接口中使用泛型，例子如下：

```ts
interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kp1: KeyPair<number, string> = { key: 1, value: "str" };
let kp2: KeyPair<string, number> = { key: "str", value: 123 };

let arr: number[] = [1, 2, 3];
let arrTwo: Array<number> = [1, 2, 3];
```

在上述的例子中，我们使用泛型让接口变得更加灵活，我们可以传入任意类型的参数。

同时，我们使用了两种方式来定义数组，一种是使用了类型别名，另一种是使用了泛型。这两种方式都可以定义数组，但是使用泛型的方式更加灵活，因为我们可以使用泛型来定义多维数组，而使用类型别名的方式则不行。

## 泛型在函数类型中的应用

我们可以使用泛型来定义函数类型，例子如下：

```ts
interface IPlus<T> {
  (a: T, b: T): T;
}

function plus(a: number, b: number): number {
  return a + b;
}

function connect(a: string, b: string): string {
  return a + b;
}

const a: IPlus<number> = plus;
const b: IPlus<string> = connect;
```

在上述的例子中，我们定义了一个接口 IPlus，这个接口的作用是用来约束函数的类型，我们使用了泛型来定义函数的类型，这样我们就可以使用这个接口来约束函数的类型，而不用每次都去定义一个新的接口。
