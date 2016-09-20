var $ = require("jquery");

var storage =
    require("./../../state/store/app-local-storage.js");
var resources =
    require("./../resources/resources.js");

// --------------------------------

function ajaxLog(message) {
    console.log("[APP] [AJAX CALL] [CREATE PAGE] " + message);
}

function createPage(userId, placement, dirName, newPage, callbacks) {
    callbacks.onStart();
    ajaxLog("page creation : ");
    ajaxLog(" - name : " + newPage.name);
    ajaxLog(" - url  : " + newPage.url);
    $.ajax({
        url : resources.pages.postNew.url(userId, placement, dirName),
        method : resources.pages.postNew.method,
        data: JSON.stringify(newPage),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        cache: false,
        beforeSend: function ( xhr ) {
            xhr.setRequestHeader('Authentication', 'Bearer ' + storage.getJwt());
        },
        statusCode : {
            200 : function (data, statusText, xhr ) {
                ajaxLog("page created");
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

module.exports = createPage;