let button = document.getElementById('color');
let body = document.getElementById('body');

var index = 0;
var color = ["black","white"];

button.addEventListener('click',function () {
	

	if(index>= color.length){
		index = 0;
	}
	body.style.backgroundColor = color[index];
	index++;
});