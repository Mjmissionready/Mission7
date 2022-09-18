import React from "react";
import "./navbar.css";
import Metro from "../images/Metro.png"
import { GrLanguage } from 'react-icons/gr';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navContainer">
                <img src={Metro} className="logo" alt="">
                </img>
                <div className="navItems">
                    <li className="navItem">Switch</li>
                    <li className="navItem">Owners</li>
                    <li className="navItem">Tenants</li>
                    <li className="navItem">Login</li>
                    <li className="navLan">
                        <GrLanguage /> English</li>
                    {/* <button className="navBtn">Register</button>
                    <button className="navBtn">Login</button> */}
                </div>
            </div>
        </div>
    );
}