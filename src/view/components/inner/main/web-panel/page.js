var React = require('react');

var Page = React.createClass({
    render : function () {
        return (
            <div className="page">
                {this.props.name}
            </div>
        );
    }
});

module.exports = Page;