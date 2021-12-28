(function ($) {
	"use strict";

    jQuery(document).ready(function($){

		

				
		         //===== Sticky Menu-Bar Start
		        $(window).on('scroll',function(event) {    
		            var scroll = $(window).scrollTop();
		             if (scroll < 100) {
		                 $(".header-bar-area").removeClass("sticky");
		             }else{
		                 $(".header-bar-area").addClass("sticky");
		             }
		         });
		        //===== Sticky Menu-Bar End



	});



    jQuery(window).load(function(){


    });


}(jQuery));	