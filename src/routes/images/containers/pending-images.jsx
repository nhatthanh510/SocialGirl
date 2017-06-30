import {connect} from "react-redux";
import {fetchPendingImages, approveImage, rejectImage} from "../actions";
import ImageList from "../components/images-list";

function mapStateToProps({pendingImages}) {
    return {images: pendingImages};
}

/*function mapDispatchToProps(dispatch) {
 return {
 fetchImages: fetchPendingImages,
 approveImage,
 rejectImage
 };
 }*/

const PendingImages = connect(mapStateToProps, {
    fetchImages: fetchPendingImages,
    approveImage,
    rejectImage
})(ImageList);

export default PendingImages;