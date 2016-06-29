var React = require('react');
var ReactDOM = require('react-dom');

var appStorageKeys= require('./app-storage-keys.js');
var LoginPage =     require('./react-components/root-pages/login-page.js');

function logoutAndRenderLoginPage () {
    localStorage.removeItem(appStorageKeys.JWTKey);
    localStorage.removeItem(appStorageKeys.userRoleKey);
    localStorage.removeItem(appStorageKeys.userNameKey);
    localStorage.removeItem(appStorageKeys.userNickNameKey);
    ReactDOM.render(
        <LoginPage />,
        document.getElementById('content')
    );
}

module.exports = logoutAndRenderLoginPage;