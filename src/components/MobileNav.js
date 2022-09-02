import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Person, Code } from "@material-ui/icons";

function MobileNav({ activeLink, setActiveLink }) {

    return (
        <nav className='nav-mobile'>
            <ul>
                <li className={"list " + (activeLink === 1 ? "active" : "")}>
                    <NavLink to="/" className={"nav-link"} onClick={() => setActiveLink(1)}>
                        <span className='nav-icon'><Home /></span>
                        <span className='nav-text'>Home</span>
                    </NavLink>
                </li>
                <li className={"list " + (activeLink === 2 ? "active" : "")}>
                    <NavLink to="/about" className={"nav-link"} onClick={() => setActiveLink(2)}>
                        <span className='nav-icon'><Person /></span>
                        <span className='nav-text'>About</span>
                    </NavLink>
                </li>
                <li className={"list " + (activeLink === 3 ? "active" : "")}>
                    <NavLink to="/works" className={"nav-link"} onClick={() => setActiveLink(3)}>
                        <span className='nav-icon'><Code /></span>
                        <span className='nav-text'>Projects</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MobileNav