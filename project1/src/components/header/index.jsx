import React from "react";
import {Navbar} from "./navbar/index";
import logo from "../../assets/icons/logo.png";
import location from "../../assets/icons/location.png";
import arrowDown from "../../assets/icons/arrowDown.png";
import './style.css';
import {ButtonWithIcon} from "./headerButton";

export const Header = (props) => {
    return <div className="header">

        <img src={logo} alt="logo" />

        <ButtonWithIcon icon={location} title="Москва" />

        <div className="header-center">
            <span className="header-phone">8 495 018-32-10</span>
            <ButtonWithIcon icon={arrowDown} title="Заказать звонок" />
        </div>

        <Navbar/>
    </div>
}