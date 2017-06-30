/**
 * Created by daobm on 8/5/16.
 */

import {httpClient as client, setAccessToken} from "../../utils";
import {LOGIN_SUCCESS, LOGIN_FAIL, REQUEST_LOGIN} from "./action-types";
import {ROLE_MOD, ROLE_ADMIN} from "../../constants";

export function login({email, password, remember}) {
    return async(dispatch) => {
        dispatch({
            type: REQUEST_LOGIN
        });
        let errorMessage;
        try {
            let {data} = await client.post("login", {Email: email, Password: password});
            if (!data || data.Code != 0) {
                if (data.Code == 1001) {
                    errorMessage = "Invalid email or password";
                }
                else {
                    errorMessage = data.Message;
                }
            }
            else if (data.Data.Roles.indexOf(ROLE_MOD) >= 0 || data.Data.Roles.indexOf(ROLE_ADMIN) >= 0) {
                let accessToken = data.Data.AccessToken;
                setAccessToken(accessToken, remember);
                dispatch({
                    type: LOGIN_SUCCESS,
                    accessToken,
                    user: data.Data.User,
                });
            }
            else {
                errorMessage = "You don't have permission to access this area";
            }
        }
        catch (err) {
            errorMessage = err.message;
        }
        if (errorMessage) {
            dispatch({
                type: LOGIN_FAIL,
                errorMessage
            });
        }
    };
}