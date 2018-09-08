$(document).ready(function() {

    "use strict";

    //Page loader
    if ($('.pageloader').length) {

        $('.pageloader').toggleClass('is-active');

        $(window).on('load', function() {
            var pageloaderTimeout = setTimeout( function() {
                $('.pageloader').toggleClass('is-active');
                $('.infraloader').toggleClass('is-active')
                clearTimeout( pageloaderTimeout );
            }, 333 );
        })
    }

    //Navbar Clone
    if ($('#navbar-clone').length) {
        $(window).scroll(function() {    // this will work when your window scrolled.
            var height = $(window).scrollTop();  //getting the scrolling height of window
            if(height  > 50) {
                $("#navbar-clone").addClass('is-active');
            } else{
                $("#navbar-clone").removeClass('is-active');
            }
        });
    }

    //Mobile menu toggle
    if ($('.navbar-burger').length) {
        $('.navbar-burger').on("click", function(){

            var menu_id = $(this).attr('data-target');
            $(this).toggleClass('is-active');
            $("#"+menu_id).toggleClass('is-active');
            $('.navbar.is-light').toggleClass('is-dark-mobile')

            if ($('.navbar-menu').hasClass('is-active')) {
                $('.navbar-menu').removeClass('is-active');
                $('.navbar').removeClass('is-dark-mobile');
            } else {
                $('.navbar-menu').addClass('is-active');
                $('.navbar').addClass('is-dark-mobile');
            }
        });
    }
    
    //Highlight current page navbar menu item
    if ($('.navbar').length) {
        // Get current page URL
        var url = window.location.href;

        // remove # from URL
        url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));

        // remove parameters from URL
        url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));

        // select file name
        url = url.substr(url.lastIndexOf("/") + 1);

        // If file name not available
        if(url == ''){
            url = 'index.html';
        }

        // Loop all menu items
        $('.navbar .navbar-item a').each(function(){

            // select href
            var href = $(this).attr('href');

            // Check filename
            if(url == href){

                // Add active class
                $(this).addClass('is-active');
            }
        });
    }

    //Pop Dropdowns
    $('.dropdown-trigger').on('click', function(event) {
        event.stopPropagation();
        $('.dropdown').removeClass('is-active');
        $(this).closest('.dropdown').addClass('is-active');
    })
    //Close pop dropdowns on click outside
    $(window).on('click', function(event) {
        //if(!$(event.target).find('.dropdown-menu').length) {
        if($('.dropdown').hasClass('is-active')) {
            $('.dropdown').removeClass('is-active');
        }
        //} 
    });

    //Navigation Tabs
    $('.flying-tabs .flying-child').on('click', function() {
        var tab_id = $(this).attr('data-tab');

        $(this).siblings('.flying-child').removeClass('is-active');
        $(this).closest('.flying-wrapper').find('.flying-tabs-content').children('.tab-content').removeClass('is-active');

        $(this).addClass('is-active');
        $("#"+tab_id).addClass('is-active');
    })

    //Modal video

    new ModalVideo('.js-modal-btn', {
        channel: 'youtube',
        autoplay: 1
    });

    //Icons
    feather.replace();

    //Fix for portrait tabs flex display
    if (window.matchMedia('(min-width: 768px)').matches) {
        $('.tab-content-wrapper').addClass('is-flex-mobile');
    } else {
        $('.tab-content-wrapper').removeClass('is-flex-mobile');
    }

    $(window).on('resize', function() {
        if (window.matchMedia('(min-width: 768px)').matches) {
            $('.tab-content-wrapper').addClass('is-flex-mobile');
        } else {
            $('.tab-content-wrapper').removeClass('is-flex-mobile');
        }
    })

    /*/ Popovers init
    if ($('[data-toggle="popover"]').length) {
        $('[data-toggle="popover"]').ggpopover();
    }

    // tooltips init
    if ($('[data-toggle="tooltip"]').length) {
        $('[data-toggle="tooltip"]').ggtooltip();
    }
    */

    //Scrollspy nav init
    if ($('#scrollnav').length) {
        var sticky = new Waypoint.Sticky({
            element: $('#scrollnav')[0]
        })
        $(".scrollnav-tabs").scrollspy({ 
            offset: -55,
            activeClass: 'is-active'
        });
    }

    //Aos
    AOS.init();

    //Documentation languages toggle
    if ($('.token-documentation').length) {
        $('.token-documentation ul li').on('click', function(){
            $('.token-documentation ul li.is-active').removeClass('is-active');
            $(this).addClass('is-active');
        })
    }

    //Anchor scroll
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .on('click', function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 550, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    // Back to Top button behaviour
    var pxShow = 600;
    var scrollSpeed = 500;
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= pxShow) {
            $("#backtotop").addClass('visible');
        } else {
            $("#backtotop").removeClass('visible');
        }
    });
    $('#backtotop a').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, scrollSpeed);
        return false;
    });

    $('.like-button').on('click', function(){
        $(this).toggleClass('is-active');
        $('.like-button svg').toggleClass('gelatine');
    })

        //Basic slick carousel (testimonials)
        if ($('.testimonials').length) {
            $('.testimonials').slick({
                dots: true,
                infinite: true,
                speed: 500,
                cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                autoplay: true,
    
            });
        }
    
        //Vertical slick carousel (vertical testimonials)
        if ($('.vertical-testimonials').length) {
            $('.vertical-testimonials').slick({
                autoplay: true,
                arrows: false,
                dots: false,
                slidesToShow: 4,
                centerPadding: "0",
                centerMode: true,
                draggable: false,
                infinite: true,
                pauseOnHover: false,
                swipe: false,
                touchMove: false,
                vertical: true,
                speed: 1000,
                autoplaySpeed: 2500,
                useTransform: true,
                cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                adaptiveHeight: true,
    
            });
        }
    
        //Flat slick carousel
        if ($('.flat-testimonials').length) {
            $('.flat-testimonials').slick({
                dots: true,
                infinite: true,
                speed: 777,
                cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
                autoplay: true,
                autoplaySpeed: 7777,
                arrows: true,
            });
        }

    /* ---- particles.js config ---- */

    if($('#particles-js'). length) {

        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": true,
                        "value_area":1000
                    }
                },
                "color": {
                    "value": ["#5507fc"]
                },

                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 5,
                        "color": "#5507fc"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.6,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 2,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 120,
                    "color": "#5507fc",
                    "opacity": 0.2,
                    "width": 1.6
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "top",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });

    }

})