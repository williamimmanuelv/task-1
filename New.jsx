import {  FaSearch, FaHeart, FaBell } from "react-icons/fa";
import "./New.css";
import { FaHouseChimney } from "react-icons/fa6";
import Goolok_Final_Logo from '/Goolok_Final_Logo.png';
import { FaRegBell } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <div className='nav-1-img'>
          <img src={Goolok_Final_Logo} className="second_image_s" alt="logo" />
        </div>
        <FaHouseChimney className="nav-iconH" />
        <a href="#">Buy Property</a>
        <a href="#">Sell Property</a>
        <a href="#">Services</a>
      </div>

      <div className="nav-right">
        <div className="search-box">
          <input type="text" placeholder="Search property lap" />
          <FaSearch className="search-icon" />
        </div>
        <FaRegHeart className="nav-ico" />
        <FaRegBell className="nav-ico" />
        <button className="signin-btn">Sign In</button>
      </div>
    </header>
  );
}







