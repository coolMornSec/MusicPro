
const input = document.getElementById('name');
input.addEventListener('keyup', function(){
	console.log(this.value);
	let val = this.value;
	this.value = val.replace(/-/g,'');
},false);