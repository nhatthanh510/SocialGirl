import {connect} from "react-redux";
import {fetchApprovedImages, approveImage, rejectImage} from "../actions";
import ImageList from "../components/images-list";
import ApprovedImageRow from "../components/approved-image-row";

function mapStateToProps({approvedImages}) {
    return {images: approvedImages, imageRow: ApprovedImageRow};
}

const ApprovedImages = connect(mapStateToProps, {
    fetchImages: fetchApprovedImages,
    approveImage,
    rejectImage
})(ImageList);

export default ApprovedImages;