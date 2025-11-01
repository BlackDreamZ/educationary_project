import Navbar from "../header/navbar";
import './style.css';

const BurgerMenu = (props) => {

    const isBurgerMenuOpen = props.isOpen;

    return (
        <div id="burgerMenu" className="burger-menu" onClick={props.onClick}>
            <div className="burger-icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
            {isBurgerMenuOpen ? <Navbar/> : ""}
        </div>
    )
}

export default BurgerMenu;