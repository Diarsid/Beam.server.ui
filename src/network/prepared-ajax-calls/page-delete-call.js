var $ = require("jquery");

var storage =
    require("./../../state/store/app-local-storage.js");
var resources =
    require("./../resources/resources.js");

// --------------------------------

function ajaxLog(message) {
    console.log("[APP] [AJAX CALL] [DELETE PAGE] " + message);
}

function deletePage(userId, placement, dirName, pageName, callbacks) {
    callbacks.onStart();
    ajaxLog("page deletion : " + pageName);
    $.ajax({
        url : resources.pages.single.delete.url(userId, placement, dirName, pageName),
        method : resources.pages.single.delete.method,
        dataType: "json",
        cache: false,
        beforeSend: function ( xhr ) {
            xhr.setRequestHeader('Authentication', 'Bearer ' + storage.getJwt());
        },
        statusCode : {
            200 : function (data, statusText, xhr ) {
                ajaxLog("page deleted");
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

module.exports = deletePage;