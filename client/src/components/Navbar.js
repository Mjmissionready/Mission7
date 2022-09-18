import React, { useState } from "react";
import "./navbar.css";
import Metro from "../images/Metro.png"
import { GrLanguage } from 'react-icons/gr';
import { TbTriangleInverted } from 'react-icons/tb';

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    // const [dropdown, setDropdown] = useState(false);
    // const showDropdown = () => {
    //     setDropdown(true);
    // }
    // const hideDropdown = () => {
    //     setDropdown(false);
    // }

    //     const [openBathrooms, setOpenBathrooms] = useState(false);
    //     const [options, setOptions] = useState([
    //     { id: 1, lang: "Te reo Māori" },
    //     { id: 2, lang: "中文" },
    //     { id: 4, lang: "Farsi" },
    //     { id: 5, lang: "日本語" },
    //     { id: 5, lang: "한국어" },
    // ]);

    return (
        <div className="navbar">
            <div className="navContainer">
                <img src={Metro} className="logo" alt="">
                </img>
                <ul className="navItems">
                    <li className="navItem">Switch</li>
                    <li className="navItem">Owners</li>
                    <li className="navItem">Tenants</li>
                    <li className="navItem">Login</li>

                    <ul className=
                        {dropdown ? "navDropdown clicked" : "navDropdown"}
                        onClick={() => setDropdown(!dropdown)}>
                        <GrLanguage />
                        English
                        <TbTriangleInverted />

                        {dropdown ? (
                            <div className="navLan" onClick={() => setDropdown(false)}>
                                <li>Te reo Māori</li>
                                <li>中文</li>
                                <li>Maya Nyelv</li>
                                <li>Farsi</li>
                                <li>日本語</li>
                                <li>한국어</li>
                            </div>
                        ) : null}
                    </ul>

                    {/* <button className="navBtn">Register</button>
                    <button className="navBtn">Login</button> */}
                </ul>
            </div>
        </div >
    );
}