var React = require('react');
var ReactDOM = require('react-dom');

var RegistrationPage = require('./react-components/root-pages/registration-page.js');

function renderRegistrationPage () {
    ReactDOM.render(
        <RegistrationPage />,
        document.getElementById('content')
    );
}

module.exports = renderRegistrationPage;