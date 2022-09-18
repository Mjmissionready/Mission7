import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faFacebook,
// } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';
import Metro from "../images/Metro.png"


export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="fLists">
          <ul className="fList">
            <li style={{ fontSize: "16px", fontWeight: "bold" }}> Contact</li>
            <br />
            <li className="fListItem">Level 17, PWC Building
              <br />
              Comercial Bay Tower,
              <br />
              11-19 Customs Street West,
              <br />
              Auckland CBD 1010, New Zealand</li>
          </ul>

          <ul className="fList">
            <li className="fListItem">P.OBox 106500, Customs Street,
              <br />
              AUCKLAND 1010, NEW ZEALAND</li>
            <br />
            <li className="fListItem">Phone: 09 391 4642
              <br />
              International: +64 642 119
              <br />
              Email: info@metrozn.co.nz</li>
          </ul>

          <ul className="fList">
            <li className="fSubscribe">
              <li style={{ fontSize: "16px", fontWeight: "bold" }}>
                Subscribe to out Newsletter</li>
              <br />
              <input type="text" placeholder="Enter email address" />
              <button>Subscribe</button>
            </li>
          </ul>

          <ul className="fIcons">
            <img src={Metro} className="fLogo" alt="" />
            <li className="fIcon">
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

      <div className="fText">
        © 2022 METRO NZ PROPERTY MANAGEMENT | DISPUTES PROCESS | SITE MAP | PRIVACY POLICY</div>
    </>
  );
};