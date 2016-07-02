var React =     require("react");
var ReactDOM =  require('react-dom');
var $ =         require('jquery');

var SpaRootPage = require('./spa-root-page.js');

var appRestResourcesHolder= require('./app-rest-resources-holder.js');
var appStorage =            require('./app-storage.js');
var appRootPages =          require('./app-root-pages.js');

function renderApplication( initialPage ) {
    console.log('[MAIN] render app...');
    ReactDOM.render(
        <SpaRootPage initial={initialPage} />,
        document.getElementById('content')
    );
}

function startApplication () {
    console.log('[MAIN] start app...');
    if ( localStorage.getItem(appStorage.JWTKey) == null ) {
        renderApplication(appRootPages.loginPage);
    } else {
        $.ajax({
            method: appRestResourcesHolder.jwtValidation.method,
            url: appRestResourcesHolder.jwtValidation.url,
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader('Authentication', 'Bearer ' + localStorage.getItem(appStorage.JWTKey));
            },
            statusCode: {
                200: function () {
                    console.log('[MAIN] define initial page: ' + appRootPages.mainPage);
                    renderApplication(appRootPages.mainPage);
                },
                302: function () {
                    localStorage.removeItem(appStorage.JWTKey);
                    localStorage.removeItem(appStorage.userRoleKey);
                    localStorage.removeItem(appStorage.userIdKey);
                    localStorage.removeItem(appStorage.userNickNameKey);
                    console.log('[MAIN] define initial page: ' + appRootPages.loginPage);
                    renderApplication(appRootPages.loginPage);
                },
                401: function () {
                    localStorage.removeItem(appStorage.JWTKey);
                    localStorage.removeItem(appStorage.userRoleKey);
                    localStorage.removeItem(appStorage.userIdKey);
                    localStorage.removeItem(appStorage.userNickNameKey);
                    console.log('[MAIN] define initial page: ' + appRootPages.registrationPage);
                    renderApplication(appRootPages.registrationPage);
                }
            }
        });
    }
}

startApplication();
