var React = require('react');

var ErrorPage = React.createClass({

    render: function () {
        return (
            <div>
                <h1>Error occured :(</h1>
                <br/>
                ____________________
                <br/>
                <br/>
                {this.props.message}
            </div>
        );
    }
});

module.exports = ErrorPage;