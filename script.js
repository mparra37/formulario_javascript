document.getElementById("formulario").addEventListener('submit', function(e){
	//Previene que se refresque la página
	e.preventDefault();

	var pelicula = {
		titulo: document.getElementById("titulo").value,
		anio: document.getElementById("anio").value,
		duracion: document.getElementById("duracion").value,
		genero: document.getElementById("genero").value,
		director: document.getElementById("director").value,
		sinopsis: document.getElementById("sinopsis").value
	};

	agregarTabla(pelicula);

	//Pone los datos en blanco
	e.target.reset();
});

function agregarTabla(pelicula){

	var tbody = document.getElementById("cuerpoTabla");

	var fila = document.createElement("tr");

	for(var key in pelicula){
		var td = document.createElement("td");
		td.textContent = pelicula[key];
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


	var td2 = document.createElement("td");
	var boton2 = document.createElement("button");
	boton2.textContent = "Editar";
	boton2.classList.add("btn", "btn-success");
	boton2.onclick = function(){
			document.getElementById("titulo").value = fila.children[0].innerHTML;
			document.getElementById("anio").value = fila.children[1].innerHTML;
			document.getElementById("duracion").value = fila.children[2].innerHTML;	
			document.getElementById("genero").value = fila.children[3].innerHTML;		
			document.getElementById("director").value = fila.children[4].innerHTML;
			document.getElementById("sinopsis").value = fila.children[5].textContent;

	};
	td2.appendChild(boton2);
	fila.appendChild(td2);



	tbody.appendChild(fila);



}