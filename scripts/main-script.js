'use strict';

var main = function () {
        var displayContent = function (tab) {
            var index = tab.data('index');
            $('.tab').fadeOut('fast').delay(200);
            $('#' + index).fadeIn('fast');
        };
        
        displayContent($('.menu-item.active'));
    
        $('#main-menu .menu-item').click(function () {
            $('#main-menu .active').removeClass('active');
            $(this).addClass('active');
            displayContent($(this));
        });
    
        $('#gallery .container img').click(function () {
            var targetImage = $(this).attr('src'),
                nextImage = $(this).next('img').attr('src'),
                prevImage = $(this).prev('img').attr('src'),
                lastImage = $('#gallery .container img').last().attr('src'),
                firstImage = $('#gallery .container img').first().attr('src');
        
            switch (targetImage) {
            case firstImage:
                prevImage = lastImage;
                break;
            case lastImage:
                nextImage = firstImage;
                break;
            }
        
            $('.full-screen img').attr('src', targetImage);
            $('.full-screen').css('display', 'flex');
            $('.full-screen').fadeIn(300);
        
            $('.arrow-right').click(function () {
                $('.full-screen img').attr('src', nextImage);
                if (nextImage === lastImage) {
                    prevImage = $('img[src="' + nextImage + '"]').prev('img').attr('src');
                    nextImage = firstImage;
                } else {
                    prevImage = $('img[src="' + nextImage + '"]').prev('img').attr('src');
                    nextImage = $('img[src="' + nextImage + '"]').next('img').attr('src');
                }
            });
        
            $('.arrow-left').click(function () {
                $('.full-screen img').attr('src', prevImage);
                if (prevImage === firstImage) {
                    nextImage = $('img[src="' + prevImage + '"]').next('img').attr('src');
                    prevImage = lastImage;
                } else {
                    nextImage = $('img[src="' + prevImage + '"]').next('img').attr('src');
                    prevImage = $('img[src="' + prevImage + '"]').prev('img').attr('src');
                }
            });
        
            $('.cross').click(function () {
                $('.full-screen').fadeOut(300);
            });
        });
    
        $('#choose-category .button').click(function () {
            $('.button').removeClass('active');
            $(this).addClass('active');
            
            if ($(this).is('.coffe')) {
                $('#tea-catalog').slideUp(300, function () {
                    $('#coffe-catalog').slideDown(300);
                });
            } else if ($(this).is('.tea')) {
                $('#coffe-catalog').slideUp(300, function () {
                    $('#tea-catalog').slideDown(300);
                });
            }
        });
    };

$(document).ready(main);