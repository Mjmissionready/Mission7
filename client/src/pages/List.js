import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SearchItem from "../components/SearchItem";
import { useLocation } from "react-router-dom";
import "./list.css"

export default function List() {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [options, setOptions] = useState(location.state.options);

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label>Location</label>
                            <input placeholder={destination} type="text" />
                        </div>

                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Min price
                                    </span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Max price
                                    </span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Room</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="lsOptionInput"
                                        placeholder={options.Room}
                                    />
                                </div>
                                
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Bathroom</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="lsOptionInput"
                                        placeholder={options.Bathroom}
                                    />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>

                    <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>

                </div>
            </div>
        </div>
    );
};