window.onload = function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
     	direction: 'horizontal',
    	loop: false,

    // If we need pagination
    	pagination: false,

    // Navigation arrows
    	navigation: {
      	nextEl: '.swiper-button-next',
      	prevEl: '.swiper-button-prev',
    	},

    // And if we need scrollbar
    	scrollbar: {
      	el: '.swiper-scrollbar',
    	},
    })
  };