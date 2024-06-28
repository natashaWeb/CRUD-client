import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [myId, setMyId] = useState("");
    const [rol, setRol] = useState(0);
    const [sessionVerified, setSessionVerified] = useState(false);

    const logout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
    };

    useEffect(() => {
        const { VITE_API } = import.meta.env;

        const verifySession = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setIsLoggedIn(false);
                    setSessionVerified(true); // Marcar la sesión como verificada
                    return;
                }

                const opcionesEnvio = {
                    method: "GET",
                    headers: {
                        authorization: token,
                    },
                };

                const response = await fetch(
                    `${VITE_API}/verificar`,
                    opcionesEnvio
                );

                if (!response.ok) {
                    setIsLoggedIn(false);
                    setSessionVerified(true); // Marcar la sesión como verificada
                    return;
                }

                const responseData = await response.json();
                setMyId(responseData.myId);
                setRol(responseData.rol);
                setIsLoggedIn(true);
                setSessionVerified(true); // Marcar la sesión como verificada
            } catch (error) {
                console.error("Error al verificar sesión:", error);
                setIsLoggedIn(false);
                setSessionVerified(true); // Marcar la sesión como verificada
            }
        };

        // Verificar la sesión solo si no se ha verificado previamente
        if (!sessionVerified) {
            verifySession();
        }
    }, [sessionVerified, isLoggedIn]); // Ejecutar el efecto cuando sessionVerified cambia

    return (
        <AuthContext.Provider value={{ isLoggedIn, myId, rol, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return React.useContext(AuthContext);
};
