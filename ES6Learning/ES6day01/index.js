const btn = document.getElementById('btn')
const txt = document.getElementById('txt')
const content = document.getElementById('content')

btn.onclick = function(){
	const val = txt.value;
	content.innerHTML = save`<p>${val}</p>`;
}
function save(parts){
	const value = arguments;
	const arr = [...value].slice(1);
	let str = '';
	for(let i=0; i<parts.length; i++){
		if(arr[i]){
			str += parts[i]+arr[i];
		}else {
			str+= parts[i];
		}
	}
	console.log( str.replace('/</','&lt;').replace('/>/', '&gt;') );
	console.log(str);
	return str;
}