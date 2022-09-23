import { useState } from "react";
import Metro from "../images/Metro.png";
import { GrLanguage } from 'react-icons/gr';
import { TbTriangleInverted } from 'react-icons/tb';
import "./searchresultsnav.css";

export default function SearchPropertyNav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="wrapper">
      <nav className="navigation">
        <a href="/" className="brand-name">
          <img
            width="190px"
            height="40px"
            className="logo"
            src={Metro}
            alt="Metro Property Logo"
          />
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from Heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <a href="/home">Switch</a>
            </li>
            <li>
              <a href="/about">Owners</a>
            </li>
            <li>
              <a href="/about">Tenants</a>
            </li>
            <li>
              <a href="/contact">Login</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>

            <ul className=
                        {dropdown ? "navDropdown clicked" : "navDropdown"}
                        onClick={() => setDropdown(!dropdown)}>
                        <GrLanguage />
                        English
                        <TbTriangleInverted />

                        {dropdown ? (
                            <div className="navLan" onClick={() => setDropdown(false)}>
                                <li>Te reo Māori</li>
                                <li>中文</li>
                                <li>Maya Nyelv</li>
                                <li>Farsi</li>
                                <li>日本語</li>
                                <li>한국어</li>
                            </div>
                        ) : null}
                    </ul>
          </ul>
        </div>
      </nav>
    </div>
    
  );
}
