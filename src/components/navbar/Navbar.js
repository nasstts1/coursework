import "./navbar.css"
import logo from "../../img/logo.webp"

import { NavLink } from "react-router-dom"

function Navbar(){
    const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';

    return(
        <nav className="nav">
        <div className="container_nav">
            <div className="nav-row">

                <NavLink to="/" className="logo">
                    <img src={logo} alt="" className="logo_img"/>   
                </NavLink>
                

                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink to="/" className={({isActive}) =>  isActive ? activeLink : normalLink }>Головна</NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/news" className={({isActive}) =>  isActive ? activeLink : normalLink }>Новини</NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/about" className={({isActive}) =>  isActive ? activeLink : normalLink }>Про сайт</NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/gallery" className={({isActive}) =>  isActive ? activeLink : normalLink }>Галерея</NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/contacts" className={({isActive}) =>  isActive ? activeLink : normalLink }>Контакти</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar