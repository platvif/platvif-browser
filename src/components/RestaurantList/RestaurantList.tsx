import { Restaurants } from "@/services/yelpService";
import { useEffect, useState } from "react";
import RestaurantCards from "../RestaurantCards/RestaurantCard";


export default function RestaurantList() {

    const [restaurants, setRestaurants] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                let data = await Restaurants();
                console.log('Respuesta del servidor => ', data);
                setRestaurants(data); // Guardar los datos en el estado.
            } catch(error) {
                console.error('Error al obtener la lista de restaurantes', error);
                setError('No se pudo obtener la lista de restaurantes.');
            }
        };

        fetchRestaurants(); // Ejecutamos la funcion.
    }, []); // El array vacio asegura que el efecto solo se ejecute una vez al montar el componente.
   
    return (
        <>
            {error && <div>{error}</div>}
            <RestaurantCards restaurants={restaurants}/>
        </>
    )
}