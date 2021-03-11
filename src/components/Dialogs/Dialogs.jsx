import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Slava' },
        { id: 2, name: 'Dimych' },
        { id: 3, name: 'Andrey' },
        { id: 4, name: 'Valera' },
        { id: 5, name: 'Sveta' },
        { id: 6, name: 'Pasha' },
    ]

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'I am fine. How are yo?' },
        { id: 4, message: 'I am good' }
    ]

    let dialogsElements = dialogs.map( d => <DialogItem id={d.id} name={d.name} /> );
    let messagesElements = messages.map( m => <Message message={m.message} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs;