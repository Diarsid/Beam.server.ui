var React = require("react");
var $ =     require('jquery');

// Application scripts
var appRestResourcesHolder= require('../../app-rest-resources-holder.js');
var appStorage =            require('../../app-storage.js');
var jwtUtil =               require('../../jwt-util.js');

// Registration react components
var RegistrationForm            = require('../pages-inner-components/registration/registration-form.js');
var RegistrationFailureMessage  = require('../pages-inner-components/registration/registration-failure-message.js');

var RegistrationPage = React.createClass({

    getInitialState: function () {
        return {
            showFailure: false,
            failureText: ""
        }
    },

    tryToRegister: function ( nickName, name, surname, email, password ) {
        var self = this;
        localStorage.removeItem(appStorage.JwtHeader);
        localStorage.removeItem(appStorage.userRoleKey);
        localStorage.removeItem(appStorage.userIdKey);
        localStorage.removeItem(appStorage.userNickNameKey);
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
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            cache: false,
            statusCode: {
                200: function ( xhr ) {
                    console.log('[REG PAGE] fucken xhr obj: ');
                    console.log(xhr);
                    var jwtString = xhr.getResponseHeader("jwt");
                    var claims = jwtUtil.decodeJwtClaims(jwtString);
                    localStorage.setItem(appStorage.userIdKey, claims.id);
                    localStorage.setItem(appStorage.userNickNameKey, claims.nickName);
                    localStorage.setItem(appStorage.userRoleKey, claims.role);
                    localStorage.setItem(appStorage.JwtHeader, jwtString);
                    self.props.renderMainPage();
                },
                401: function ( xhr, statusText, errorThrown ) {
                    self.setState({
                        showFailure: true,
                        failureText: "Registration failed due to malformed data."
                    });
                }
            }
        });
    },

    render: function () {
        return (
            <div className="registration-page">Registration page
                <button type="button"
                        className="login-button-on-registration-page"
                        onClick={this.props.renderLoginPage}>
                    Login
                </button>
                <RegistrationForm registerAction={this.tryToRegister} />
                <RegistrationFailureMessage
                    showMessage={this.state.showFailure}
                    failureText={this.state.failureText} />
            </div>
        );
    }
});

module.exports = RegistrationPage;