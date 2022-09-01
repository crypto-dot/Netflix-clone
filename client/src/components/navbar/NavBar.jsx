import NetflixLogo from '../../assets/Netflix_Logo_CMYK.png';
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import ProfileIcon from "../../assets/ProfileIcon.png";
import { useState } from 'react';
import './NavBar.scss';
import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => {
            window.onscroll = null;
        }
    }
    return (
        <nav className={isScrolled ? "navbar scrolled" : "navbar"} >
            <div className="container">
                <div className="left">
                    <img src={NetflixLogo} alt="Netflix logo" />
                    <Link className="link" to="/"><span>HomePage</span></Link>
                    <Link className="link" to="/series"><span>Series</span></Link>
                    <Link className="link" to="/movies"><span>Movies</span></Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>Kids</span>
                    <Notifications className="icon" />
                    <img src={ProfileIcon} alt="profile icon" />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar