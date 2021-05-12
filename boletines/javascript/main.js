/* let links = document.querySelectorAll("a");

links.forEach(function(link){
	console.log('Hola')
	console.log(link);
});

console.log('Hola') */

let celdas = document.querySelectorAll("td")

console.log(celdas);

celdas.forEach(function(td){
	td.addEventListener('click',function(){
		console.log('click');
	});
});

/*celdas.forEach(function(td){
	td.addEventListener('click',function(){
		console.log('click');
	});
});*/