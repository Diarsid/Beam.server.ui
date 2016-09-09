var React = require('react');

var WebPanel =
    require("./../web-panel/web-panel.js");

// ---------------

var MainPageContent = React.createClass({
    render: function () {
        return (
            <div className="main-page-content">
                <WebPanel dirs={this.props.dirs} />
            </div>
        );
    }
});

module.exports = MainPageContent;