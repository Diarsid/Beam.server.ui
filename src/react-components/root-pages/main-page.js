var React = require("react");
var $ = require('jquery');

var appStorage =            require('../../app-storage.js');
var appRestResourcesHolder= require('../../app-rest-resources-holder.js');
var jwtUtil =               require('../../jwt-util.js');

var MainPage = React.createClass({

    getInitialState: function () {
        return({
            object: null
        });
    },

    getNewObject: function () {
        var self = this;
        $.ajax({
            method: appRestResourcesHolder.objects.method,
            url: appRestResourcesHolder.objects.url,
            cache: false,
            dataType: "json",
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader('Authentication', 'Bearer ' + localStorage.getItem(appStorage.JwtHeader));
            },
            statusCode: {
                200: function ( data, xhr ) {
                    console.log('[MAIN PAGE] load new object...');
                    console.log(data);
                    console.log(xhr);
                    self.setState({
                        object: data
                    });
                }
            }
        });
    },

    render: function () {
        var data;
        if ( this.state.object != null ) {
            data = this.state.object.data + ", " + this.state.object.value + ", " + this.state.object.status;
        } else {
            data = "no object";
        }
        return(
            <div className="main-page">
                <button type="button"
                        className="logout-button"
                        onClick={this.props.logout}>
                    Logout
                </button>
                <div>
                    Welcome, {localStorage.getItem(appStorage.userNickNameKey)}
                    <button type="button"
                            className="get-object-button"
                            onClick={this.getNewObject}>
                        Object
                    </button>
                    <div>{data}</div>
                </div>
                <div>
                    Main page
                </div>
            </div>
        );
    }
});

module.exports = MainPage;