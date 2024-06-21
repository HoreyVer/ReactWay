import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {ActionsTypes} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {RootState} from "../../../redux/reduxStore";
import {connect} from "react-redux";


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