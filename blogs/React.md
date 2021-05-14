---
title: React笔记
date: 2021-05-13 20:00:00
tags:
  - 笔记
categories:
  - 笔记
---

# React 基础

## React 开篇

#### React 课程知识体系

1.React 基础
1.1 基础语法
1.2 路由
1.3 状态管理插件

2.React 项目
2.1 好租客 移动端租房项目
2.2 前端项目的开发和部署

#### React 如何学会学好

1.每天代码敲至少两遍 2.回顾 html、css、js 的基本功，活跃的思维 3.打破自己的常规思维，积极使用能想到的各种办法

#### React 起源、特点、现状

**概念**:
React 是一个用于构建用户界面的 JavaScript 库
用户界面：HTML 页面（前端）
React 主要用来写 HTML 页面，或构建 Web 应用
如果从 MVC 的角度来看，React 仅仅是视图层（V），
也就是只负责视图的渲染，
而并非提供了 完整的 M 和 C 的功能。

**特点**:

1.声明式 2.组件化 3.一次学习，随处编写(前端开发、App 开发、VR 开发)

**现状**:

1.国外流行
1.1 2020 Stackoverflow 全球开发者调研报告中, 最受欢迎框架排第二
https://www.sohu.com/a/398379279_827544
https://insights.stackoverflow.com/survey/2020

**为什么学习 React**

1.安全可靠
(React 是由 Facebook 来更新和维护, 所以一般不会出现跑路情况 2.思想升华
React 是一个开源项目, 融合了全世界诸多优秀成员的编程思想) 3.值得借鉴
Vue.js 设计之初，有很多的灵感来自 Angular 和 React、Vue3 的很多新特性(composition API fragment), 在 React 中你也能看到它们的身影

#### 使用 React 的 2 种方式

1.自行配置
1.1 https://zh-hans.reactjs.org/docs/add-react-to-a-website.html 2.通过脚手架自动配置
2.1 https://zh-hans.reactjs.org/docs/create-a-new-react-app.html

#### 虚拟 DOM 和真实 DOM

1.虚拟 DOM 是相对于浏览器所渲染出来的真实 DOM 的 2.虚拟 DOM 就是使用 JS 对象来表示页面上的真实 DOM

#### 如何创建虚拟 DOM

createElement 通过 React.createElement()方法
该方法接收三个参数:
第一个参数: 需要创建的元素类型或组件
第二个参数: 被创建出来的元素拥有的属性
第三个参数: 被创建出来的元素拥有的内容(可以是多个)
https://zh-hans.reactjs.org/docs/react-api.html#

#### 如何通过虚拟 DOM 渲染真实 DOM 到浏览器

通过 ReactDOM.render()方法
该方法接收三个参数
第一个参数: 被渲染的虚拟 DOM
第二个参数: 要渲染到哪个元素中
第三个参数: 渲染或更新完成后的回调函数
https://zh-hans.reactjs.org/docs/react-dom.html#render

#### render 方法的注意点

多次渲染，后渲染会覆盖先渲染的
render 方法一次只能渲染一个元素/组件

#### createElement 方法注意点

可以添加 3 个以上参数，后续参数都会作为当前创建元素内容处理

### React 中的 JSX 语法

#### 为什么需要 JSX

如果结构比较简单还好，但是如果结构比较复杂，就比较难以下手
所以大牛们就发明了 JSX, 专门用来编写 React 中的页面结构

#### JSX 是什么？

JSX 是一个看起来很像 XML 的 JavaScript 语法扩展

#### 为什么要使用 JSX

使用 JSX 使得我们在 React 中编写页面结构更为简单、灵活
JSX 是类型安全的， 在编译过程中就能发现错误
JSX 执行更快， 因为它在编译为 JavaScript 代码后进行优化
防止 XSS 注入攻击
https://zh-hans.reactjs.org/docs/introducing-jsx.html

#### JSX 的本质

浏览器只认识 JS 不认识 JSX，所以我们编写的 JSX 代码是无法在浏览器中执行的
为了解决这个问题，我们需要使用 babel 将 JSX 转换成 JS，也就是转换成 React.createElement()
https://zh-hans.reactjs.org/docs/react-without-jsx.html
https://babeljs.io/repl/

#### 如何将 JSX 转换成 JS?

导入 babel.js
在 script 标签上添加 type="text/babel"

#### JSX 中使用表达式

在 JSX 中只要看到{}就会当做 JS 解析(执行里面的 JS 代码)
所以无论是绑定属性,还是绑定类名,还是绑定样式, 只需要将字符串改为{}
然后再通过 JS 动态获取, 动态绑定即可
注意：{} 中，不能出现语句！！！ if() {} / for() {} / switch...

以下嵌入的内容不会被显示出来 [] true false null undefined
如果想显示上面的内容，那么就必须转换成字符串，但是对于空数组而言，即使转换成字符串，也不能显示

```js
// const name = 'jack'
// const h1 = <div>{name}</div>
// const h1 = <div>{19}</div>
// const h1 = <div>{true + ''}</div>
// const h1 = <div>{1 + 3 + 7 + 9}</div>
// const h1 = <div>{['red', 'yellogreen', 'pink']}</div>
// const h1 = <div>{['red', 'yellogreen', 'pink'].join('')}</div>
// const h1 = <div>{Math.random() > 0.5 ? '大于' : '小于等于'}</div>
```

#### JSX 中的条件渲染

1.if/else 2.三元表达式 3.逻辑与运算符（&&）

```js
// function Home(){
//   if (flag) {
//     return (
//       <div>我是flag为true是显示的内容</div>
//     )
//   }

//   return (
//     <div>
//       <p>我是flag为false时显示的内容</p>
//     </div>
//     )
// }

// function Home(){
//     return flag? (
//       <div>我是flag为true是显示的内容</div>
//     ): (
//     <div>
//       <p>我是flag为false时显示的内容</p>
//     </div>
//     )
// }

// function Home(){
//     return flag&&(
//       <div>我是flag为true是显示的内容</div>
//     )
// }
```

#### JSX 中的列表渲染

```js
// function Home() {
//   return (
//     <div>{
//       songs.map(item => <p key={item.id}>{item.name}</p>)
//     }</div>
//   )
// }
```

#### JSX 中绑定属性

1.JSX 绑定内容
在 JSX 中只要看到{} 就会当作 js 解析(执行里面的 js 代码)
所以无论是绑定属性，还是绑定类名，还是绑定样式，只要将字符串改为{}
然后再通过 JS 动态获取，动态绑定即可

2.绑定普通属性

```html
<p title="我是标题">我是段落</p>
<p title="{message}">我是段落</p>
```

3.绑定类名(className)
由于 JSX 本质是转换成 JS 代码, 而在 JS 中 class 有特殊含义, 所以不能使用
同理可证, 但凡是属性名称是 JS 关键字的都不能直接使用

4.绑定样式(style)
由于样式是键值对形式的, 所以在 JSX 中如果想要动态绑定样式
必须将样式放到一个对象中, 并且所有以-连接的样式名称都要转换成驼峰命名

```html
<p style={{color:'red', fontSize:'50px'}}>绑定样式</p>
```

## React 基础-day02

### 脚手架的基本使用

#### 脚手架概念

脚手架是一种能快速帮助我们生成项目结构和依赖的工具
每个项目完成的效果不同，但是它们的基本工程化结构是相似的
既然相似，就没有必要每次都从零开始搭建，完全可以使用一些工具，帮助我们生成基本的项目模板
那么这个帮助我们生成项目模板的工具我们就称之为'脚手架'

#### CRA 的基本使用及注意点:

1.前提是要安装 Node 2.在命令行中执行: npx create-react-app 项目名称 3.注意：项目的名称只能是英文, 并且只能是小写字母
如果出现了多个单词, 那么我们需要通过\_-来连接. myName->my_name->my-name

#### reportWebVitals.js

https://www.jianshu.com/p/9d75592edb9e

#### README.md

npm run eject

### 组件

#### 把组件抽离到单独的文件中

#### 函数组件

```js
// 函数式组件
// 函数式组件也被称为无状态组件(注意: 所谓的状态就是state)
// 语法: 在构造函数中返回组件的结构即可
```

#### 类组件

```js
// 类组件 也被成为有状态组件
// 定义一个类, 在这个类中实现render方法, 在render方法中返回组件的结构即可
```

#### 给函数式组件添加事件

```js
// 需求: 给函数式组件添加一个事件

const Fn = () => {
  const divClick = function() {
    console.log("鼠标点击了div");
  };
  const divMouseOver = function() {
    console.log("鼠标移入了div");
  };
  return (
    <div onClick={divClick} onMouseOver={divMouseOver}>
      我是函数式组件
    </div>
  );
};
```

#### 给类组件添加事件

```js
class Home extends React.Component {
  handlerClick() {
    console.log("我是类组件点击的事件");
  }
  render() {
    return <div onClick={this.handlerClick}>我是类组件</div>;
  }
}
```

#### 事件对象

```js
class Hello extends React.Component {
  // 使用类的方法，来作为事件处理程序：
  handleClick(e) {
    // 阻止表单提交这个浏览器的默认行为：
    e.preventDefault();
    console.log("单击触发了", e);
  }

  render() {
    return (
      <div>
        <form action="">
          <button type="submit" onClick={this.handleClick}>
            提交
          </button>
        </form>
      </div>
    );
  }
}
```

#### 有状态组件和无状态组件

- 类组件也叫做有状态组件
  - 负责更新 UI，让页面“动”起来（动）
- 函数组件也叫做无状态组件
  - 负责展示内容（静）
- 状态（state）即：数据

#### 有状态组件的 state 和修改 state

- 如何初始化状态？
  - 1 在 constructor 中，通过 this.state 来初始化
  - 2 通过 ES6 实例属性 的简化语法来初始化
- state 是一个对象，是组件内部私有的状态，只能在组件内部使用

```js
class Hello extends React.Component {
  /* constructor() {
    super()

    // 1 添加状态：
    // state 是固定的名称，用来指定组件的状态
    // 状态是私有的，只能在组件内部使用
    this.state = {
      count: 10

      // isLoading: true
      // ...
    }
  } */

  // 2 使用简化语法初始化状态：
  state = {
    count: 99,
  };

  render() {
    // 在其他方法中，只要通过 this.state 就可以获取到状态对，然后，就可以使用状态对象中的属性了
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
      </div>
    );
  }
}
```

- 语法：

- ```jsx
  this.setState({ count: this.state.count + 1 });
  ```

  - 1 setState 方法的参数是一个对象
  - 2 对象中的键表示要修改的状态名称，值表示要更新的最新值

- 注意：不要直接修改 state 中的数据！！！

  - 错误演示：~~this.state.count += 1~~

- setState() 方法的两个作用：

  - 1 修改状态
  - 2 更新 UI（页面）

- 思想：数据驱动视图，数据是核心！！！

```js
// 创建组件
class Hello extends React.Component {
  state = {
    count: 99,
  };

  render() {
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button
          onClick={() => {
            // 正确姿势：
            this.setState({
              count: this.state.count + 1,
            });

            // 错误演示：
            // this.state.count += 1
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
```

#### this 指向的问题

##### 方式一：利用箭头函数

- 箭头函数：自身没有 this ，箭头函数内部的 this 指向了外层环境（函数）的 this

```js
// 创建组件
class Hello extends React.Component {
  // 初始化状态
  state = {
    count: 0,
  };

  // 注意：默认情况下，React 事件处理程序中的 this 是 undefined
  handleClick() {
    console.log("this：", this);
    // 正确姿势：
    this.setState({
      count: this.state.count + 2,
    });
  }

  render() {
    // render 方法中的 this 就是我们需要的 this（也就是组件实例）
    console.log("render：", this);
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
        {/* 此处，利用箭头函数中的this，来解决 handleClick 中this指向 */}
        <button onClick={() => this.handleClick()}>++1</button>
      </div>
    );
  }
}
```

##### 方式二：利用 bind

- 1 先在 constructor 中，使用 bind 将 事件处理程序与 this 绑定
- 2 再在 render 方法中给按钮，绑定事件，此时的 this.handleClick 就是绑定好 this 的事件处理程序了

```js
// 创建组件
class Hello extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };

    // 1 在此处，使用 bind 绑定事件处理程序中的this
    console.log("1 constructor：", this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 3,
    });
  }

  render() {
    console.log("2 render");
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button onClick={this.handleClick}>+3</button>
      </div>
    );
  }
}
```

##### 方式三：利用箭头函数形式的实例方法（推荐）

```js
// 创建组件
class Hello extends React.Component {
  // 实例属性
  state = {
    count: 0,
  };

  // 实例方法：
  // 利用箭头函数形式的实例方法：
  handleClick = () => {
    this.setState({
      count: this.state.count + 4,
    });
  };

  render() {
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button onClick={this.handleClick}>+4</button>
      </div>
    );
  }
}
```

#### 受控组件

- 受控组件：其值受到 React 控制的表单元素叫做受控组件

```js
// 创建组件
class Hello extends React.Component {
  // 1 提供状态
  state = {
    txt: "",
  };

  // 3 在 change 之间中，更新状态（ 通过事件对象来获取到了当前文本框的最新值 ）
  handleChange = (e) => {
    this.setState({
      txt: e.target.value,
    });
  };

  getTxt = () => {
    console.log("当前文本框的值为：", this.state.txt);
  };

  render() {
    return (
      <div>
        {/* 只要文本框的值发生改变，就会触发 change 事件 */}

        {/* 2 使用 state 中的状态，设置为表单元素的 value 值*/}
        <input
          type="text"
          value={this.state.txt}
          onChange={this.handleChange}
        />
        <button onClick={this.getTxt}>获取文本框的值</button>
      </div>
    );
  }
}
```

## React 基础-day03

### 事件传参

https://react.docschina.org/docs/handling-events.html#向事件处理程序传递参数
在循环中，通常我们会为事件处理函数传递额外的参数。例如，若 id 是你要删除那一行的 ID，以下两种方式都可以向事件处理函数传递参数

```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

上述两种方式是等价的，分别通过箭头函数和 Function.prototype.bind 来实现。

### 表单处理

#### 受控组件

受控组件:其值受到 React 控制的表单元素
HTML 中的表单元素是可输入的，也就是有自己的可变状态，而 React 中可变状态通常保存在 state 中，并且只能通过 setState() 方法来修改。
React 将 state 与表单元素值 value 绑定到一起，由 state 的值来控制表单元素的值，

1.在 state 中添加一个状态，作为表单元素的 value 值(控制表单元素值的来源) 2.给表单元素绑定 change 事件，将 表单元素的值 设置为 state 的值(控制表单元素值的变化)

#### 非受控组件(不推荐)

说明:对于某一个表单元素,借助于 ref，使用原生 DOM 方式来获取表单元素值的这样的元素叫做非受控组件
ref 的作用:获取 DOM 或组件

使用步骤:

1.调用 React.createRef() 方法创建一个 ref 对象

```js

constructor() { super()
this.txtRef = React.createRef() }
```

2.将创建好的 ref 对象添加到文本框中

```js
<input type="text" ref={this.txtRef} />
```

3.通过 ref 对象获取到文本框的值

```js
Console.log(this.txtRef.current.value);
```

### 组件通讯

#### 组件通讯介绍

组件是独立且封闭的单元，默认情况下，只能使用组件自己的数据。
在组件化过程中，我们将一个完整的功能 拆分成多个组件，以更好的完成整个应用的功能。
而在这个过程中，多个组件之间不可避免的要共享某些数据 。
为了实现这些功能，就需要打破组件的独立封闭性，让其与外界沟通。
这个过程就是组件通讯。

#### 组件通讯的三种方式

组件之间的通讯分为 3 种: 1.父组件 -> 子组件 2.子组件 -> 父组件 3.兄弟组件

##### 父组件传递数据给子组件

组件是封闭的，要接收外部数据应该通过 props 来实现
props 的作用:接收传递给组件的数据
传递数据:给组件标签添加属性
接收数据:函数组件通过参数 props 接收数据，类组件通过 this.props 接收数据

注意点: 1.可以给组件传递任意类型的数据
2.props 是只读的对象，只能读取属性的值，无法修改对象

1.传值给函数子组件(参数默认值 和 参数类型)
1.1. 父组件提供要传递的 state 数据
1.2. 给子组件标签添加属性，值为 state 中的数据
1.3. 子组件中通过 props 接收父组件中传递的数据

2.传值给类子组件(参数默认值 和 参数类型)

##### 子组件传递数据给父组件

子组件

```js
class CommSon extends React.Component {
  handlerDaughter = () => {
    this.props.son2father("类子组件传递给父组件的值");
  };

  render() {
    return (
      <div className="son">
        <h3>我是(类)子组件{this.props.name}</h3>
        <strong>{this.props.msg}</strong>
        <Consumer>{(data) => <span>{data}</span>}</Consumer>
        <button onClick={this.handlerDaughter}>
          点击我，把数据传递给父组件
        </button>
      </div>
    );
  }
  static defaultProps = {
    name: "郭小宝",
  };

  static propTypes = {
    age: propTypes.number,
  };
}

export default CommSon;
```

父组件

```js
import React from "react";

// 通讯女组件(函数组件)
import CommDaughter from "../CommDaughter";
// 通讯子组件(类组件)
import CommSon from "../CommSon";

class CommFather extends React.Component {
  state = {
    msg: "",
  };

  handlerDaughter2father = (val, bMsg) => {
    console.log(val);

    this.setState({
      msg: bMsg,
    });
  };

  handlerSon2father = (val) => {
    console.log(val);
  };

  render() {
    return (
      <div className="father">
        <h3>我是父组件:郭德纲</h3>
        {/* 函数组件 */}
        <CommDaughter
          name={"郭美美"}
          daughter2father={this.handlerDaughter2father}
        ></CommDaughter>
        {/* 类组件 */}
        <CommSon
          name={"郭麒麟"}
          age={15}
          msg={"收到妹妹的消息:" + this.state.msg}
          son2father={this.handlerSon2father}
        ></CommSon>
      </div>
    );
  }
}

export default CommFather;
```

##### 兄弟组件

#### context

1.如果传递数据层次太深, 一层一层的传递比较麻烦, 所以 React 也提供了其它的解决方案
1.1 通过 context 上下文传递
1.2 通过 Redux 传递 (相当于 Vuex)
1.3 通过 Hooks 传递 (相当牛 X)

2.如何通过 context 上下文来传递数据
2.1 调用创建上下文的方法, 只要我们调用了创建上下文的方法, 这个方法就会给我们返回两个容器组件
生产者容器组件(Provider) / 消费者容器组件(Consumer)
2.2 只要拿到了这两个容器组件, 那么我们就可以通过这两个容器组件从祖先传递数据给所有的后代了
2.3 首先在祖先组件中利用 '生产者容器组件' 包裹后代组件
2.4 然后在后代组件中利用 '消费者容器组件' 获取祖先组件传递过来的数据即可

```js
import { createContext } from "react";
// Provider,Consumer来源于同一个createContext()
const { Provider, Consumer } = createContext();
export { Provider, Consumer };
```

祖先组件

```js
class App extends React.Component {
  render() {
    return (
      <Provider value="pink">
        <div className="App">
          <CommFather></CommFather>
          <div>我是App组件</div>
          <AppSon></AppSon>
        </div>
      </Provider>
    );
  }
}
```

孙组件

```js
class AppGrandson extends React.Component {
  render() {
    return (
      <div className="AppGrandson">
        我是App的孙子组件
        <Consumer>{(data) => <span>{data}</span>}</Consumer>
      </div>
    );
  }
}
```

#### 案例

#### 组件的生命周期

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

## React 基础-day04

### 组件的生命周期

#### 什么是生命周期

- 组件的生命周期:组件从被创建到挂载到页面中运行，再到组件不用时卸载的过程
- 意义:组件的生命周期有助于理解组件的运行方式、完成更复杂的组件功能、分析组件错误原因等
- 生命周期的每个阶段总是伴随着一些方法调用，这些方法就是生命周期的钩子函数。
- 钩子函数的作用:为开发人员在不同阶段操作组件提供了时机。
- 只有 类组件 才有生命周期。

#### 生命周期的阶段

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

##### 创建时(挂载阶段)

执行时机:组件创建时(页面加载时)
执行顺序: constructor() --> render() --> componentDidMount
函数的作用:
constructor()函数: 创建组件时最先执行 作用是: 1.初始化 state 2.为事件处理程序绑定 this
render()函数: 每次组件渲染都会触发 作用: 渲染 UI(注意: 不能调用 setState())
componentDidMount 组件挂载(完成 DOM 渲染)后， 作用: 1.发送网络请求 2.DOM 操作

##### 更新时(更新阶段)

执行时机: 1.setState() 2.forceUpdate() 3.组件接收到新的 props
说明: 以上三者任意一种变化，组件就会重新渲染
执行顺序: render() --> componentDidUpdate()
函数的作用:
render： 每次组件渲染都会触发 作用:渲染 UI(与挂载阶段是同一 render)
componentDidUpdate: 组件更新(完成 DOM 渲染)后，作用: 1.发送网络请求 2.DOM 操作 注意: 如果要 setState()必须放在一个 if 条件中

##### 卸载时(卸载阶段)

执行时机:组件从页面中消失
函数的作用: componentWillUnmount 当组件卸载(从页面中消失)时触发 作用:执行清理工作(比如:清理定时器等)

### render-props 和高阶组件

#### React 组件复用概述

 思考:如果两个组件中的部分功能相似或相同，该如何处理?  处理方式:复用相似的功能(联想函数封装)
 复用什么?1. state 2. 操作 state 的方法 (组件状态逻辑 )  两种方式:1. render props 模式 2. 高阶组件(HOC)
 注意:这两种方式不是新的 API，而是利用 React 自身特点的编码技巧，演化而成的固定模式(写法)

#### render props 模式

思路:将要复用的 state 和操作 state 的方法封装到一个组件中
 问题 1:如何拿到该组件中复用的 state?
 在使用组件时，添加一个值为函数的 prop，通过 函数参数 来获取(需要组件内部实现)
 问题 2:如何渲染任意的 UI?
 使用该函数的返回值作为要渲染的 UI 内容(需要组件内部实现)

#### render props 模式

使用步骤 1.创建 Mouse 组件，在组件中提供复用的状态逻辑代码(1. 状态 2. 操作状态的方法) 2.将要复用的状态作为 props.render(state) 方法的参数，暴露到组件外部 3.使用 props.render() 的返回值作为要渲染的内容

```js
import React from "react";
import ReactDOM from "react-dom";

import Img from "./image/cat.png";
// 分析:
// 1.创建两个状态 X坐标 Y坐标
// 2.给window绑定事件,获取鼠标的坐标
// 3.把获取到的鼠标坐标 设置给两个状态 X坐标 Y坐标
// 4.渲染
class App extends React.Component {
  // 需求: 完成图片跟着鼠标走
  // 需求: 完成坐标显示

  state = {
    x: 0,
    y: 0,
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.fn);
  }

  fn = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  // render() {
  //   return (
  //     // <div>根组件{this.state.x}--{this.state.y}</div>

  //     // <img alt="" src={Img} style={{ position: 'absolute', top: this.state.y, left: this.state.x }} />
  //   )
  // }

  render() {
    return this.props.render(this.state);
  }
}

// ReactDOM.render(
//   <App render={(mouse) => {
//     return (
//       <div>{mouse.x}--{mouse.y}</div>
//     )
//   }} />,
//   document.getElementById('root')
// );

ReactDOM.render(
  <App
    render={(mouse) => {
      return (
        <img
          alt=""
          src={Img}
          style={{ position: "absolute", top: mouse.y, left: mouse.x }}
        />
      );
    }}
  />,
  document.getElementById("root")
);
```

#### 演示 Mouse 组件的复用

Mouse 组件负责:封装复用的状态逻辑代码(1. 状态 2. 操作状态的方法)  状态:鼠标坐标(x, y)
 操作状态的方法:鼠标移动事件
 传入的 render prop 负责:使用复用的状态来渲染 UI 结构

#### children 代替 render 属性

 注意:并不是该模式叫 render props 就必须使用名为 render 的 prop，实际上可以使用任意名称的 prop  把 prop 是一个函数并且告诉组件要渲染什么内容的技术叫做:render props 模式
 推荐:使用 children 代替 render 属性

## React 基础-day05

### 高阶组件

#### 什么是高阶组件(higher order component)

- 高阶组件：实际上就是一个函数，这个函数能够接受一个参数组件，然后，返回一个增强后的组件
- 参数组件：就是需要被包装的组件
- 返回的组件：增强后的组件，这个组件中就是通过 props 来接收到复用的状态逻辑的

```js
const withMouse = () => ...

// 创建一个组件，这个组件要使用鼠标位置
const Cat = props => {
  console.log('鼠标位置：', props)
  return (
    <img
      src={catImg}
      alt=""
      style={{
        position: 'absolute',
        top: props.y - 64,
        left: props.x - 64
      }}
    />
  )
}

// 使用高阶组价包装 Cat 组件，它会返回一个新的增强后的组件
const CatWithMouse = withMouse(Cat)

ReactDOM.render(<CatWithMouse />, document.getElementById('root'))
```

#### 高阶组件的封装

```js
const withMouse = (WrappedComponent) => {
  class Mouse extends React.Component {
    ... 省略鼠标位置状态 和 操作鼠标位置的方法逻辑

    render() {
      return <WrappedComponent {...this.state} />
    }
  }
  return Mouse
}

const Cat = props => {
  // props 就是鼠标位置
  return <img />
}

// 使用：
const CatWithMouse = withMouse(Cat)

<CatWithMouse />
```

#### 给高阶组件添加 displayName

- displayName：用于设置 react-dev-tools （浏览器中的 react 插件） 中组件的展示名称
- 注意：该属性仅仅用于设置展示名称，并不会对组件功能产生影响，所以，如果不想在 react-dev-tools 中进行区分，实际上，可以省略该设置。

```js
const withMouse = (WrappedComponent) => {
  class Mouse extends React.Component {
    ... 省略鼠标位置状态 和 操作鼠标位置的方法逻辑
  }

  // 给高阶组件设置名称，将来在 react-dev-tools 工具中，能够区分到底是哪一个高阶组件包装的组件
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
  }
  Mouse.displayName = `WithMouse${getDisplayName(WrappedComponent)}`

  return Mouse
}
```

#### 给高阶组件传递属性

- 推荐：在高阶组件中，将高阶组件接收到的 props 一起传递给被包装的组件；这样，才能在 被包装 组件中获取到传递的额外属性。
- 目的：防止 props 丢失问题

```js
// 渲染增强后的组件，传递属性
<CatWithMouse name="jack" />

// 高阶组件内部：
const withMouse = (WrappedComponent) => {
  class Mouse extends React.Component {
    ... 省略鼠标位置状态 和 操作鼠标位置的方法逻辑

    render() {
      return <WrappedComponent {...this.state} {...this.props} />
    }
  }
  return Mouse
}

const Cat = props => {
  // 通过 props 来获取到传递给高阶组件的属性
  // ... 省略其他代码
}
```

### setState() 的说明

#### 更新数据

1.setState() 是异步更新数据的 2.注意:使用该语法时，后面的 setState() 不要依赖于前面的 setState() 3.可以多次调用 setState() ，只会触发一次重新渲染

```js

this.state = { count: 1 } this.setState({
count: this.state.count + 1 })
console.log(this.state.count) // 1

```

#### 推荐语法

1.推荐:使用 setState((state, props) => {}) 语法 2.参数 state:表示最新的 state 3.参数 props:表示最新的 props

#### 第二个参数

1.场景:在状态更新(页面完成重新渲染)后立即执行某个操作 2.语法: setState(updater[, callback])

```js
this.setState(
  (state, props) => {},
  () => {
    console.log("这个回调函数会在状态更新后立即执行");
  }
);
this.setState(
  (state, props) => {},
  () => {
    document.title = "更新state后的标题:" + this.state.count;
  }
);
```

### JSX 语法的转化过程

1.JSX 仅仅是 createElement() 方法的语法糖(简化语法)
2.JSX 语法被 @babel/preset-react 插件编译为 createElement() 方法
3.React 元素:是一个对象，用来描述你希望在屏幕上看到的内容

### 组件更新机制

 setState() 的两个作用: 1. 修改 state 2. 更新组件(UI)
 过程:父组件重新渲染时，也会重新渲染子组件。但只会渲染当前组件子树(当前组件及其所有子组件)

### 组件性能优化

#### 减轻 state

 减轻 state:只存储跟组件渲染相关的数据(比如:count / 列表数据 / loading 等)
 注意:不用做渲染的数据不要放在 state 中，比如定时器 id 等
 对于这种需要在多个方法中用到的数据，应该放在 this 中

```js
class Hello extends Component { componentDidMount() {
// timerId存储到this中，而不是state中 this.timerId = setInterval(() => {}, 2000)
}
componentWillUnmount() {
clearInterval(this.timerId) }
render() { ... } }

```

#### 避免不必要的重新渲染

 组件更新机制:父组件更新会引起子组件也被更新，这种思路很清晰
 问题:子组件没有任何变化时也会重新渲染
 如何避免不必要的重新渲染呢?
 解决方式:使用钩子函数 shouldComponentUpdate(nextProps, nextState)
 作用:通过返回值决定该组件是否重新渲染，返回 true 表示重新渲染，false 表示不重新渲染
 触发时机:更新阶段的钩子函数，组件重新渲染前执行 (shouldComponentUpdate  render)

```js
class Hello extends Component {
shouldComponentUpdate() {
// 根据条件，决定是否重新渲染组件 return false
}
  render() {...}
}
```

#### 纯组件

 纯组件:PureComponent 与 React.Component 功能相似
 区别:PureComponent 内部自动实现了 shouldComponentUpdate 钩子，不需要手动比较
 原理:纯组件内部通过分别 对比 前后两次 props 和 state 的值，来决定是否重新渲染组件

 说明:纯组件内部的对比是 shallow compare(浅层对比)
 对于值类型来说:比较两个值是否相同(直接赋值即可，没有坑)
 注意:state 或 props 中属性值为引用类型时，应该创建新数据，不要直接修改原数据!(示例)

```js
class Hello extends React.PureComponent {
  render() {
    return <div>纯组件</div>;
  }
}
```
