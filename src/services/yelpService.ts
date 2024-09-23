import axios from 'axios';
// http://localhost:3000/api/yelp/search?

interface GeolocationCoords {
    latitude: number;
    longitude: number;
}

const getLocation = (): Promise<GeolocationCoords> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                let latitude = pos.coords.latitude;
                let longitude = pos.coords.longitude;
                resolve({latitude, longitude});
            },
            (error) => {
                reject(error);
            }
        )
    })
    
    // navigator.geolocation.getCurrentPosition((pos) => {
    //     let latitude = pos.coords.latitude;
    //     let longitude = pos.coords.longitude;
    //     console.log('Latitude & Longitude', latitude, longitude);
    //     return {latitude, longitude};
    // })
}

export const Restaurants = async () => {
    try {
        const { latitude, longitude } = await getLocation(); 
        console.log('Latitude & Longitude', latitude, longitude);
        
        // http://localhost:3000/api/yelp/search?term=cafeter%C3%ADa&location=Barcelona&radius=8000&price=2&term=burger
        const response = await axios.get(`http://localhost:3000/api/yelp/search?latitude=${latitude}&longitude=${longitude}`);
        console.log('Respuesta obtenida => ', response.data);
        return response.data;
    } catch(error) { 
        return console.error('Error al obtener la lista de restaurantes =>', error); 
    }
}