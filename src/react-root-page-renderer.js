// React
var React = require('react');
var ReactDOM = require('react-dom');

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

var reactRootPageRenderer = {

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
    }
};

module.exports = reactRootPageRenderer;