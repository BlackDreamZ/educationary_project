import React from "react";
import ArticleItem from "../../components/ArticleItem";
import grease from '../../assets/images/articles/grease.png';
import soap from '../../assets/images/articles/soap.png';
import toilet3 from '../../assets/images/articles/toilet3.png';
import wash from '../../assets/images/articles/wash.png';
import './style.css';
import SeoSection from "../../components/seoSection";
import seoMockData from './mockData';

const ArticlesPage = (props) => {
    return (
        <div className="articlesPage">
            <h2 className="sectionHeadline"> Статьи</h2>
            <div className="articleItems">
                <ArticleItem src={soap} title="Актуальные и необычные аксессуары для ванной комнаты " />
                <ArticleItem src={wash} title="Какой температуры должна быть горячая вода? " />
                <ArticleItem src={toilet3} title="Конденсат на бачке унитаза: причины появления и способы устранения " />
                <ArticleItem src={grease} title="Анаэробный герметик для резьбовых соединений  " />
            </div>
            <SeoSection seoData={seoMockData} />
        </div>
    )
}

export default ArticlesPage;