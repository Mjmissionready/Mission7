import React from "react";
import "./pList.css";
import hotels from "../images/hotels.jfif"
import apt from "../images/apt.jfif"
import townhouse from "../images/townhouse.jfif"
import house from "../images/house.jfif"
import manufactured from "../images/manufactured.jfif"

export default function Property() {
    return (
        <div className="pList">
            <div className="pListItem">
                <img src={hotels} alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>11 hotels</h2>
                </div>
            </div>

            <div className="pListItem">
                <img src={apt} alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Apartments</h1>
                    <h2>200 apartments</h2>
                </div>
            </div>

            <div className="pListItem">
                <img src={house} alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Houses</h1>
                    <h2>11 Houses</h2>
                </div>
            </div>

            <div className="pListItem">
                <img src={townhouse} alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Townhouses</h1>
                    <h2>37 townhouses</h2>
                </div>
            </div>

            <div className="pListItem">
                <img src={manufactured} alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Manufacturing</h1>
                    <h2>11 manufacturing</h2>
                </div>
            </div>
        </div>
    );
}