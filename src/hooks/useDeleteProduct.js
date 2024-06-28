const useDeleteProduct = () => {
    const { VITE_API } = import.meta.env;

    // Función para eliminar un producto por su ID
    const deleteProduct = async (id) => {
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

                // Recargar la página después de eliminar exitosamente el producto
                window.location.reload();
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
