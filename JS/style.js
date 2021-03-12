function load () {	
	console.log('hello')	
}

function keepGoing(){
	var d = document.getElementById("in_Id");
	alert("You can do it: "+d.value)	
}

function show () {
	var fforms = document.forms["form_id"]
	alert(Object.stringify(fforms))

}