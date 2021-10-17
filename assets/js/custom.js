/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 * 
 */

"use strict";

$(function () {
    $('#checkbox').click(function(){
        var element = document.body;
        element.classList.toggle("dark");
    });
    if ($(window).scrollTop() == 0) {
        $('.theme-white .navbar').removeClass('scrollBgNav');
    }
    $(window).on('scroll', function () {
        $('.theme-white .navbar').addClass('scrollBgNav');
        if ($(window).scrollTop() == 0) {
            $('.theme-white .navbar').removeClass('scrollBgNav');
        }
    });
});
