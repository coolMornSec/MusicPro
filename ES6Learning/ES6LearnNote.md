# ES6 LearnNote

## 一. 模板字符串  `

- 使用 `` 进行字符串的拼接
- 模板字符串标记   [*扩展]

## 二. 正则表达式
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


## 函数

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


## 剩余参数，展开运算符



