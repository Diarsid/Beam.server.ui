var React = require('react');

var PageImageFrame =
    require("./page-image-frame.js");
var PageTitle =
    require("./page-title.js");

var PageFrame = React.createClass({
    render : function () {
        return (
            <li className="page-frame">
                <a href={this.props.url}
                   target="_blank"
                   rel='noopener noreferrer' >
                    <PageImageFrame image="./web-globe-n.png" />
                    <PageTitle text={this.props.name} />
                </a>
            </li>
        );
    }
});

module.exports = PageFrame;