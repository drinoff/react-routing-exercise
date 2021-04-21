import styled from "styled-components";

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
            <a href="#">All Memes</a>
             
            <div class="user">
                <a href="#">Create Meme</a>
                <div class="profile">
                    <a href="#">My Profile</a>
                    <a href="#">Logout</a>
                </div>
            </div>
           
            <div class="guest">
                <div class="profile">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </div>
                <a class="active" href="#">Home Page</a>
            </div>
        </nav>
        </HeaderStyle>

    );
}
export default Header;