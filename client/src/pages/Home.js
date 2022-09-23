import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./home.css";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">

            </div>
            <Footer />
        </div>
    );
}