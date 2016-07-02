var React = require('react');
var $ = require('jquery');

var appStorage =            require('../../app-storage.js');
var appRestResourcesHolder= require('../../app-rest-resources-holder.js');
var jwtUtil =               require('../../jwt-util.js');

// React login page react-components
var LoginForm =             require('../pages-inner-components/login/login-form.js');
var LoginFailureMessage =   require('../pages-inner-components/login/login-failure-message.js');

var LoginPage = React.createClass({

    getInitialState: function () {
        return {
            showLoginFailedMessage: false,
            failureText: ""
        };
    },

    tryToLogin: function ( nickName, password) {
        var self = this;
        console.log('[LOGIN PAGE] try to login with: ' + nickName + ":" + password);
        localStorage.removeItem(appStorage.JWTKey);
        localStorage.removeItem(appStorage.userRoleKey);
        localStorage.removeItem(appStorage.userIdKey);
        localStorage.removeItem(appStorage.userNickNameKey);
        var loginData = {
            "password" : password,
            "nickName" : nickName
        };
        $.ajax({
            url: appRestResourcesHolder.login.url,
            method: appRestResourcesHolder.login.method,
            data: JSON.stringify(loginData),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            cache: false,
            statusCode: {
                200: function ( xhr ) {
                    console.log("[LOGIN PAGE] login successful.");
                    console.log(xhr);
                    var jwtString = xhr.getResponseHeader("jwt");
                    var claims = jwtUtil.decodeJwtClaims(jwtString);
                    localStorage.setItem(appStorage.userIdKey, claims.id);
                    localStorage.setItem(appStorage.userNickNameKey, claims.nickName);
                    localStorage.setItem(appStorage.userRoleKey, claims.role);
                    localStorage.setItem(appStorage.JWTKey, jwtString);
                    self.props.renderMainPage();
                },
                401: function ( xhr, statusText, errorThrown ) {
                    console.log("[LOGIN PAGE] login failed, UNAUTHORIZED.");
                    self.setState({
                        showLoginFailedMessage: true,
                        failureText: "Login data not accepted by server. It seems, nickname or password is invaild."
                    });
                },
                400: function ( xhr, statusText, errorThrown ) {
                    console.log("[LOGIN PAGE] login failed, BAD_REQUEST.");
                    self.setState({
                        showLoginFailedMessage: true,
                        failureText: "Login data is malformed."
                    });
                }
            }
        });
    },

    render: function () {
        return (
            <div className="login-page">Login page
                <button type="button"
                        className="go-to-registration-button"
                        onClick={this.props.renderRegPage}>
                    Registration
                </button>
                <LoginForm loginAction={this.tryToLogin} />
                <LoginFailureMessage showMessage={this.state.showLoginFailedMessage}
                                     messageText={this.state.failureText}/>
            </div>
        );
    }
});

module.exports = LoginPage;
