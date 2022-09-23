import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
    return (
        <div className="header">
                <div className="hContainer">
                    <div className="hContent">
                   
                    <Link to="/apt"><div className="hText">Searching for rental property?</div></Link>
                        <div className="hText">Own a property you'd like to rent?</div>
                    </div>
                </div>
            </div>
    );
}