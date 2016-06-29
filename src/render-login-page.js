var React = require('react');
var ReactDOM = require('react-dom');

var LoginPage = require('./react-components/root-pages/login-page.js');

function renderLoginPage () {
    ReactDOM.render(
        <LoginPage />,
        document.getElementById('content')
    );
}

module.exports = renderLoginPage;