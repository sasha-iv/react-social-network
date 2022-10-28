import React from "react";
import './Header.scss'
import logo from '../../images/logo.png'
import avatar from '../../images/photo2.jpg'

const Header = (props) => {
    let exitProfile = () => {
        props.exit();
    }

    return(
        <header className='header'>
            <div className="header_wrapper">
                <div className='logo'>
                    <a href="/posts"><img src={logo} alt="logo"/></a>
                    <h1>Twitter</h1>
                </div>

                <div className='headerBtns'>
                    <div className='search'>
                        <input placeholder="search"/>
                        <button></button>
                    </div>
                    {props.isAuth
                        ? <div className='authUser'>
                            <img src={avatar} alt='avatar'/>
                            <h3>Sarah Nelson</h3>
                            <button className='btnStyle' onClick={exitProfile}>Sign out</button>
                          </div>
                        : <span className='empty'></span>
                    }
                </div>
            </div>
        </header>
    )
}
export default Header;

