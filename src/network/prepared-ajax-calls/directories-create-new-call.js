var $ = require('jquery');

var storage =
    require("./../../state/store/app-local-storage.js");
var resources =
    require("./../resources/resources.js");

// --------------------------------

function ajaxLog(message) {
    console.log("[APP] [AJAX CALL] [POST DIRECTORY] " + message);
}

function createNewDirectory(userId, placement, dirName, callbacks) {
    callbacks.onStart();
    ajaxLog("starts with userId:" + userId + ", place:" + placement + ", dir:" + dirName);
    var payload = {
        "payload" : dirName
    };
    $.ajax({
        url : resources.directories.postNew.url(userId, placement),
        method : resources.directories.postNew.method,
        data: JSON.stringify(payload),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        cache: false,
        beforeSend: function ( xhr ) {
            xhr.setRequestHeader('Authentication', 'Bearer ' + storage.getJwt());
        },
        statusCode: {
            200 : function (data, statusText, xhr ) {
                ajaxLog("new dir: " + dirName + " created.");
                callbacks.onSuccess(userId, placement, dirName);
            },
            400 : function ( xhr, statusText, errorThrown ) {
                ajaxLog("bad request : " + JSON.parse(xhr.responseText).message);
                callbacks.onFail(JSON.parse(xhr.responseText).message);
            },
            401 : function ( xhr, statusText, errorThrown ) {
                callbacks.onUnauthenticated();
            },
            404 : function ( xhr, statusText, errorThrown ) {
                ajaxLog("resource not found.");
                callbacks.onFail("Resource not found.");
            },
            500 : function ( xhr, statusText, errorThrown ) {
                ajaxLog("server error.");
                callbacks.onServerError(JSON.parse(xhr.responseText).message);
            }
        }
    });
}

module.exports = createNewDirectory;