import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const LoginButton = <Link to='/authentication/sign-in/basic'>Login</Link>
const submenus = [
    <Link to="/">Admin Panel</Link>,
    <Link to="/users">Users</Link>,
    <Link to="/">Logout</Link>,
];

const useAuth = () => {
    const auth = localStorage.getItem("auth");
    let Title = null;
    let isLogin = false;
    if(auth === null){
        Title = LoginButton;
    } else {
        Title = <a>{JSON.parse(auth).user.name}</a>
        isLogin = true;
    }
    return [isLogin, Title];
}

export function UserMenuMobile(){
    const [isLogin, Title] = useAuth();
    return <li className="
              menu-item
              menu-item-type-post_type
              menu-item-object-page menu-item-has-children menu-item-918
            ">
            {Title}{ isLogin ? <span className="arrow"><i className="fas fa-angle-right"/></span> : ''}
            {isLogin ? <ul className="sub-menu">
                {submenus.map(m => <li className="
                  menu-item
                  menu-item-type-post_type
                  menu-item-object-page menu-item-920">
                    {m}
                </li>)}
            </ul> : ''}
    </li>;
}

export function UserMenuNormal(){
    const [isLogin, Title] = useAuth();
    return <div className="main-menu">
        <ul className="header-menu clearfix">
            <li className="menu-item
                  menu-item-type-custom
                  menu-item-object-custom
                  menu-item-has-children
                  menu-item-900">
                {Title}
                {isLogin ? <ul className="sub-menu" style={{marginLeft:-100}}>
                    {submenus.map(m => <li className="menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-922" >
                        {m}
                    </li>)}
                </ul> : ''}
            </li>
        </ul>
    </div>;
}

