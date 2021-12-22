$(document).ready(function() {
    if ($('.testimo .slide').length) {
        $('.testimo .slide').slick({
            dots: true,
            speed: 300,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            variableWidth: true,

            prevArrow: '<div class="slick-prev"><img  src="./assets/images/arrow-left.svg"></div>',
            nextArrow: '<div class="slick-next"><img  src="./assets/images/arrow-right.svg"></div>',
            // centerPadding: '60px',
            // adaptiveHeight: false
        });
    }
});