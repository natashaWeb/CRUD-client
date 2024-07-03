import React from "react";
import { Link } from "react-router-dom";

export const Catalog = () => {
    return (
        <section className="home_container">
            <h2>Catalogos</h2>
            <div className="catalog_container">
                <article className="catalog">
                    <span>Hombre</span>
                    <Link to={"/products?categoria=hombre"}>Ir</Link>
                </article>
                <article className="catalog">
                    <span>Mujer</span>
                    <Link to={"/products?categoria=mujer"}>Ir</Link>
                </article>
                <article className="catalog">
                    <span>Niño</span>
                    <Link to={"/products?categoria=niño"}>Ir</Link>
                </article>
            </div>
        </section>
    );
};
