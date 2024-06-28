import React, { useState } from "react";

import { FaShop, FaBars } from "react-icons/fa6";

import "../styles/header.css";

import { useAuth } from "../context/authContext";

export const Header = () => {
    const [menu, setMenu] = useState(false);
    const { rol, isLoggedIn } = useAuth();
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("myId");
        localStorage.removeItem("rol");
        window.location.reload();
    };
    return (
        <header className="header_container">
            <a href="/">
                <FaShop />
            </a>
            <FaBars onClick={() => setMenu(!menu)} />
            <nav className="nav_container">
                <ul className={`item_container ${menu && "active"}`}>
                    <li>
                        <a href="/" className="item">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="/products" className="item">
                            Productos
                        </a>
                    </li>
                    {rol > 0 && (
                        <>
                            <li>
                                <a href="/myproducts" className="item">
                                    Mis productos
                                </a>
                            </li>
                            <li>
                                <a href="/product/new" className="item">
                                    Nuevo producto
                                </a>
                            </li>
                        </>
                    )}
                    {isLoggedIn ? (
                        <li>
                            <a
                                href="/login"
                                className="item"
                                onClick={() => handleLogout()}
                            >
                                Cerrar sesion
                            </a>
                        </li>
                    ) : (
                        <li>
                            <a href="/login" className="item">
                                Iniciar sesion
                            </a>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};
