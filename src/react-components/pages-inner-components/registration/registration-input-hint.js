var React = require("react");

var RegistrationInputHint = React.createClass({

    render: function () {
        if ( this.props.showHint ) {
            return(
                <label class="registration-form-input-hint">{this.props.message}</label>
            );
        } else {
            return null;
        }
    }
});

module.exports = RegistrationInputHint;