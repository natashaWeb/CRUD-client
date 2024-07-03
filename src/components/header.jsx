import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaShop, FaBars } from "react-icons/fa6";

import "../styles/header.css";

import { useAuth } from "../context/authContext";

export const Header = () => {
    const [menu, setMenu] = useState(false);
    const { rol, isLoggedIn, logout } = useAuth();

    return (
        <header className="header_container">
            <h1 className="header_title">Sport Active</h1>
            <FaBars className="nav_btn" onClick={() => setMenu(!menu)} />
            <nav className={`nav_container ${menu && "active"}`}>
                <ul className="item_container">
                    <li>
                        <Link to={"/"}>Inicio</Link>
                    </li>
                    <li>
                        <Link to={"/products"}>Productos</Link>
                    </li>
                    {isLoggedIn && (
                        <>
                            <li>
                                <Link to={"/myproducts"}>Mis productos</Link>
                            </li>
                            <li>
                                <Link to={"/product/new"}>Crear producto</Link>
                            </li>
                            <li>
                                <span onClick={logout}>Cerrar sesion</span>
                            </li>
                        </>
                    )}
                    {!isLoggedIn && (
                        <li>
                            <Link to={"/login"}>Inciar sesion</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};
