import React, {PropTypes} from "react";
import ImageRow from "./image-row";

class ApprovedImageRow extends ImageRow {
    constructor(props, context) {
        super(props, context, {approveBtn: false, rejectBtn: true});
    }
}
ApprovedImageRow.propTypes = {
    image: PropTypes.object.isRequired
};

export default ApprovedImageRow;