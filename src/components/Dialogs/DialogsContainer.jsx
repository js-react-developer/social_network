import React from 'react';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { sendMessage, updateNewMessageText } from './../../redux/dialogsReducer';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';

let mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
})

let AuthRedirectComponent = withAuthRedirect(Dialogs);

export default connect(mapStateToProps, { sendMessage, updateNewMessageText })(AuthRedirectComponent);