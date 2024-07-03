import React from "react";

import "../styles/productForm.css";
import useNewProduct from "../hooks/useNewProduct";

export const ProductNew = () => {
    const { handleChange, handleSubmit } = useNewProduct();
    return (
        <form className="form_container" onSubmit={(e) => handleSubmit(e)}>
            <h1>Nuevo producto</h1>
            <span>Seleccione imagen</span>
            <div className="img_input_container">
                <label className="img_input">
                    <input
                        type="radio"
                        name="imagen"
                        value={"/ejemplo1.jpeg"}
                        className="input_radio1"
                        onChange={(e) => handleChange(e)}
                    />
                    <img src="/ejemplo1.jpeg" alt="" className="img_input1" />
                </label>
                <label className="img_input">
                    <input
                        type="radio"
                        name="imagen"
                        value={"/ejemplo2.jpeg"}
                        className="input_radio2"
                        onChange={(e) => handleChange(e)}
                    />
                    <img src="/ejemplo2.jpeg" alt="" className="img_input2" />
                </label>
                <label className="img_input">
                    <input
                        type="radio"
                        name="imagen"
                        value={"/ejemplo3.jpeg"}
                        className="input_radio3"
                        onChange={(e) => handleChange(e)}
                    />
                    <img src="/ejemplo3.jpeg" alt="" className="img_input3" />
                </label>
            </div>
            <div className="data_input">
                <input
                    type="text"
                    placeholder="Titulo del producto"
                    name="titulo"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    type="number"
                    placeholder="Precio del producto"
                    name="precio"
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="radio-inputs">
                <label className="radio">
                    <input type="radio" name="categoria" value={"hombre"} onChange={(e) => handleChange(e)}/>
                    <span className="name">Hombre</span>
                </label>
                <label className="radio">
                    <input type="radio" name="categoria" value={"mujer"} onChange={(e) => handleChange(e)}/>
                    <span className="name">Mujer</span>
                </label>

                <label className="radio">
                    <input type="radio" name="categoria" value={"niño"} onChange={(e) => handleChange(e)}/>
                    <span className="name">Niño</span>
                </label>
            </div>
            <input type="submit" className="submit_input" value={"Agregar"} />
        </form>
    );
};
