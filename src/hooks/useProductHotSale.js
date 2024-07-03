import React, { useState, useEffect } from "react";

const useProductHotsale = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [productos, setProductos] = useState([]);
    const { VITE_API } = import.meta.env;

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch(`${VITE_API}/product/hotsale/get`);
                if (!response.ok) {
                    throw new Error("Error al obtener los productos");
                }
                const data = await response.json();
                setProductos(data);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        };

        fetchProductos();
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === productos.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? productos.length - 1 : prevIndex - 1
        );
    };

    return { currentIndex, productos, nextSlide, prevSlide };
};

export default useProductHotsale;
