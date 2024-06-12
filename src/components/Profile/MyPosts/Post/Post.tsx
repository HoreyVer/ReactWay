import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string;
    likesCount: string;
}

const Post = (props: PostPropsType) => {
    return <div className={s.content}>
        <div>
            <div className={s.item}>
                <img
                    src={'https://avatars.mds.yandex.net/i?id=d24fe034ce711655ac708cf6de2145e5fd3a2d68-3986751-images-thumbs&n=13'} alt='123'></img>
                {props.message}
                <div>
                    <span>Like!</span> {props.likesCount}
                </div>
            </div>
        </div>
    </div>
}

export default Post