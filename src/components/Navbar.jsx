import {useState} from "react"
import {Link} from "react-scroll";

import logo from "/images/ru-logo.png";

export default function Navbar() {

    const [mobileIconClick, setMobileIconClick] = useState(false)

    // Change the mobile menu icon if it's clicked
    function handleMobileIconClick() {
        setMobileIconClick((prevMobileIconClick) => !prevMobileIconClick)
    }

    const mobileIcon = mobileIconClick ? "fas fa-times" : "fa-solid fa-bars"

    const mobileNavActive = mobileIconClick ? "#navbar active" : "#navbar"

    return (
        <nav>
            <a href="#">
                <img className="logo" src={logo} alt="logo" />
            </a>
            <div>
                <ul id="navbar" className={mobileNavActive}>
                    <li>
                        <Link smooth={true} to="home" duration={0} offset={-110} className="nav-link hvr-grow">Home</Link>
                    </li>
                    <li>
                        <Link smooth={true} to="skills" duration={0} offset={-50} className="nav-link hvr-grow">Skills</Link>
                    </li>
                    <li>
                        <Link smooth={true} to="portfolio" duration={1000} offset={-50} className="nav-link hvr-grow">Portfolio</Link>
                    </li>
                    <li>
                        <Link smooth={true} to="experience" duration={0} offset={-50} className="nav-link hvr-grow">Experience</Link>
                    </li>
                    <li>
                        <Link smooth={true} duration={0} to="about" className="nav-link hvr-grow">About Me</Link>
                    </li>
                </ul>
            </div>
            <div id="mobile">
                <i className={mobileIcon} onClick={handleMobileIconClick}></i>
            </div>
        </nav>  
    )
}