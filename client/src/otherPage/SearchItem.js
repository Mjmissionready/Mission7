import React from "react";
import "./searchItem.css";
import { Link } from "react-router-dom";
import {
    BiBed,
} from "react-icons/bi";
import {
    MdLocationPin,
    MdOutlineBathtub,
} from "react-icons/md";
import {
    GrCar
} from "react-icons/gr";
import useFetch from "../hooks/useFetch";


export default function SearchItem({ item }) {
    const { data, loading, error, reFetch } = useFetch(
        `/listing?District=${data.District}&Suburbs=${data.suburb}&Bedroom=${data.bedroom}&Bathroom=${data.bathroom}`
    );
    

    return (
        <div className="searchItem">
            {loading ? (
                "Loading"
            ) : (
                <>
                    {data.map((item) => (
                        <>
                            <img
                                src={item.photos[0]}
                                alt=""
                                className="siImg"
                            />


                            <div className="siDesc" key={item._id}>
                                <div className="siLocation">
                                    <div className="siPoint">
                                        <MdLocationPin size={"25px"} />
                                        {item.NZ}
                                    </div>
                                    <div className="siAddress">
                                        {item.Address}, {item.Suburb}
                                    </div>
                                </div>

                                <div className="siDetail">
                                    <div className="siEquip">
                                        <BiBed size={"45px"} />
                                        <li>
                                            {item.Bedroom} bedroom
                                        </li>
                                    </div>
                                    <div className="siEquip">
                                        <MdOutlineBathtub size={"45px"} />
                                        <li>
                                            {item.Bathroom}bathroom
                                        </li>
                                    </div>
                                    <div className="siEquip">
                                        <GrCar size={"40px"} />
                                        <li>
                                            {item.Carpark} park
                                        </li>
                                    </div>
                                </div>

                                <div className="siBottom">
                                    <div className="siPay">
                                        <div className="siPrice">
                                            {item.Price}
                                        </div>
                                        <div className="siTerm">
                                            {item.Term}
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </>
                    ))}
                </>
            )}
        </div>
    );
};