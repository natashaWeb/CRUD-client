import React, { useState, useEffect } from "react";

const useProductById = (id) => {
    const [producto, setProducto] = useState(null);
    const { VITE_API } = import.meta.env;

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const response = await fetch(`${VITE_API}/product/get/${id}`);
                if (!response.ok) {
                    throw new Error("Error al obtener el producto");
                }
                const data = await response.json();
                setProducto(data);
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            }
        };

        if (id) {
            fetchProducto();
        }
    }, [id]);

    return producto;
};

export default useProductById;
