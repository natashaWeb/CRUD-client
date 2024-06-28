import React, { useState } from "react";
import { Link } from "react-router-dom";

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
            <Link href="/">
                <FaShop />
            </Link>
            <FaBars onClick={() => setMenu(!menu)} />
            <nav className="nav_container">
                <ul className={`item_container ${menu && "active"}`}>
                    <li>
                        <Link href="/" className="item">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href="/products" className="item">
                            Productos
                        </Link>
                    </li>
                    {rol > 0 && (
                        <>
                            <li>
                                <Link href="/myproducts" className="item">
                                    Mis productos
                                </Link>
                            </li>
                            <li>
                                <Link href="/product/new" className="item">
                                    Nuevo producto
                                </Link>
                            </li>
                        </>
                    )}
                    {isLoggedIn ? (
                        <li>
                            <Link
                                href="/login"
                                className="item"
                                onClick={() => handleLogout()}
                            >
                                Cerrar sesion
                            </Link>
                        </li>
                    ) : (
                        <li>
                            <Link href="/login" className="item">
                                Iniciar sesion
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};
