import {PostPropsType} from "../App";
import {ActionsTypes} from "./store";
import { userProfilePropsType} from "../components/Profile/MyPosts/ProfileInfo/ProfileInfo";
import {Dispatch} from "redux";
import profile from "../components/Profile/Profile";
import {usersAPI} from "../api/api";

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"


export let addPostActionCreator = (postText: string) => {
    return {
        type: "ADD_POST",
        postMessage: postText
    } as const
}

export let updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        newText: newText
    } as const
}


export let setUserProfile = (profile: userProfilePropsType) => {
    return {
        type: "SET_USER_PROFILE",
        profile: profile
    } as const
}

export let getUserProfile = (userId: number) => (dispath: Dispatch) => {
    return usersAPI.getProfile(userId)
        .then(response => {
            setUserProfile(response.data)
        })
}

const initState = {
    posts: [
        {id: 1, post: 'Hi', likesCount: '12'},
        {id: 2, post: 'How are you?', likesCount: '12'},
        {id: 3, post: 'I am Fine', likesCount: '17'},
        {id: 4, post: 'Good', likesCount: '4'},
        {id: 5, post: 'OK', likesCount: '8'},
        {id: 6, post: 'Let s go', likesCount: '19'}
    ],
    newPostText: '',
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Oleg'},
        {id: 6, name: 'Viktor'}
    ],
    profile: {aboutMe: "",
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 1,
        photos: {
            small: '',
            large: ''
        }}
}

const profileReducer = (state = initState, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost: PostPropsType = {
                id: new Date().getTime(),
                post: action.postMessage,
                likesCount: "0"
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }

}

export default profileReducer