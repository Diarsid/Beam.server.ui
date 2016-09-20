var React = require('react');

var PageTitle = React.createClass({
    render : function () {
        return (
            <div className="page-title">
                <div className="title-text">{this.props.text}</div>
            </div>
        );
    }
});

module.exports = PageTitle;