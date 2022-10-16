import React from "react";
import './Header.scss'
import logo from '../../images/logo.png'

const Header = () => {
    return(
        <header className='header'>
            <div className="header_wrapper">
                <a href="/posts"><img src={logo} alt="logo"/></a>
                <h1>Twitter</h1>
                <div className='search'>
                    <input placeholder="search"/>
                    <button></button>
                </div>

            </div>
        </header>
    )
}
export default Header;

