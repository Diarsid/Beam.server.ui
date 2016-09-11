var $ =
    require('jquery');

var resources =
    require("./../resources/resources.js");

// --------------------------------

function ajaxLog(message) {
    console.log("[APP] [AJAX CALL] [NICK-FREE VALIDATION] " + message);
}

function validateNickName (newNickName, callbacks) {
    callbacks.onStart();
    ajaxLog("starts...");
    console.log(newNickName);
    var payload = {"payload" : newNickName };
    $.ajax({
        url : resources.validation.freeNickNames.url,
        method : resources.validation.freeNickNames.method,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(payload),
        cache: false,
        statusCode: {
            200 : function () {
                ajaxLog("valid.");
                callbacks.onValid();
            },
            302 : function () {
                ajaxLog("nickName is not free.");
                callbacks.onInvalid("this nick is not free.");
            },
            400 : function ( xhr, statusText, errorThrown ) {
                ajaxLog("invalid : " + (JSON.parse(xhr.responseText)).message);
                callbacks.onInvalid((JSON.parse(xhr.responseText)).message);
            }
        }
    });
}

module.exports = validateNickName;