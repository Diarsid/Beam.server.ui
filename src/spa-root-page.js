var React =     require("react");
var ReactDOM =  require('react-dom');

var LoginPage =         require('./react-components/root-pages/login-page.js');
var MainPage =          require('./react-components/root-pages/main-page.js');
var RegistrationPage =  require('./react-components/root-pages/registration-page.js');
var ErrorPage =         require('./react-components/root-pages/error-page.js');

var appStorage =            require('./app-storage.js');
var appRootPages =          require('./app-root-pages.js');

var SpaRootPage = React.createClass({

    getInitialState: function () {
        var initialPage = this.props.initial;
        console.log('[SPA ROOT] initial page: ' + initialPage)
        return {
            currentPage: initialPage
        };
    },

    renderLoginPage: function () {
        this.setState({
            currentPage: appRootPages.loginPage
        });
    },

    renderMainPage: function () {
        console.log('[SPA ROOT] render main page');
        var isAuthOk = appStorage.hasAuthInfo();
        if ( isAuthOk ) {
            console.log('[SPA ROOT] auth ok');
            this.setState({
                currentPage: appRootPages.mainPage
            });
        } else {
            console.log('[SPA ROOT] auth fail');
            this.setState({
                currentPage: appRootPages.errorPage
            });
        }
    },

    renderRegistrationPage: function () {
        this.setState({
            currentPage: appRootPages.registrationPage
        });
    },

    logoutAndRenderLoginPage: function () {
        localStorage.removeItem(appStorage.JWTKey);
        localStorage.removeItem(appStorage.userRoleKey);
        localStorage.removeItem(appStorage.userIdKey);
        localStorage.removeItem(appStorage.userNickNameKey);
        this.setState({
            currentPage: appRootPages.loginPage
        });
    },

    render: function () {
        var pageToRender;
        switch ( this.state.currentPage ) {
            case appRootPages.loginPage :
                pageToRender =
                    <div className="spa-root-page">
                        <LoginPage
                            renderRegPage={this.renderRegistrationPage}
                            renderMainPage={this.renderMainPage} />
                    </div>
                ;
                break;
            case appRootPages.mainPage :
                pageToRender =
                    <div className="spa-root-page">
                        <MainPage
                            logout={this.logoutAndRenderLoginPage} />
                    </div>
                ;
                break;
            case appRootPages.registrationPage :
                pageToRender =
                    <div className="spa-root-page">
                        <RegistrationPage
                            renderLoginPage={this.renderLoginPage}
                            renderMainPage={this.renderMainPage} />
                    </div>
                ;
                break;
            default :
                pageToRender =
                    <div className="spa-root-page">
                        <ErrorPage
                            renderRegPage={this.renderRegistrationPage}
                            renderLoginPage={this.renderLoginPage}
                            title="Error"
                            description="fail to define which page to be rendered"
                            source="" />
                    </div>
                ;
                break;
        }
        console.log('[SPA ROOT] currentPage ' + this.state.currentPage);
        return pageToRender;
    }
});

module.exports = SpaRootPage;