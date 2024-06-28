import React, { useState } from "react";

import "../styles/login.css";

import useSendLogin from "../hooks/useSendLogin";

export const Login = () => {
    const { handleSubmit, handleChange } = useSendLogin();
    return (
        <main className="login_container">
            <form className="card" onSubmit={(e) => handleSubmit(e)}>
                <div className="card_header">
                    <h1 className="form_heading">Iniciar sesion</h1>
                </div>
                <div className="field">
                    <label>Usuario</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Usuario"
                        name="usuario"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="field">
                    <label>Contraseña</label>
                    <input
                        className="input"
                        type="password"
                        placeholder="Contraseña"
                        name="contraseña"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <button className="button">Entrar</button>
            </form>
        </main>
    );
};
