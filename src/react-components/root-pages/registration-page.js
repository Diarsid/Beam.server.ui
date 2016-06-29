var React = require("react");
var $ =     require('jquery');

// Application scripts
var appStorageKeys =        require('../../app-storage-keys.js');
var appRestResourcesHolder= require('../../app-rest-resources-holder.js');

// Registration react components
var RegistrationForm            = require('../pages-inner-components/registration/registration-form.js');
var RegistrationFailureMessage  = require('../pages-inner-components/registration/registration-failure-message.js');

// Top level pages rendering functions
var renderMainPage =    require('../../render-main-page.js');
var renderErrorPage =   require('../../render-error-page.js');

var RegistrationPage = React.createClass({

    getInitialState: function () {
        return {
            showFailure: false,
            failureText: ""
        }
    },

    tryToRegister: function ( nickName, name, surname, email, password ) {
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
                renderMainPage();
            } else {
                console.log("[APP] error during registration request.");
                var error = {
                    title : "Registration error",
                    description: "Error occurred during registration attempt. Ajax response status code is not 200.",
                    source: xhr
                };
                renderErrorPage(error);
            }
        });
    },

    render: function () {
        return (
            <div className="registration-page">Registration page
                <RegistrationForm registerAction={this.tryToRegister} />
                <RegistrationFailureMessage
                    showMessage={this.state.showFailure}
                    failureText={this.state.failureText} />
            </div>
        );
    }
});

module.exports = RegistrationPage;