import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='http://archilab.online/images/1/123.jpg' />
            post 1
        </div>
    );
}

export default Post;