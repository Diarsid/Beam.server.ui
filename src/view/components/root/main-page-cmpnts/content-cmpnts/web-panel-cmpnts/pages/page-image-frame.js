var React = require('react');

var PageImage = React.createClass({
    render : function () {
        return (
            <div className="page-image-frame">
                <img className="page-image" src={this.props.image} />
            </div>
        );
    }
});

module.exports = PageImage;