let mostrar = document.querySelector('#mostrar');
let cont = 0;
function sumar(){
	let mostrar = document.querySelector('#mostrar');
	cont++;
	mostrar.innerText = cont;
}
function restar(){
	let mostrar = document.querySelector('#mostrar');
	cont--;
	mostrar.innerText = cont;
}
function reset(){
	let mostrar = document.querySelector('#mostrar');
	cont = 0;
	mostrar.innerText = cont;
}