---
sidebar_position: 2
title: HTML部分样例
---

## 说了些枯燥的定义，所以 html 具体可以做到什么呢？

### 用各种标签写一段话

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="html" label="html代码" default>

```html title="example.html"
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>learn</title>
</head>

<body>
    <h1>我用h1标签制作了一个标题</h1>
    <h6>h1~h6是大小不同的标题,接下来用hr标签分割一下</h6>
    <hr>
    <p>我用p标签制作了一个段落，虽然很短，让我用br标签换个行，<br>呀，成功了</p>
    <p>我用b标签加粗了<b>这几个字</b>，用i标签让<i>这几个字</i>斜着显示。</p>
    <a href="https://swfoodt.netlify.app">我使用a标签让这句话链接到我的博客</a>
    <hr>
    <p>我还可以用img标签展示我喜欢的游戏图片</p>
    <img style="width: 200px;height: 100px;"
        src="https://swfoodt-blog.oss-cn-beijing.aliyuncs.com/img/bg/indexbackground10.png" alt="bg.png">
    <hr>
    <p>接下来想用table，tr，td来创建一个表格填上我喜欢和不喜欢的菜</p>
    <table border="2">
        <tr>
            <td>喜欢的</td>
            <td>不喜欢的</td>
        </tr>
        <tr>
            <td>烤鸭</td>
            <td>白菜</td>
        </tr>
    </table>
    <hr>
    <p>我接下来想用ul，li来创建一个无序列表</p>
    <ul>
        <li>白菜</li>
        <li>菠菜</li>
        <li>芹菜</li>
    </ul>
    <p>接下来想用ol，li来创建一个有序列表</p>
    <ol>
        <li>烤鸭</li>
        <li>烤鸡</li>
        <li>烤鱼</li>
        <dd>-我都爱吃</dd>
        <dd>-这是一个使用dd标签添加的自定义列表项</dd>
    </ol>
    <hr>
    <div style="width: 500px;height: 85px;background-color: aqua;">
        <p>这是一个用div标签来创建的div块,div通常被用作网页布局，划分不同的区域来表现不同的内容，
            接下来我想用span标签来创建一个span块，
            <span style="color: blue;">span通常被用来将部分文本或者文档独立出来以便改变他们的样式</span></p>
        </p>
    </div>

    <div>
        <p>接下来我想用form标签来创建一个表单，让用户输入自己的名字和密码</p>
        <form>
            username:<input type="text" name="username"><br>
            password:<input type="password" name="password"><br>
            <p>创建一个选择框来确定你的性别</p>
            <input type="radio" name="sex" value="male">男
            <input type="radio" name="sex" value="female">女
            <p>创建一个复选框来收集你喜欢的水果</p>
            <input type="checkbox" name="fruit" value="apple">苹果
            <input type="checkbox" name="fruit" value="banana">香蕉
            <input type="checkbox" name="fruit" value="pear">梨
            <p>创建一个提交按钮，提交表单</p>
            <input type="submit" value="提交">
        </form>
    </div>

</body>

</html>
```

</TabItem>
<TabItem value="result" label="运行后结果">

<iframe height="1400px" width="100%" scrolling="no" title="swfoodt-blog-example" src="https://codepen.io/swfoodt/embed/VwxrboQ?default-tab=result&theme-id=dark" frameborder="no">
</iframe>

</TabItem>
</Tabs>

在上述的代码中我们使用了包括`<h1>`，`<h6>`，`<hr>`，`<p>`，`<b>`，`<i>`，`<a>`，`<img>`，`<table>`，`<tr>`，`<td>`，`<ul>`，`<li>`，`<ol>`，`<dd>`，`<div>`，`<span>`，`<input>`等标签，这些标签都是 html 中的基本标签，我们可以使用这些标签来创建我们想要的网页。

不过可以在运行后的结果中看到，这个简单网页呈现出的效果**并不美观**，因为在上述代码中，**除了限制部分元素的宽高以外**，我们没有使用其他的 css 样式来美化网页，有关 css 方面的代码应用可以参考本记录的[css 部分](#)。

还有一个很有用的的标签没有展示在上面的样例代码中，`iframe` 标签，**iframe 标签**可以用来在网页中嵌入其他网页，在上方的代码结果演示就是使用了 iframe 标签来嵌入了一个`codepen`的网页，若未能显示成功可能是网络问题，可以自己动手运行一下。

:::info 速查列表

日常使用可以参考`w3school`提供的[速查手册](https://www.w3school.com.cn/html/html_quick.asp)。

:::
