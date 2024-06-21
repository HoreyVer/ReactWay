import {AppStatePropsType, PostPropsType} from "../App";
import profileReducer, {
    addPostActionCreator, setUserStatus, setUserProfile,
    updateNewPostTextActionCreator
} from "./profileReducer";
import dialogReducer, {
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "./dialogReducer";


type StoreType = {
    _appState: AppStatePropsType,
    getState: () => AppStatePropsType,
    _callSubscriber: (props: AppStatePropsType) => void,
    addPost: (postMessage: string) => void,
    changeNewText: (newText: string) => void
    subscribe: (callback: (appState: AppStatePropsType) => void) => void
    dispatch: (action: ActionsTypes) => void
}


export type ActionsTypes =
    ReturnType<typeof sendMessageActionCreator>
    | ReturnType<typeof updateNewMessageBodyActionCreator>
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>


// let store: StoreType = {
//     _appState: {
//         profilePage: {
//             posts: [
//                 {id: 1, post: 'Hi', likesCount: '12'},
//                 {id: 2, post: 'How are you?', likesCount: '12'},
//                 {id: 3, post: 'I am Fine', likesCount: '17'},
//                 {id: 4, post: 'Good', likesCount: '4'},
//                 {id: 5, post: 'OK', likesCount: '8'},
//                 {id: 6, post: 'Let s go', likesCount: '19'}
//             ],
//             newPostText: '',
//             dialogs: [
//                 {id: 1, name: 'Dimych'},
//                 {id: 2, name: 'Andrey'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Sasha'},
//                 {id: 5, name: 'Oleg'},
//                 {id: 6, name: 'Viktor'}
//             ],
//             profile: {
//                 aboutMe: "'string'",
//                 contacts: {
//                     facebook: 'string',
//                     website: 'string',
//                     vk: 'string',
//                     twitter: 'string',
//                     instagram: 'string',
//                     youtube: 'string',
//                     github: 'string',
//                     mainLink: 'string'
//                 },
//                 lookingForAJob: true,
//                 lookingForAJobDescription: 'string',
//                 fullName: 'string',
//                 userId: 12,
//                 photos: {
//                     small: 'string',
//                     large: 'string'
//                 },
//                 status: 'string',
//                 updateUserStatus: (status: string) => void
//             }
//         },
//         dialogsPage: {
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'How are you?'},
//                 {id: 3, message: 'I am Fine'},
//                 {id: 4, message: 'Good'},
//                 {id: 5, message: 'OK'},
//                 {id: 6, message: 'Let s go'}
//             ],
//             newMessageText: ""
//         },
//
//     },
//     getState() {
//         return this._appState
//     },
//     _callSubscriber(props: AppStatePropsType) {
//         console.log("State changed")
//     },
//     addPost(postMessage: string) {
//         let newPost: PostPropsType = {
//             id: new Date().getTime(),
//             post: postMessage,
//             likesCount: "0"
//         }
//
//         this._appState.profilePage.posts.push(newPost)
//         this._callSubscriber(this._appState)
//         this._appState.profilePage.newPostText = ""
//
//     },
//     changeNewText(newText: string) {
//         this._appState.profilePage.newPostText = newText
//         this._callSubscriber(this._appState)
//     },
//     subscribe(callback) {
//         this._callSubscriber = callback
//     },
//     dispatch(action: ActionsTypes) {
//         profileReducer(this._appState.profilePage, action)
//         dialogReducer(this._appState.dialogsPage, action)
//         /* sideBarReducer(this._appState.sidebar, action)*/
//
//         this._callSubscriber(this._appState)
//     }
// }


let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Oleg'},
    {id: 6, name: 'Viktor'}
]

let posts = [
    {id: 1, post: 'Hi', likesCount: '12'},
    {id: 2, post: 'How are you?', likesCount: '12'},
    {id: 3, post: 'I am Fine', likesCount: '17'},
    {id: 4, post: 'Good', likesCount: '4'},
    {id: 5, post: 'OK', likesCount: '8'},
    {id: 6, post: 'Let s go', likesCount: '19'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'I am Fine'},
    {id: 4, message: 'Good'},
    {id: 5, message: 'OK'},
    {id: 6, message: 'Let s go'}
]


//export default store





