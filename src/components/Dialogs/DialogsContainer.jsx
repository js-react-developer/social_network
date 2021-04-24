import React from 'react';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { sendMessage, updateNewMessageText } from './../../redux/dialogsReducer';

let mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
})

export default connect(mapStateToProps, { sendMessage, updateNewMessageText })(Dialogs);