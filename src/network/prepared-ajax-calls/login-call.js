var $ =
    require('jquery');

/* custom modules */

var resources =
    require("./../resources/resources.js");

/* module code */

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
                ajaxLog("unauthorized: wrong login or password.");
                callbacks.onUnauthenticated("Wrong login or password.");
            },
            400 : function ( xhr, statusText, errorThrown ) {
                ajaxLog("fail, bad request with : " + (JSON.parse(xhr.responseText)).message);
                callbacks.onBadRequest((JSON.parse(xhr.responseText)).message);
            }
        }
    });
}

module.exports = tryToLogin;