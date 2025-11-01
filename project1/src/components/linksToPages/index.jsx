import LinkToPage from "./linkToPage";
import './style.css';
import logo from '../../assets/icons/header/logo.png';

const linksObj = [
    "Плитка",
    "Сантехника",
    "Мебель для ванной",
    "Электроника и бытовая техника",
    "Отопление",
    "Напольное покрытие"
]

const LinksToPages = (props) => {
    return (
        <div className="linksToPages">
            <div className="linksToPages-links">{
                linksObj.map(link => {
                    return <LinkToPage key={link} title={link} />
                })
            }
            </div>
            <img src={logo} alt="logo" />
            <p className="linksToPages-infoBlock">{props.siteInfo}</p>
        </div>
    )
}

export default LinksToPages;