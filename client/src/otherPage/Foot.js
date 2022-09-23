import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faFacebook,
// } from "@fortawesome/free-solid-svg-icons";
import "./foot.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';
import Metro from "../images/Metro.png"


export default function Foot() {
  return (
    <>
      <div className="foot">
        <div className="ftLists">
          <ul className="ftList">
            <li style={{ fontSize: "16px", fontWeight: "bold" }}> Contact</li>
            <br />
            <li className="ftListItem">Level 17, PWC Building
              <br />
              Comercial Bay Tower,
              <br />
              11-19 Customs Street West,
              <br />
              Auckland CBD 1010, New Zealand</li>
          </ul>

          <ul className="ftList">
            <li className="ftListItem">P.OBox 106500, Customs Street,
              <br />
              AUCKLAND 1010, NEW ZEALAND</li>
            <br />
            <li className="ftListItem">Phone: 09 391 4642
              <br />
              International: +64 642 119
              <br />
              Email: info@metrozn.co.nz</li>
          </ul>

          <ul className="ftList">
            <li className="ftSubscribe">
              <li style={{ fontSize: "16px", fontWeight: "bold" }}>
                Subscribe to out Newsletter</li>
              <br />
              <input type="text" placeholder="Enter email address" />
              <button>Subscribe</button>
            </li>
          </ul>

          <ul className="ftIcons">
            <img src={Metro} className="ftLogo" alt="" />
            <li className="ftIcon">
              <a href="https://www.facebook.com/MetroNZ/">
                <FaFacebookF size={"30px"} style={{ color: "white" }} /> </a>

              <a href="https://twitter.com/MetroNz_">
                <FaTwitter size={"30px"} style={{ color: "white" }} /> </a>

              <a href="https://www.instagram.com/metronzproperty/">
                <FaInstagram size={"30px"} style={{ color: "white" }} /> </a>

              <a href="https://www.linkedin.com/company/metro-nz-property-management-ltd/">
                <FaLinkedinIn size={"30px"} style={{ color: "white" }} /> </a>
            </li>
            {/* <FontAwesomeIcon icon={faFacebook} />*/}
          </ul>
        </div>
      </div>

      <div className="ftText">
        © 2022 METRO NZ PROPERTY MANAGEMENT | DISPUTES PROCESS | SITE MAP | PRIVACY POLICY</div>
    </>
  );
};