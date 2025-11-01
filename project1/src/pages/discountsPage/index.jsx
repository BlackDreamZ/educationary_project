import React from "react";
import CategoriesBlock from "../../components/categoriesBlock";
import ProductsBlock from "../../components/productsBlock";
import products from "../discountsPage/mockData";
import './style.css';

const categories = ["Любые товары", "Смесители", "Полотенцесушители", "Биде", "Душевые системы", "Ванны", "Унитазы", "Отопители", "Посудомоечные машины"];

const DiscountsPage = () => {
    return (
        <div className="discountPage">
            <h2 className="sectionHeadline"> Скидки</h2>
            <CategoriesBlock categories={categories}/>
            <ProductsBlock products={products}/>
            <div className="discountPage-banner">
                <p>ЕЩЕ ОДИН БАННЕР</p>
            </div>
        </div>
)
}

export default DiscountsPage;