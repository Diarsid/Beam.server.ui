// React and jQuery
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

// Application scripts
var appStorageKeys =        require('./app-storage-keys.js');
var appRestResourcesHolder= require('./app-rest-resources-holder.js');

// React components
var LoginPage =         require('./components/root-pages/login-page.js');
var MainPage =          require('./components/root-pages/main-page.js');
var RegistrationPage =  require('./components/root-pages/registration-page.js');
var ErrorPage =         require('./components/root-pages/error-page.js');

function renderPage( PageReactComponent ) {
    ReactDOM.render(
        PageReactComponent,
        document.getElementById('content')
    );
}

var app = {

    renderLoginPage: function () {
        renderPage(<LoginPage />);
    },

    renderMainPage: function () {
        renderPage(<MainPage />);
    },

    renderRegistrationPage: function () {
        renderPage(<RegistrationPage />);
    },

    renderErrorPage: function ( error ) {
        renderPage(<ErrorPage error={error} />);
    },

    registrationAndRenderInitialPage: function ( name, surname, password, nickName, email ) {

    },

    logoutAndRenderLoginPage: function () {
        localStorage.removeItem(appStorageKeys.JWTKey);
        localStorage.removeItem(appStorageKeys.userRoleKey);
        localStorage.removeItem(appStorageKeys.userNameKey);
        localStorage.removeItem(appStorageKeys.userNickNameKey);
        this.renderLoginPage();
    }
};

module.exports = app;