window.onload = init; //Se ejecuta la función init() al terminar de carga la pagina

// Variables:
var estado_temas = false; //variable para saber el estado del menú "temas", por defecto cerrado

// Funciones:

//función que se ejecuta justo despues de cargar la pagina
function init() {
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
	//Hacer los titulos responsive si hay botones en la esquina superior derecha
	if (document.querySelector('.contenedor-principal .carta .titulo .boton')) {
		var titulos = document.querySelectorAll('.contenedor-principal .carta .titulo h4');
		for (var i = 0; i < titulos.length; i++) {
			titulos[i].style.width = "calc(100% - 300px)";
		}
	}
}

//Función para añadir eventos a los elementos desde js (para que el html quede más entendible)
function add_eventos() {
	document.getElementById('btn-perfil').addEventListener("click", abrir_menu);
	document.querySelector('.menu-perfil .header .fa-times').addEventListener("click", cerrar_menu);
	document.querySelector('.boton.temas').addEventListener("click", toggle_temas);
	//Añadir evento para cambiar tema dependiendo del id de cada botón en el menú
	var btn_temas = document.querySelectorAll('.boton.tema');
	for (var i=0; i<btn_temas.length; i++) {
		btn_temas[i].addEventListener("click", function() {
			cambiar_tema("css/temas/" + this.getAttribute('id') + ".css")
		})
	}
	//añade la funcion para regresar en el boton "cancelar" de los formularios, si existen
	if (document.querySelector('.carta .cuerpo form div .boton.cancelar')) {
		document.querySelector('.carta .cuerpo form div .boton.cancelar').addEventListener("click", function(){cancelar_registro(this.getAttribute('value'))})
	}
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
	setTimeout(function() {document.querySelector('.contenedor-menu').style.width = "0";}, 400);
	//Cerrar submenus si estan abiertos
	if (estado_temas) {
		document.querySelector('.contenedor-temas').style.height = "0";
		estado_temas = false;
	}
}

// Función para abrir y cerrar el submenu de los temas
function toggle_temas() {
	if (estado_temas == false) {
		document.querySelector('.contenedor-temas').style.height = "auto";
		estado_temas = true;
	} else {
		document.querySelector('.contenedor-temas').style.height = "0";
		estado_temas = false;
	}
}

//Función para cambiar el tema (color) del programa
function cambiar_tema(tema) {
	document.getElementById('tema').href = tema;
}

//funcionalidad del boton "cancelar" en los registros
function cancelar_registro(pagina) {
	window.location.href = pagina + ".html";
}

//Funcion para avisar que el modulo de reportes se encuentra en construccion
function reportes() {
	alert('Este modulo no esta disponible, aun se encuentra en construcción.');
}