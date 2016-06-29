var React = require('react');
var $ = require('jquery');

var appStorageKeys =        require('../../app-storage-keys.js');
var appRestResourcesHolder= require('../../app-rest-resources-holder.js');

var renderErrorPage =   require('../../render-error-page.js');
var renderMainPage =    require('../../render-main-page.js');

// React login page react-components
var LoginForm =             require('../pages-inner-components/login/login-form.js');
var LoginFailureMessage =   require('../pages-inner-components/login/login-failure-message.js');

function processAjaxLoginRequest ( data, statusText, xhr ) {
    var statusCode = xhr.status;
    if ( statusCode == appRestResourcesHolder.login.success ) {
        console.log("[LOGIN PAGE] login successful.");
        var userName = xhr.getResponseHeader(appStorageKeys.userNameKey);
        var userNickName = xhr.getResponseHeader(appStorageKeys.userNickNameKey);
        var userRole = xhr.getResponseHeader(appStorageKeys.userRoleKey);
        var jwt = xhr.getResponseHeader("jwt");
        localStorage.setItem(appStorageKeys.userNameKey, userName);
        localStorage.setItem(appStorageKeys.userNickNameKey, userNickName);
        localStorage.setItem(appStorageKeys.userRoleKey, userRole);
        localStorage.setItem(appStorageKeys.JWTKey, jwt);
        renderMainPage();
    } else if ( statusCode == appRestResourcesHolder.login.failed ) {
        console.log("[LOGIN PAGE] login failed, access denied.");
        this.setState({
            showLoginFailedMessage: true
        });
    } else {
        console.log("[LOGIN PAGE] error during login request.");
        var error = {
            title : "Login error",
            description: "Error occurred during a login attempt. " +
            "The Ajax response status code is neither 200 nor 401. ",
            source: xhr
        };
        renderErrorPage(error);
    }
}

var LoginPage = React.createClass({

    getInitialState: function () {
        return {
            showLoginFailedMessage: false
        };
    },

    tryToLogin: function ( nickName, password) {
        console.log('[LOGIN PAGE] try to login with: ' + nickName + ":" + password);
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
        }).always(processAjaxLoginRequest);
    },

    render: function () {
        return (
            <div className="login-page">Login page
                <LoginForm loginAction={this.tryToLogin} />
                <LoginFailureMessage showMessage={this.state.showLoginFailedMessage} />
            </div>
        );
    }
});

module.exports = LoginPage;
