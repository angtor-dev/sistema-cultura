//Funcion para validar todos los campos
function validar() {
	//Validar la mayoria de campos
	campos = document.querySelectorAll('form input[type=text], form input[type=email], form input[type=password]');
	for (var i = 0; i < campos.length; i++) {
		campo = campos[i].value;
		if (campo_vacio(campo)) {
			alert('No puede dejar ningun campo vacio.');
			return false;
		}
	}
	//Verificar si las claves coinciden (a la hora de registrar usuarios)
	if (document.querySelector('form input[name=clave2]')) {
		campo1 = document.querySelector('form input[name=clave]').value;
		campo2 = document.querySelector('form input[name=clave2]').value;
		if (!campos_iguales(campo1, campo2)) {
			alert('Las contraseñas no coinciden, vuelva a introducirlas.');
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

//Función para verificar si las contraseñas coinciden
function campos_iguales(campo1, campo2) {
	if (campo1 == campo2) {
		return true;
	}
}