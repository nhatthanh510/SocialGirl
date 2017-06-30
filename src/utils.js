/**
 * Created by daobm on 8/5/16.
 */

import axios from "axios";
import {BASE_URL, ACCESS_TOKEN} from "./constants";

const httpClient = axios.create({
    baseURL: BASE_URL
});

httpClient.interceptors.request.use((config)=> {
    const token = getAccessToken();
    if (token) {
        config.headers = config.headers || {};
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
});

export {httpClient};

export function getAccessToken() {
    return sessionStorage.getItem(ACCESS_TOKEN) || localStorage.getItem(ACCESS_TOKEN);
}

export function setAccessToken(accessToken, remember) {
    if (remember) {
        localStorage.setItem(ACCESS_TOKEN, accessToken);
    }
    else {
        sessionStorage.setItem(ACCESS_TOKEN, accessToken);
    }
}