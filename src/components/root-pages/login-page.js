var React = require('react');
var $ = require('jquery');

// Application scripts
var app =                   require('../.././app.js');
var appStorageKeys =        require('../.././app-storage-keys.js');
var appRestResourcesHolder= require('../.././app-rest-resources-holder.js');

// React login page components
var LoginForm =             require('../pages-inner-components/login/login-form.js');
var LoginFailureMessage =   require('../pages-inner-components/login/login-failure-message.js');

var LoginPage = React.createClass({

    getInitialState: function () {
        return {
            showLoginFailedMessage: false
        };
    },

    tryToLogin: function ( nickName, password) {
        localStorage.removeItem(appStorageKeys.JWTKey);
        localStorage.removeItem(appStorageKeys.userRoleKey);
        localStorage.removeItem(appStorageKeys.userNameKey);
        localStorage.removeItem(appStorageKeys.userNickNameKey);
        var loginData = {
            "password" : password,
            "nickName" : nickName
        };
        $.ajax({
            url: appRestResourcesHolder.login.url,
            method: appRestResourcesHolder.login.method,
            data: JSON.stringify(loginData),
            cache: false
        }).always(function ( data, statusText, xhr ) {
            var statusCode = xhr.status;
            if ( statusCode == appRestResourcesHolder.login.success ) {
                var userName = xhr.getResponseHeader(appStorageKeys.userNameKey);
                var userNickName = xhr.getResponseHeader(appStorageKeys.userNickNameKey);
                var userRole = xhr.getResponseHeader(appStorageKeys.userRoleKey);
                var jwt = xhr.getResponseHeader("jwt");
                localStorage.setItem(appStorageKeys.userNameKey, userName);
                localStorage.setItem(appStorageKeys.userNickNameKey, userNickName);
                localStorage.setItem(appStorageKeys.userRoleKey, userRole);
                localStorage.setItem(appStorageKeys.JWTKey, jwt);
                app.renderMainPage();
            } else if ( statusCode == appRestResourcesHolder.login.failed ) {
                this.setState({
                    showLoginFailedMessage: true
                });
            } else {
                console.log("[LOGIN PAGE] error during login request.");
                var error = {
                    title : "Login error",
                    description: "Error occurred during login attempt. Ajax response status code is not 200.",
                    source: xhr
                };
                app.renderErrorPage(error);
            }
        });
    },

    render: function () {
        var loginPage = this;
        if ( this.state.showLoginFailedMessage ) {
            return (
                <div className="login-page">Login page
                    <LoginForm loginAction={loginPage.tryToLogin} />
                    <LoginFailureMessage />
                </div>
            );
        } else {
            return (
                <div className="login-page">Login page
                    <LoginForm loginAction={loginPage.tryToLogin} />
                </div>
            );
        }
    }
});

module.exports = LoginPage;
