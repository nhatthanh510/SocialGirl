import React, {Component} from "react";
import LoginForm from "./login-form";
import {connect} from "react-redux";
import {login} from "../actions";

class LoginPage extends Component {
    render() {
        return (
            <div className="page-login">
                <div className="login-container">
                    {this.props.loginErrorMessage ?
                        <div className="alert alert-danger">{this.props.loginErrorMessage}</div> : null }
                    <LoginForm onSubmit={(creds) => this.props.login(creds)}/>
                </div>
            </div>
        );
    }
}

LoginPage.propTypes = {};
LoginPage.defaultProps = {};

function mapStateToProps({authentication:{loginErrorMessage}}) {
    return {loginErrorMessage};
}

export default connect(mapStateToProps, {login})(LoginPage);