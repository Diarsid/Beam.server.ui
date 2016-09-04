var $ =
    require('jquery');

var resources =
    require("./../resources/resources.js");

// --------------------------------

function ajaxLog(message) {
    console.log("[APP] [AJAX CALL] [LOGIN] " + message);
}

function tryToLogin (loginData, callbacks) {
    ajaxLog("attempt starts...");
    callbacks.onCallStart();
    $.ajax({
        url : resources.login.url,
        method : resources.login.method,
        data: JSON.stringify(loginData),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        cache: false,
        statusCode: {
            200 : function ( xhr ) {
                ajaxLog("success with jwt : " + xhr.getResponseHeader("jwt"));
                callbacks.onCallSuccess(xhr.getResponseHeader("jwt"));
            },
            401 : function ( xhr, statusText, errorThrown ) {
                ajaxLog("fail, unauthorized with : " + (JSON.parse(xhr.responseText)).message);
                callbacks.onUnauthorized((JSON.parse(xhr.responseText)).message);
            },
            400 : function ( xhr, statusText, errorThrown ) {
                ajaxLog("fail, bad request with : " + (JSON.parse(xhr.responseText)).message);
                callbacks.onBadRequest((JSON.parse(xhr.responseText)).message);
            }
        }
    });
}

module.exports = tryToLogin;