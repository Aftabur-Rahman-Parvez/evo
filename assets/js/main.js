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

})(jQuery);