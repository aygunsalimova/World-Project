$(document).ready(function(){
    //HERO SLIDER

    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        navText: ['PREV', 'NEXT'],
        autoplayTimeout: 7000,
        items: 1,
        smartSpeed: 1000,
        responsive:{
            0:{
                nav:false,
            },
            768:{
                nav:true,
            }
        }
    })



    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            }
        }
    })





    $('#newSlider').owlCarousel({
        loop:true,
        margin:24,
        items: 1,
        dots: true,
        nav:false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 900,
        
    })
})