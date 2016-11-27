var React = require('react');

var Spinner = React.createClass({
    render : function () {
        if (this.props.show) {
            return (<span className="spinner"><b> ... </b></span>);
        } else {
            return null;
        }
    }
});

module.exports = Spinner;