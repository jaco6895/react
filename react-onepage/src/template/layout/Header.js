import React from 'react';
import { IoLogIn } from 'react-icons/io5';
const Header = () => {
    return (
        <div className="header">
            <Navbar/>
        </div>
    );

}

const Navbar = () =>{
    return (
        <div className="navbar">
            <h1 className="logo">
                <img src={"/images/starbucks.svg"} alt="STARBUGS"/>
            </h1>
            <ul>
                <li className="now">COFFEE</li>
                <li>MENU</li>
                <li>STORE</li>
                <li className="login f-right"><IoLogIn/></li>
            </ul>
        </div>
    );
}

export default Header;