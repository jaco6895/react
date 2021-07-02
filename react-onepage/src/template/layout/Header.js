import React from 'react';
import { GiStarFormation } from 'react-icons/gi';
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
                <img src="../../assets/images/starbucks.svg" />
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