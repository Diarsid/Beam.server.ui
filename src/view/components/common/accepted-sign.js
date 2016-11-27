var React = require('react');

var AcceptedSign = React.createClass({
    render : function () {
        if (this.props.accepted) {
            return (<span><b> V </b></span>);
        } else {
            return null;
        }
    }
});

module.exports = AcceptedSign;