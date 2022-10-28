import React from "react";
import {Navigate} from "react-router-dom";

const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Component {...this.props} />

            return <Navigate to={'/login/'}/>
        }
    }
    return RedirectComponent;
}
export default withAuthRedirect;