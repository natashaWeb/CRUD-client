import React, { useEffect, useState } from "react";

import { ProductContainer } from "../components/productContainer";

import "../styles/home.css";

export const Products = () => {
    useEffect(() => {
        window.location.reload();
    }, []);

    return (
        <main className="home_container">
            <h1>
                {window.location.pathname === "/products" && "Productos"}
                {window.location.pathname === "/myproducts" && "Mis productos"}
            </h1>

            <ProductContainer />
        </main>
    );
};
