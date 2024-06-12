import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "../DialogItem/DialogItem";
import Message from "../Message/Message";
import {DialogsPropsType, MessagePropsType, PostPropsType} from "../../App";
import {Redirect} from "react-router-dom";

type DialogsPagePropsType = {
    messages: Array<MessagePropsType>,
    newMessageText: string
}
type ProfilePageType = {
    posts: Array<PostPropsType>,
    newPostText: string,
    dialogs: Array<DialogsPropsType>
}

type DialogsType = {
    updateNewMessageBodyActionCreator: (body: string) => void,
    sendMessage: () => void,
    profilePage: ProfilePageType,
    dialogsPage: DialogsPagePropsType,
    isAuth: boolean
}


const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.profilePage.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map((m) => <Message id={m.id} message={m.message}/>)
    let newMessageBody = props.dialogsPage.messages
    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBodyActionCreator(body)
    }

if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={props.dialogsPage.newMessageText} onChange={onNewMessageChange}
                                   placeholder={"Enter your message"}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>SEND</button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Dialogs