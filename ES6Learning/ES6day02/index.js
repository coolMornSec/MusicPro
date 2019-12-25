// 'use strict'
// 严格模式下arguments与形参脱离，如果使用形参默认值，则该函数自动转为严格模式下的规则
// function sum(a,b){
//   a = 3, b=5;
//   console.log('arguments: ', arguments[0], arguments[1]);		// 1 2
//   console.log('形参：', a, b);		// 3 5
// }
// sum(1,2);

// function test(a=b, b){
// 	console.log(a, b);
// }
// cannot access 'b' before initializaiton at test
// 在 对a赋值时，b未声明，要避免这种情况
// test(undefined, 2);