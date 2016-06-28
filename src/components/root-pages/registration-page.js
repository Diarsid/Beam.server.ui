var React = require("react");

var app =           require('../.././app.js');
var appStorageKeys= require('../.././app-storage-keys.js');

var RegistrationPage = React.createClass({

    tryToRegister: function ( name, surname, password, nickName, email ) {
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
        $.ajax({
            url: appRestResourcesHolder.registration.url,
            method: appRestResourcesHolder.registration.method,
            data: JSON.stringify(user),
            cache: false
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
                app.renderMainPage();
            } else {
                console.log("[APP] error during registration request.");
                var error = {
                    title : "Registration error",
                    description: "Error occurred during registration attempt. Ajax response status code is not 200.",
                    source: xhr
                };
                app.renderErrorPage(error);
            }
        });
    },

    render: function () {
        return (
            <div className="registration-page">Registration page</div>
        );
    }
});

module.exports = RegistrationPage;