import {connect} from "react-redux";
import {fetchRejectedImages, approveImage, rejectImage} from "../actions";
import ImageList from "../components/images-list";
import RejectedImageRow from "../components/rejected-image-row";

function mapStateToProps({rejectedImages}) {
    return {images: rejectedImages, imageRow: RejectedImageRow};
}

const RejectedImages = connect(mapStateToProps, {
    fetchImages: fetchRejectedImages,
    approveImage,
    rejectImage
})(ImageList);

export default RejectedImages;