// u4e00-u9fa5 指的是Unicode编码中文基本汉字的范围
const input = document.getElementById('name');
// input.onkeyup = function(){
	
// 	this.value = this.value.replace(/([^0-9A-z\u4e00-\u9fa5]|[\^\_])/g,'');
// }
/** input框值发生变化时，立即触发 */
input.oninput = function(){
	this.value = this.value.replace(/([^0-9A-z\u4e00-\u9fa5]|[\^\_])/g,'');
}

// onchange 事件触发的步骤
// 当输入框获得焦点时，系统储存当前值
// 当输入框失去焦点时，判断当前值是否与之前储存值相等，如不同则触发onchange事件
// 非IE浏览器回车键也能触发
// input.onchange = function(){
// 	console.log('change');
// 	this.value = this.value.replace(/[^0-9A-z]/gi,'');
// }



// input.oninput = function(){
// 	let val = input.value;
// 	console.log(val);
// 	let res = '',
// 		e = /^[^0-9A-z]$/g;
// 	console.log( res.search(e) );
// 	res = val.replace(e, '');
// 	input.value = res;
// };
// let val = '18884889488';
// 以135|138|147|152|158|178|182|188开头，后面有八位数字的字符串符合手机号
// let e = /^(135|138|147|152|158|159|178|182|188)\d{8}$/;
// if(e.test(val)){
// 	console.log('当前满足手机号');
// }

// 邮箱
// let reg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
// if(reg.test(val)){
// 	console.log('当前满足邮箱');
// }

/*校验邮件地址是否合法 */
function IsEmail(str) {
    var reg=/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
    return reg.test(str);
}
// 正则表达式，以^开始，以$结束

// search()
// 1. 使用正则表达式作为参数
// const str = 'Hello World!';
// let n = str.search(/ll/);		// 2
// console.log(n);

// 2. 使用字符串作为参数
// const str = 'Hello World';
// let n = str.search('ll');			// 2
// console.log(n);

// const str = 'Hello World Hh!';
// let n = str.search(/h/i);				// 忽略大小写的匹配
// let n = str.search(/o/g);					// 全局匹配
// console.log(n);

// replace()	replace()不改变原有字符串
// const str = 'Hello World!';
// let newStr = str.replace('ll', '玲玲');
// let newStr = str.replace(/ll/, '玲玲');
// console.log('替换后的字符串——————' + newStr, '原字符串——————' + str);
