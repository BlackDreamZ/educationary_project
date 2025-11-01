import Navbar from "../header/navbar";
import LinksToPages from "../linksToPages";
import './style.css';
import ContactInformation from "../contactInformation";
import AdressBlock from "../adressBlock";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <LinksToPages
                siteInfo="© 2020 ggpromarket.ru"
                />
                <Navbar/>
                <ContactInformation
                    title="8 495 018-32-10"
                    textButton="ЗАКАЗАТЬ ЗВОНОК"
                    text={["Пн-Пт: 10:00 — 20:00",
                    "Сб: 10:00 — 18:00",
                    "Вс: выходной"]}
                />
                <AdressBlock
                    addressText={["Склад: ", "Москва, ул. Салтыковская, 6 стр 11"]}
                    email="zakaz@ggpromarket.ru"
                />
            </div>
        </div>
    )
}

export default Footer;