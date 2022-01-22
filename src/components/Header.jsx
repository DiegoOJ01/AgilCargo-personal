import { NavLink } from "react-router-dom";
import "@assets/css/header.css";
import logo from "@assets/img/logo.png";

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo-header">
                    <NavLink to={'/'} className={({ isActive }) => isActive ? '' : ''}>
                        <img src={logo} alt="logo" />
                    </NavLink>
                </div>
                
                <ul className="list-header">
                    <li>
                        <NavLink to={'/track-shipping'} className={({ isActive }) => isActive ? "active" : 'header-links'}>Rastrear</NavLink>
                    </li>

                    <li>
                        <NavLink to={'/budget'} className={({ isActive }) => isActive ? "active" : 'header-links'}>Cotizar</NavLink>
                    </li>

                    <li>
                        <NavLink to={'/contact'} className={({ isActive }) => isActive ? "active" : 'header-links'}>Contactar</NavLink>
                    </li>

                    <li>
                        <NavLink to={'/'} className={({ isActive }) => isActive ? "active" : 'header-links'}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/login'} className={({ isActive }) => isActive ? "btn" : 'btn'}>Ingresar</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;