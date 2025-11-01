import React from "react";
import AdvertiseBlock from "../../components/advertiseBlock";
import './style.css';
import PropertyBlock from "../../components/propertyBlock";
import truck from "../../assets/icons/properties/truck.png";
import loaderCar from "../../assets/icons/properties/loaderCar.png";
import rubleCurrency from "../../assets/icons/properties/rubleCurrency.png";
import shield from "../../assets/icons/properties/shield.png";
import like from "../../assets/icons/properties/like.png";

export const HomePage = () => {
    return <div className="homePage">

        <h2 className="sectionHeadline"> Главная</h2>

        <div className="homePage-advertise">

            <AdvertiseBlock
                title="СМЕСИТЕЛИ RAIBER"
                description="уже в наличии"
                buttonText="ПОДРОБНЕЕ"
                backgroundColor="#004C93"
                buttonStyle={{color: "black", backgroundColor: "yellow"}}
            />
            <AdvertiseBlock
                title="УНИТАЗЫ ДО 10 000 ₽"
                buttonText="ПОДРОБНЕЕ"
                backgroundColor="#1061AB"
                buttonStyle={{color: "white", background: "none", border: "none"}}/>
            <AdvertiseBlock
                title="ТОВАРЫ СО СКИДКОЙ"
                buttonText="ПОДРОБНЕЕ"
                backgroundColor="#3BB9B8"
                buttonStyle={{color: "white", background: "none", border: "none"}}/>

        </div>

        <div className="homePage-properties">
            <PropertyBlock
                src={truck}
                text="Быстрая доставка
по Москве и в любой регион России"
            />
            <PropertyBlock
                src={shield}
                text="Все товары имеют официальную гарантию производителя"
            />
            <PropertyBlock
                src={loaderCar}
                text="Более 100 000 товаров"
            />
            <PropertyBlock
                src={rubleCurrency}
                text="Любой способ оплаты"
            />
            <PropertyBlock
                src={like}
                text="Высокие оценки клиентов"
            />
        </div>

    </div>
}