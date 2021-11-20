import "./styles.css";
import {NavLink} from 'react-router-dom';
import logo from "./assets/Netflix_logo.png";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <img src={logo} alt="logo"/>
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/HomePage">Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="nav-selected" to="/TVShows">TV Shows</NavLink>
                </li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
            </ul>
        </nav>
    );
}
