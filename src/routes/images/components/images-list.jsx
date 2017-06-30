import React, {PropTypes} from "react";
import ImageRow from "./image-row";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
let CustomImageRow;

class ImageList extends React.Component {
    constructor(props) {
        super(props);
        this.approveImage = (img) => props.approveImage(img, props.fetchImages);
        this.rejectImage = (img) => props.rejectImage(img, props.fetchImages);
        CustomImageRow = props.imageRow || ImageRow;
    }
    componentDidMount() {
        this.props.fetchImages();
    }

    render() {
        return (
            <div>
                <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={150} transitionLeaveTimeout={300}>
                {this.props.images.map(i => <CustomImageRow image={i} key={i.Id} onApproveImage={this.approveImage}
                                                      onRejectImage={this.rejectImage}/>) }
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
ImageList.propTypes = {
    images: PropTypes.array.isRequired
};


export default ImageList;