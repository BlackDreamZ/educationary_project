import React from "react";
import AdvertiseBlock from "../../components/advertiseBlock";
import './style.css';

export const HomePage = () => {
    return <div className="homePage">

        <h2> Главная</h2>

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

        </div>

    </div>
}