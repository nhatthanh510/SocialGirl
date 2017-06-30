import React from "react";
import {Route, IndexRedirect, Redirect} from "react-router";
import PendingImages from "./images/containers/pending-images";
import ApprovedImages from "./images/containers/approved-images";
import RejectedImages from "./images/containers/rejected-images";
import ImageDetail from "./images/components/images-show";
import ImagesIndex from "./images/components/images-index";
import App from "../containers/app";

export default (
    <Route path="/mod" component={App}>
    <IndexRedirect to="images/pending"/>
    <Route path="images" component={ImagesIndex}>
        <Route path="pending" component={PendingImages}/>
        <Route path="approved" component={ApprovedImages}/>
        <Route path="rejected" component={RejectedImages}/>
    </Route>
    <Route name="detail" path="/:hdUrl" component={ImageDetail} handler={ImageDetail}/>
    <Redirect from="*" to="/mod"/>
    </Route>
);