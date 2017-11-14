$(window).load(function(){
    new WOW().init();
});
$(document).ready(function() {
    var init = {
        swiper:function(){
           var ww =  $(window).width();
           var sliders=(ww<750)?1:(ww<1200)?2:3;
            mySwiper = new Swiper('.team-list.swiper-container', {
                speed: 400,
                spaceBetween: 0,
                slidesPerView:1,
                centeredSlides:true,
                loop:true,
                autoplay: {
                    delay: 5000,
                },
                navigation: {
                    nextEl: '.team-list .swiper-button-next',
                    prevEl: '.team-list .swiper-button-prev',
                },
                pagination: {
                    el: '.team-list .swiper-pagination',
                    type: 'bullets',
                    clickable:true
                },
            });
            mySwiper2 = new Swiper('.works .swiper-container', {
                speed: 400,
                spaceBetween: 20,
                slidesPerView:sliders,
                loop:true,
                autoplay: {
                    delay: 5000,
                },
                breakpoints: {
                    750: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        loop:true,
                    },
                    1200: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                        loop:true,
                    }
                }
            });
        },
        click:function(){

        }
    }
    init.swiper();
    init.click();
});
