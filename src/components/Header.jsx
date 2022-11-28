import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.svg';


export default function Header() {
    return (
        <header>
            <div className="Logo">
                <img src={Logo} alt='Logo Kasa' />
            </div>
            <nav>
                <Link to="/" className={({ isActive }) => {
                    return isActive ? "activeLink" : "";
                }}>Accueil</Link>
                <Link to="/About" className={({ isActive }) => {
                    return isActive ? "activeLink" : "";
                }}>A Propos</Link>
            </nav>
        </header>
    )
};