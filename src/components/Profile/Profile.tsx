import React from 'react';
import s from './Profile.module.css';
import ProfileInfo, {userProfilePropsType} from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";
import {CommonType} from "./ProfileContainer";


const Profile = (props: CommonType) => {

    return <div>
        <ProfileInfo profile={props.profile} updateUserStatus={props.updateUserStatus} status={props.status}/>
        <MyPostsContainer/>
    </div>
}

export default Profile