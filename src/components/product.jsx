import React, { useEffect, useState } from "react";

import { FaCartShopping, FaTrash, FaPencil } from "react-icons/fa6";

import { useAuth } from "../context/authContext";

import useDeleteProduct from '../hooks/useDeleteProduct'

export const Product = ({ id, ownerId, titulo, imagen, precio, productos, setProductos }) => {
    const { rol, myId } = useAuth();
    const [miProducto, setMiProducto] = useState(0);
    // rol 0 = Cliente
    // rol 1 = Vendedor
    // rol 2 == Admin
    // miProducto 0 = Producto ajeno
    // miProducto 1 = Producto propio
    useEffect(() => {
        if (myId == ownerId) setMiProducto(1);
        else setMiProducto(0);
    }, []);

    const {deleteProduct} = useDeleteProduct()

    return (
        <article className="card">
            <div className="card-img">
                <img src={`${imagen}`} alt="" />
            </div>
            <div className="card-info">
                <p className="text-title">{titulo}</p>
            </div>
            <div className="card-footer">
                <span className="text-title">${precio}</span>
                {/* En caso de ser admin se habilita la opcion de editar y eliminar */}
                {/* En caso de ser cliente unicamente se habilita la opcion de comprar */}
                {/* En caso de ser vendedor y ser producto propio se habilita la opcion de editar y eliminar */}
                {/* En caso de ser vendedor y ser producto ajeno unicamente se habilita la opcion de comprar */}
                {rol === 0 && <FaCartShopping className="button_icon buy" />}
                {rol === 1 && miProducto === 0 && (
                    <FaCartShopping className="button_icon buy" />
                )}
                {rol === 1 && miProducto === 1 && (
                    <div className="icon_container">
                        <FaTrash className="button_icon delete" onClick={()=>deleteProduct(id, productos, setProductos)}/>{" "}
                        <FaPencil className="button_icon edit" onClick={()=> window.location.replace(`/product/edit/${id}`)}/>
                    </div>
                )}
                {rol === 2 && (
                    <div className="icon_container">
                        <FaTrash className="button_icon delete" onClick={()=>deleteProduct(id, productos, setProductos)}/>{" "}
                        <FaPencil className="button_icon edit" onClick={()=> window.location.replace(`/product/edit/${id}`)}/>
                    </div>
                )}
            </div>
        </article>
    );
};
