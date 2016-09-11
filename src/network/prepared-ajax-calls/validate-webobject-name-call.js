var $ =
    require('jquery');

var resources =
    require("./../resources/resources.js");

// --------------------------------

function ajaxLog(message) {
    console.log("[APP] [AJAX CALL] [WEB-OBJECT NAME VALIDATION] " + message);
}

function validateWebObjectName(name, callbacks) {
    callbacks.onStart();
    ajaxLog("starts...");
    console.log(name);
    var payload = {"payload" : name };
    $.ajax({
        url : resources.validation.webObjects.url,
        method : resources.validation.webObjects.method,
        data: JSON.stringify(payload),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        cache: false,
        statusCode: {
            200 : function () {
                ajaxLog("valid.");
                callbacks.onValid();
            },
            400 : function ( xhr, statusText, errorThrown ) {
                ajaxLog("invalid : " + JSON.parse(xhr.responseText).message);
                callbacks.onInvalid(JSON.parse(xhr.responseText).message);
            }
        }
    });
}

module.exports = validateWebObjectName;