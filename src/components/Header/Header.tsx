import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props: any) => {
    return <header className={s.header}>
        <img
            src={'http://img2.reactor.cc/pics/post/%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D0%BB-%D1%81%D0%B0%D0%BC-%D0%BF%D0%B5%D1%81%D0%BE%D1%87%D0%BD%D0%B8%D1%86%D0%B0-%D1%83%D0%B4%D0%B0%D0%BB%D1%91%D0%BD%D0%BD%D0%BE%D0%B5-1090227.jpeg'}
            alt={'asdas'}></img>

        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header