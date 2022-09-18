import React from "react";
import "./features.css";
import CBD from "../images/cbd.jfif"
import south from "../images/south.jfif"
import east from "../images/east.jfif"

export default function Features() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src={CBD} alt=""
                    className="featuredImg" />
                <div className="featuredTitles">
                    <h1> Auckland CBD </h1>
                    <h2> 500 properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img src={south} alt=""
                    className="featuredImg" />
                <div className="featuredTitles">
                    <h1> South Auckland </h1>
                    <h2> 300 properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img src={east} alt=""
                    className="featuredImg" />
                <div className="featuredTitles">
                    <h1> East Auckland </h1>
                    <h2> 200 properties</h2>
                </div>
            </div>

        </div>
    );
}