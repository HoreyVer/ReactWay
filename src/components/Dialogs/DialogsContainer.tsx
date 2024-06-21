import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {RootState} from "../../redux/reduxStore";
import {ActionsTypes} from "../../redux/store";
import {connect} from "react-redux";
import {compose} from "redux";
import React from "react";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


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
/*const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer*/


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(Dialogs)
