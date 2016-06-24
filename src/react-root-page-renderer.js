// React
var React = require('react');
var ReactDOM = require('react-dom');

// React components
var LoginPage = require('./components/root/login-page.js');
var MainPage = require('./components/root/main-page.js');
var RegistrationPage = require('./components/root/registration-page.js');

var reactRootPageRenderer = {

    renderLoginPage: function () {
        ReactDOM.render(
            <LoginPage />,
            document.getElementById('content')
        );
    },

    renderMainPage: function () {
        ReactDOM.render(
            <MainPage />,
            document.getElementById('content')
        );
    },

    renderRegistrationPage: function () {
        ReactDOM.render(
            <RegistrationPage />,
            document.getElementById('content')
        );
    }
};

module.exports = reactRootPageRenderer;