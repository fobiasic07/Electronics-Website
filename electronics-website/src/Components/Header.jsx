import React from 'react'
import Navbar from './Navbar.jsx'
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
  <div className='header-container'>
    <div className='header-color'>
    <Navbar />
    </div>
    <div className="content">IoT Resources and Tutorials Below</div>
    <div className="search-bar">
        <input type="text" placeholder="Search Materials..." name="search" />
          <button className='search-button'>
            <IoSearch  className='search-icon'/>
          </button>
    </div>
  </div>
  );
}

export default Header