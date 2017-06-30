import React, {PropTypes} from "react";
import ImageRow from "./image-row";

class RejectedImageRow extends ImageRow {
    constructor(props, context) {
        super(props, context, {approveBtn: true, rejectBtn: false});
    }
}
RejectedImageRow.propTypes = {
    image: PropTypes.object.isRequired
};

export default RejectedImageRow;