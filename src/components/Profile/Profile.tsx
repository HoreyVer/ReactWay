import React from 'react';
import s from './Profile.module.css';

import ProfileInfo, {userProfilePropsType} from "./MyPosts/ProfileInfo/ProfileInfo";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";

type ProfilePropsType= {
    profile: userProfilePropsType,
    }

const Profile = (props: ProfilePropsType) => {

    return <div>
        <ProfileInfo profile={props.profile}/>
        {/*<MyPostsContainer dispatch={props.dispatch}  />*/}
        {/*  <MyPostsContainer store={props.store} dispatch={props.dispatch} />*/}

        <MyPostsContainer/>
    </div>
}

export default Profile