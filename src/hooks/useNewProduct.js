import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const useNewProduct = () => {
    const navigate = useNavigate();
    const { myId } = useAuth();
    const [datosProducto, setDatosProducto] = useState({
        titulo: "",
        precio: 0,
        imagen: "",
        categoria: "",
        ownerId: myId,
    });

    const { VITE_API } = import.meta.env;

    // Función para manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "precio") {
            setDatosProducto({
                ...datosProducto,
                [name]: parseInt(value) || 0,
            });
        } else {
            setDatosProducto({ ...datosProducto, [name]: value });
        }
    };

    // Función para enviar la solicitud de creación de nuevo producto
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Validar existencia de token
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("No se ha iniciado sesión.");
            }

            // Validar datos
            if (
                datosProducto.titulo.length === 0 ||
                datosProducto.precio < 0 ||
                datosProducto.imagen.length === 0 ||
                datosProducto.categoria.length === 0
            ) {
                alert("Complete todos los campos");
                throw new Error("Complete todos los campos");
            }

            const opcionesEnvio = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                body: JSON.stringify(datosProducto),
            };

            const response = await fetch(
                `${VITE_API}/product/new`,
                opcionesEnvio
            );

            if (!response.ok) {
                throw new Error("Error en la solicitud: " + response.status);
            }

            const responseData = await response.json();
            console.log("Producto creado exitosamente:", responseData);
            // Redirigir al usuario después de crear el producto
            navigate("/myproducts");
        } catch (error) {
            console.error("Error al crear el producto:", error.message);
        }
    };

    return {
        handleSubmit,
        handleChange,
    };
};

export default useNewProduct;
