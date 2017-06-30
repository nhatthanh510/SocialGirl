import React, {Component} from "react";
import {connect} from "react-redux";
import LoginPage from "../routes/login/containers/login-page";

class App extends Component {
    render() {
        return (
            <div className="container">
                {
                    this.props.authenticated ? this.props.children : <LoginPage/>
                }
            </div>
        );
    }
}

function mapStateToProps({authentication: {authenticated}}) {
    return {authenticated};
}

export default connect(mapStateToProps)(App);