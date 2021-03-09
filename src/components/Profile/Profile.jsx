import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <div>
            <div className={s.mainBackground}>
                <img src='https://natworld.info/wp-content/uploads/2020/04/poberezhe-morya-1026x500.jpg' />
            </div>
            <div className={s.avatar}>
                <img src='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg' />
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;