import { useNavigate } from "react-router-dom";

const useDeleteProduct = () => {
    const { VITE_API } = import.meta.env;

    // Función para eliminar un producto por su ID
    const deleteProduct = async (id, productos, setProductos) => {
        const decision = window.confirm("¿Quieres eliminar el producto?");
        if (decision) {
            // Validar existencia de token
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("No se ha iniciado sesión.");
            }

            // Configurar las opciones de envío para la solicitud DELETE
            const opcionesEnvio = {
                method: "DELETE",
                headers: {
                    Authorization: token,
                },
            };

            try {
                // Realizar la solicitud DELETE para eliminar el producto específico
                const response = await fetch(
                    `${VITE_API}/product/delete/${id}`,
                    opcionesEnvio
                );

                // Verificar si la solicitud fue exitosa
                if (!response.ok) {
                    throw new Error(
                        "Error en la solicitud: " + response.status
                    );
                }
                const responseData = await response.json();
                console.log(productos)
                const nuevosProductos = productos.filter(
                    (producto) => producto._id !== responseData._id
                );
                setProductos(nuevosProductos);
            } catch (error) {
                console.error("Error al eliminar el producto:", error);
            }
        }
    };

    return {
        deleteProduct,
    };
};

export default useDeleteProduct;
