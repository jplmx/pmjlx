function ejecutar(){
	v1=document.f_opera.v1.value;
	v2=document.f_opera.v2.value;
	v3=document.f_opera.v3.value;

	if (v1.length==0){
		document.f_opera.v1.style.background="red";
		alert("Escribe tu NOMBRE");
	}
	else{
		v1=parseInt(v1);
		if (v2.length==0){
			document.f_opera.v2.style.background="red";
			alert("Escribe tu PRIMER APELLIDO");
		}
		else{
			if (v3.length==0){
				document.f_opera.v3.style.background="red";
				alert("Escribe tu CORREO ELECTRÓNICO");
			}
			else
			{
				alert("Listo");
			}
			
		}
	}
}

function campo_v1(){
	document.f_opera.v1.style.background="blue";
}

function campo_v2(){
	document.f_opera.v2.style.background="blue";
}
function campo_v3(){
	document.f_opera.v3.style.background="blue";
}