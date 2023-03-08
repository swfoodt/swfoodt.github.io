---
sidebar_position: 6
title: Class 类
---

# Class 类

## 基本概念

- 类：定义了一件事物的抽象特点，包含它的属性和方法。

- 对象：类的实例。

- 面向对象三大特性：封装（将操作过程隐藏起来，只向外暴露需要使用地接口）、继承（子类继承父类，子类可以拥有父类地所有成员，并且可以更进一步）、多态（一个方法的多个实现）。

## 基础代码

```ts
//创建一个基本动物类
class Animal {
  readonly name: string; //每个动物都有名字
  static categoies: string[] = ["mammal", "bird"]; //静态方法可以由类名直接调用，这意味着静态方法一般与不受其实例化对象影响
  static isAnimal(a: any) {
    return a instanceof Animal;
  }
  constructor(name: string) {
    //构造函数
    this.name = name;
  }

  run() {
    //成员方法
    return `${this.name} is running!! `;
  }
}

const dog = new Animal("wangcai"); //用Animal类创建一个对象
console.log(dog.run());
console.log(Animal.isAnimal(dog));

class Dog extends Animal {
  //创建一个Animal的子类
  constructor(name: string) {
    //重写构造函数时必须要有super关console.log(this.name)键字
    super(name);
    console.log(this.name);
  }
  //新的成员函数
  bark(): string {
    return `${this.name} : wang wang wang!!`;
  }
  //多态 重写run方法
  run(): string {
    return `wang!  ` + super.run();
  }
}

const myDog = new Dog(`dabao`);
console.log(myDog.bark());
console.log(myDog.run());
console.log(Animal.isAnimal(myDog));
```

在上述的代码中，我们实现了一个 Animal 类，其中包含了一个**构造函数**，一个**成员方法**，一个**静态方法**，一个**静态属性**。

- 构造函数：在创建一个类的实例时，会调用构造函数，构造函数中的 this 指向当前的实例。

- 成员方法：可以通过实例对象调用的方法。

- 静态方法、静态属性：可以通过类名直接调用，不需要实例化对象。

我们用 Animal 类创建了一个对象 dog，调用了 dog 的 run 方法。同时我们可以使用 Animal 类的静态方法 isAnimal 来判断一个对象是否是 Animal 类的实例。

然后我们创建了一个 Dog 类，继承了 Animal 类，Dog 类中有一个构造函数，一个成员方法 bark，一个重写的 run 方法。我们用 Dog 类创建了一个对象 myDog，调用了 myDog 的 bark 方法和 run 方法。

## 类的修饰符

- public：公有属性或方法，可以在任何地方被访问到，默认所有的属性和方法都是 public 的。

- private：私有属性或方法，不能在声明它的类的外部访问。

- protected：受保护属性或方法，不能在声明它的类的外部访问，但是可以在子类中访问。

- readonly：只读属性，只允许出现在属性声明或索引签名中。

这些修饰符帮助我们完成一个类的封装。
