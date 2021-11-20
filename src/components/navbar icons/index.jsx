import "./styles.css";
import {GoSearch} from "react-icons/go"
import {FaBell} from "react-icons/fa"
import {IoMdArrowDropdown} from "react-icons/io"
import profileImage from "./assets/UserProfile.PNG";

export const NavbarIcons = () => {
    return (
        <nav className="navbar-icons">
            <ul className="navbarButtons">

                <div className="searchBar">
                    <button><GoSearch/></button>
                </div>

                <div className="kidsLink">
                    <li>Kids</li>
                </div>

                <div className="notifications">
                    <button><FaBell/></button>
                </div>

                <div className="userProfile">
                    <img src={profileImage} alt="logo"/>
                </div>

                <div className="Dropdown">
                    <button><IoMdArrowDropdown/></button>
                </div>

            </ul>
        </nav>
    );
}