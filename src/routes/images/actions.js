import {
    FETCH_PENDING_IMAGES,
    FETCH_APPROVED_IMAGES,
    FETCH_REJECTED_IMAGES,
    APPROVE_IMAGE,
    REJECT_IMAGE
} from "./action-types";
import {httpClient as client} from "../../utils";

const fetchImagesByUri = (uri, actionType) => async(dispatch)=> {
    try {
        let {data} = await client.get(uri);
        dispatch({
            type: actionType,
            data: data.Data.Data
        });
    }
    catch (err) {
        alert(err);
    }
};

export const fetchPendingImages = () => {
    return fetchImagesByUri("pending-images", FETCH_PENDING_IMAGES);
};

export const fetchApprovedImages = () => {
    return fetchImagesByUri("approved-images", FETCH_APPROVED_IMAGES);
};
export const fetchRejectedImages = () => {
    return fetchImagesByUri("rejected-images", FETCH_REJECTED_IMAGES);
};

function createReviewAction(approve, image, fetchImages) {
    return async function (dispatch) {
        try {
            let type = approve ? APPROVE_IMAGE : REJECT_IMAGE;
            dispatch({
                type,
                image
            });
            await client.post(`images/${image.Id}/reviews`, {
                approve
            });
        }
        catch (err) {
            alert(err);
        }

        dispatch(fetchImages());
    };
}

export const approveImage = (img, fetchImages) => {
    return createReviewAction(true, img, fetchImages);
};

export const rejectImage = (img, fetchImages) => {
    return createReviewAction(false, img, fetchImages);
};
