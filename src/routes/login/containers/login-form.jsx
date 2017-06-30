import React, {Component} from "react";
import {reduxForm} from "redux-form";
import Joi from "joi";

const validationSchema = {
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
    remember: Joi.boolean()
};

function validate(values) {
    let errors = {};
    let result = Joi.validate(values, validationSchema, {abortEarly: false});
    if (result.error && result.error.details) {
        for (let e of result.error.details) {
            errors[e.path] = e.message;
        }
    }
    return errors;
}
function hasError(input) {
    return input.touched && input.error;
}
function errorSensitiveFormGroup(input) {
    return "form-group" + (hasError(input) ? " has-error" : "");
}
function errorMessageFor(input) {
    return hasError(input) && <div className="help-block">{input.error}</div>;
}

class LoginForm extends Component {
    render() {
        const {fields:{email, password, remember}, handleSubmit, submitting} = this.props;
        return (
            <form className="form-login form-horizontal" onSubmit={handleSubmit}>
                <div className={errorSensitiveFormGroup(email)}>
                    <input type="email" required="required" className="form-control"
                           placeholder="Email" {...email}/>
                    {errorMessageFor(email)}
                </div>
                <div className={errorSensitiveFormGroup(password)}>
                    <input type="password" required="required" className="form-control"
                           placeholder="Password" {...password}/>
                    {errorMessageFor(password)}
                </div>
                <div className="form-group">
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" {...remember} value={true}/> Remember me
                        </label>
                    </div>
                </div>
                <div className="form-group btn-submit-group">
                    <button type="submit" disabled={submitting} className="form-control btn btn-primary btn-submit">
                        Login
                    </button>
                </div>
            </form>
        );
    }
}

LoginForm.propTypes = {};
LoginForm.defaultProps = {};

export default reduxForm({
    form: "login",
    fields: ["email", "password", "remember"],
    validate
})(LoginForm);
