'use strict';

$(function(){

    $(".box > div").addClass("box_out");
    
    $(".box img").mouseover(function(){
        $(this)
        .parents(".box")
        .children("div")
        .removeClass("box_out");
        
        $(this)
        .parents(".box")
        .children("div")
        .addClass("box_hover");
    });

    $(".box img").mouseout(function(){
        $(".box > div").removeClass("box_hover");
        $(".box > div").addClass("box_out");
    });

// 슬라이더 

$('.slide_box').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots:true,
    arrows:true
  });


});