var $ = require('jquery');

var storage =
    require("./../../state/store/app-local-storage.js");
var resources =
    require("./../resources/resources.js");

// --------------------------------

function ajaxLog(message) {
    console.log("[APP] [AJAX CALL] [DELETE DIRECTORY] " + message);
}

function deleteDirectory (userId, placement, dirName, callbacks) {
    callbacks.onStart();
    $.ajax({
        url : resources.directories.single.remove.url(userId, placement, dirName),
        method : resources.directories.single.remove.method,
        dataType: 'json',
        cache: false,
        beforeSend: function ( xhr ) {
            xhr.setRequestHeader('Authentication', 'Bearer ' + storage.getJwt());
        },
        statusCode : {
            200 : function (data, statusText, xhr ) {
                callbacks.onSuccess();
            },
            400 : function ( xhr, statusText, errorThrown ) {
                ajaxLog("bad request : " + JSON.parse(xhr.responseText).message);
                callbacks.onFail(JSON.parse(xhr.responseText).message);
            },
            401 : function ( xhr, statusText, errorThrown ) {
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

module.exports = deleteDirectory;