var $ = require('jquery');

var storage =
    require("./../../state/store/app-local-storage.js");
var resources =
    require("./../resources/resources.js");

// --------------------------------

function ajaxLog(message) {
    console.log("[APP] [AJAX CALL] [GET DIRECTORIES] " + message);
}

function validateName(userId, placement, callbacks) {
    callbacks.onStart();
    ajaxLog("starts with userId:" + userId + ", place:" + placement);
    $.ajax({
        url : resources.directories.url(userId, placement),
        method : resources.directories.method,
        dataType: 'json',
        cache: false,
        beforeSend: function ( xhr ) {
            xhr.setRequestHeader('Authentication', 'Bearer ' + storage.getJwt());
        },
        statusCode: {
            200 : function (data, statusText, xhr ) {
                ajaxLog(placement + " get...");
                console.log(data);
                console.log(statusText);
                console.log(xhr);
                callbacks.onSuccess(data);
            },
            400 : function ( xhr, statusText, errorThrown ) {
                ajaxLog("bad request : " + JSON.parse(xhr.responseText).message);
                callbacks.onBadRequest(JSON.parse(xhr.responseText).message);
            }
        }
    });
}

module.exports = validateName;