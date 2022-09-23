import React, { useState } from "react";
import "./navbar.css";
import Metro from "../images/Metro.png"
import { GrLanguage } from 'react-icons/gr';
import { TbTriangleInverted } from 'react-icons/tb';
import { Link } from "react-router-dom";

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    // const [dropdown, setDropdown] = useState(false);
    // const showDropdown = () => {
    //     setDropdown(true);
    // }
    // const hideDropdown = () => {
    //     setDropdown(false);
    // }

    // const [destination, setDestination] = useState("");

    // const navigate = useNavigate();

    // const handleSearch = () => {
    //     navigate("/property/listing", { state: { destination } });
    // };



    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/">
                    <img src={Metro} className="logo" alt="" />
                </Link>

                <ul className="navItems">
                    <Link to="/property" className="navItem">Switch</Link>
                    <Link to="/" className="navItem">Owners</Link>
                    <Link to="/" className="navItem">Tenants</Link>
                    <Link to="/" className="navItem">Login</Link>

                    <div className=
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
                    </div>

                    {/* <button className="navBtn">Register</button>
                    <button className="navBtn">Login</button> */}
                </ul>
            </div>
        </div >
    );
}