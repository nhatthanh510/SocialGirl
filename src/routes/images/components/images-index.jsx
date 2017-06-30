import React, {Component} from "react";
import activeComponent from "react-router-active-component";

const NavLink = activeComponent("li");

class ImagesIndex extends Component {
    render() {
        return (
            <div className="images-index">
                <div>
                    <ul className="nav nav-tabs nav-images">
                        <NavLink to="/mod/images/pending" activeClassName="active">Pending</NavLink>
                        <NavLink to="/mod/images/approved" activeClassName="active">Approved</NavLink>
                        <NavLink to="/mod/images/rejected" activeClassName="active">Rejected</NavLink>
                    </ul>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ImagesIndex.propTypes = {};
ImagesIndex.defaultProps = {};

export default ImagesIndex;
