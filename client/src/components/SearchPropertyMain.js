import React from 'react';
import { Link } from "react-router-dom";
import { Box, Container, Typography } from '@mui/material';
import Header from "../images/Header.png";
import { BsSquareFill} from "react-icons/bs";
import { RiShoppingBasketFill, RiGasStationFill } from "react-icons/ri";
import { MdPark, MdOutlineLocalCafe, MdSchool, MdLocalHospital } from "react-icons/md";
import { BiBusSchool} from "react-icons/bi";
import { CgGym } from "react-icons/cg";
import { ImBook } from "react-icons/im";


function SearchPropertyMain () {
    
    return (
        
        <Box
        sx={{
            boxSizing: "border-box",
            backgroundImage: `url(${Header})`,
            backgroundPosition: "center",
            paddingTop: "10px",
            height: "800px",
          }}>
            <Container disableGutters={true} maxWidth={false}
            sx={{
                backgroundColor: "#464646",
                opacity: "0.85",
                height: "300px",
                width: "1000px",
                marginTop: "75px"}}>

                    <Typography variant="h5"
                        sx={{
                            color: "#FFFFFF",
                            paddingTop: "10px",
                            paddingLeft: "15px",
                            width: "175px",
                            margin: "0px"
                            }}>
                                Location
                    </Typography>

                    <div 
                    style={{
                        paddingTop: "10px", 
                        paddingLeft: "15px",
                        display: "flex",
                        }}>
                    

                    {/* ------- ALL NEW ZEALAND ------- */}

                    <div class="dropdown">
                        <button class="btn-block btn-secondary dropdown-toggle" 
                                type="button" data-toggle="dropdown" 
                                style={{
                                    width: "175px",
                                    height: "35px"
                                    }}>
                                   Auckland
                            <span class="caret"></span>
                        </button>
                            <ul class="dropdown-menu">
                                <li>Northland</li>
                                <li>Auckland</li>
                                <li>Waikato</li>
                                <li>Bay of Plenty</li>
                                <li>Gisborne</li>
                                <li>Hawke's Bay</li>
                                <li>Taranaki</li>
                                <li>Manawatu/Whanganui</li>
                                <li>Wellington</li>
                                <li>Nelson/Tasman</li>
                                <li>Marlborough</li>
                                <li>West Coast</li>
                                <li>Canterbury</li>
                                <li>Otago</li>
                                <li>Southland</li>
                            </ul>
                     </div>

                     {/* ------- ALL DISTRICTS ------- */}

                     <div class="dropdown">
                        <button class="btn-block btn-secondary dropdown-toggle" 
                                type="button" data-toggle="dropdown"
                                style={{
                                    width: "175px",
                                    height: "35px"
                                    }}>
                                   All Districts
                            <span class="caret"></span>
                        </button>
                            <ul class="dropdown-menu">
                                <li>Auckland City</li>
                                <li>Franklin</li>
                                <li>Hauraki Gulf Islands</li>
                                <li>Manukau City</li>
                                <li>North Shore City</li>
                                <li>Papakura</li>
                                <li>Rodney</li>
                                <li>Waiheke Island</li>
                                <li>Waitakere City</li>
                            </ul>
                     </div>

                    {/* ------- ALL SUBURBS ------- */}

                    <div class="dropdown">
                        <button class="btn-block btn-secondary dropdown-toggle" 
                                type="button" data-toggle="dropdown"
                                style={{
                                    width: "175px",
                                    height: "35px"
                                    }}>
                                   All Suburbs
                            <span class="caret"></span>
                        </button>
                            <ul class="dropdown-menu">
                                <li>All Suburbs</li>
                                <li>Arch Hill</li>
                                <li>Avondale</li>
                                <li>Balmoral</li>
                                <li>Blockhouse Bay</li>
                                <li>City Centre</li>
                                <li>Coxs Bay</li>
                                <li>Eden Terrace</li>
                                <li>Ellerslie</li>
                                <li>Epsom</li>
                                <li>Freemans Bay</li>
                                <li>Mount Eden</li>
                                <li>Mount Roskill</li>
                                <li>Mission Bay</li>
                                <li>West City</li>
                            </ul>
                     </div>

{/* UNKNOWN RIGHT MARGIN FROM "LOCATION" BLOCKS THIS FROM BEING POSITIONED PROPERLY

                     <Typography variant="h5"
                        sx={{
                            color: "#FFFFFF",
                            paddingBottom: "20px",
                            paddingLeft: "20px"
                            }}>
                                Nearby ...
                        </Typography> */}

                 {/* ------- PARKS -------- */}       
                    
                    <div 
                    style={{
                        paddingLeft: "18px",
                        paddingTop: "3px",
                        color: "#C1C1C1"}}>
                        <MdPark size={30}/>
                    </div>

                    <Typography variant="h5"
                        sx={{
                            color: "#FFFFFF",
                            paddingTop: "7px",
                            paddingLeft: "10px"}}>
                            Parks
                    </Typography>

                    <div 
                    style={{
                        paddingLeft: "25px",
                        paddingTop: "10px",
                        color: "#C1C1C1"}}>
                        <BsSquareFill size={18}/>
                    </div>

                {/* ------- SUPERMARKETS -------- */}

                <div 
                    style={{
                        paddingLeft: "15px",
                        paddingTop: "3px",
                        color: "#C1C1C1"}}>
                        <RiShoppingBasketFill size={28}/>
                </div>

                <Typography variant="h5"
                        sx={{
                            color: "#FFFFFF",
                            paddingTop: "7px",
                            paddingLeft: "10px"}}>
                            Supermarkets
                </Typography>

                <div 
                    style={{
                        paddingLeft: "23px",
                        paddingTop: "10px",
                        color: "#C1C1C1"}}>
                        <BsSquareFill size={18}/>
                </div>


             {/* ------- CAFES -------- */}

                <div 
                    style={{
                        paddingLeft: "15px",
                        paddingTop: "5px",
                        color: "#C1C1C1"}}>
                        < MdOutlineLocalCafe size={28}/>
                </div>

                <Typography variant="h5"
                        sx={{
                            color: "#FFFFFF",
                            paddingTop: "7px",
                            paddingLeft: "10px"}}>
                            Cafes
                </Typography>

                <div 
                    style={{
                        paddingLeft: "10px",
                        paddingTop: "10px",
                        color: "#C1C1C1"}}>
                        <BsSquareFill size={18}/>
                </div>
            </div>

             {/* ------- BEDROOMS -------- */}

            <div  style={{
                        paddingTop: "30px", 
                        paddingLeft: "15px",
                        display: "flex",
                        }}>
                <div class="dropdown">
                        <button class="btn-block btn-secondary dropdown-toggle " 
                                type="button" data-toggle="dropdown"
                              
                                style={{
                                    width: "132px",
                                    height: "35px"
                                    }}>
                                   Bedrooms
                            <span class="caret"></span>
                        </button>
                            <ul class="dropdown-menu">
                                <li>Any</li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5+</li>
                            </ul>
                </div>

                {/* ------- BATHROOMS -------- */}
           
                <div class="dropdown">
                        <button class="btn-block btn-secondary dropdown-toggle" 
                                type="button" data-toggle="dropdown"
                                style={{
                                    width: "132px",
                                    height: "35px"
                                    }}>
                                   Bathrooms
                            <span class="caret"></span>
                        </button>
                            <ul class="dropdown-menu">
                                <li>Any</li>
                                <li>1</li>
                                <li>2</li>
                                <li>3+</li>
                            </ul>
                </div>

             {/* ------- CARPARKS -------- */}

            <div class="dropdown">
                        <button class="btn-block btn-secondary dropdown-toggle" 
                                type="button" data-toggle="dropdown"
                                style={{
                                    width: "132px",
                                    height: "35px"
                                    }}>
                                   Carparks
                            <span class="caret"></span>
                        </button>
                            <ul class="dropdown-menu">
                                <li>Any</li>
                                <li>1</li>
                                <li>2</li>
                                <li>3+</li>
                            </ul>
            </div>

            {/* ---------- PET FRIENDLY ---------- */}

            <div class="dropdown">
                        <button class="btn-block btn-secondary dropdown-toggle" 
                                type="button" data-toggle="dropdown"
                                style={{
                                    width: "130px",
                                    height: "35px",
                                    }}>
                                    Pet-friendly
                            <span class="caret"></span>
                        </button>
                            <ul class="dropdown-menu">
                                <li>Yes</li>
                                <li>No</li>
                            </ul>
            </div>

            {/* ---------- SCHOOLS ---------- */}

            <div 
                    style={{
                        paddingLeft: "18px",
                        color: "#C1C1C1"}}>
                        <MdSchool size={30}/>
            </div>

            <Typography variant="h5"
                        sx={{
                            color: "#FFFFFF",
                            paddingTop: "7px",
                            paddingLeft: "10px"}}>
                            Schools
            </Typography>

            <div 
                    style={{
                        paddingLeft: "10px",
                        paddingTop: "10px",
                        color: "#C1C1C1"}}>
                        <BsSquareFill size={18}/>
            </div>

        {/* ------- PUBLIC TRANSPORT ------- */}

        <div 
                    style={{
                        paddingTop: "5px",
                        paddingLeft: "14px",
                        color: "#C1C1C1"}}>
                        <BiBusSchool size={28}/>
        </div>

        <Typography variant="h5"
                        sx={{
                            color: "#FFFFFF",
                            paddingTop: "7px",
                            paddingLeft: "10px"}}>
                            Public Transport
        </Typography>

        <div 
                    style={{
                        paddingLeft: "10px",
                        paddingTop: "10px",
                        color: "#C1C1C1"}}>
                        <BsSquareFill size={18}/>
        </div>

        {/* ------- PETROL ------- */}

        <div 
                    style={{
                        paddingTop: "5px",
                        paddingLeft: "14px",
                        color: "#C1C1C1"}}>
                        <RiGasStationFill size={28}/>
        </div>

        <Typography variant="h5"
                        sx={{
                            color: "#FFFFFF",
                            paddingTop: "7px",
                            paddingLeft: "10px"}}>
                            Petrol
        </Typography>

        <div 
                    style={{
                        paddingLeft: "10px",
                        paddingTop: "10px",
                        color: "#C1C1C1"}}>
                        <BsSquareFill size={18}/>
        </div>
        </div>

        {/* ------- PREFERRED LENGTH OF TENANCY ------- */}

        <div style={{
                        paddingTop: "30px", 
                        paddingLeft: "15px",
                        display: "flex",
                    }}>
            
            <div class="dropdown">
                        <button class="btn-block btn-secondary dropdown-toggle " 
                                type="button" data-toggle="dropdown"
                              
                                style={{
                                    width: "215px",
                                    height: "35px"
                                    }}>
                                   Preferred length of tenancy
                            <span class="caret"></span>
                        </button>
                            <ul class="dropdown-menu">
                                <li>3 months</li>
                                <li>6 months</li>
                                <li>9 months</li>
                                <li>12 months+</li>
                            </ul>
            </div>

            {/* ------- RENTAL PRICE ------- */}

            <div class="dropdown">
                        <button class="btn-block btn-secondary dropdown-toggle " 
                                type="button" data-toggle="dropdown"
                              
                                style={{
                                    width: "215px",
                                    height: "35px"
                                    }}>
                                  Rent up to $...
                            <span class="caret"></span>
                        </button>
                            <ul class="dropdown-menu">
                                <li>$200+ per week</li>
                                <li>$300+ per week</li>
                                <li>$400+ per week</li>
                                <li>$500+ per week</li>
                                <li>$600+ per week</li>
                                <li>$700+ per week</li>
                                <li>$800+ per week</li>
                                <li>$900+ per week</li>
                                <li>$1000+ per week</li>
                            </ul>
            </div>

            {/* ---------- GYMS ---------- */}

            <div 
                    style={{
                        paddingTop: "5px",
                        paddingLeft: "105px",
                        color: "#C1C1C1"}}>
                        <CgGym size={32}/>
            </div>

            <Typography variant="h5"
                        sx={{
                            color: "#FFFFFF",
                            paddingTop: "7px",
                            paddingLeft: "10px"}}>
                            Gyms
            </Typography>

            <div 
                    style={{
                        paddingLeft: "25px",
                        paddingTop: "10px",
                        color: "#C1C1C1"}}>
                        <BsSquareFill size={18}/>
            </div>

            {/* ---------- HOSPITALS ---------- */}

            <div 
                    style={{
                        paddingTop: "5px",
                        paddingLeft: "12px",
                        color: "#C1C1C1"}}>
                        <MdLocalHospital size={32}/>
            </div>

            <Typography variant="h5"
                        sx={{
                            color: "#FFFFFF",
                            paddingTop: "7px",
                            paddingLeft: "10px"}}>
                            Hospitals
            </Typography>

            <div 
                    style={{
                        paddingLeft: "52px",
                        paddingTop: "10px",
                        color: "#C1C1C1"}}>
                        <BsSquareFill size={18}/>
            </div>

            {/* ---------- LIBRARIES ----------- */}

            <div 
                    style={{
                        paddingTop: "5px",
                        paddingLeft: "12px",
                        color: "#C1C1C1"}}>
                        <ImBook size={20}/>
            </div>

            <Typography variant="h5"
                        sx={{
                            color: "#FFFFFF",
                            paddingTop: "7px",
                            paddingLeft: "10px"}}>
                            Libraries
            </Typography>

            <div 
                    style={{
                        paddingLeft: "10px",
                        paddingTop: "10px",
                        color: "#C1C1C1"}}>
                        <BsSquareFill size={18}/>
            </div>
        </div>

        {/* ---------- RESET SEARCH ---------- */}
        
            <div style= {{paddingTop: "30px", 
                        paddingLeft: "15px",
                        display: "flex"}}>
            
                <button type="button" class="btn-block btn-danger"
                style={{
                    width: "215px",
                    height: "35px",
                    }}>
                    <Link to="/list">Search</Link>
                </button>
            </div>
        </Container>
    </Box>
    )
}
export default SearchPropertyMain
