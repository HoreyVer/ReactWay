import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";

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
    profile: userProfilePropsType
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
        <div className={s.descriptionBlock}> Аva + description</div>

      <img src={props.profile.photos.large}/>
          {/*{props.profile.fullName}
        {props.profile.aboutMe}*/}
        

    </div>
}

export default ProfileInfo