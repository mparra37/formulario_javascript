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

	agregarTabla(estudiante);
});

function agregarTabla(estudiante){

	var tbody = document.getElementById("cuerpoTabla");

	var fila = document.createElement("tr");

	for(var key in estudiante){
		var td = document.createElement("td");
		td.textContent = estudiante[key];
		fila.appendChild(td);
	}

	var td = document.createElement("td");
	var boton = document.createElement("button");
	boton.textContent = "Eliminar";
	boton.classList.add("btn", "btn-danger");
	boton.onclick = function(){
		tbody.removeChild(fila);
	}
	td.appendChild(boton);
	fila.appendChild(td);



	tbody.appendChild(fila);



}