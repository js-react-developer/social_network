import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

let Users = (props) => {

    let pagesCount = Math.ceil((props.totalUsersCount - 11500) / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <button className={props.currentPage === p && s.selectedPage}
                    onClick={() => { props.onPageChanged(p) }}>{p}</button>
            })}
        </div>
        {
            props.users.map(u => <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photoUser} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {

                                usersAPI.deleteUser(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(u.id);
                                        }
                                    });

                            }}>Unfollow</button>

                            : <button onClick={() => {

                                usersAPI.postUser(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                    });

                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {'u.location.country'}
                        </div>
                        <div>
                            {'u.location.city'}
                        </div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;