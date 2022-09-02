import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LinkedIn, GitHub } from "@material-ui/icons";
import DarkMode from './DarkMode';

function NavMain({ menuOpen, setMenuOpen }) {

    const menuClose = () => {
        setMenuOpen(false);
    }

    const [active, setActive] = useState(null);

    return (
        <nav className={"nav-main " + (menuOpen && "active")}>
            <ul className="main">
                <li className={(active === 1 ? "active" : "")} onClick={() => {menuClose(); setActive(1) }}>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className={(active === 2 ? "active" : "")} onClick={() => {menuClose(); setActive(2) }}>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className={(active === 3 ? "active" : "")} onClick={() => {menuClose(); setActive(3) }}>
                    <NavLink to="/works">Works</NavLink>
                </li>
            </ul>
            <ul className="social">
                <li onClick={() => menuClose()}>
                    <a href="https://www.linkedin.com/in/jchoi93/"><LinkedIn /></a>
                </li>
                <li onClick={() => menuClose()}>
                    <a href="https://github.com/jamesjschoi"><GitHub /></a>
                </li>
            </ul>
            <ul className="darkmode-toggle">
                <li>
                    <DarkMode />
                </li>
            </ul>
        </nav>
    );
}

export default NavMain;