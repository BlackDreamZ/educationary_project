import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Link, NavLink, Outlet, Route, Routes} from "react-router";
import {Header} from './components/header/index';
import {HomePage} from "./pages/homePage";
import ArticlesPage from "./pages/articlesPage";
import BestsellersPage from "./pages/bestsellersPage";
import CollectionTilePage from "./pages/collectionTilePage";
import DiscountsPage from "./pages/discountsPage";
import PopularBrandsPage from "./pages/popularBrandsPage";
import NotFoundPage from "./pages/notFoundPage";
import './normalize.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <BrowserRouter>
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/collections-tiles" element={<CollectionTilePage/>}/>
                <Route path="/bestsellers" element={<BestsellersPage/>}/>
                <Route path="/discounts" element={<DiscountsPage/>}/>
                <Route path="/popular-brends" element={<PopularBrandsPage/>}/>
                <Route path="/articles" element={<ArticlesPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </div>
    </BrowserRouter>
);