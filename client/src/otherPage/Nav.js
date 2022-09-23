import React from "react";
import "./nav.css";
import Metro from "../images/Metro.png"
import { RiGlobalLine } from 'react-icons/ri';
import { Link } from "react-router-dom";
import { TbTriangleInverted } from 'react-icons/tb';

export default function Nav() {

    return (
        <div className="nbar">
            <div className="nContainer">
                <Link to="/"><img src={Metro} className="nlogo" alt="" />
                </Link>

                <div className="nItems">
                    <Link to="" className="nItem">Switch</Link>
                    <Link to="" className="nItem">Owners</Link>
                    <Link to="" className="nItem">Tenants</Link>
                    <Link to="" className="nItem">Login</Link>
                    <li className="nLan">
                        <RiGlobalLine size={"17px"}/> English
                        <TbTriangleInverted size={"14px"}/>
                    </li>
                    {/* <button className="navBtn">Register</button>
                    <button className="navBtn">Login</button> */}
                </div>
            </div>
        </div>
    );
}