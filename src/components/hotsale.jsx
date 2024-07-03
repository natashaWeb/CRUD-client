import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useProductHotsale from "../hooks/useProductHotSale";

export const Hotsale = () => {
    const { currentIndex, productos, nextSlide, prevSlide } =
        useProductHotsale();
    return (
        <main className="home_container">
            <h2>Hot Sale</h2>
            <div className="carousel">
                <button className="control left" onClick={prevSlide}>
                    &lt;
                </button>

                <div
                    className="slider"
                    style={{
                        transform: `translateX(${currentIndex * -100}%)`,
                    }}
                >
                    {productos.length > 0 &&
                        productos.map((producto, index) => (
                            <Link
                                to={`/product/${producto._id}`}
                                className="hotsale_product"
                                key={index}
                            >
                                <img
                                    src={producto.imagen}
                                    alt={producto.titulo}
                                    className="image"
                                />
                                <span>{producto.titulo}</span>
                            </Link>
                        ))}
                    {productos.length === 0 && (
                        <h2>No hay productos para mostrar</h2>
                    )}
                </div>
                <button className="control right" onClick={nextSlide}>
                    &gt;
                </button>
            </div>
        </main>
    );
};
