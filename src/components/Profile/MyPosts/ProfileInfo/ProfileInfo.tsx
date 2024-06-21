import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

export type userProfilePropsType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

export type ProfileInfoPropsType = {
    profile: userProfilePropsType,
    status: string,
    updateUserStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return <div>
        <div>
            <img
                src={'https://avatars.mds.yandex.net/i?id=9277c1635f2630dd7deca0f158e033ed16ff6608-8567615-images-thumbs&n=13'}
                alt={'asd'}>
            </img>
        </div>
        {/*<div className={s.descriptionBlock}> Аva + description</div>*/}
        <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>



        <img src={props.profile.photos.large}/>

    </div>
}

export default ProfileInfo