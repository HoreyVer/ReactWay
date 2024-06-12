import React from 'react';
import s from './Users.module.css';
import {UserType} from "../../redux/usersReducer";
import userImg from 'D:\\REACT-way\\src\\assets\\images\\userImg.png'
import {NavLink} from "react-router-dom";


type UsersType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    users: Array<UserType>,
    followSuccess: (userId: number) => void,
    unfollowSuccess: (userId: number) => void,
    onPageChanged: (pageNumber: number) => void,
    isFetching: boolean,
    followingProgress: Array<number>,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
}

let Users = (props: UsersType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : undefined} onClick={(e) => {
                    props.onPageChanged(p)
                }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
    <span>
        <div>
            <NavLink to={'/profile/' + u.id}>
            <img src={u.photos.small !== null ? u.photos.small : userImg} className={s.userPhoto}/>
       </NavLink>
        </div>
        <div>
            {u.followed
                ? <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                    props.unfollow(u.id)
                }}>Unfolow</button>
                : <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                    props.follow(u.id)
                }}>Folow</button>}
            </div>
    </span>
                <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
        </span>
                <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
        </span>
            </div>)
        }
    </div>
}

export default Users