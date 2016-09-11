var $ = require('jquery');

var storage =
    require("./../../state/store/app-local-storage.js");
var resources =
    require("./../resources/resources.js");

// --------------------------------

function ajaxLog(message) {
    console.log("[APP] [AJAX CALL] [GET DIRECTORIES] " + message);
}

function getDirectories(userId, placement, callbacks) {
    callbacks.onStart();
    ajaxLog("starts with userId:" + userId + ", place:" + placement);
    $.ajax({
        url : resources.directories.getAllInPlace.url(userId, placement),
        method : resources.directories.getAllInPlace.method,
        dataType: 'json',
        cache: false,
        beforeSend: function ( xhr ) {
            xhr.setRequestHeader('Authentication', 'Bearer ' + storage.getJwt());
        },
        statusCode: {
            200 : function (data, statusText, xhr ) {
                ajaxLog(placement + " get...");
                callbacks.onSuccess(data);
            },
            400 : function ( xhr, statusText, errorThrown ) {
                ajaxLog("bad request : " + JSON.parse(xhr.responseText).message);
                callbacks.onFail(JSON.parse(xhr.responseText).message);
            },
            401 : function ( xhr, statusText, errorThrown ) {
                ajaxLog("not authorized : " + errorThrown);
                callbacks.onUnauthenticated();
            },
            404 : function ( xhr, statusText, errorThrown ) {
                ajaxLog("resource not found : " + errorThrown);
                callbacks.onFail("Resource not found.");
            },
            500 : function ( xhr, statusText, errorThrown ) {
                ajaxLog("internal server error : " + JSON.parse(xhr.responseText).message);
                callbacks.onServerError(JSON.parse(xhr.responseText).message);
            }
        }
    });
}

module.exports = getDirectories;