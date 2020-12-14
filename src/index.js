import $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import baguetteBox from 'baguettebox.js';
import '@fortawesome/fontawesome-free/js/all.js'

import './style.scss';


$(document).ready(function () {

    // Подключение библиотеки галлереи 
    baguetteBox.run('.gallery');

    // кнопка скрола
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });


    // Прелоадер на сайте
    $(window).on('load', function(){
        $('.preloader').delay(500).fadeOut('slow', function(){
            $(this).attr('style', 'display: none !important');
        });
    });


    // Вертикальная карусель
    $('#carousel_headerText').carousel({
        interval: 3000
    });

    // Политика использования куков
    var cookieName = "showBannerCookies";

    var createCookie = function (name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    };

    function getCookie(c_name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) {
                    c_end = document.cookie.length;
                }
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return "";
    };

    var cookie = getCookie(cookieName);


    $("#cookieBanner").toggle(cookie == "", "slow");


    $("#acceptCookies").onclick = function () {
        console.log("Creating cookie!");
        createCookie(cookieName, 1, 30);
        $("#cookieBanner").toggle("slow");
        $("#cookieBanner").classList.add("d-none");
    };

});