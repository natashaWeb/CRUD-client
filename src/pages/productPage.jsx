import React from "react";
import { useParams } from "react-router-dom";
import useProductById from "../hooks/useProductById";

export const ProductPage = () => {
    const { id } = useParams();
    const producto = useProductById(id);
    return (
        <main className="home_container">
            {producto && (
                <div className="product_page">
                    <img src={producto.imagen} alt="" />
                    <h1>{producto.titulo}</h1>
                    <span>{producto.categoria}</span>
                    <span>${producto.precio}</span>
                </div>
            )}
        </main>
    );
};
