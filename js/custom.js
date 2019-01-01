/*==================================
            SERVICES
====================================*/
$(function () {
    new WOW().init();
});

/*==================================
            WORK
====================================*/

$(function () {

    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});
/*==================================
            TEAM
====================================*/

$(function () {

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true
    });


});

/*==================================
           TESTIMONIALS
====================================*/

$(function () {

    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true
    });


});

/*==================================
           STATS
====================================*/

$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 1500
    });
});

/*==================================
           CLIENTS
====================================*/

$(function () {

    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true
    });
});

/*==================================
           NAVIGATION
====================================*/
$(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            //hide nav

            $("nav").removeClass("msd-navbar-top");
        } else {
            //show nav
            $("nav").addClass("msd-navbar-top");
        }
    });
});

//smooth scrolling
$(function () {


    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        //get/return id like #about, #work etc.
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1000, "easeInOutExpo");
    });
});




