import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Products } from "./pages/products";
import { ProductNew } from "./pages/productNew";
import { ProductEdit } from "./pages/productEdit";
import { Header } from "./components/header";

import { useAuth } from "./context/authContext";

import "./styles/reset.css";

export const App = () => {
    const { isLoggedIn, rol } = useAuth();
    return (
        <>
            <Router>
                <Header />

                <Routes>
                    <Route exact path="/products" element={<Products />} />
                    <Route exact path="/" element={<Home />} />
                    <Route
                        exact
                        path="/login"
                        element={isLoggedIn ? <Navigate to={"/"} /> : <Login />}
                    />

                    <Route
                        exact
                        path="/myproducts"
                        element={isLoggedIn ? <Products /> : <Login />}
                    />

                    <Route
                        exact
                        path="/product/edit/:id"
                        element={isLoggedIn ? <ProductEdit /> : <Login />}
                    />
                    <Route
                        exact
                        path="/product/new"
                        element={isLoggedIn ? <ProductNew /> : <Login />}
                    />
                    <Route path="*" element={<Navigate to={"/"} />} />
                </Routes>
            </Router>
        </>
    );
};
