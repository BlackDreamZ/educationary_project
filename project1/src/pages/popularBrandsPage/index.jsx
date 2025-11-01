import React from "react";
import popularBrands from "./mockData";
import './style.css';

const PopularBrandsPage = () => {
    return (
        <div className="popularBrands">
            <h2 className="sectionHeadline"> Популярные бренды</h2>
            <div className="popularBrands-content">
                {popularBrands.map((item, index) => {
                    return <div className="imageBrand" key={index}><img src={item} alt="img"/></div>
                })}
            </div>
        </div>
    )
}

export default PopularBrandsPage;