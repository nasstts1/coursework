import "./footer.css"
import logo from "../../img/logo.webp"

import { NavLink } from "react-router-dom"

function Footer(){
    return(
        <footer>
            <div className="footerContainer">
                <div className="rightSide">
                    <NavLink to="/" className="logo">
                        <img src={logo} alt="" className="logo_img"/>   
                    </NavLink>
                    <p>© 2025 Коломієць Анастасія. Всі права захищені.</p>
                </div>

                <div className="centre">
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className="nav-list__link">Головна</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/news" className="nav-list__link">Новини</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/about" className="nav-list__link">Про сайт</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/gallery" className="nav-list__link">Галерея</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/contacts" className="nav-list__link">Контакти</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="leftSide">
                    <p>Номер телефону: +38(068) 64-13-730 </p>
                    <p><a href="mailto:anastasiya.kolomiets2005@gmail.com">anastasiya.kolomiets2005@gmail.com</a></p>
                </div>

            </div>
        </footer>
    )
}

export default Footer