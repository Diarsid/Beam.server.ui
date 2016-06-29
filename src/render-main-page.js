var React = require('react');
var ReactDOM = require('react-dom');

var MainPage = require('./react-components/root-pages/main-page.js');

function renderMainPage () {
    ReactDOM.render(
        <MainPage />,
        document.getElementById('content')
    );
}

module.exports = renderMainPage;