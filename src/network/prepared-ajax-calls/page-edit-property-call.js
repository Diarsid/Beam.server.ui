var $ = require('jquery');

var storage =
    require("./../../state/store/app-local-storage.js");
var resources =
    require("./../resources/resources.js");

// --------------------------------

function ajaxLog(property, message) {
    console.log("[APP] [AJAX CALL] [EDIT PAGE : " + property +"] " + message);
}

function editPageProp(userId, place, dirName, pageName, propertyToEdit, newProperty, callbacks) {
    callbacks.onStart();
    ajaxLog(propertyToEdit, "change to -> " + newProperty);
    var payload = {
        "payload" : newProperty
    };
    $.ajax({
        url : resources.pages.single.editProp.url(userId, place, dirName, pageName, propertyToEdit),
        method : resources.pages.single.editProp.method,
        data: JSON.stringify(payload),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        cache: false,
        beforeSend: function ( xhr ) {
            xhr.setRequestHeader('Authentication', 'Bearer ' + storage.getJwt());
        },
        statusCode : {
            200 : function (data, statusText, xhr ) {
                ajaxLog(propertyToEdit, "page: " + pageName + " prop changed to:" + newProperty);
                callbacks.onSuccess();
            },
            400 : function ( xhr, statusText, errorThrown ) {
                ajaxLog(propertyToEdit, "bad request : " + JSON.parse(xhr.responseText).message);
                callbacks.onFail(JSON.parse(xhr.responseText).message);
            },
            401 : function ( xhr, statusText, errorThrown ) {
                callbacks.onUnauthenticated();
            },
            404 : function ( xhr, statusText, errorThrown ) {
                ajaxLog(propertyToEdit, "resource not found.");
                callbacks.onFail("Resource not found.");
            },
            500 : function ( xhr, statusText, errorThrown ) {
                ajaxLog(propertyToEdit, "server error.");
                callbacks.onServerError(JSON.parse(xhr.responseText).message);
            }
        }
    });
}

module.exports = editPageProp;