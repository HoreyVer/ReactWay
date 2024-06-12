import React from "react";
import {AppStatePropsType} from "./App";
import {ActionsTypes} from "./redux/store";

type StoreType = {
    _appState: AppStatePropsType,
    getState: () => AppStatePropsType,
    _callSubscriber: (props: AppStatePropsType) => void,
    addPost: (postMessage: string) => void,
    changeNewText: (newText: string) => void
    subscribe: (callback: (appState: AppStatePropsType) => void) => void
    dispatch: (action: ActionsTypes) => void
}

export type ProviderType = {
    store: StoreType
    children: React.ReactNode
}

const StoreContex = React.createContext({} as StoreType)

export const Provider = (props: ProviderType) => {
    return <StoreContex.Provider value={props.store}>
        {props.children}
    </StoreContex.Provider>
}

export default StoreContex