var $ =
    require('jquery');

var resources =
    require("./../resources/resources.js");

// --------------------------------

function ajaxLog(message) {
    console.log("[APP] [AJAX CALL] [NAME VALIDATION] " + message);
}

function validateName(name, callbacks) {
    callbacks.onStart();
    ajaxLog("starts...");
    console.log(name);
    var payload = {"payload" : name };
    $.ajax({
        url : resources.validation.names.url,
        method : resources.validation.names.method,
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

module.exports = validateName;