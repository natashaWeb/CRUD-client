import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSendLogin = () => {
    const [credenciales, setCredenciales] = useState({
        usuario: "",
        contraseña: "",
    });

    const { VITE_API } = import.meta.env;

    // Función para manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredenciales({ ...credenciales, [name]: value });
    };

    // Función para enviar la solicitud de login
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Validar que usuario y contraseña no estén vacíos
            if (!credenciales.usuario || !credenciales.contraseña) {
                throw new Error("Por favor ingrese usuario y contraseña.");
            }

            const opcionesEnvio = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credenciales),
            };

            const response = await fetch(`${VITE_API}/login`, opcionesEnvio);

            if (!response.ok) {
                throw new Error("Error en la solicitud: " + response.status);
            }

            const responseData = await response.json();

            // Almacenar el token en localStorage
            localStorage.setItem("token", responseData.token);

            console.log("Sesión iniciada con éxito:", responseData);

            // Redirigir al usuario a la página de productos
            window.location.reload()
        } catch (error) {
            console.error("Error al enviar la solicitud:", error.message);
        }
    };

    return {
        handleSubmit,
        handleChange,
    };
};

export default useSendLogin;
