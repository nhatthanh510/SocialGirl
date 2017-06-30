/**
 * Created by MyPC on 8/4/2016.
 */
import React from "react";
export default class ImageDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var hdUrl = this.props.location.query.hdUrl;
        return(
            <div className="image-wrapper">
                <div className="col-md-1">
                    <button className="btn btn-primary btn-previous" onClick={() => this.props.history.goBack()}>Back</button>
                </div>
                <div className="col-md-11 image-detail">
                    <img src = {hdUrl}></img>
                </div>
            </div>
        )
    }
}
