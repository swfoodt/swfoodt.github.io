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

在上面的代码中，我们使用了两种类型断言的写法，第一种是使用 as，第二种是使用<>。

# 第三方库的引入

在 typescript 中使用第三方库，我们需要使用声明文件，来获得对应的代码补全、接口提示等功能。可以使用使用 daclare 关键字声明。以 jQuery 为例：

```ts
//声明文件
declare var jQuery: (selector: string) => any;
```

同样我们也可以使用官方提供好的声明文件，Types 组织提供了很多的第三方库的声明文件，我们可以直接使用，以 jQuery 为例：只需要键入指令`npm install --save @types/jquery`就可以安装对应的声明文件了。

<!-- 这是我参与「第五届青训营」伴学笔记创作活动的第 8 天，今天准备着手制作一个简单的基于 react+ts 的 Space 组件。自己之前没有接触过有关组件库的编写，文章中若出现错误欢迎指正。

# Space 组件

## 需求分析

一个简单的 Space 组件需要的哪些功能？ 作为一个布局组件，它需要能够控制子组件的排列方式，排列方向，子组件之间的间隔距离，还有是否能够换行等功能。还有能够控制子组件高度等等功能，但是今天暂且先实现一个简单的版本尝试一下。

## 接口定义

```ts
export enum SpaceingSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

export enum Direction {
  Horizontal = "horizontal",
  Vertical = "vertical",
}

export enum Side {
  Left = "left",
  Right = "right",
  Center = "center",
}

interface BaseSpaceProps {
  size?: SpaceingSize;
  wrap?: boolean;
  side?: Side;
  direction?: Direction;
}
```

我们为组件定义了一些基本参数，size 表示子组件之间的间距，wrap 表示是否换行，side 表示子组件在父组件中的位置，direction 表示子组件的排列方向。这些都是可选属性。

#### 有关 eslint 与本地代码格式化插件 Prettier 的冲突

在初次使用 eslint 时出现的报错发现和 Prettier 有关，两者对于格式化代码的要求有冲突，根据报错，在我的环境中，冲突的地方有以下三点：

- 使用单双引号的冲突
- 行末分号的冲突
- 末行逗号添加的冲突

我选择修改 Prettier 的配置来解决，在根目录创建文件.prettierrc，加入下列配置：

```
{
  "singleQuote": true,
  "semi": false,
  "trailingComma": "none"
}
```

冲突解决。

## 组件实现

```ts
const Space: React.FC<SpaceProps> = (props) => {
  const { size, wrap, side, direction, children, ...restProps } = props;
  const classes = classNames("Space", {
    [`Space-${direction}`]: direction,
    "Space-break": direction === Direction.Horizontal && wrap,
    [`Space-vertical-${side}`]: direction === Direction.Vertical && side,
    [`Space-horizontal-${side}`]: direction === Direction.Horizontal && side,
  });
  const itemClasses = classNames("Space_item", {
    [`Space-${size}`]: size,
  });
  return (
    <div className={classes} {...restProps}>
      {React.Children.map(children, (child) => (
        <div className={itemClasses}>{child}</div>
      ))}
    </div>
  );
};

Space.defaultProps = {
  size: SpaceingSize.Medium,
  direction: Direction.Horizontal,
  wrap: true,
  side: Side.Left,
};
```

在代码中，我们使用了 classnames 库来动态生成类名，这样可以减少代码量，使代码更加简洁。根据不同的参数，我们传入相应的 className，这样就可以实现不同的样式效果。

在组件中，我们使用了 React.Children.map 方法来遍历子组件，然后将子组件包裹在一个 div 中，这样就可以实现子组件之间的间距了。暂时没想到更好的方法。

下次更新再来完善这个组件，并且进行组件测试。


# 什么是 React Hook

React Hook 是 React 16.8 版本新增的特性，它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

## class 组件的痛点

- 组件逻辑难以复用，之前的解决方案是使用高阶组件（HOC）或者 render props，但是这两种方案都有一些缺点。

- 复杂组件变得难以理解，因为逻辑被拆分到不同的生命周期函数中。

- this 的指向问题，提高了理解的难度。

## 在 Hook 中使用 state

代码示例：

```
import React, { useState } from 'react';
const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  return (
    <button onClick={() => { setLike(like + 1) }}>
      {like} 👍
    </button>
  )
}
```

在上述代码中，我们使用了 useState()，它接收一个初始 state 作为参数，返回一个数组，数组的第一个元素是当前的 state，第二个元素是更新 state 的函数。当我们点击按钮时，就会调用 setLike()，它会更新 state，从而触发组件的重新渲染。

## 在 Hook 中使用 effect

代码示例：

```
import React, { useState, useEffect } from 'react';
const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  useEffect(() => {
    document.title = `点击了 ${like} 次`;
  }, [like]);
  return (
    <>
      <button onClick={() => { setLike(like + 1) }}>
        {like} 👍
      </button>
      <button onClick={() => { setOn(!on) }}>
        {on ? 'ON' : 'OFF'}
      </button>
    </>
  )
}
```

在上述代码中，我们使用了 useEffect()，它接收一个函数作为参数，这个函数会在组件渲染到屏幕之后执行。useEffect() 还可以接收第二个参数，这个参数是一个数组，数组中可以指定多个 state，当这些 state 发生变化时，useEffect() 会重新执行。如果不指定第二个参数，useEffect() 会在每次渲染之后都执行。

### effect 的清除

在我们使用 useEffect() 时，还可以返回一个函数，这个函数会在组件卸载或者 effect 重新执行时执行。这个函数就是 effect 的清除函数。有些时候，我们需要在 effect 执行之前清除之前的 effect，这时候就可以使用 effect 的清除函数。例如，当我们在组件中使用了定时器时，我们需要在组件卸载时清除定时器，否则会出现内存泄漏的问题。


# jest 测试

## 为什么要进行测试

测试在整个软件开发过程中起到了非常重要的作用，它可以帮助我们发现代码中的 bug，提高代码的质量。测试可以分为单元测试、集成测试、端到端测试等，对于组件库这样模块化程度较高的项目，单元测试是最基本需要进行的测试。


## 什么是 jest

jest 是 Facebook 开发的一个 JavaScript 测试框架，它可以让我们在不使用浏览器的情况下，对 JavaScript 代码进行测试。

## react-testing-library 和 jest-dom

React-Testing-Library是一个React应用的测试库，它的目的是测试React应用的用户行为。通过模拟用户的操作来测试React组件，从而验证应用是否能够正常工作。

Jest-dom是一个Jest的扩展库，它为Jest提供了专用于DOM操作的断言，使开发人员更方便地测试React组件中的DOM状态。例如，可以使用jest-dom库的toHaveTextContent()断言来测试元素是否具有指定的文本内容。

### 例子

一个计数器的简单组件：

```js
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default Counter;
```

测试代码：

```js
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Counter from './Counter';

describe('Counter', () => {
  it('increments count when button is clicked', () => {
    const { getByText } = render(<Counter />);
    const button = getByText('Increment');
    const count = getByText('Count: 0');

    fireEvent.click(button);

    expect(count).toHaveTextContent('Count: 1');
  });
});
```

在测试代码中，我们使用了 render() 方法来渲染组件，它会返回一个对象，这个对象包含了组件中的所有元素，我们可以通过 getByText() 方法来获取元素。然后我们使用 fireEvent() 来模拟用户的操作，最后使用 expect() 来断言元素的状态。


# treeSelect 组件

## 分析需要实现的功能

treeSelect 组件是一个下拉选择框，它可以展开/收起树形结构并选择其中的项，常用于选择具有层级关系的数据。在编写 treeSelect 组件前，我们需要明确需要实现的功能，根据参考Ant Design的 treeSelect 组件，我们可以总结下面几点功能，包括但不限于：

- 展开/收起树形结构
- 选择/取消选择节点
- 标记已选择的节点
- 在上方收索框中显示选择的节点
- 搜索节点

## 需要定义的接口
在编写组件之前，我们可以想一想定义组件需要的的接口，。尽可能地方便组件的使用者进行使用。对于 treeSelect 组件，根据我们对于功能地调查，先粗略的认为需要定义的接口包括但不限于：

- 数据源：提供树形结构的数据源
- 默认展开项
- 默认选中项
- 是否默认打开选择菜单
- 搜索框：提供搜索功能
- 搜索框占位符
- 搜索框宽高
- 选项是否可选
- 是否显示折叠箭头
- 等等

## 应当实现的函数

对于 treeSelect 组件，需要实现的函数包括但不限于：

渲染树形结构：将数据源渲染成树形结构
展开/收起节点：处理节点的展开/收起状态
选择/取消选择节点：处理节点的选择/取消选择状态
获取已选择节点列表：根据选择的节点，获取已选择的节点列表
搜索功能：根据输入的关键字，过滤出符合条件的节点

<!-- import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';
import CheckBox, { iconType } from './SelectBox';
import TreeSelectInput, { data } from './treeSelectInput';

export interface TreeNode<T> {
  value: T;
  label: string;
  children?: Array<TreeNode<T>>;
  unfold?: boolean;
  defaultSelected?: boolean;
}

export enum selectType {
  circle = 'circle',
  box = 'box',
}

interface TreeSelectProps<T> {
  data: Array<TreeNode<T>>;
  isSingle?: boolean; //Single selection or multiple selection
  checkable?: boolean; //is checkboxable
  expandable?: boolean; //Whether to display the arrow
  checkboxType?: selectType; //The type of checkbox
  inputWidth?: string; //The width of the input box
  inputHeight?: string; //The height of the input box
  displaySelect?: boolean; //Whether to display the selected item
  placeholder?: string; //The placeholder of the input box
  needInput?: boolean; //Whether to display the input box
  dropDownPosition?: 'bottom' | 'leftBottom' | 'rightBottom'; //The position of the drop-down box
  onSelect?: (selected: Array<TreeNode<T>>) => void; //Callback function when selected
  onExpand?: (expanded: Set<T>) => void; //Callback function when expanded
}

function TreeSelect<T>(props: TreeSelectProps<T>) {
  const [expanded, setExpanded] = useState<Set<T>>(new Set()); //An array with uniqueness
  const [selected, setSelected] = useState<Array<TreeNode<T>>>([]);
  const [displayTree, setDisplayTree] = useState<boolean>(false);
  const [inputRef, setInputRef] = useState(React.createRef<HTMLDivElement>());
  const [dropDownRef, setDropDownRef] = useState(
    React.createRef<HTMLDivElement>(),
  );
  const {
    data,
    isSingle,
    checkable,
    checkboxType,
    onSelect,
    onExpand,
    expandable,
    inputWidth,
    inputHeight,
    displaySelect,
    placeholder,
    dropDownPosition,
    needInput,
    ...restProps
  } = props;
  const icon =
    checkboxType === selectType.circle ? iconType.circle : iconType.box;
  const inputblock: Array<data<T>> = [];
  const treeClass = classNames('treeContainer', {
    'treeContainer-default': needInput,
    'treeContainer-hide': !displayTree && needInput,
    'treeContainer-noInput': !needInput,
  });
  const containerClass = classNames('container', {})

  //Get the position of the drop-down box
  const getTopPos = () => {
    if (inputRef.current && dropDownRef.current) {
      const { height } = inputRef.current.getBoundingClientRect();
      if (dropDownPosition === 'bottom') return `${height + 5}px`;
      return '-2px';
    }
  };

  const getLeftPos = () => {
    if (inputRef.current && dropDownRef.current) {
      const { width } = inputRef.current.getBoundingClientRect();
      if (dropDownPosition === 'leftBottom') {
        console.log('left');
        return `${-width}px`; 
      }
      if (dropDownPosition === 'rightBottom') {
        return `${width}px`;
      }
      console.log(dropDownPosition);
      return '0px';
    }
  };
  const topPos = getTopPos();
  const leftPos = getLeftPos();

  //initialize the selected and expanded nodes
  useEffect(() => {
    const initialSelected: Array<TreeNode<T>> = [];
    const initialExpanded: Set<T> = new Set();

    if (displaySelect !== undefined) {
      setDisplayTree(displaySelect);
    }

    const traverse = (node: TreeNode<T>) => {
      if (node.defaultSelected) {
        initialSelected.push(node);
      }
      if (node.unfold && node.children) {
        initialExpanded.add(node.value);
      }
      if (node.children) {
        node.children.forEach((child: TreeNode<T>) => {
          traverse(child);
        });
      }
    };

    data.forEach((node: TreeNode<T>) => {
      traverse(node);
    });

    setSelected(initialSelected);
    setExpanded(initialExpanded);
  }, []);

  //Expand or collapse the node
  const handleExpand = (node: TreeNode<T>) => {
    const newExpanded = new Set(expanded);
    if (newExpanded.has(node.value)) {
      newExpanded.delete(node.value);
    } else {
      newExpanded.add(node.value);
    }
    setExpanded(newExpanded);
  };

  //Select or cancel the node
  const handleSelect = (node: TreeNode<T>) => {
    if (isSingle) {
      setSelected([node]);
    } else {
      const newSelected = [...selected];
      const index = newSelected.indexOf(node);
      if (index >= 0) {
        newSelected.splice(index, 1);
      } else {
        newSelected.push(node);
      }
      setSelected(newSelected);
    }
  };

  //Display the selected node
  const deliverNode = () => {
    inputblock.splice(0, inputblock.length);
    selected.forEach((item) => {
      inputblock.push({ value: item.value, label: item.label });
    });
  };

  //Callback function when selected
  useEffect(() => {
    if (onSelect) {
      onSelect(selected);
    }
  }, [selected]);

  //Callback function when expanded
  useEffect(() => {
    if (onExpand) {
      onExpand(expanded);
    }
  }, [expanded]);

  //Render the tree
  const renderTree = (node: TreeNode<T>) => {
    const nodeClass = classNames('tree-node', {});
    const checkBoxClass = classNames('tree-node-checkbox', {});
    const labelClass = classNames('tree-node-label', {
      'tree-node-label-selected': selected.includes(node),
    });
    deliverNode(); //Display the selected node

    return (
      <div key={`tree-node-${node.value}`} className={nodeClass}>
        <div className="tree-node-header" onClick={() => handleExpand(node)}>
          {expandable ? (
            node.children && node.children.length > 0 ? (
              expanded.has(node.value) ? (
                <IoMdArrowDropdown />
              ) : (
                <IoMdArrowDropright />
              )
            ) : (
              <IoMdArrowDropdown className="space" />
            )
          ) : null}
          {checkable ? (
            <div
              className={checkBoxClass}
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(node);
              }}
              data-testid={`checkBoxContainer` + node.label}
            >
              <CheckBox
                displayIcon={checkable}
                icon={icon}
                isSelected={selected.includes(node)}
              />
            </div>
          ) : null}

          <div
            className={labelClass}
            data-testid={`labelContainer` + node.label}
            onClick={(e) => {
              e.stopPropagation(); //Block the propagation of events to avoid affecting other nodes
              if (node.children && node.children.length > 0) handleExpand(node);
            }}
          >
            {node.label}
          </div>
        </div>
        {node.children && node.children.length > 0 ? (
          <div
            data-testid={`children` + node.label}
            className={classNames('tree-node-children', {
              'tree-node-expanded': expanded.has(node.value),
            })}
          >
            {node.children.map((child) => renderTree(child))}
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <div className={containerClass} data-testid='treeSelect'>
      {needInput ? (
        <TreeSelectInput
        data={inputblock}
        width={inputWidth}
        height={inputHeight}
        defaultShow={displayTree}
        inputRef={inputRef}
        placeholder={placeholder}
        deleteItem={(value) => {
          const newSelected = [...selected];
          const index = newSelected.findIndex((item) => item.value === value);
          if (index >= 0) {
            newSelected.splice(index, 1);
          }
          setSelected(newSelected);
        }}
        showTree={(showTree) => {
          setDisplayTree(showTree);
        }}
      />
        ) : null}
      <div
        className={treeClass}
        ref={dropDownRef}
        style={{ width: inputWidth, top: topPos, left: leftPos }}
      >
        {data.map((node) => renderTree(node))}
      </div>
    </div>
  );
}

TreeSelect.defaultProps = {
  isSingle: true,
  checkable: true,
  expandable: true,
  unfold: false,
  inputWidth: '400px',
  inputHeight: '30px',
  displaySelect: false,
  checkboxType: selectType.box,
  dropDownPosition: 'bottom',
  needInput: true,
};

export default TreeSelect; -->

让我们开始着手实现一个简单的树形选择器。我们将使用React Hooks和TypeScript来实现它。

# 功能实现

## 展开收起树形结构

我们将使用一个Set来存储展开的节点，当点击展开/收起按钮时，我们将节点的value添加到Set中，如果已经存在，则删除。
这里使用react hooks的useState来实现。为的是在展开/收起节点时，重新渲染组件。

```ts
const [expanded, setExpanded] = useState(new Set());
```

然后再定义一个handleExpand函数，用来处理展开/收起节点的逻辑。

```ts
const handleExpand = (node: TreeNode<T>) => {
  const newExpanded = new Set(expanded);
  if (newExpanded.has(node.value)) {
    newExpanded.delete(node.value);
  } else {
    newExpanded.add(node.value);
  }
  setExpanded(newExpanded);
};
```

在上述代码中，我们使用了一个新的Set来存储展开的节点，这是因为我们不希望直接修改原来的Set，而是返回一个新的Set。这样可以避免在修改Set时，引起不必要的错误。

渲染部分，我们需要判断节点是否有子节点，如果有子节点，我们就渲染展开/收起按钮。并且要判断当前节点是否已经展开，如果已经展开，我们就渲染收起按钮，否则渲染展开按钮。

```ts
{expandable ? (
  node.children && node.children.length > 0 ? (
    expanded.has(node.value) ? (
      <IoMdArrowDropdown />
    ) : (
      <IoMdArrowDropright />
    )
  ) : (
    <IoMdArrowDropdown className="space" />
  )
) : null}
```

这里使用的图标是来自于react-icons库，用着简单方便。

## 选择节点

我们将使用一个数组来存储选中的节点，当点击选择框时，我们将节点添加到数组中，如果已经存在，则删除。同样是使用useState来实现。

```ts
const [selected, setSelected] = useState<TreeNode<T>[]>([]);
```

然后再定义一个handleSelect函数，用来处理选择节点的逻辑。

```ts
const handleSelect = (node: TreeNode<T>) => {
  const newSelected = [...selected];
  const index = newSelected.findIndex((item) => item.value === node.value);
  if (index >= 0) {
    newSelected.splice(index, 1);
  } else {
    newSelected.push(node);
  }
  setSelected(newSelected);
};
```

这里的逻辑和展开/收起节点的逻辑类似，在后续有更多的需求时，可以在这里进行扩展。

渲染部分，我们需要判断是否需要显示选择框，如果需要，我们就渲染选择框。并且要判断当前节点是否已经选中，如果已经选中，我们就渲染选中状态的选择框，否则渲染未选中状态的选择框。

```ts
{checkable ? (
  <div
    className={checkBoxClass}
    onClick={(e) => {
      e.stopPropagation();
      handleSelect(node);
    }}
    data-testid={`checkBoxContainer` + node.label}
  >
    <CheckBox
      displayIcon={checkable}
      icon={icon}
      isSelected={selected.includes(node)}
    />
  </div>
) : null}
```

这里使用的CheckBox组件是我之前写的一个组件，用来实现复选框的功能，这里就不贴出来了。

<!-- import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';
import CheckBox, { iconType } from './SelectBox';
import TreeSelectInput, { data } from './treeSelectInput';

export interface TreeNode<T> {
  value: T;
  label: string;
  children?: Array<TreeNode<T>>;
  unfold?: boolean;
  defaultSelected?: boolean;
}

export enum selectType {
  circle = 'circle',
  box = 'box',
}

interface TreeSelectProps<T> {
  data: Array<TreeNode<T>>;
  isSingle?: boolean; //Single selection or multiple selection
  checkable?: boolean; //is checkboxable
  expandable?: boolean; //Whether to display the arrow
  checkboxType?: selectType; //The type of checkbox
  inputWidth?: string; //The width of the input box
  inputHeight?: string; //The height of the input box
  displaySelect?: boolean; //Whether to display the selected item
  placeholder?: string; //The placeholder of the input box
  needInput?: boolean; //Whether to display the input box
  dropDownPosition?: 'bottom' | 'leftBottom' | 'rightBottom'; //The position of the drop-down box
  onSelect?: (selected: Array<TreeNode<T>>) => void; //Callback function when selected
  onExpand?: (expanded: Set<T>) => void; //Callback function when expanded
}

function TreeSelect<T>(props: TreeSelectProps<T>) {
  const [expanded, setExpanded] = useState<Set<T>>(new Set()); //An array with uniqueness
  const [selected, setSelected] = useState<Array<TreeNode<T>>>([]);
  const [displayTree, setDisplayTree] = useState<boolean>(false);
  const [inputRef, setInputRef] = useState(React.createRef<HTMLDivElement>());
  const [dropDownRef, setDropDownRef] = useState(
    React.createRef<HTMLDivElement>(),
  );
  const {
    data,
    isSingle,
    checkable,
    checkboxType,
    onSelect,
    onExpand,
    expandable,
    inputWidth,
    inputHeight,
    displaySelect,
    placeholder,
    dropDownPosition,
    needInput,
    ...restProps
  } = props;
  const icon =
    checkboxType === selectType.circle ? iconType.circle : iconType.box;
  const inputblock: Array<data<T>> = [];
  const treeClass = classNames('treeContainer', {
    'treeContainer-default': needInput,
    'treeContainer-hide': !displayTree && needInput,
    'treeContainer-noInput': !needInput,
  });
  const containerClass = classNames('container', {})

  //Get the position of the drop-down box
  const getTopPos = () => {
    if (inputRef.current && dropDownRef.current) {
      const { height } = inputRef.current.getBoundingClientRect();
      if (dropDownPosition === 'bottom') return `${height + 5}px`;
      return '-2px';
    }
  };

  const getLeftPos = () => {
    if (inputRef.current && dropDownRef.current) {
      const { width } = inputRef.current.getBoundingClientRect();
      if (dropDownPosition === 'leftBottom') {
        console.log('left');
        return `${-width}px`; 
      }
      if (dropDownPosition === 'rightBottom') {
        return `${width}px`;
      }
      console.log(dropDownPosition);
      return '0px';
    }
  };
  const topPos = getTopPos();
  const leftPos = getLeftPos();

  //initialize the selected and expanded nodes
  useEffect(() => {
    const initialSelected: Array<TreeNode<T>> = [];
    const initialExpanded: Set<T> = new Set();

    if (displaySelect !== undefined) {
      setDisplayTree(displaySelect);
    }

    const traverse = (node: TreeNode<T>) => {
      if (node.defaultSelected) {
        initialSelected.push(node);
      }
      if (node.unfold && node.children) {
        initialExpanded.add(node.value);
      }
      if (node.children) {
        node.children.forEach((child: TreeNode<T>) => {
          traverse(child);
        });
      }
    };

    data.forEach((node: TreeNode<T>) => {
      traverse(node);
    });

    setSelected(initialSelected);
    setExpanded(initialExpanded);
  }, []);

  //Expand or collapse the node
  const handleExpand = (node: TreeNode<T>) => {
    const newExpanded = new Set(expanded);
    if (newExpanded.has(node.value)) {
      newExpanded.delete(node.value);
    } else {
      newExpanded.add(node.value);
    }
    setExpanded(newExpanded);
  };

  //Select or cancel the node
  const handleSelect = (node: TreeNode<T>) => {
    if (isSingle) {
      setSelected([node]);
    } else {
      const newSelected = [...selected];
      const index = newSelected.indexOf(node);
      if (index >= 0) {
        newSelected.splice(index, 1);
      } else {
        newSelected.push(node);
      }
      setSelected(newSelected);
    }
  };

  //Display the selected node
  const deliverNode = () => {
    inputblock.splice(0, inputblock.length);
    selected.forEach((item) => {
      inputblock.push({ value: item.value, label: item.label });
    });
  };

  //Callback function when selected
  useEffect(() => {
    if (onSelect) {
      onSelect(selected);
    }
  }, [selected]);

  //Callback function when expanded
  useEffect(() => {
    if (onExpand) {
      onExpand(expanded);
    }
  }, [expanded]);

  //Render the tree
  const renderTree = (node: TreeNode<T>) => {
    const nodeClass = classNames('tree-node', {});
    const checkBoxClass = classNames('tree-node-checkbox', {});
    const labelClass = classNames('tree-node-label', {
      'tree-node-label-selected': selected.includes(node),
    });
    deliverNode(); //Display the selected node

    return (
      <div key={`tree-node-${node.value}`} className={nodeClass}>
        <div className="tree-node-header" onClick={() => handleExpand(node)}>
          {expandable ? (
            node.children && node.children.length > 0 ? (
              expanded.has(node.value) ? (
                <IoMdArrowDropdown />
              ) : (
                <IoMdArrowDropright />
              )
            ) : (
              <IoMdArrowDropdown className="space" />
            )
          ) : null}
          {checkable ? (
            <div
              className={checkBoxClass}
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(node);
              }}
              data-testid={`checkBoxContainer` + node.label}
            >
              <CheckBox
                displayIcon={checkable}
                icon={icon}
                isSelected={selected.includes(node)}
              />
            </div>
          ) : null}

          <div
            className={labelClass}
            data-testid={`labelContainer` + node.label}
            onClick={(e) => {
              e.stopPropagation(); //Block the propagation of events to avoid affecting other nodes
              if (node.children && node.children.length > 0) handleExpand(node);
            }}
          >
            {node.label}
          </div>
        </div>
        {node.children && node.children.length > 0 ? (
          <div
            data-testid={`children` + node.label}
            className={classNames('tree-node-children', {
              'tree-node-expanded': expanded.has(node.value),
            })}
          >
            {node.children.map((child) => renderTree(child))}
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <div className={containerClass} data-testid='treeSelect'>
      {needInput ? (
        <TreeSelectInput
        data={inputblock}
        width={inputWidth}
        height={inputHeight}
        defaultShow={displayTree}
        inputRef={inputRef}
        placeholder={placeholder}
        deleteItem={(value) => {
          const newSelected = [...selected];
          const index = newSelected.findIndex((item) => item.value === value);
          if (index >= 0) {
            newSelected.splice(index, 1);
          }
          setSelected(newSelected);
        }}
        showTree={(showTree) => {
          setDisplayTree(showTree);
        }}
      />
        ) : null}
      <div
        className={treeClass}
        ref={dropDownRef}
        style={{ width: inputWidth, top: topPos, left: leftPos }}
      >
        {data.map((node) => renderTree(node))}
      </div>
    </div>
  );
}

TreeSelect.defaultProps = {
  isSingle: true,
  checkable: true,
  expandable: true,
  unfold: false,
  inputWidth: '400px',
  inputHeight: '30px',
  displaySelect: false,
  checkboxType: selectType.box,
  dropDownPosition: 'bottom',
  needInput: true,
};

export default TreeSelect; -->

## 显示树形结构

我们将使用一个变量来控制是否显示树形结构，当点击输入框时，我们将变量设置为true，当点击树形结构时，我们将变量设置为false。同样是使用useState来实现。

```ts
const [displayTree, setDisplayTree] = useState(false);
```

当这个参数被设置为true时，我们改变树选择菜单的样式，这里使用classnames库来实现多个样式的组合。关于这个库的相关信息可以参考[classnames](https://www.npmjs.com/package/classnames)。

## 默认展开或选中

对于节点数据，我们加入两个参数，一个是unfold，一个是selected。当unfold为true时，该节点会默认展开，当selected为true时，该节点会默认选中。

```ts
export interface TreeNode<T> {
  value: T;
  label: string;
  children?: TreeNode<T>[];
  unfold?: boolean;
  selected?: boolean;
}
```

为了能够实现这个功能，我们需要在初始化的时候，遍历节点数据，将unfold和selected为true的节点的value值存入两个set中，分别为initialExpanded和initialSelected。

```ts
useEffect(() => {
    const initialSelected: Array<TreeNode<T>> = [];
    const initialExpanded: Set<T> = new Set();

    if (displaySelect !== undefined) {
      setDisplayTree(displaySelect);
    }

    const traverse = (node: TreeNode<T>) => {
      if (node.defaultSelected) {
        initialSelected.push(node);
      }
      if (node.unfold && node.children) {
        initialExpanded.add(node.value);
      }
      if (node.children) {
        node.children.forEach((child: TreeNode<T>) => {
          traverse(child);
        });
      }
    };

    data.forEach((node: TreeNode<T>) => {
      traverse(node);
    });

    setSelected(initialSelected);
    setExpanded(initialExpanded);
  }, []);
```

在上述代码中，我们使用了useEffect来实现初始化的功能，这个函数会在组件挂载时执行，当依赖项发生变化时，也会执行。这里我们将依赖项设置为空数组，这样就只会在组件挂载时执行一次。

在这个函数中初始化了两个set，然后遍历节点数据，将`unfold`和`selected`为true的节点的value值存入两个set中，分别为`initialExpanded`和`initialSelected`。最后将这两个set分别赋值给`expanded`和`selected`。

这样我们就可以实现默认展开和默认选中的功能了。

现在我们的组件还差一个很重要的功能。就是选择结果输入框的显示。我们将在下一节中实现这个功能。



<!-- import classNames from 'classnames';
import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

export interface data<T> {
  value: T;
  label: string;
}

interface inputProps<T> {
  data: Array<data<T>>; //The data of the selected item
  itemColor?: string; //The color of the selected item
  width?: string; //The width of the input box
  height?: string; //The height of the input box
  defaultShow?: boolean; //Whether to display the input box
  placeholder?: string; //The placeholder of the input box
  deleteItem?: (value: T) => void; //Delete the selected item
  showTree?: (showTree: boolean) => void; //Whether to display the drop-down box
  inputRef?: React.RefObject<HTMLDivElement>; //The reference of the input box
}

function TreeSelectInput<T>(props: inputProps<T>) {
  const {
    data,
    itemColor,
    width,
    height,
    deleteItem,
    showTree,
    defaultShow,
    inputRef,
    placeholder,
    ...restProps
  } = props;
  let show = defaultShow;
  const inputClass = classNames('inputClass', {
    'inputClass-active': show === true,
  });

  const randerInput = (data: Array<data<T>>) => {
    return data.map((item: data<T>) => {
      return (
        <div className="inputblock" key={`${item.value}`}>
          <div className="blocklabal">{item.label}</div>
          <RxCross1
            className="cross"
            onClick={() => {
              deleteItem && deleteItem(item.value);
            }}
          />
        </div>
      );
    });
  };

  return (
    <div
      ref={inputRef}
      className={inputClass}
      style={{ width: width, height: height }}
      {...restProps}
    >
      <div className="itemsClass">
        {randerInput(data)}
        {data.length === 0 && (
          <div className="inputPlaceholder" data-testid='Select an item' >{placeholder}</div>
        )}
      </div>
      <AiOutlineDown
        className="cross"
        onClick={() => {
          show = !show;
          showTree && showTree(show);
        }}
      />
    </div>
  );
}

TreeSelectInput.defaultProps = {
  itemColor: 'blue',
  width: '200px',
  height: '30px',
  placeholder: '请选择',
};

export default TreeSelectInput; -->




# 选择结果输入框

对于选择结果的输入框，我们将使用一个新的组件来实现。这个组件的功能是将选择的结果以输入框的形式显示出来。

## 选择结果输入框的显示

考虑到这个组件的功能，我们将使用一个变量来控制是否显示这个组件，当点击输入框时，我们将变量设置为true，当点击树形结构时，我们将变量设置为false。同样是使用`useState`来实现。

```ts
const [displayInput, setDisplayInput] = useState(false);
```

在这个组件中，我们使用了一个div来包裹输入框，这个div的样式是`inputClass`。当`displayInput`为true时，我们将`inputClass`的样式设置为`inputClass-active`，这样就可以实现点击输入框时，输入框的显示。

```ts
const inputClass = classNames('inputClass', {
  'inputClass-active': displayInput === true,
});
```

如果我们要将树状结构的数据显示在输入框中，我们需要将树状结构的数据传入到输入框组件中。所以在`inputProps`中，我们需要添加一个data属性。并且为了方便我们的使用，我们将`data`的类型定义为一个数组，数组中的每一项都是一个对象，对象中包含`value`和`label`两个属性。

`value`作为唯一标识，`label`作为显示的内容。

为了实现双向的数据传递，我们需要在`TreeSelectInput`组件中添加一个deleteItem属性，当点击输入框中的删除按钮时，我们将调用这个属性，并将`value`值传入。

```ts
export interface data<T> {
  value: T;
  label: string;
}

interface inputProps<T> {
  data: Array<data<T>>; //The data of the selected item
  itemColor?: string; //The color of the selected item
  width?: string; //The width of the input box
  height?: string; //The height of the input box
  defaultShow?: boolean; //Whether to display the input box
  placeholder?: string; //The placeholder of the input box
  deleteItem?: (value: T) => void; //Delete the selected item
  showTree?: (showTree: boolean) => void; //Whether to display the drop-down box
  inputRef?: React.RefObject<HTMLDivElement>; //The reference of the input box
}
```

## 根据输入框的位置显示树状结构

我们需要获取输入框的位置，然后计算树形选择栏的位置，这样就可以在不同的位置显示树形选择栏了。

首先在`inputProps`中添加一个`inputRef`属性，这个属性的类型是`React.RefObject<HTMLDivElement>`，这个属性的作用是获取输入框的位置。然后在`TreeSelectInput`组件中，我们将这个属性传入到输入框的`ref`中。

```ts
const getLeftPos = () => {
  if (inputRef.current && dropDownRef.current) {
    const { width } = inputRef.current.getBoundingClientRect();
    if (dropDownPosition === 'leftBottom') {
      console.log('left');
      return `${-width}px`; 
    }
    if (dropDownPosition === 'rightBottom') {
      return `${width}px`;
    }
    console.log(dropDownPosition);
    return '0px';
  }
};
const topPos = getTopPos();
const leftPos = getLeftPos();
```

在这个函数中，我们首先判断`inputRef`和`dropDownRef`是否存在，如果存在，我们就获取输入框的宽度，然后根据`dropDownPosition`的值来计算树形选择栏的位置。

主要的逻辑已经实现的差不多了，剩下的是对于样式和具体想要的操作方式的实现。 -->


