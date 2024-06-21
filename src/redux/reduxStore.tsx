import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer, {sendMessageActionCreator} from "./dialogReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

let store =  legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))


export type AppStateType = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>
export default store