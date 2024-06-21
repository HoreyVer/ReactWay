import React from 'react';
import Login from "./Login";
import {authAPI, instance} from "../../api/api";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/authReducer";
import {RootState} from "../../redux/reduxStore";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getUserProfile} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


class LoginContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.getAuthUserData()
        /*authAPI.me()
            .then(response => {

                    if (response.data.resultCode === 0) {
                        let email = response.data.data.email
                        let id = response.data.data.id
                        let login = response.data.data.login
                        this.props.setAuthUserData({email, id, login})
                    }
                }
            )*/
    }

    render() {
        /*return <Login {...this.props} />*/
        return <Login />
    }
}

const mapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
/*

let withUrlDataContainerComponent = withRouter(LoginContainer)

export default connect(mapStateToProps, {getAuthUserData})(withUrlDataContainerComponent)

*/

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getAuthUserData}),
    withRouter
)(LoginContainer)