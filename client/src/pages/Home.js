import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Property from "../components/PropertyList";
import ViewProperty from "../components/ViewProperty";
import Footer from "../components/Footer";
import "./home.css";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Features />
                <h1 className="homeTitle">Rental Property Listing</h1>
                <Property />
                <h1 className="homeTitle">Most Views</h1>
                <ViewProperty />
            </div>
            <Footer />
        </div>
    );
}