import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {AppStatePropsType, AppStatePropsTypeForRender, PostPropsType} from "../../../App";
import store, {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {ActionsTypes} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {RootState} from "../../../redux/reduxStore";
import {connect} from "react-redux";


type MyPostsPropsType = {
    store: AppStatePropsType,
    /*store: any,*/
    dispatch: (action: ActionsTypes) => void
}

/*const MyPostsContainer = (props: MyPostsPropsType) => {

    /!*    let postsElements = props.store.profilePage.posts.map((p) => <Post message={p.post} likesCount={p.likesCount}/>)

        let newPostElement = React.createRef<HTMLTextAreaElement>()*!/

    let addPostCallback = () => {
        props.dispatch(addPostActionCreator(props.store.profilePage.newPostText))
        /!*
                props.dispatch({type: 'ADD-POST', postMessage: props.newPostText})
        *!/
        /!* props.changeNewTextCallBack("")*!/
    }

    const onPostChange = (text: string) => {
        props.dispatch(updateNewPostTextActionCreator(text))
        /!* props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})*!/
        /!*
         let action = updateNewPostTextActionCreator(text)
         console.log(action)*!/
        // props.dispatch(action)
    }

    return (

        <MyPosts updateNewPostText={onPostChange} addPost={addPostCallback} posts={props.store.profilePage.posts}
                 newPostText={props.store.profilePage.newPostText}/>
            )
}*/

const mapStateToProps = (state: RootState) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer