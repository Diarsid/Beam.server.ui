var React = require('react');

var appPages = require("./../../../state/store/app-pages.js");

var MainPageContainer =
    require("./../../containers/top-level/main-page-container.js");
var LandingPageContainer =
    require("./../../containers/top-level/landing-page-container.js");
var LoginPageContainer =
    require("./../../containers/top-level/login-page-container.js");
var ErrorPageContainer =
    require("./../../containers/top-level/error-page-container.js");
var RegistrationPageContainer =
    require("./../../containers/top-level/registration-page-container.js");

// ----------------------


function logRootPage(message) {
    console.log("[APP] [ROOT PAGE] " + message);
}

function definePageToRenderFrom(currentPageType) {
    switch (currentPageType) {
        case appPages.main :
            logRootPage("render main page.");
            return (
                <div className="root-page">
                    <MainPageContainer />
                </div>
            );
        case appPages.landing :
            logRootPage("render landing page.");
            return (
                <div className="root-page">
                    <LandingPageContainer />
                </div>
            );
        case appPages.login :
            logRootPage("render login page.");
            return (
                <div className="root-page">
                    <LoginPageContainer />
                </div>
            );
        case appPages.registration :
            logRootPage("render registration page.");
            return (
                <div className="root-page">
                    <RegistrationPageContainer />
                </div>
            );
        case appPages.error :
            logRootPage("render error page.");
            return (
                <div className="root-page">
                    <ErrorPageContainer />
                </div>
            );
        case appPages.initial :
            logRootPage("initial empty page.");
            return (
                <div className="root-page">
                </div>
            );

        default :
            logRootPage("render landing page (by default).");
            return (
                <div className="root-page">
                    <LandingPageContainer />
                </div>
            );
    }
}

var RootPage = React.createClass({

    render : function () {
        return definePageToRenderFrom(this.props.currentPage);
    }
});

module.exports = RootPage;