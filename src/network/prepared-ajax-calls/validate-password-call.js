var $ =
    require('jquery');

var resources =
    require("./../resources/resources.js");

// --------------------------------

function ajaxLog(message) {
    console.log("[APP] [AJAX CALL] [PASSWORD VALIDATION] " + message);
}

function validatePassword (newPassword, callbacks) {
    callbacks.onStart();
    ajaxLog("starts...");
    console.log(newPassword);
    var payload = {"payload" : newPassword };
    $.ajax({
        url : resources.validation.passwords.url,
        method : resources.validation.passwords.method,
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

module.exports = validatePassword;