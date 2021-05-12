import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        newStatusText: 'Hello my friends!'
    }

    activateEditMode () {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode () {
        this.setState({
            editMode: false
        })
    }

    onChangeStatusText = (e) => {
        let text = e.target.value;
        this.setState({
            newStatusText: text
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode.bind(this) }>{this.state.newStatusText}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus onBlur={ this.deactivateEditMode.bind(this) } onChange={ this.onChangeStatusText } value={this.state.newStatusText} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;