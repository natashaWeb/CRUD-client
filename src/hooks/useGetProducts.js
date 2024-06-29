import { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";

const useGetProduct = () => {
    const [productos, setProductos] = useState([]);
    const { myId } = useAuth();
    const { VITE_API } = import.meta.env;

    useEffect(() => {
        const getProducts = async () => {
            try {
                const token = localStorage.getItem("token");

                let opcionesEnvio = {};
                let url = "";

                // Determinar la URL y las opciones de envío basadas en la ruta actual
                if (window.location.pathname === "/products") {
                    opcionesEnvio = {
                        method: "GET",
                    };
                    url = "/product/get";
                } else {
                    opcionesEnvio = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: token,
                        },
                        body: JSON.stringify({ ownerId: myId }),
                    };
                    url = "/myproduct/get";
                }

                // Realizar la solicitud a la API
                const response = await fetch(
                    `${VITE_API}${url}`,
                    opcionesEnvio
                );

                // Verificar si la respuesta fue exitosa
                if (!response.ok) {
                    throw new Error(
                        "Error al obtener productos: " + response.status
                    );
                }

                // Parsear la respuesta a formato JSON
                const responseData = await response.json();

                // Establecer el estado de productos con los datos recibidos
                setProductos(responseData);
            } catch (error) {
                console.error("Error en la solicitud de productos:", error);
            }
        };

        getProducts();
    }, [myId, productos]);

    return { productos, setProductos };
};

export default useGetProduct;
