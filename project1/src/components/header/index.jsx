import React, {useEffect, useState} from "react";
import Navbar from "./navbar/index";
import logo from "../../assets/icons/header/logo.png";
import location from "../../assets/icons/header/location.png";
import arrowDown from "../../assets/icons/header/arrowDown.png";
import './style.css';
import {ButtonWithIcon} from "./headerButton";
import BurgerMenu from "../burgerMenu";

export const Header = (props) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isDesktop = screenWidth >= 1024;

    const handleClickMenu = () => {
        const burgerMenu = document.getElementById('burgerMenu');
        burgerMenu.classList.toggle('active');
        setBurgerMenuOpen(!isBurgerMenuOpen);
    }

    return (
        <div className="header">
        <div className="header-container">
            {isDesktop ?
                <div className="header-desktopMenu">
                    <img src={logo} alt="logo"/>

                    <ButtonWithIcon icon={location} title="Москва"/>

                    <div className="header-center">
                        <span className="header-phone">8 495 018-32-10</span>
                        <ButtonWithIcon icon={arrowDown} title="Заказать звонок"/>
                    </div>

                    <Navbar/>
                </div>

                :

                <div className="header-mobileMenu">
                    <img src={logo} alt="logo"/>
                    <BurgerMenu isOpen={isBurgerMenuOpen} onClick={handleClickMenu} />
                </div>
            }


        </div>
        </div>
    )
}