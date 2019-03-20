window.addEventListener('load',init, true)

function init(){
	i=0;
	btnLogin = document.getElementById('login');
	btnLogin.addEventListener('click',login, true);
}

function login(){
	u = document.getElementById('u').value;
	p = document.getElementById('p').value;

	ajax = new XMLHttpRequest();
	ajax.open('POST','http://www.lalocaracheo.com/reciclapp/login.php');
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.send("u="+u+"&p="+p);
	ajax.onreadystatechange = function(){
		if (ajax.readyState == 4 && ajax.status == 200) {
			if (ajax.responseText == "1") {
				localStorage.setItem('expediente',u);
				divLogin = document.querySelector('.login');
				divLogin.style.transition = "1s all";
				divLogin.style.opacity = "0";
				
				setTimeout(function(){
					window.location.assign('slide.html')
				},1000)
			}else{
				alert('ERROR')
			}
		}
	}	
}


