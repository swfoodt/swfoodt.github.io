---
sidebar_position: 7
title: 类与接口
---

# 类与接口

之前的学习中我们可以使用子类来继承父类的属性和方法，但是有时候我们只需要某些特性，这时候再使用继承就显得有些笨重，我们可以使用接口将这些特性抽离出来，这样就可以在不同的类中复用这些特性。提高了面向对象编程的灵活性。

## 实例说明

如果我们有一个 Car 类和一个 Phone 类，它们都有一个 switchRadio 方法来打开关闭收音机。如果说这时候我们寻找一个 Car 和 Phone 的父类，就显得不合理且笨重，因为这两个类并没有更多共同的特性。这时候我们可以使用接口来抽离这些特性。

```ts
//使用接口抽象出特性
interface Radio {
  switchRadio(): void;
}

// interface Battery {
//   checkBatteryStatus(): void;
// }

interface RadioWithBattery extends Radio {
  checkBatteryStatus(): void;
}

class Car implements RadioWithBattery {
  //打开关闭radio
  switchRadio() {}
  //检查电池状态
  checkBatteryStatus() {}
}

class Phone implements RadioWithBattery {
  //打开关闭radio
  switchRadio() {}
  //检查电池状态
  checkBatteryStatus() {}
}
```

在上述的代码中，Car 类和 Phone 类都有控制收音机、检查电池的方法。这时候我们可以使用接口来抽离这些特性，然后在 Car 类和 Phone 类中实现这些特性。
