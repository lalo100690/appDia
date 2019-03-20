window.addEventListener('load',init, true)

function init(){
	i=0;
	btnLogout = document.getElementById('logout');
	btnLogout.addEventListener('click',logout, true);
	loadDatos();
	loadFichas();
}

function loadDatos(){
	u = localStorage.getItem('expediente');

	ajax = new XMLHttpRequest();
	ajax.open('POST','http://www.lalocaracheo.com/reciclapp/consulta.php');
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.send("u="+u);
	ajax.onreadystatechange = function(){
		if (ajax.readyState == 4 && ajax.status == 200) {
			datos = JSON.parse(ajax.responseText);
			console.log(datos);
			document.getElementById('nombre-usuario').innerHTML = datos['nombre'];
			document.getElementById('mis-latas').innerHTML = datos['misLatas'].total;
			document.getElementById('mis-pet').innerHTML = datos['misPet'].total;
			document.getElementById('total-latas').innerHTML = datos['totalLatas'].total;
			document.getElementById('total-pet').innerHTML = datos['totalPet'].total;
		}
	}	
}

function loadFichas(){
	fichas = document.querySelectorAll('.ficha');
	fichas[i].style.marginTop = "00px";
	fichas[i].style.opacity = "1";
	if(i<fichas.length){
		setTimeout(function(){
			i++
			loadFichas();
		},100)
	}
}

function logout(){
	window.location.assign('index.html')
}


