import {combineReducers} from "redux";
import {pendingImagesReducer, approvedImagesReducer, rejectedImagesReducer} from "../routes/images/reducers";
import {authenticationReducer} from "../routes/login/reducers";
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
    pendingImages: pendingImagesReducer,
    approvedImages: approvedImagesReducer,
    rejectedImages: rejectedImagesReducer,
    authentication: authenticationReducer,
    form: formReducer
});
export default rootReducer;