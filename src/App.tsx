import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Nav";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import {ActionsTypes} from "./redux/store";
import {RootState} from "./redux/reduxStore";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {userProfilePropsType} from "./components/Profile/MyPosts/ProfileInfo/ProfileInfo";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


export type DialogsPropsType = {
    id: number,
    name: string
}


export type PostPropsType = {
    id: number,
    post: string,
    likesCount: string
}

export type MessagePropsType = {
    id: number,
    message: string
}

export type AppPropsType = {
    store: AppStatePropsType
    posts: Array<PostPropsType>
    dialogs: Array<DialogsPropsType>
    messages: Array<MessagePropsType>
    dispatch: (action: ActionsTypes) => void
    newBodyText: string
}

export type ProfilePropsType = {
    store: AppStatePropsType
    posts: Array<PostPropsType>
    dialogs: Array<DialogsPropsType>
    messages: Array<MessagePropsType>
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

export type AppStatePropsType = {
    profilePage: {
        posts: Array<PostPropsType>,
        newPostText: string,
        dialogs: Array<DialogsPropsType>,
        profile: userProfilePropsType,
        },
    dialogsPage: {
        messages: Array<MessagePropsType>,
        newMessageText: string
    }
}

export type AppStatePropsTypeForRender = {
    appState: RootState
    dispatch: (action: ActionsTypes) => void
}


/*const App = (props: AppStatePropsTypeForRender) => {*/
const App = () => {

    return (

        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer
                           />}/>

                    <Route path={`/profile/:userId?`}
                           render={() => <ProfileContainer/>}/>
                    <Route path={'/users'}
                           render={() => <UsersContainer/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/login'} component={Login}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
