import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HeaderRight from "./headerRight";
import './navbar.css'


export default function Navbar() {
    return (
        <div className="header">
            <div className="headerLeft">

                <LinkedInIcon className="linkedin-icon" />
                <div className="header-search">

                    <SearchIcon className="search" />
                    <input type="text" placeholder="Search"></input>
                </div>
            </div>

            {/* Header Right Side */}
            <div className="headerRight">
                <HeaderRight />
            </div>



        </div>
    )
}
