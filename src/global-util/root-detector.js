function obtainServerRootUrl() {
    var rootUrl = window.location.href;
    if ( rootUrl.endsWith("/") ) {
        rootUrl = rootUrl.substring(0, rootUrl.length-1);
    }
    console.log('[APP] [ROOT DETECTOR] root url: ' + rootUrl);
    return rootUrl;
}

function extractApplicationNameSubpath (rootUrl) {
    var appName = rootUrl.split('/').slice(3).join('/');
    console.log('[APP] [ROOT DETECTOR] app name: ' + appName);
    return appName;
}

var rootUrl = obtainServerRootUrl();
var applicationNameSubpath = extractApplicationNameSubpath(rootUrl);

var rootDetector = {
    fullRoot : rootUrl,
    appName : applicationNameSubpath
};

module.exports = rootDetector;