import React, { useState } from "react";
import Navbar from "./Nav";
import SearchItem from "./SearchItem";
import { useLocation } from "react-router-dom";
import "./list.css";
import Footer from "./Foot";
import useFetch from "../hooks/useFetch";


export default function List() {

    // const location = useLocation();
    // const [destination, setDestination] = useState(location.state.destination);
    // const [options, setOptions] = useState(location.state.options);
    
    const { data, loading, error, reFetch } = useFetch(
        `/listing?NZ=Auckland`
    );

    // const handleClick = () => {
    //     reFetch();
    // };


    return (
        <div>
            <Navbar />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">

                        <div className="lsTitle">Search</div>
                        <div className="lsItem">
                            <label>Location</label>
                            <input placeholder="District" type="text" />
                            <input placeholder="Suburb" type="text" />
                        </div>

                        <div className="lsItem">
                            <div className="lsOption">
                                <span className="lsOptionText">Bedroom</span>
                                <input
                                    type="number"
                                    min={1}
                                    max={4}
                                    className="lsOptionInput"
                                // placeholder={options.Room}
                                />
                            </div>

                            <div className="lsOption">
                                <span className="lsOptionText">Bathroom</span>
                                <input
                                    type="number"
                                    min={1}
                                    max={4}
                                    className="lsOptionInput"
                                // placeholder={options.Bathroom}
                                />
                            </div>
                        </div>
                        <button>Search</button>
                    </div>

                    <div className="listResult">

                        {/* <SearchItem /> */}


                        {loading ? "loading" : <>
                            {data.map(item => (
                                <SearchItem item={item} key={item._id} />
                            ))}
                        </>}

                    </div>

                </div>
            </div>
            <Footer />
        </div>

    );
};