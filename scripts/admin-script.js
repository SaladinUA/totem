'use strict';

var main = function () {
    var login = 'admin',
        password = 'admin',
        loginField = $('#login'),
        passField = $('#password'),
        page = $('#admin-page'),
        loginForm = $('#login-form');
    
    loginForm.submit(function () {
        if (loginField.val() === login && passField.val() === password) {
            loginForm.hide(function () {
                page.show();
            });
        }
        
        return false;
    });
};

$(document).ready(main);