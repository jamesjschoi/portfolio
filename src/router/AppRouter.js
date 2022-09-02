import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import PageHome from '../pages/PageHome';
import PageWorks from '../pages/PageWorks';
import PageAbout from '../pages/PageAbout';
import PageSingle from '../pages/PageSingle';
import NavMain from '../components/NavMain.js';
import MobileNav from '../components/MobileNav.js';

function AppRouter() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(null);

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <NavMain menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <MobileNav activeLink={activeLink} setActiveLink={setActiveLink} />
                <Routes>
                    <Route path="/" element={<PageHome />} />
                    <Route path="about" element={<PageAbout />} />
                    <Route path="works" element={<PageWorks />} />
                    <Route path="works/:id/:slug" element={<PageSingle />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;