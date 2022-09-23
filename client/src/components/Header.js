import React from "react";
// import { useState } from "react";
import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="hContainer">
                <div className="hContent">
                    <div className="hText">Searching for rental property?</div>
                    <div className="hText">Own a property you'd like to rent?</div>
                </div>
            </div>
        </div>
    );
}