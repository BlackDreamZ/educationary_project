import React from "react";
import CategoriesBlock from "../../components/categoriesBlock";
import './style.css';
import ProductsBlock from "../../components/productsBlock";
import products from '../bestsellersPage/mockData';

const categories = ["Любые товары", "Раковины", "Ванны", "Унитазы", "Душевые системы", "Смесители", "Зеркала", "Душевые кабины", "Стиральные машины"];

const BestsellersPage = () => {
    return (
        <div className="bestsellers">
            <h2 className="bestsellersHeadline sectionHeadline"> Хиты продаж</h2>
            <CategoriesBlock categories={categories}/>
            <ProductsBlock products={products}/>
        </div>
    )
}

export default BestsellersPage;