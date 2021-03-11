import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = [
        {id: 1, message: "It's my first message", likesCount: 10},
        {id: 2, message: "It's my second message", likesCount: 20},
        {id: 3, message: "It's my third message", likesCount: 30},
        {id: 4, message: "It's my fourth message", likesCount: 40}
    ]

    let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> );
    
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;