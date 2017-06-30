import {FETCH_PENDING_IMAGES, FETCH_APPROVED_IMAGES, FETCH_REJECTED_IMAGES, APPROVE_IMAGE, REJECT_IMAGE} from "./action-types";
const initialState = [];

export function pendingImagesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PENDING_IMAGES:
            return action.data;
        case APPROVE_IMAGE:
        case REJECT_IMAGE:
            return state.filter((i) => i.Id != action.image.Id);
    }
    return state;
}

export function approvedImagesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_APPROVED_IMAGES:
            return action.data;
        case REJECT_IMAGE:
            return state.filter((i) => i.Id != action.image.Id);
        case APPROVE_IMAGE:
            return [action.image,...state];
    }
    return state;
}


export function rejectedImagesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_REJECTED_IMAGES:
            return action.data;
        case REJECT_IMAGE:
            return [action.image,...state];
        case APPROVE_IMAGE:
            return state.filter((i) => i.Id != action.image.Id);
    }
    return state;
}