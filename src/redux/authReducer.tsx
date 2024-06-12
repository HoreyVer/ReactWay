import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'


export type UsersActionsTypes =
    ReturnType<typeof setAuthUserData>

export let setAuthUserData = (data: {email: string, id: number, login: string}) => {
    return {
        type: SET_USER_DATA,
        data: data
    } as const
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {

                if (response.data.resultCode === 0) {
                    let email = response.data.data.email
                    let id = response.data.data.id
                    let login = response.data.data.login

                    dispatch(setAuthUserData({email, id, login}))
                }
            }
        )

}


type InitStateType = {
    email: string ,
    id: number ,
    login: string ,
    isAuth: boolean
}

const initState: InitStateType = {
    email: "",
    id: 0,
    login: "",
    isAuth: false
}

const authReducer = (state: InitStateType = initState, action: UsersActionsTypes): InitStateType => {
    switch (action.type) {
        case SET_USER_DATA: {

            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }

        default:
            return state
    }

}

export default authReducer