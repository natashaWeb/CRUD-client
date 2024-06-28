import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useParams } from "react-router-dom";

const useEditProduct = () => {
    const { myId } = useAuth();
    const { id } = useParams();
    const [datosProducto, setDatosProducto] = useState({
        titulo: "",
        precio: 0,
        imagen: "",
        ownerId: myId,
    });

    const { VITE_API } = import.meta.env;

    // Función para manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Convertir el valor de precio a entero si el nombre es "precio"
        if (name === "precio") {
            setDatosProducto({ ...datosProducto, [name]: parseInt(value) });
        } else {
            setDatosProducto({ ...datosProducto, [name]: value });
        }
    };

    // Función para manejar el envío del formulario de edición
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación de campos obligatorios
        if (!datosProducto.titulo || !datosProducto.precio) {
            console.error("Por favor ingrese título y precio.");
            return;
        }

        // Validar existencia de token
        const token = localStorage.getItem("token");
        if (!token) {
            throw new Error("No se ha iniciado sesión.");
        }

        // Configurar las opciones de envío para la solicitud PUT
        const opcionesEnvio = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify(datosProducto),
        };

        try {
            // Realizar la solicitud PUT para editar el producto específico
            const response = await fetch(
                `${VITE_API}/product/edit/${id}`,
                opcionesEnvio
            );

            // Verificar si la solicitud fue exitosa
            if (!response.ok) {
                throw new Error("Error en la solicitud: " + response.status);
            }
            const responseData = await response.json();

            window.location.replace("/myproducts");
        } catch (error) {
            console.error("Error al editar el producto:", error);
        }
    };

    return {
        handleChange,
        handleSubmit,
    };
};

export default useEditProduct;
