import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaShop, FaBars } from "react-icons/fa6";

import "../styles/header.css";

import { useAuth } from "../context/authContext";

export const Header = () => {
    const [menu, setMenu] = useState(false);
    const { rol, isLoggedIn } = useAuth();
    const handleLogout = () => {
        const navigate = useNavigate();
        localStorage.removeItem("token");
        localStorage.removeItem("myId");
        localStorage.removeItem("rol");
        navigate('/login')
    };
    return (
        <header className="header_container">
            <Link to="/">
                <FaShop />
            </Link>
            <FaBars onClick={() => setMenu(!menu)} />
            <nav className="nav_container">
                <ul className={`item_container ${menu && "active"}`}>
                    <li>
                        <Link to="/" className="item">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className="item">
                            Productos
                        </Link>
                    </li>
                    {rol > 0 && (
                        <>
                            <li>
                                <Link to="/myproducts" className="item">
                                    Mis productos
                                </Link>
                            </li>
                            <li>
                                <Link to="/product/new" className="item">
                                    Nuevo producto
                                </Link>
                            </li>
                        </>
                    )}
                    {isLoggedIn ? (
                        <li>
                            <Link
                                to="/login"
                                className="item"
                                onClick={() => handleLogout()}
                            >
                                Cerrar sesion
                            </Link>
                        </li>
                    ) : (
                        <li>
                            <span className="item">
                                Iniciar sesion
                            </span>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};
