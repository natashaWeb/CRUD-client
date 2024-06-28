import React, { useState } from "react";

export const Home = () => {
    // Creamos el estado para el slide actual
    const [currentSlide, setCurrentSlide] = useState(0);

    // Variable con datos de cada slide
    const slides = [
        {
            id: 1,
            imageUrl: "/ejemplo1.jpeg",
            caption: "Buzo gris",
        },
        {
            id: 2,
            imageUrl: "/ejemplo2.jpeg",
            caption: "Remera gris",
        },
        {
            id: 3,
            imageUrl: "/ejemplo3.jpeg",
            caption: "Campera roja",
        },
    ];

    // Funciones para cambiar de slide
    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };
    
    return (
        <main className="hotsale_container">
            <div className="title_container">
                <h1>High Store</h1>
                <button>Ver productos {">"} </button>
            </div>

            <div className="slide-container">
                <div className="slide">
                    <img
                        src={slides[currentSlide].imageUrl}
                        alt={slides[currentSlide].caption}
                    />
                    <div className="caption">
                        {slides[currentSlide].caption}
                    </div>
                </div>
                <button className="prev" onClick={prevSlide}>
                    &#10094;
                </button>
                <button className="next" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
        </main>
    );
};
