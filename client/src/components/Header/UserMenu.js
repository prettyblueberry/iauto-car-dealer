import {Link} from "react-router-dom";

const LoginButton = <Link to='/authentication/sign-in/basic'>Login</Link>
const submenus4Normal = [
    <Link to="/pages/user/profile">Profile</Link>,
    <Link to="/sign-out">Logout</Link>
];

const submenus4Admin = [
    <Link to="/pages/user/profile">Profile</Link>,
    <Link to="/pages/admin-page/user">Admin Panel</Link>,
    <Link to="/sign-out">Logout</Link>
];

const UserName = ({ auth }) =>
    <a>{JSON.parse(auth).user.name}</a>;

const useAuth = () => {
    const auth = localStorage.getItem("auth");
    let submenus = submenus4Normal;
    let Title = null;
    let isLogin = false;
    if(auth === null){
        Title = LoginButton;
    } else {
        Title = <UserName auth={auth} />;
        isLogin = true;
        const parsedAuth = JSON.parse(auth);
        if(parsedAuth.user)
            if(parsedAuth.user.role === "admin") submenus = submenus4Admin;

    }

    return [isLogin, Title, submenus];
}

export function UserMenuMobile(){
    const [isLogin, Title, submenus] = useAuth();
    return <li className="
              menu-item
              menu-item-type-post_type
              menu-item-object-page menu-item-has-children menu-item-918
            ">
            {Title}{ isLogin ? <span className="arrow"><i className="fas fa-angle-right"/></span> : ''}
            {isLogin ? <ul className="sub-menu">
                {submenus.map((m, i) => <li key={i} className="
                  menu-item
                  menu-item-type-post_type
                  menu-item-object-page menu-item-920">
                    {m}
                </li>)}
            </ul> : ''}
    </li>;
}

export function UserMenuNormal(){
    const [isLogin, Title, submenus] = useAuth();
    return <div className="main-menu">
        <ul className="header-menu clearfix">
            <li className="menu-item
                  menu-item-type-custom
                  menu-item-object-custom
                  menu-item-has-children
                  menu-item-900">
                {Title}
                {isLogin ? <ul className="sub-menu" style={{marginLeft:-100}}>
                    {submenus.map((m, i) => <li key={i} className="menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-922" >
                        {m}
                    </li>)}
                </ul> : ''}
            </li>
        </ul>
    </div>;
}

