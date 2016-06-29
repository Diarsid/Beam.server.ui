var React = require('react');
var ReactDOM = require('react-dom');

var ErrorPage = require('./react-components/root-pages/error-page.js');

function renderErrorPage ( error ) {
    ReactDOM.render(
        <ErrorPage error={error} />,
        document.getElementById('content')
    );
}

module.exports = renderErrorPage;