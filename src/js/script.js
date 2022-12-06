$(document).ready(function(){
    $('.promo__carousel').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 8000,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        variableWidth: true,
        adaptiveHeight: true,

        prevArrow:'<button type="button" class="slick-prev"><img src="icons/Vector_arrow_left.svg"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/Vector_arrow_right.svg"></button>',

        responsive: [
            
        {
            breakpoint: 768,
            settings: {
            centerMode: true,
            slidesToShow: 1,
            arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
            centerMode: true,
            slidesToShow: 1,
            autoplaySpeed: 3000,
            arrows: false
            }
        }
        ]
    });

    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__menu_li'),
        hamburger = document.querySelector('.header__hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('header__hamburger_active');
                menu.classList.toggle('header__menu_active');
            })
        })
    })
});