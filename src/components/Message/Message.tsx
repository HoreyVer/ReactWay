import React from 'react';
import s from './../Dialogs/Dialogs.module.css';
import {MessagePropsType} from "../../App";


const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


export default Message