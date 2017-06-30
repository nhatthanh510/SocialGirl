import {LOGIN_SUCCESS, LOGIN_FAIL, REQUEST_LOGIN} from "./action-types";
import {getAccessToken} from "../../utils";

function hasAccessToken() {
    return getAccessToken() ? true : false;
}
const initialState = {authenticated: hasAccessToken(), loginErrorMessage: null};

export function authenticationReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_LOGIN:
            return {
                authenticated: false,
                loginErrorMessage: null
            };
        case LOGIN_SUCCESS:
            return {
                authenticated: true,
                loginErrorMessage: null
            };
        case LOGIN_FAIL:
            return {
                authenticated: false,
                loginErrorMessage: action.errorMessage
            };
    }
    return state;
}