window.addEventListener('load',init, true)

function init(){
	divLogin = document.querySelector('.login');
	divLogin.style.transition = "1s all";
	divLogin.style.opacity = "1";
}

function login(){
	divLogin = document.querySelector('.login');
	divLogin.style.transition = "1s all";
	divLogin.style.opacity = "0";
	setTimeout(function(){
		window.location.assign('slide.html')
	},1000)
}


