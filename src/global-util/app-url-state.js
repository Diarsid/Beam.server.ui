function obtainCurrentUrl() {
    var rootUrl = window.location.href;
    if ( rootUrl.endsWith("/") ) {
        rootUrl = rootUrl.substring(0, rootUrl.length-1);
    }
    console.log('[APP] [ROOT DETECTOR] root url: ' + rootUrl);
    return rootUrl;
}

function extractApplicationUrlState (rootUrl) {
    var path = rootUrl.split('/');
    var appName = path[3];
    console.log('[APP] [ROOT DETECTOR] app name: ' + appName);
    var appHost = path.slice(0, 3).join('/');
    console.log('[APP] [ROOT DETECTOR] app host: ' + appHost);

    var relativePath = "";
    if ( path.length > 4 ) {
        relativePath = "/" + path.slice(4).join('/');
        console.log('[APP] [ROOT DETECTOR] app relative path: ' + relativePath);
    } else {
        console.log("[APP] [ROOT DETECTOR] app doesn't have relative path.");
    }

    return {
        appName : appName,
        appHost : appHost,
        relativePath : relativePath
    };
}

var applicationUrlState = extractApplicationUrlState(obtainCurrentUrl());

module.exports = applicationUrlState;