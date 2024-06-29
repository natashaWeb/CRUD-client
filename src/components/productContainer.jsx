import React from "react";
import { Product } from "./product";

import "../styles/products.css";

import useGetProduct from "../hooks/useGetProducts";

export const ProductContainer = () => {
    const { productos, setProductos } = useGetProduct();
    return (
        <section className="product_container">
            {productos.map((producto) => (
                <Product
                    key={producto._id}
                    titulo={producto.titulo}
                    precio={producto.precio}
                    imagen={producto.imagen}
                    ownerId={producto.ownerId}
                    id={producto._id}
                    productos={productos}
                    setProductos={setProductos}
                />
            ))}
        </section>
    );
};
