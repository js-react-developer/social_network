import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    };

    let onNewMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <Dialogs sendMessage={onSendMessageClick} updateNewMessageText={onNewMessageChange}
                 dialogsPage={state.dialogsPage}/>
    );
    
}

export default DialogsContainer;