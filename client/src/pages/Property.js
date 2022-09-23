import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./property.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import {
    BsArrowLeftCircle,
    BsArrowRightCircle,
    BsArrowUpLeft,
    BsStar
} from "react-icons/bs";

import { TbCircleX } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import {
    MdKingBed,
    MdOutlinePets,
    MdLocationOn
} from "react-icons/md";
import {
    FaBath,
    FaCar
} from "react-icons/fa";
import agent from "../images/Tantos.png";

import park from "../images/park.png";
import gym from "../images/gym.png";
import market from "../images/market.png";
import cafe from "../images/cafe.png";
import petrol from "../images/petrol.png";
import arrowBlack from "../images/arrowBlack.png";
import arrowGray from "../images/arrowGray.png";

import useFetch from "../hooks/useFetch";



export default function Property() {

    // const location = useState();
    // const path = location.split("/", [3])

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);


    const location = useLocation();
    const id = location.pathname.split("/")[3]; // get hotel id
    const { data, loading, error, reFetch } = useFetch(
        `property/listing/{data.id}`
    );

    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        // {
        //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        // },
    ];

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 4 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 4 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber)
    };


    return (
        <>
            <Navbar />
            {loading ? (
                "Loading"
            ) : (
                <>
                    {open && (
                        <div className="pSlide">
                            <TbCircleX
                                className="pSlideX"
                                onClick={() => setOpen(false)}
                            />

                            <BsArrowLeftCircle
                                className="pSlideArrow"
                                onClick={() => handleMove("l")}
                            />

                            <div className="pSlideWrapper">
                                <img src={photos[slideNumber].src} alt="" className="slideImg" />
                            </div>

                            <BsArrowRightCircle
                                className="pSlideArrow"
                                onClick={() => handleMove("r")}
                            />
                        </div>
                    )}


                    <div className="property">

                        <div className="pContainerR">


                            {/* Section_part1 */}
                            <section className="pTitle">
                                <Link to="/" className="backLink">
                                    <BsArrowUpLeft className="pRotate" />
                                    <p>Back to search </p>
                                </Link>
                                <div className="pAddress">
                                    {data.Address}, {data.Suburb}, {data.NZ}
                                    <BsStar color="#c1c1c1" style={{ marginLeft: "10px" }} />
                                </div>
                            </section>


                            {/* Section_part2 */}
                            <section className="pPhotos">
                                <div className="pImages">
                                    {photos.map((photo, i) => (
                                        <div className="pImgWrapper" key={i}>
                                            <img
                                                onClick={() => handleOpen(i)}
                                                src={photo.src}
                                                alt=""
                                                className="pImg"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </section>


                            {/* Section_part3 */}
                            <section className="pDesc">
                                <div className="pInfo">
                                    Description
                                    <br />
                                    <br />
                                    {data.Desc}
                                </div>

                                <div className="pAgent" >
                                    <img src={agent} alt="" />
                                    <div className="pAgentInfo">
                                        <p style={{ color: "black" }}>Zsuzsanna Tantos </p>
                                        <p>Listing agent </p>
                                    </div>
                                    <FiPhone size={"21px"} />
                                    <AiOutlineMail size={"25px"} />
                                </div>

                            </section>


                            {/* Section_part4 */}
                            <section className="pBox">
                                <div className="pLayout">
                                    <div className="pIcon">
                                        <MdKingBed size={"35px"} />
                                        <p> {data.Bedroom}bedroom</p>
                                        <FaBath size={"35px"} />
                                        <p> {data.Bathroom}bathroom</p>
                                        <FaCar size={"35px"} />
                                        <p> {data.Carpark}park</p>
                                        <MdOutlinePets size={"35px"} />
                                        <p> pet friendly</p>
                                    </div>
                                    <hr />

                                    <div className="pLayoutMap" />
                                </div>

                                <div className="pGraph">
                                    <div className="pGraphBar">
                                        <div className="pGraphBar1" />
                                        <div className="pGraphBar2" />
                                    </div>
                                    <div className="pArrows">
                                        <img src={arrowBlack} className="pArrow" alt="" />
                                        <div className="pBudget20"> 20% budget Saved!</div>

                                        <div className="pBudget80">80% budget Saved!</div>
                                        <img src={arrowGray} className="pArrow" alt="" />
                                    </div>

                                    <div className="pSaving">
                                        <p> Saving of $50 a week.</p>
                                        <p> Saving of $2600 over a year!</p>
                                    </div>
                                </div>

                            </section>


                            {/* Section_part5 */}
                            <section className="pPrice">
                                <div className="pPaying"> NZ{data.Price}</div>
                                <div className="pPayingTerm">/{data.Term}</div>
                                <button className="pRentbtn"> Rent Now </button>
                                <button className="pBookbtn"> Book Viewing </button>
                            </section>
                        </div>


                        <div className="pContainerL">

                            {/* Section_part6 */}
                            <section className="pMap">
                                <div className="pMapImg" />
                                <div className="pMapContent">
                                    <div className="pMapIcondrop">
                                        <img src={park} className="pMapPark" alt="" />
                                        <img src={cafe} className="pMapCafe" alt="" />
                                        <MdLocationOn className="pMapLocation" size={"37px"} />
                                        <img src={gym} className="pMapGym" alt="" />
                                        <img src={petrol} className="pMapPetrol" alt="" />
                                        <img src={market} className="pMapMarket" alt="" />
                                    </div>

                                    <div className="pMapNear">
                                        <h3>Near by...</h3>

                                        <div className="pMapInfo">
                                            <div className="pMapPlace">
                                                <img src={park} className="pMapIcon" alt="" />
                                                <p>Parks</p>
                                            </div>
                                            <p>100m</p>
                                        </div>
                                        <div className="pMapInfo">
                                            <div className="pMapPlace">
                                                <img src={gym} className="pMapIcon" alt="" />
                                                <p>Gyms</p>
                                            </div>
                                            <p>450m</p>
                                        </div>
                                        <div className="pMapInfo">
                                            <div className="pMapPlace">
                                                <img src={market} className="pMapIcon" alt="" />
                                                <p>Supermarkets</p>
                                            </div>
                                            <p>250m</p>
                                        </div>
                                        <div className="pMapInfo">
                                            <div className="pMapPlace">
                                                <img src={cafe} className="pMapIcon" alt="" />
                                                <p> Cafes</p>
                                            </div>
                                            <p> 150m</p>
                                        </div>
                                        <div className="pMapInfo">
                                            <div className="pMapPlace">
                                                <img src={petrol} className="pMapIcon" alt="" />
                                                <p>Petrol</p>
                                            </div>
                                            <p>400m</p>
                                        </div>
                                    </div>
                                </div>

                            </section>
                        </div>

                    </div>
                </>
            )}
            <Footer />
        </>
    );
}