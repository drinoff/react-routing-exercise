import styled from "styled-components";
import {NavLink} from 'react-router-dom'

const HeaderStyle = styled.header`
nav {
    background-color: #333;
    overflow: hidden;
}


/* Style the links inside the navigation bar */

nav a, nav span {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

/* Change the color of links on hover */

nav a:hover {
    background-color: #ddd;
    color: black;
}

/* Add a color to the active/current link */
nav a, #common {
    float: left;
}
nav a.active {
    background-color: #0069d9;
    color: white;
}

.profile {
    float: right;
}

/* nav div.user {
    display: none;
} */
`

const Header = () =>{
    return (
        <HeaderStyle>
        <nav>
             
            <div className="user">
                <NavLink to="/create">Create Meme</NavLink>
                <div className="profile">
                    <NavLink to="/myProfile">My Profile</NavLink>
                    <NavLink to="/logout">Logout</NavLink>
                </div>
            </div>
           
            <div className="guest">
                <div className="profile">
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="register">Register</NavLink>
                </div>
                <NavLink to="/">Home Page</NavLink>
            </div>
        </nav>
        </HeaderStyle>

    );
}
export default Header;