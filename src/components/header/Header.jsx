import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../../assets/logo.svg';
import './Header.css';


export default function Header() {
    return (
        <header>
            <div className="logo">
                <img src={Logo} alt='Logo Kasa' />
            </div>
            <nav>
                <NavLink to="/" className={({ isActive }) =>
                  isActive ? "activeLink" : undefined
                }>Accueil</NavLink>
                <NavLink to="/About" className={({ isActive }) =>
                  isActive ? "activeLink" : undefined}>A Propos</NavLink>
            </nav>
        </header>
    )
};