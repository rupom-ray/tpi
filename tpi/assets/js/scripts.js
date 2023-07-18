$(document).ready(function () {
     $(window).on('load', function () {
            $('#status').delay(500).fadeOut();
            $('#preloader').delay(500).fadeOut('slow');
            $('body').delay(500).css({
                'overflow': 'visible'
            });
        });
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.menu-area').addClass('fixed');
        } else(
            $('.menu-area').removeClass('fixed')
        )
    });
     $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#back-to-top').fadeIn()
        } else(
            $('#back-to-top').fadeOut()
        )
    })
    $('#back-to-top').click(function () {
        $('html , body').animate({
            scrollTop: 0
        }, 800)
    });

    $('.show-icon').click(function () {
        $('.menu').slideDown();
        $(this).hide();
        $('.hide-icon').show();
    })
    $('.hide-icon').click(function () {
        $('.menu').slideUp();
        $(this).hide()
        $('.show-icon').show()
    })
    $('#myCarousel').owlCarousel({
        loop: true,
        nav: true,
        animateOut: 'fadeOut',
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // TYPE JS
    var typed5 = new Typed('.change', {
        strings: ['Thakurgaon Polytechnic Institute', 'Gobinda Nagar,Thakurgaon'],
        typeSpeed: 100,
        backSpeed: 100,
        cursorChar: '',
        shuffle: true,
        smartBackspace: false,
        loop: true
    });
    $('#teacherArea').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });

    $('.count').counterUp({
        delay: 10,
        time: 3000
    });

    // popup 

    $('.image-link').magnificPopup({
        type: 'image',
        //  mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },
    });

    $('.link').magnificPopup({
        type: 'iframe',
        // other options
        gallery: {
            enabled: true
        },
    });
});