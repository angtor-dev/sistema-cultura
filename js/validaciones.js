//Funcion para validar todos los campos
function validar() {
	campos = document.querySelectorAll('form input[type=text], form input[type=email], form input[type=password]');
	for (var i = 0; i < campos.length; i++) {
		campo = campos[i].value;
		if (campo_vacio(campo)) {
			alert('No puede dejar ningun campo vacio');
			return false;
		}
	}
	return true;
}

//Funcion que verifica si un campo esta vacio
function campo_vacio(campo) {
	if( campo == null || campo.length == 0 || /^\s+$/.test(campo) ) {
		return true;
	}
}