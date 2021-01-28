(function ($) {
    "use strict";
    //stycky header
    
    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $('.top-header').addClass('neel');
        }else{
            $('.top-header').removeClass('neel');
        }
    })

    $('.menu-trigger img').on('click',function(){
        $('.offcanvus-menu').addClass('active');
        $('.offcanvus-menu-overlay').addClass('active');
    })
    $('.menu-close, .offcanvus-menu-overlay').on('click',function(){
        $('.offcanvus-menu').removeClass('active');
        $('.offcanvus-menu-overlay').removeClass('active');
    })

    // circle progress bar
    $('#uiux-progress').circleProgress({
        value: 0.73,
        size: 200,
        thickness:10,
        fill:"#6928D9",
        startAngle:-1.60,
        emptyFill:"#15154C",
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.percentage').html(Math.round(73 * progress) + '<i>%</i>');
    });
    $('#development-progress').circleProgress({
        value: 0.85,
        size: 200,
        thickness:10,
        fill:"#1573FF",
        startAngle:-1.60,
        emptyFill:"#15154C",
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.percentage').html(Math.round(85 * progress) + '<i>%</i>');
    });
    $('#branding-progress').circleProgress({
        value: 0.48,
        size: 200,
        thickness:10,
        fill:"#16FFDB",
        startAngle:-1.60,
        emptyFill:"#15154C",
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.percentage').html(Math.round(48 * progress) + '<i>%</i>');
    });
    $('#product-design-progress').circleProgress({
        value: 0.69,
        size: 200,
        thickness:10,
        fill:"#BAFF26",
        startAngle:-1.60,
        emptyFill:"#15154C",
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.percentage').html(Math.round(69 * progress) + '<i>%</i>');
    });

     // Owl-Carousel
     $('.sponsor').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

})(jQuery);