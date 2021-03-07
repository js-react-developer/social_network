import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.mainBackground}>
                <img src='https://therightsofnature.org/wp-content/uploads/2018/01/turkey-3048299_1920-1366x550.jpg' />
            </div>
            <div className={s.avatar}>
                <img src='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg' />
            </div>
            <div>
                My posts
            </div>
            <div>
                New post
            </div>
            <div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    );
}

export default Profile;