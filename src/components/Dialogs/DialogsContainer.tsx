import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {RootState} from "../../redux/reduxStore";
import {ActionsTypes} from "../../redux/store";
import {connect} from "react-redux";


let mapStateToProps = (state: RootState) => {
    return {
        dialogsPage: state.dialogsPage,
        profilePage: state.profilePage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        updateNewMessageBodyActionCreator: (body: string) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer