var $ = require('jquery');

var reactRootPageRenderer = require('./react-root-page-renderer.js');
var appStorageKeys =        require('./app-storage-keys.js');
var appRestResourcesHolder= require('./app-rest-resources-holder.js');

var app = {

    registrationAndRenderInitialPage: function ( name, surname, password, nickName, email ) {
        localStorage.removeItem(appStorageKeys.JWTKey);
        localStorage.removeItem(appStorageKeys.userRoleKey);
        localStorage.removeItem(appStorageKeys.userNameKey);
        localStorage.removeItem(appStorageKeys.userNickNameKey);
        var user = {
            "name": name,
            "surname" : surname,
            "password" : password,
            "nickName" : nickName,
            "email" : email
        };
        var userJsonPayload = JSON.stringify(user);
        $.ajax({
            url: appRestResourcesHolder.registration.url,
            method: appRestResourcesHolder.registration.method
        }).always(function ( data, statusText, xhr ) {
            var statusCode = xhr.status;
            if ( statusCode == 200 ) {
                var userName = xhr.getResponseHeader(appStorageKeys.userNameKey);
                var userNickName = xhr.getResponseHeader(appStorageKeys.userNickNameKey);
                var userRole = xhr.getResponseHeader(appStorageKeys.userRoleKey);
                var jwt = xhr.getResponseHeader("jwt");
                localStorage.setItem(appStorageKeys.userNameKey, userName);
                localStorage.setItem(appStorageKeys.userNickNameKey, userNickName);
                localStorage.setItem(appStorageKeys.userRoleKey, userRole);
                localStorage.setItem(appStorageKeys.JWTKey, jwt);
                reactRootPageRenderer.renderMainPage();
            } else {
                console.log("[APP] error during registration request.");
                var error = {
                    title : "Registration error",
                    description: "Error occurred during registration attempt. Ajax response status code is not 200.",
                    source: xhr
                };
                reactRootPageRenderer.renderErrorPage(error);
            }
        });
    },

    loginAndRenderInitialPage: function ( nickName, password ) {
        localStorage.removeItem(appStorageKeys.JWTKey);
        localStorage.removeItem(appStorageKeys.userRoleKey);
        localStorage.removeItem(appStorageKeys.userNameKey);
        localStorage.removeItem(appStorageKeys.userNickNameKey);
        var loginData = {
            "password" : password,
            "nickName" : nickName
        };
        var loginPayload = JSON.stringify(loginData);
        $.ajax({
            url: appRestResourcesHolder.login.url,
            method: appRestResourcesHolder.login.method
        }).always(function ( data, statusText, xhr ) {
            var statusCode = xhr.status;
            if ( statusCode == 200 ) {
                var userName = xhr.getResponseHeader(appStorageKeys.userNameKey);
                var userNickName = xhr.getResponseHeader(appStorageKeys.userNickNameKey);
                var userRole = xhr.getResponseHeader(appStorageKeys.userRoleKey);
                var jwt = xhr.getResponseHeader("jwt");
                localStorage.setItem(appStorageKeys.userNameKey, userName);
                localStorage.setItem(appStorageKeys.userNickNameKey, userNickName);
                localStorage.setItem(appStorageKeys.userRoleKey, userRole);
                localStorage.setItem(appStorageKeys.JWTKey, jwt);
                reactRootPageRenderer.renderMainPage();
            } else {
                console.log("[APP] error during login request.");
                var error = {
                    title : "Login error",
                    description: "Error occurred during login attempt. Ajax response status code is not 200.",
                    source: xhr
                };
                reactRootPageRenderer.renderErrorPage(error);
            }
        });
    },

    logoutAndRenderLoginPage: function () {
        localStorage.removeItem(appStorageKeys.JWTKey);
        localStorage.removeItem(appStorageKeys.userRoleKey);
        localStorage.removeItem(appStorageKeys.userNameKey);
        localStorage.removeItem(appStorageKeys.userNickNameKey);
        reactRootPageRenderer.renderLoginPage();
    },

    renderInitialPage: function () {
        if ( localStorage.getItem(appStorageKeys.JWTKey) == null ) {
            reactRootPageRenderer.renderLoginPage();
        } else {
            var app = this;
            $.ajax({
                method: appRestResourcesHolder.jwtValidation.method,
                url: appRestResourcesHolder.jwtValidation.url,
                beforeSend: function ( xhr ) {
                    xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem(appStorageKeys.JWTKey));
                }
            }).always(function ( data, statusText, xhr ) {
                var responseStatusCode = xhr.status;
                console.log('[APP] verify JWT, response status code: ' + responseStatusCode);
                if ( responseStatusCode == 200 ) {
                    reactRootPageRenderer.renderMainPage();
                } else if ( responseStatusCode == 302 ) {
                    app.logoutAndRenderLoginPage();
                } else if ( responseStatusCode == 401 ) {
                    app.registrationAndRenderInitialPage();
                } else {
                    console.error('[APP] JWT verification failed.');
                    var error = {
                        title: "Json Web Token verification failure.",
                        description: "Error during Json Web Token verification attempt. Response status code" +
                        " is neither 200 (JWT is valid), nor 302 (JWT is valid, but has expired), nor 401 " +
                        "(JWT is invalid).",
                        source: xhr
                    };
                    app.renderErrorPage(error);
                }
            });

        }
    },

    renderErrorPage: function ( error ) {
        reactRootPageRenderer.renderErrorPage(error);
    }
};

module.exports = app;