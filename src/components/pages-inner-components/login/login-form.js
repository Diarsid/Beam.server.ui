var React = require('react');

var LoginForm = React.createClass({

    getInitialState: function () {
        return {
            nickName: "",
            password: ""
        }
    },

    nickNameAndPasswordEntered: function () {
        return ( this.state.nickName.length > 0 && this.state.password.length > 0 );
    },

    login: function () {
        if ( this.nickNameAndPasswordEntered() ) {
            this.props.loginAction(this.state.nickName, this.state.password);
            this.setState({
                nickName: "",
                password: ""
            });
        }
    },

    nickNameChanged: function ( event ) {
        this.setState({
            nickName: event.target.value
        });
    },

    passwordChanged: function ( event ) {
        this.setState({
            password: event.target.value
        });
    },

    getLoginButtonStyle: function () {
        if ( this.nickNameAndPasswordEntered() ) {

        }
    },

    render: function () {
        return(
            <div className="login-form">
                <form>
                    <fieldset>
                        <label class="login-form-label">Nickname:</label>
                        <br/>
                        <input type="text"
                               className="login-form-input"
                               value = {this.state.nickName}
                               onChange={this.nickNameChanged} />
                        <br/>
                        <label className="login-form-label">Password:</label>
                        <br/>
                        <input type="text"
                               className="login-form-input"
                               value={this.state.password}
                               onChange={this.passwordChanged}/>
                        <br/>
                    </fieldset>
                </form>
                <button type="button"
                        className="login-button"
                        style={this.getLoginButtonStyle}
                        onClick={this.login} >
                    Login
                </button>
            </div>
        );
    }
});

module.exports = LoginForm;