import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootState} from "../../redux/reduxStore";
import {
    getUserProfile, getUserStatus, updateUserStatus
} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {userProfilePropsType} from "./MyPosts/ProfileInfo/ProfileInfo";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


type MapStatePropsType = {
    profile: userProfilePropsType,
    status: string
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void,
    getUserStatus: (userId: number) => void,
    updateUserStatus: (status: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PathParamsType = {
    userId: number
}

// @ts-ignore
export type CommonType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<CommonType> {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) userId = 28566
        if (userId) {
            console.log(userId)
            this.props.getUserProfile(userId);
            this.props.getUserStatus(userId)
        }
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} updateUserStatus={this.props.updateUserStatus}
                     status={this.props.status}/>
        )
    }
}

let mapStateToProps = (state: RootState): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserStatus, getUserProfile, updateUserStatus}),
    withRouter/*,
    withAuthRedirect*/
)(ProfileContainer)