import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo-final.png";
import DarkMode from './DarkMode';

function Header({ menuOpen, setMenuOpen }) {

    return (
        <div className={"header " + (menuOpen && "active")}>
            <div className="header-wrapper">
                <div className="header-left">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                    <DarkMode />
                </div>
                <div className="header-right">
                    <div className="toggle-nav" onClick={() => setMenuOpen(!menuOpen)}>
                        <div className="hamburger"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header