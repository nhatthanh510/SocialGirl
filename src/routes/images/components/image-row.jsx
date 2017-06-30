import React, {PropTypes} from "react";
import {Link} from "react-router";
let showApproveBtn, showRejectBtn;


export default class ImageRow extends React.Component {
    constructor(props, context, {approveBtn = true, rejectBtn = true}) {
        super(props, context);
        showApproveBtn = approveBtn;
        showRejectBtn = rejectBtn;
    }
    render() {
        var hdUrl = this.props.image.FullHdUrl;
        return (<div className="row image-row">
            <div className="col-md-2">
                <Link to={{ pathname: 'detail', query: { hdUrl: hdUrl } }}>
                    <img className="img-thumbnail" src={this.props.image.NormalUrl}/>
                </Link>
            </div>
            <div className="col-md-2">
                <div className="img-caption">
                    <label >Caption:</label>
                    <p>{this.props.image.Title}</p>
                    <label>by {this.props.image.PostedBy}</label><br/>
                    <label>Điểm hiện tại:</label>
                    <p>?</p>
                </div>
            </div>
            <div className="col-md-2">
                <div className="img-hashtag">
                    <label >Hashtag:</label>
                    <p>{this.props.image.Tags.map(function (tag) {
                        return '#'+tag+' ';
                    })}</p>
                    <label>Time:</label>
                    <p>{(new Date(this.props.image.CreatedAt)).toLocaleString()}</p>
                </div>
            </div>
            <div className="col-md-2">
                <div className="img-size">
                    <label >kích thước:</label>
                    <p>{this.props.image.FullHdHeight}x{this.props.image.FullHdWidth}px</p>
                    <label>Dung lượng:</label>
                    <p>5Mb</p>
                </div>
            </div>
            <div className="col-md-2">
                <div className="img-size">
                </div>
            </div>
            <div className="col-md-2 group-btn-review">
                {
                    showApproveBtn ? (<button className="btn-review btn btn-primary"
                                              onClick={()=>this.props.onApproveImage(this.props.image)}>Approve
                    </button>) : null
                }
                { showRejectBtn ?
                    (<button className="btn-review btn btn-default"
                             onClick={()=>this.props.onRejectImage(this.props.image)}>Reject
                    </button>) : null
                }
            </div>
        </div>);
    }
}
ImageRow.propTypes = {
    image: PropTypes.object.isRequired
};

export default ImageRow;
