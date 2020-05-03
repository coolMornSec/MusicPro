const $province = $('#st1');
const $city = $('#st2');
const proList = [
	{key:'0', description:'河南'},
	{key:'1', description:'陕西'},
	{key:'2', description:'辽宁'},
];
const cityList = [
	[
	    {key:'001', description:'郑州'},
	    {key:'002', description:'驻马店'},
	    {key:'003', description:'信阳'}
	],
	[
	    {key:'004', description:'西安'},
	    {key:'005', description:'渭南'},
	    {key:'006', description:'咸阳'}
	],
	[
	    {key:'007', description:'沈阳'},
	    {key:'008', description:'大连'},
	    {key:'009', description:'本溪'}
	],
];

$province.on('change', function(e) {
	let index = $(this).val();
	
	loadSelect(index);
})

function loadSelect(index){
	const tempList = cityList[index];
	let tpl = '';
	for (let i = 0; i < tempList.length; i++) {
		const ele = tempList[i];
		tpl += `<option value="${ele.key}">${ele.description}</option>`
	}
	$city.html(tpl);
}

const $div = $('#tablecc').find('div.sel');
console.log($div.text());










