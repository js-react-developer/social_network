import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.mainBackground}>
                <img src='' />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div>
                Name: {props.profile.fullName}
            </div>
            <div>
                Description: {props.profile.aboutMe ? props.profile.aboutMe : 'I do not have description'}
            </div>
        </div>
    )
}

export default ProfileInfo;