---
title: typescript笔记
date: 2021-04-13 20:00:00
tags:
  - 笔记
categories:
  - 笔记
---


# typescript

## 获取 typescript

### 安装

```shell
 npm install typescript -g
```

### 验证版本

```shell
// typescript  compile
tsc -v
```

### 编译

``shell

 tsc 文件名.ts
```

```


## 基本数据类型

### 数组

```ts
// 第一种，可以在元素类型后面接上[]，表示由此类型元素组成的一个数组
// 第二种方式是使用数组泛型，Array<元素类型>

let arr:number[] = [1,2,3,4,];

let arr1: Array<string> = ['a','b','c'];
console.log(arr, arr1);
```

### 元组

```ts
// 元组
// 数组的特点
// ts中的数组和js中的数组
// 1.js中的数组元素什么类型都可以
// 2.js中的数组长度是可以随便变的

// 元组的特点
// 1.ts中的元组的元素数据类型是对号入座的
// 2.ts中的元组的长度不可变

// 第一步: 规定元组的元素的类型和长度
let aTuple: [string, number, boolean];

// 第二步: 赋值
// aTuple = ['aaa',1,true];
// console.log(aTuple);

// 注意: 元组的元素是不可多 不可少 是排列

// 错误
// aTuple = [1,'aaa',true];
// console.log(aTuple);

// 错误
// aTuple = ['aaa',1,true,false];
// console.log(aTuple);

```

### 枚举类型
TS中支持两种枚举， 一种是数字枚举，一种是字符串枚举
```ts
// 枚举类型是TS为JS扩展的一种类型, 在原生的JS中是没有枚举类型的
// 枚举用于表示固定的几个取值
// 例如: 一年只有四季、人的性别只能是男或者女
// 默认情况下，从0开始为元素编号。
// 你也可以手动的指定成员的数值。


// 语法:

// enum 枚举类型的名字 {键,键,键}

// enum Gender {
//   male,// 男士
//   female, // 女士
//   secret
// }
// 声明变量并把枚举类型的值赋值给某一个变量
// let x:Gender = Gender.female;
// let x:Gender = Gender.female;
// console.log(x);
// 能不能给所有的枚举类型的值赋值
// enum Gender {
//   male=2,// 男士
//   female=6, // 女士
//   secret=8
// }
// 能不能只给第一个赋值
// enum Gender {
//   male=8,// 男士
//   female, // 女士
//   secret
// }
// let x:Gender = Gender.secret;
// console.log(x);
// 能不能只给第二个赋值 如果第二个赋值 那么第一个会是几 第三个会是几

enum Gender {
  male,// 男士
  female=4, // 女士
  secret
}

let x:Gender = Gender.secret;
console.log(x);
```

#### 数字枚举注意点
 1. 如果是给Male赋值,那么后面的值都改变
 2. 如果是给Female赋值,那么Male不改变 Female的值发生改变
 3. 也可以给male和female分别赋值
 4. 数字枚举不仅仅可以使用默认值 还可以使用常量, 计算后的结果

#### 枚举反向映射
 可以根据枚举值获取到原始值
 也可以根据原始值获取到枚举值

#### 字符串枚举
注意: 枚举反向映射 在字符串枚举中不能实现

#### 字符串枚举的注意点
 如果使用字符串给前面的枚举值赋值了字符串,那么后面的也必须赋值(无论是字符串还是数字都可以)
 如果使用字符串给前面的枚举值赋值了字符串,那么后面的也必须赋值,如果不赋值,那么就使用默认值,也会被ts认为是字符串枚举
 和数字枚举不一样，字符串枚举不能使用常量或者计算结果给枚举值赋值
 虽然字符串枚举不能够使用常量或计算结果给枚举值赋值，但它可以使用内部的其他枚举值来赋值


#### 异构枚举
枚举中既包含数字又包含字符串，我们称之为异构枚举
注意点: 如果是是字符串枚举，那么无法通过原始值获取到枚举值

#### 枚举成员类型
之前的版本 都可以使用字符串枚举 来声明 接口的类型
注意: 当前版本 不可以使用字符串枚举作为接口的类型 ,只能使用数字枚举
```ts

// enum Gender {
//   Male = 'aaa',
//   Female ='bbb'
// }

// // 人接口

// interface PersonInterface {
//   gender: Gender.Male
// }


// // 类实现人的接口
// class Person implements PersonInterface {
//   gender: Gender.Male

//   constructor (){
//     this.gender = 'aaa';
//   }
// }

// enum Gender {
//   Male ,
//   Female
// }

// // 人接口

// interface PersonInterface {
//   gender: Gender.Male
// }


// // 类实现人的接口
// class Person implements PersonInterface {
//   gender: Gender.Male

//   constructor (){
//     this.gender = 1;
//   }
// }

```

#### 联合枚举类型
联合类型就是将多种数据类型通过|链接起来
我们可以把枚举类型当作一个联合类型来使用

```ts

// let value:number|string;

// value = 4;
// value = 'asdfds';


// enum Gender {
//   Male ,
//   Female
// }

// // let value: Gender.Male | Gender.Female




// interface PersonInterface {
//   gender: (Gender.Male | Gender.Female)
// }


// // // 类实现人的接口
// class Person implements PersonInterface {
//   gender:(Gender.Male | Gender.Female)

//   constructor (){
//     this.gender = 1;
//   }
// }
```


#### 运行时枚举
枚举在编译之后是一个真实存在的对象，所以可以在运行时使用
而像接口这种只是用来做约束做静态检测的代码，编译之后是不存在的

```ts
// interface TestInterface {
//   age: string
//   num: number
// }

// enum Gender {
//   Male ,
//   Female
// }

// let a = Gender.Male
// console.log(a);


```

#### 常量枚举
普通枚举和常量枚举的区别
普通枚举会生成真实存在的对象
常量枚举不会生成真实存在的对象，而是利用枚举成员的值直接替换使用到的地方
```ts

// const enum Gender1 {
//   Male = 5,
//   FeMale = 6
// }

// let a = Gender1.Male;
// console.log(a);
```




### any类型

```ts
// any类型
// 特点: 使用any就意味着不让ts进行类型检查
// 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。
// 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。
// 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。
// 那么我们可以使用any类型来标记这些变量

// 使用场景
// 1.对于不确定的数据类型使用any 不要因为偷懒、不懂全部用any
// 2.对于老项目，要变成ts的时候，用any

// 数字
// let num:any;
// num = 5;
// num = "122";
// num = false;

// 使用了any之后，就和以前的js一模一样
let arr6:any[] = [1,'fb',true];
console.log(arr6);
```


### unknow类型

```ts
// 1.unknow类型和any类型一样，同样都是顶级类型
// unknow 代表未知类型
let a:unknown;

a = 5;
a = 'yes';
a = true;

// true在ts中是什么类型的数据
console.log(a)

// unknown 类型只能被赋值给 any 类型和 unknown 类型本身


// let c:boolean = a;

// let d:unknown = a;

// let f:any = a;
```

### undefined和null

```ts
// Not much else we can assign to these variables!

// 在严格模式下(就是tsconfig.json中   "strict": true,的时候就是严格模式 ，undefined类型的值只能是undefined)
// 同理null类型的值只能是null
// let u: undefined = undefined;
// let n: null = null;

let u: undefined = null;
let n: null = undefined;


// 在非严格模式下，不区分undefined和null 他们被ts归为一类
```

### unknow

```ts
// 1.unknow类型和any类型一样，同样都是顶级类型
// unknow 代表未知类型
let a:unknown;

a = 5;
a = 'yes';
a = true;

// true在ts中是什么类型的数据
console.log(a)

// unknown 类型只能被赋值给 any 类型和 unknown 类型本身


// let c:boolean = a;

// let d:unknown = a;

// let f:any = a;
```

### 对象

```ts

// let a = function(){}

// function a(){}

// let a =new Function()

// 联合类型
// 创建一个名称为create的函数 参数是o，o的变量类型是object或者null，没有返回值

// declare 声明
// declare function asdf(o:object | null):void;

// asdf({a:12});
// asdf(null);

// let fn = function (o:object | null) {
  
// }

// function aa()

// let a =function ()

// let aaaa = new Function()

// fn({a:12})

// let ua:object;

// ua = {
//   a:1,
//   b:2
// }



// let abc:object = {}
```

### 非空断言

```
描述:
    在上下文中当类型检查器无法断定类型时，一个新的后缀表达式操作符 ! 可以用于断言操作对象是非 null 和非 undefined 类型。具体而言，x! 将从 x 值域中排除 null 和 undefined 。
```

``` ts

// 声明了一个函数 notNull 参数是str 数据类型是string 或者 undefined 或者是null
// function notNull(str: object | undefined | null){
//   // 在某种场景下 我要初始化对象
//   // null代表空 但是也代表意料之中一般用于初始化一个对象
//   // undefined 代表空 未定义 代表的是意料之外
//   let str1 = null; // 初始化str1

//   str1 = str!;
//   console.log(str1);

//   // 场景: 当我调用函数的时候 初始化一个对象 
//   // 把函数的参数的值赋值给函数中的变量
// }

// notNull({a:1,b:2})


// function notNull(str: string | undefined | null){
//   // 在某种场景下 我要初始化对象
//   // null代表空 但是也代表意料之中一般用于初始化一个对象
//   // undefined 代表空 未定义 代表的是意料之外
//   // let str1 = null; // 初始化str1
//   // let str1:string = "123";
//   let str1:string = str!;
//   console.log(str1);
//   // console.log(str)
//   // 场景: 当我调用函数的时候 初始化一个对象 
//   // 把函数的参数的值赋值给函数中的变量
// }

// notNull()



// function notNull(str: string | undefined | null){
 
//   let str1:string = str!;
//   console.log(str1);

// }


// notNull()
```

### 类型推断

```
描述: 类型推断: 推断就是猜测 也是ts的一种比较智能的行为

1.什么是自动类型推断
不用明确告诉编辑器具体是什么类型，编辑器就知道是什么类型

2.根据初始化值自动推断
注意: 如果是先定义再初始化，那么是无法自动推断的,如果是定义的时候同时初始化，那么TS就会自动进行类型推断
```

```ts
// let foo = 123;  //number

// foo = '1212'; // string

// 函数返回值

// add返回值类型
// function add(a:number, b:number) {
//   return a + b;
// }

// // 数字可以赋值给数字

// let str3:string = add(2,3);

// let str4:number = add(1,2);

// let num4:number = NaN;


// function add(a:number, b:number) {
//   return a + b;
// }

// // 数字可以赋值给数字

// add();


// let arr5 = [1,2,4,5];

// arr5[3]='aaa';
```

### 类型守卫

``` 
描述:
TypeScript 熟知 JavaScript 中 instanceof 和 typeof 运算符的用法。如果你在一个条件块中使用这些，TypeScript 将会推导出在条件块中的的变量类型
```

```ts

// function useStr(str:string|number){
//   // 如果这里不是string 那么不能使用str的substr方法
//   // 如果是string类型 那么就可以使用 写错了substr也会报错

//   if (typeof str === 'string') {
//     // str.substr(1,2);
//     // str.sustr(1,2); str已经被判断到string类型 所以如果你写错了substr未sustr那么ts检测到了就报错
//   }else {
//     // 现在经过判断 肯定str不是string 那么开发者再调用str的substr方法 就会报错 
//     str.substr(1,2);
//   }

//   str.substr(1,2); // 这里也会报错 是因为str的类型不确定
// }

// let arr = []
// let obj = {}

// typeof arr obj => obj


// interface A {
//   x: number;
// }

// interface B {
//   y: string;
// }

// function doStuff(q: A | B) {
//   if ('x' in q) {
//     // q: A
//     console.log(q.y);
//     console.log(q.x);
//   } else {
//     // q: B
//     console.log(q.x);
//   }
// }


let x:string | number|boolean;

x = 5;
x = true;

type sssy=string | number|boolean;

let xyz:sssy = 6;



```

## 函数

### 函数的创建方法

```
1.1 函数关键字
1.2 函数表达式
1.3 箭头函数
1.4 构造函数创建函数 let c= new Function("函数形参","函数体")
```

### 函数的可选参数

```ts
// 在形参的后面添加一个问号，就代表该参数可选
// let fn = function(x:number , y?:number){
//   if (y) {
//     return x+y;
//   } else {
//     return x;
//   }
// }

// // ts中如果没有声明可选 ，那么必须传 不传报错
// let result:number =fn(1,2);
// console.log(result);
```

### 参数的默认值

```ts
// // 和es6是一样的
// let fn = function(y:number,x:number =3){
//   if (y) {
//     return x+y;
//   } else {
//     return x;
//   }
// }

// // ts中如果没有声明可选 ，那么必须传 不传报错
// let result:number =fn(6);
// console.log(result);


// rest参数(剩余参数)
// 我们班有一个人 今年20岁了，
// 未来会有人来
// 计算全班人的平均年龄
// 
// let a;

// console.log(a);

let getAvg = function (age:number, ...rest:number[] ){
  let sum:number = 0;
  for (let i = 0; i < rest.length; i++){
    sum+=rest[i];
  }

  let avg = (sum+age)/(rest.length+1);
  return avg;
}

console.log(getAvg(22,20,20,20,20))
```


## 类

### 类的概念

``` 
JavaScript 语言中，生成实例对象的传统方法是通过构造函数。 
这种写法跟传统的面向对象语言（比如 C++ 和 Java）差异很大，很容易让新学习这门语言的程序员感到困惑。
ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。
在TypeScript中，同样使用类来创建对象

```
```ts

// class Person {
//   // 属性
//   name: string
//   // 构造函数
//   constructor(msg:string){
//     this.name = msg;
//   }
//   // 方法
//   study():void{
//     console.log(`${this.name}爱学习`)
//   }
// }

// 通过类来实例化对象
// let pdd = new Person("柳嬷嬷");
// console.log(pdd.name);
// pdd.study("佟丽娅")
// pdd.study()


```

### 类的继承 

```
继承的语法 extends 
继承的应用场景: vue 和 react中组件的ts写法
```

```ts

// 基类(父类)
// 定义一个动物类
class Animal {
  age: number

  constructor(age:number) {
    this.age = age;
  }

  eat():void{
    console.log("我爱吃食物")
  }
}

// 派生类(子类)
// 定义一个 老鼠类
class Mouse extends Animal {
  name: string

  constructor(name: string){
    super(1)
    this.name = name;
  }

  dadong(){
    console.log(`${this.name}会打洞`)
  }
}


// 实例化对象
let Jerry = new Mouse("Jerry");
console.log(Jerry.age)
Jerry.eat();
Jerry.dadong();

```

### 类的修饰符
```
public  父类子类对象都可以访问到
protected 父类子类访问到 实例化出来的对象不能访问
private 只有定义该属性的类内部可以访问 其他都不可以访问(包括继承也不可以)
readonly 只读

抽象类
只要某一个类中有抽象方法 就是抽象类
```

```ts

// class Animal {
//  private age: number

//   constructor(age:number) {
//     this.age = age;
//   }

//   eat():void{
//     console.log("我爱吃食物")
//   }
// }

// // 派生类(子类)
// // 定义一个 老鼠类
// class Mouse extends Animal {
//   name: string

//   constructor(name: string){
//     super(1)
//     this.name = name;
//   }

//   dadong(){
//     console.log(`${this.name}-${this.age}会打洞`)
//   }
// }


// // 实例化对象
// let Jerry = new Mouse("Jerry");
// // console.log(Jerry.age)
// Jerry.eat();
// Jerry.dadong();

// 3.3 protected

// class Animal {
//   protected age: number
 
//    constructor(age:number) {
//      this.age = age;
//    }
 
//    eat():void{
//      console.log("我爱吃食物")
//    }
//  }
 
//  // 派生类(子类)
//  // 定义一个 老鼠类
//  class Mouse extends Animal {
//    name: string
  
//    constructor(name: string){
//      super(1)
//      this.name = name;
//    }
 
//    dadong(){
//      console.log(`${this.age}会打洞`)
//    }
//  }
 
 
//  // 实例化对象
//  let Jerry = new Mouse("Jerry");
// //  Property 'age' is protected and only accessible within class 'Animal' and its subclasses.
//  console.log(Jerry.age)
// //  Jerry.eat();
//  Jerry.dadong();


// public  父类子类对象都可以访问到
// protected 父类子类访问到 实例化出来的对象不能访问
// private 只有定义该属性的类内部可以访问 其他都不可以访问(包括继承也不可以)


// 只读
// class Man {
//   readonly name: string;
//   constructor(msg: string) {
//       this.name = msg;
//   }
// }

// let man = new Man("James");
// man.name = "wade"; //错误，name是只读属性


// 存取器(get set)
// class Animal {
//   private age: number
 
//    constructor(age:number) {
//      this.age = age;
//    }

//    get getAge():number{
//     return this.age;
//    }

//    set setAge(age:number) {
//     this.age = age
//    }
 
   
//    eat():void{
//      console.log(`我爱吃食物${this.age}`)
//    }
//  }
//  // 派生类(子类)
//  // 定义一个 老鼠类
//  class Mouse extends Animal {
//    name: string
//    constructor(name: string){
//      super(1)
//      this.name = name;
//    }

//    dadong(){
//      console.log(`${this.name}`)
//    }
//  }
//  // 实例化对象
//  let Jerry = new Mouse("Jerry");
//  // console.log(Jerry.age)
//  Jerry.eat();
//  Jerry.dadong();

// //  console.log(Jerry.getAge())
// //  Jerry.setAge(15);
// //  console.log(Jerry.getAge())
// console.log(Jerry.getAge)
// Jerry.setAge = 5;
// // console.log(Jerry.getAge())

ct class PoorFather {
 abstract getMoney(money:number):void
}


class RichSon extends PoorFather {
  getMoney(){
    console.log("我有一张充满的电话卡")
  }
}

// React.component {
//   porps: 
// }

let Long = new RichSon();

Long.getMoney();

```

## 接口

### 接口概念及语法

和 java 语言相同，TypeScript 中定义接口也是使用 interface 关键字来定义，Java中，我们说一个类实现了某一个接口，在这里，我们只关心值的外形，只要传入的对象满足接口的外形，那么它
就是被允许的

```ts
/**
 * Iname代表接口的名字
 * propName代表属性,也就是普通属性
 * string 代表属性的数据类型
 */
interface Iname {
  propName: string
  .
  .
  .
}
```

### 可选属性
默认情况下一个变量（对象）是对应的接口类型，那么这个变量（对象）必须实现接口中所有的属性和方法。
但是，开发中为了让接口更加的灵活，某些属性我们可能希望设计成可选的（想实现可以实现，不想实现也没有关系），这个时候就可以使用可选属性，带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号,可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。

```ts
interface ConfigValue {
  label: string;
  label?:number;
}

function print(labelledObj: ConfigValue) { 
  console.log(labelledObj.label);
}

const Obj = {size: 10, label: "Size 10 Object"};
print(myObj);

``` 




### 只读属性
默认情况下，接口中定义的属性可读可写： 但是有一个关键字 readonly，定义的属性值，不可以进行修改，强制修改后报错。


```ts
interface IQuery {
  readonly page: number;
  findOne(): void;
}
const q: IQuery = {
  page: 1,
  findOne() {
    console.log("findOne");
  },
};
q.page = 10;// Cannot assign to 'page' because it is a read-only property.

``` 


### 函数类型接口
Interface 还可以用来规范函数的形状。Interface 里面需要列出参数列表返回值类型的函数定义。写法如下：
定义了一个函数接口
接口接收三个参数并且不返回任何值
使用函数表达式来定义这种形状的函数


```ts
interface Func {
  // 定义这个函数接收两个必选参数都是 number 类型，以及一个可选的字符串参数 desc，这个函数不返回任何值
  (x: number, y: number, desc?: string): void
}

const sum: Func = function (x, y, desc = '') {
   // ts类型系统默认推论可以不必书写上述类型定义
  console.log(desc, x + y)
}

sum(32, 22)

type Func = (x: number, y: number, desc?: string) => void;
``` 


### 接口的实现
接口除了定义某种类型规范，也可以和其他编程语言一样，让一个类去实现某个接口，那么这个类就必须明确去拥有这个接口中的属性和实现其方法：

在代码设计中，接口是一种规范；接口通常用于来定义某种规范, 类似于你必须遵守的协议

站在程序角度上说接口只规定了类里必须提供的属性和方法，从而分离了规范和实现，增强了系统的可拓展性和可维护性；

```ts
// 定义接口
interface Entity {
  title: string;
  log(): void;
}

// Post类实现接口Entity
class Post implements Entity {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  log(): void {
    console.log(this.title);
  }
}

``` 


### 接口的继承
和类一样，接口也能继承其他的接口。这相当于复制接口的所有成员。接口也是用关键字 extends 来继承。

一个 interface 可以同时继承多个 interface ，实现多个接口成员的合并。用逗号隔开要继承的接口。

需要注意的是，尽管支持继承多个接口，但是如果继承的接口中，定义的同名属性的类型不同的话，是不能编译通过的

如果现在有一个类实现了 Square 接口，那么不仅仅需要实现 Square 的方法，也需要实现 Square 继承自的接口中的方法，实现接口使用 implements 关键字 


```ts
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}
``` 


### interface和type的区别
Interface可以而type不可以
  interface 能够声明合并
Type可以而interface不可以
  type 可以声明基本类型别名，联合类型，元组等类型
  type 语句中还可以使用 typeof 获取实例的 类型进行赋值

```ts
interface User {
  name: string
  age: number
}

interface User {
  sex: string
}

/*
User 接口为 {
  name: string
  age: number
  sex: string
}
*/

// 当你想获取一个变量的类型时，使用 typeof
let div = document.createElement('div');
type B = typeof div

``` 


## 泛型

### 为什么需要泛型
  定义一个创建数组的方法，可以创建出指定长度的数组，并且可以用任意指定的内容填充这个数组
  
  存在的问题: 编写代码没有提示，因为TS的静态检测不知道具体是什么类型;哪怕代码写错了也不会报错，因为TS的静态检测不知道具体是什么类型

### 泛型是什么
泛型（Generics）是允许同一个函数接受不同类型参数的一种模板。在编写代码的时候，我们既要考虑代码的健壮性，又要考虑代码的灵活性和可重用行，通过TS的静态检测能让我们编写的代码更加健壮，但是在变得健壮的同时却丢失了灵活性和可重用性，通过泛型 不仅可以让我们的代码变得更加健壮，还能让我们的代码在变得健壮的同时保持灵活性和可重用性 


### 泛型语法

```ts
function identity<T,U>(value:T,message:U):T{
  console.log(message)
  return value;
}
  console.log(identity<number,string>(5,'aaa'))


``` 

### 泛型约束
默认情况下我们可以指定泛型为任意类型，但是有些情况下我们需要指定的类型满足某些条件后才能指定
那么这个时候我们就可以使用泛型约束


```ts
let getArray = <T>(value:T, items:number):T[] =>{
  return new Array(items).fill(value);
}


let arr = getArray<string>("abc",5);
let arr = getArray<number>(3,4);
// let res = arr.map(item => item.length);

``` 

### 在泛型中使用类型参数
一个泛型被另一个泛型约束，就叫做泛型约束中使用类型参数

```ts
需求: 定义一个函数用于根据指定的Key获取对象的value


let getProps = (obj,key )=>{
  return obj[key];
}
``` 

## 包装类型

```ts
// let getProps = (obj:object,key:any )=>{
//   return obj[key];
// }


// let getProps = <T,K extends keyof T>(obj:T,key:K)=>{
//   return obj[key];
// }

// a 不仅仅是个字符串 也是一个对象
// 数字在js中也是对象 
// 字符串也是对象
// getProps<object, string>('a','slice')
// getProps(true,false);
// getProps([1,2,3], 1)

// getProps([1,2,3],5)

// getProps({a:1, b: 2}, 'c')
```

## 类型兼容

### 数据类型兼容
类型兼容性用于确定一个类型是否能赋值给其他类型。
协变（Covariant）：只在同一个方向；
逆变（Contravariant）：只在相反的方向；
双向协变（Bivariant）：包括同一个方向和不同方向；
不变（Invariant）：如果类型不完全相同，则它们是不兼容的。



