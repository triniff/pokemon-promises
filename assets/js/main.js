/*var llamarAjax = function(){
	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon',
		type: 'GET',
		dataType: 'json',
		data: {limit: 5},
	success: function(response) {
		console.log(response);
		return response;
	},
	error: function(error) {
		console.log("error");
		return error;
	}

	})
}

console.log("Esta es una prueba");
var respuesta = llamarAjax();
respuesta.results.forEach(
	function(el){
		console.log(el.name)
	}
)

console.log("Este es el mensaje despues de la llamada ajax");*/
$(document).ready(function(){
	var habilidadesP = function(url_habilidad){
	$.ajax({
		url: url_habilidad,
		type: 'GET',
		dataType: 'json',
	})
	.done(function(res) {
		res.abilities.forEach(function(el){
			console.log(el.ability.name);
			$(".habilidad").append(el.ability.name + " ");
		})
	})
	.fail(function(res) {
		console.log("error 2");
	})
	.always(function(res) {
		console.log("complete 2");
	});
	
}

	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon',
		type: 'GET',
		dataType: 'json',
		data: {limit: 2}
	})
	.done(function(respuesta) {
		respuesta.results.forEach(function(el){
			document.write(el.name + "<br>");
			habilidadesP(el.url);
		})
		//	habilidadesP(el)
	})
	.done(function(){
		document.write("Este es el mensaje despues de la llamada ajax" + "<br>");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});

})
