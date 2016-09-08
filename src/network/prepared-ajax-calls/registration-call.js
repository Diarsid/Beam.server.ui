var $ =
    require('jquery');

var resources =
    require("./../resources/resources.js");

// --------------------------------

function ajaxLog(message) {
    console.log("[APP] [AJAX CALL] [REGISTRATION] " + message);
}

function registerCall(regData, callbacks) {
    callbacks.onStart();
    ajaxLog("starts...");
    console.log(regData);
    $.ajax({
        url : resources.registration.url,
        method : resources.registration.method,
        data: JSON.stringify(regData),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        cache: false,
        statusCode: {
            200 : function (xhr) {
                ajaxLog("success with jwt : " + xhr.getResponseHeader("jwt"));
                callbacks.onSuccess(xhr.getResponseHeader("jwt"));
            },
            400 : function (xhr, statusText, errorThrown) {
                ajaxLog("fail, bad request with : " + (JSON.parse(xhr.responseText)).message);
                callbacks.onBadRequest((JSON.parse(xhr.responseText)).message);
            },
            401 : function (xhr, statusText, errorThrown) {
                ajaxLog("fail, unauthorized with : " + (JSON.parse(xhr.responseText)).message);
                callbacks.onUnauthorized((JSON.parse(xhr.responseText)).message);
            }
        }
    });
}

module.exports = registerCall;