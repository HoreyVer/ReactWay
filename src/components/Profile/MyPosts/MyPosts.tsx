import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostPropsType} from "../../../App";
import store, {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {ActionsTypes} from "../../../redux/store";

type MyPostsPropsType = {
    addPost: (newPostText: string) => void
    updateNewPostText: (text: string) => void
    posts: Array<PostPropsType>
    newPostText: string
}

const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map((p) => <Post message={p.post} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPostCallback = () => {
        props.addPost(props.newPostText)
/*
        props.dispatch({type: 'ADD-POST', postMessage: props.newPostText})
*/
        /* props.changeNewTextCallBack("")*/
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
props.updateNewPostText(text)
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPostCallback}>Add post</button>
                </div>
                <div>
                    <button>Remove</button>
                </div>
            </div>
            <div> New posts</div>
            <div className={s.posts}></div>
            {postsElements}
        </div>
    </div>
}

export default MyPosts