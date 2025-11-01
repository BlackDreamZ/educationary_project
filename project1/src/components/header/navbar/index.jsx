import {NavLink} from "react-router";
import React from "react";
import './style.css';

const setActive = ({isActive}) => (isActive ? "active" : "");

const Navbar = (props) => {
    return <nav className="navbar" >
        <NavLink to="/" className={setActive} style={({ isActive }) => ({color: isActive ? 'green' : 'blue'})}>Главная</NavLink>
        <NavLink to="/collections-tiles" className={setActive} style={({ isActive }) => ({color: isActive ? 'green' : 'blue'})}>Коллекции плитки</NavLink>
        <NavLink to="/bestsellers" className={setActive} style={({ isActive }) => ({color: isActive ? 'green' : 'blue'})}>Хиты продаж</NavLink>
        <NavLink to="/discounts" className={setActive} style={({ isActive }) => ({color: isActive ? 'green' : 'blue'})}>Акции</NavLink>
        <NavLink to="/popular-brends" className={setActive} style={({ isActive }) => ({color: isActive ? 'green' : 'blue'})}>Популярные бренды</NavLink>
        <NavLink to="/articles" className={setActive} style={({ isActive }) => ({color: isActive ? 'green' : 'blue'})}>Статьи</NavLink>
    </nav>
}

export default Navbar;