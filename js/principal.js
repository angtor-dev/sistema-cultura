window.onload = init //Se ejecita la función init() al terminar de carga la pagina

function init() { //función que se ejecuta justo despues de cargar la pagina
	add_estilos();
	add_eventos();
}

//función para terminar de añadir estilos despues de cargar la página
function add_estilos() {
	//Añade transición a todos los botones
	var botones = document.querySelectorAll('.btn-h, #btn-perfil, .btn-bl, .btn-bl a');
	for(var i=0, l=botones.length; i<l; i++){
		botones[i].style.transition = ".4s";
	}
	//Modifica la transición del botón de perfil cuando se clickea
	document.getElementById("btn-perfil").onmousedown = function() {this.style.transition = "0s";}
	document.getElementById("btn-perfil").onmouseleave = function() {this.style.transition = ".4s";}
}

//Función para añadir eventos a los elementos desde js (para que el html quede más entendible)
function add_eventos() {
	document.getElementById('btn-perfil').addEventListener("click", abrir_menu);
	document.querySelector('.menu-perfil .header .fa-times').addEventListener("click", cerrar_menu);
}

//Función para abrir Menú de Perfil
function abrir_menu() {
	document.querySelector('.contenedor-menu').style.width = "100vw";
	document.querySelector('.contenedor-menu').style.backgroundColor = "rgba(0, 0, 0, .4)";
	document.querySelector('.menu-perfil').style.width = "350px";
	document.body.style.overflowY = "hidden";
}

//Función para cerrar Menú de Perfil
function cerrar_menu() {
	document.querySelector('.contenedor-menu').style.backgroundColor = "rgba(0, 0, 0, .0)";
	document.querySelector('.menu-perfil').style.width = "0";
	document.body.style.overflowY = "auto";
	setTimeout(function() {document.querySelector('.contenedor-menu').style.width = "0";},400);
}