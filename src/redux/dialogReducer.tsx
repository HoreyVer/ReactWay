import {PostPropsType} from "../App";
import {ActionsTypes} from "./store";

const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'


export let sendMessageActionCreator = () => {
    return {
        type: "SEND-MESSAGE"
    } as const
}

export let updateNewMessageBodyActionCreator = (newMessageBody: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        newMessageBody: newMessageBody
    } as const
}

/*
const initState = {
    messages: [] as any,
    newMessageText: ''
}
*/


const initState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I am Fine'},
        {id: 4, message: 'Good'},
        {id: 5, message: 'OK'},
        {id: 6, message: 'Let s go'}
    ],
    newMessageText: ""
}

const dialogReducer = (state = initState, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageText: action.newMessageBody
            }
        }
        case SEND_MESSAGE: {
            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages, {id: 7, message: state.newMessageText}]
            }
        }
        default:
            return state
    }

}

export default dialogReducer