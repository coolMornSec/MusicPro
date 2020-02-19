# ES6 LearnNote

## 一、模板字符串  `

- 使用 `` 进行字符串的拼接
- 模板字符串标记   [*扩展]

------

## 二、正则表达式
- Regular Expression 正则表达式
> 正则表达式是一个由字符序列形成的搜索模式
> JavaScript中，正则表达式通常用于两个字符串方法，search() 和 replace()
> search()方法用于搜索指定子字符串，或者检索匹配正则表达式的子字符串，并返回子串的起始位置。
> replace()方法是将指定子字符串替换字符串中原有的子字符串，或者匹配正则表达式的子字符串。

> \w 				寻找单词字符
> \W				寻找非单词字符
> \d				寻找数字
> \D				寻找非数字
> \s				寻找空白字符
> \S				寻找非空白字符
> \n				寻找换行符
> \r				寻找回车符
> \t				寻找制表符

- 量词
> n+				包含一个或多个n的字符串
> n*				包含0个或多个n的字符串
> n?				包含0个或1个n的字符串
> n{X}				包含X个n的字符串
> n{X,Y}			n连续出现至少X次，至多Y次
> n$				任何以n结尾的字符串
> ^n				任何以n开头的字符串

- 正则对象方法
> exec()			检索指定值，返回指定位置
> test()			检索指定值，返回true/false
> toString()		返回正则表达式的字符串

- 支持正则表达式的String对象的方法
> search()			检索指定值，返回下标
> match()			匹配指定字符串
> replace()			替换指定字符串
> split()			把字符串分隔为数组

------



## 三、解构相关

## 3.1 什么是解构？

> 1、ES6的一种语法规则，将一个对象或数组的某个属性提取到某个变量中。
>
> 2、解构不会对解构的目标造成任何影响。
>
> 3、可以用于解构**对象**、**数组**、**函数参数**

## 在解构中使用默认值语法

​	**同名变量**

```
{同名变量 = 默认值}
```

​	**非同名变量**

```
{属性名: 变量名}	[变量名在后]
```

**解构默认值**
	```
	let [a=2] = [undefined]; // a = 2
	``` 

当解构模式有匹配结果，且是undefined时，会触发默认值作为返回结果;

当解构模式有匹配结果，且不为undefined时，不会触发默认值作为返回结果。

  ```
  let [a=3, b=a] = [];		// a=3, b=3
  let [a=3, b=a] = [1]  	// a=1, b=1
  let [a=3, b=a] = [1,2]	// a=1, b=2
  ```

  - a与b匹配结果为undefined，触发默认值：a=3, b=a=3
  - a正常解构赋值，匹配结果：a=1，b匹配结果undefined，触发默认值b=a=1
  - a与b正常解构赋值，匹配结果：a=1, b=2

```
// 对象解构
const animal = {
    name: '大黄',
    age: 8,
    yark: '汪汪',
    son: {
        name: '小黄',
        age: '1'
    }
}
let {name='world', age, m=5, n} = animal;
console.log(name, age, m, n); // 大黄 8 5 undefined
```

```
// 数组解构
const arr = ["a", "b", "c", [1, 3, 4]];

let [n1 = 1, n2 = undefined, n3, n4, n5 = 11] = arr;
console.log(n1, n2, n3, n4, n5);  // a b c [1,3,4] 11
```

***变量值交换问题**

```
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b);		// 2 1
```

***函数参数部分**

```
// 定义ajax函数，不传参时，解构匹配结果为undefined，参数取默认值
// 1、解构参数对象为undefined时，解构对象为默认值{}
// 2、method, url解构匹配结果为undefined，取默认值
function ajax({
	method = 'get',
	url = '/'
}={}){
	console.log(method, url);
}
// 传参调用
ajax({method: 'post', url: '/www.baidu.com'});	
// 'post', '/www.baidu.com'

// 不传参调用
ajax();				// 'get', '/'
```



## 3.2 剩余参数

```
const user = {
	name: '莫凡'，
	age: '18',
	lovers: {
		name: '穆宁雪',
		age: 18
	}
}
// 实现将name属性赋值，剩余属性放到obj中
let {name, ...obj} = user;
```

```
const arr = [1, 2, 3, 4];
// 剩余参数必须放到最后
let [n1, ...n2, brr] = arr;
console.log(n1, n2, brr); 
//Uncaught SyntaxError: Rest element must be last element

let [n1, ...n2] = arr;
console.log(n1, n2);	// 1 [2,3,4]
```



****

## 函数

**使用函数默认参数时，不允许同名函数**
**只有未传递参数或者传undefined时，才会使用默认值，null被看作是有效的传递**

```
// 不报错
function fn(name,name){
 console.log(name);
}

// 报错
//SyntaxError: Duplicate parameter name not allowed in this context
function fn(name,name,age=17){
 console.log(name+","+age);
}
```

**箭头函数 v => v**
**当函数需要返回对象时，需要用()括起来，与{}代码块进行区分**

```
// 报错
let f = (id,name) =>{id:id, name:name}
f(6,2);  // SyntaxError: Unexpected token :

// 不报错
let f = (item,index) =>({a:1, b:2})
f(6,2);  // {id:6, name:2}
```

**注意: 没有 this、super、arguments 和 new.target 绑定。**
箭头函数里没有this对象，此时的this是外层的this对象，即window

```
// 回调函数
var Person = {
    'age': 18,
    'sayHello': function () {
      setTimeout(function () {
        console.log(this.age);
      });
    }
};
var age = 20;
Person.sayHello();  // 20
 
var Person1 = {
    'age': 18,
    'sayHello': function () {
      setTimeout(()=>{
        console.log(this.age);
      });
    }
};
var age = 20;
Person1.sayHello();  // 18
```

### 参数默认值

> 在书写形参时直接给形参赋值，即为默认值

- [ 对arguments的影响 ]

  只要给函数加上参数默认值，该函数会自动匹配严格模式下的规则：arguments和形参脱离。

  ```
  function sum(a,b){
    a = 3, b=5;
    console.log('arguments: ', arguments[0], arguments[1]);
    console.log('形参：', a, b);
  }
  ```

- [ 留意暂时性死区 ]

  形参和ES6中的let和const声明一样，具有作用域，并且根据参数的声明顺序，存在暂时性死区

  ```
  function test(a=b, b){
  	console.log(a, b);
  }
  // cannot access 'b' before initializaiton at test
  test(undefined, 2);
  
  
  ```





















