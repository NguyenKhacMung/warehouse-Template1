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
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<div class="slick-prev"><img  src="./assets/images/arrow-left.svg"></div>',
            nextArrow: '<div class="slick-next"><img  src="./assets/images/arrow-right.svg"></div>',
            // centerPadding: '60px',
            // adaptiveHeight: false
        });
    }
    const btntoogle = document.querySelector(".btn-toggle");
    const menu = document.querySelector(".header");
    const btnclose = document.querySelector(".btn-close");
    btntoogle && btntoogle.addEventListener("click", showNav);

    function showNav() {
        menu && menu.classList.add("show");
    }
    btnclose && btnclose.addEventListener("click", closeNav);

    document.addEventListener('click', function(event) {

        if (!menu.contains(event.target) && !btntoogle.contains(event.target)) {
            closeNav();
        }

    });

    function closeNav() {
        menu && menu.classList.remove("show");
    }
    //scroll
    $(".header ul a").on("click", function(e) {
        e.preventDefault();
        var href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(href).offset().top - 160 }, 300);
    });

});