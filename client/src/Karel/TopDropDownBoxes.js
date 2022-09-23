import React, { useEffect, useState } from "react";

function TopDropDownBoxes () {
    const [city, setCity]=useState([])
    const [district , setDistrict]= useState([])
    const [suburb, setSuburb]=useState([])
    const [bedrooms, setBedrooms]=useState([])
    const [bathrooms, setBathrooms]=useState([])
    const [carParks, setCarParks]=useState([])
    const [tlenght, setTLenght]=useState([])
    const [rentMax, setRentMax]=useState([])
    const [rentPeriod, setRentPeriod]=useState([])
    


    useEffect(()=> {
        const getCity = async()=>{
            const fetchCity = await fetch ("");
            const cityData = fetchCity.json();
            //setCity=(await cityData)
            setCity(cityData);
        }
        getCity();
    });

    const handleCity = (event)=>{
        const getCityId = event.target.value;
        setCity(getCityId);
    }


    useEffect( () => {
        const getdistrict = async()=>{
            const fetchDis = await fetch ("");
            const disData = fetchDis.json();
            setDistrict(await disData);
        }
        getdistrict();
    });

    const handleDistricts = (event)=>{
        const getDistrictId=event.target.value;
        setDistrict(getDistrictId);
    }
        useEffect( () =>{
            const getsuburb = async()=>{
                const fetchSub = await fetch ("");
                const subData = fetchSub.json();
                setSuburb(await subData);
            }
            getsuburb();
        });

        const handleSuburbs = (event)=>{
            const getSuburbId =event.target.value;
            setSuburb(getSuburbId);
        }
        useEffect( () =>{
            const getbedrooms = async()=>{
                const fetchBeds = await fetch ("");
                const bedsData = fetchBeds.json();
                setBedrooms(await bedsData);
            }
            getbedrooms();
        });

        const handleBeds = (event)=>{
            const getBedsId =event.target.value;
            setBedrooms(getBedsId);
        }



    return(
        <div className="dropboxes-location">
            <form>

            <label className="Auckland">Location</label>
           <select className="form-select" name="city" onChange={(e)=>handleCity(e)} >
           <option value="" className="text-dropBox" >All Cities</option>
           {
            city.map((getcity, index)=>(
            <option key={index} value={getcity.city.Id}>
            {getcity.city.name}</option>
            ))
           }
           </select>

            <select className="form-select" name="district" onChange={(e) =>handleDistricts(e)}>
        <option value="" className="text-dropBox">All Districts</option>
        {
            district.map( (getdistrict,index)=>(
                <option key={index} value={getdistrict.district.Id}
                >{getdistrict.district.name}</option>
            ))
        }
        </select>

        <select className="form-select" name="suburbs" onChange={(e) => handleSuburbs(e)}>
        <option value="">All Suburbs</option>
        {
            suburb.map( (getSuburb,index)=>(
                <option key={index} value={getSuburb.suburb.classId}
                >{getSuburb.suburb.name}</option>
            ))
        }
        </select>


            </form>

           

        </div>
    )

    
    }
export default TopDropDownBoxes;
