document.getElementById("formulario").addEventListener('submit', function(e){

	e.preventDefault();

	var estudiante = {
		nombre: document.getElementById("nombre").value,
		apellido: document.getElementById("apellido").value,
		correo: document.getElementById("correo").value,
		edad: document.getElementById("edad").value,
		hobbies: document.getElementById("hobbies").value
	};

	//console.log(estudiante.apellido);
});