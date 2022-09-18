import React from "react";
import { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBuildingUser,
    faBuilding,
    faTruckMoving,
    faLocationDot,
    faBed,
    faShower,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Header({ type }) {

    const [destination, setDestination] = useState("");

    const [openRooms, setOpenRooms] = useState(false);
    const [openBathrooms, setOpenBathrooms] = useState(false);
    const [options, setOptions] = useState({
        Room: 1,
        Bathroom: 1,
    });

    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };


    const handleSearch = () => {
        navigate("/list", { state: { destination, options } });
    };

    return (
        <div className="header">
            <div className={
                type === "list" ? "headerContainer listMode" : "headerContainer"}>

                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBuildingUser} />
                        <span>Sales</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBuilding} />
                        <span>Rents</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Auction</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Sell</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTruckMoving} />
                        <span>Find Moving Service</span>
                    </div>
                </div>

                {type !== "list" && (
                    <>
                        <h1 className="headerTitle">
                            Property Management Auckland
                        </h1>
                        <p className="headerDesc">
                            Keep reading to have a look at what services we offer as an Auckland property management company below.
                        </p>
                        <button className="headerBtn">
                            Sign in / Register
                        </button>


                        {/* Find Location */}
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faLocationDot} className="headerIcon" />
                                <input
                                    type="text"
                                    placeholder="Find your location"
                                    className="headerSearchInput"
                                    onChange={(e) => setDestination(e.target.value)} />
                            </div>

                            {/* Find Room */}
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                <span onClick={() => setOpenRooms(!openRooms)}
                                    className="headerSearchText"> {`${options.Room} Room`} </span>
                                {openRooms &&
                                    <div className="options">
                                        <div className="optionItem">
                                            <span className="optionText"> Room </span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options.Room <= 1}
                                                    className="optionCounterBtn"
                                                    onClick={() => handleOption("Room", "d")}
                                                >
                                                    -
                                                </button>
                                                <span className="optionCounterNo">{options.Room}</span>
                                                <button
                                                    disabled={options.Room >= 10}
                                                    className="optionCounterBtn"
                                                    onClick={() => handleOption("Room", "i")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>

                            {/* Find Bathroom */}
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faShower} className="headerIcon" />
                                <span onClick={() => setOpenBathrooms(!openBathrooms)}
                                    className="headerSearchText"> {`${options.Bathroom} Bathroom`} </span>
                                {openBathrooms &&
                                    <div className="options">
                                        <div className="optionItem">
                                            <span className="optionText"> Bathroom </span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options.Bathroom <= 1}
                                                    className="optionCounterBtn"
                                                    onClick={() => handleOption("Bathroom", "d")}
                                                >
                                                    -
                                                </button>
                                                <span className="optionCounterNo">{options.Bathroom}</span>
                                                <button
                                                    disabled={options.Bathroom >= 5}
                                                    className="optionCounterBtn"
                                                    onClick={() => handleOption("Bathroom", "i")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerBtn" onClick={handleSearch}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div >
        </div >
    );
}