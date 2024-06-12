import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootState} from "../../redux/reduxStore";
import {getUserProfile, setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {userProfilePropsType} from "./MyPosts/ProfileInfo/ProfileInfo";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

type MapStatePropsType = {
    profile: userProfilePropsType
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PathParamsType = {
    userId: number,
    getUserProfile: (userId: number) => void,
}

// @ts-ignore
type CommonType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<CommonType> {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) userId = 2
        if (userId) {
            this.props.getUserProfile(userId)
        }
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

/*let AuthRedirectComponent = (props) => {
    return <ProfileContainer {...props}/>
}*/


let mapStateToProps = (state: RootState): MapStatePropsType => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent))

/*

import React, { useEffect } from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import {RootState} from "../../redux/reduxStore";

function ProfileContainer(props: any) {

    const userId = useParams();
    let currUserId = userId||2

    useEffect(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + currUserId)
            .then((response) => {
                props.setUserProfile(response.data);
            });
    }, [userId]);

    return (
        <div>
            <Profile profile={props.profile} />
        </div>
    );
}

let mapStateToProps = (state: RootState) => ({
    profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);*/
