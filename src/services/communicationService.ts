import axios from 'axios';
import { url_services } from '@/constants/constants';


const getURLbase = async () => {
    const url = `${url_services.addresses.base_protocol}://${url_services.addresses.base_url}/${url_services.addresses.port}`;
    return url;
}

const getMicroServByName = async (service:string, hostName:string) => {
    try {
        const url_base = await getURLbase(); // Brings the URL BASE.
        const services = url_services.microserv.find(service => service.name == 'authService'); // Brings the entire microservice object.
        const path = services?.microservices.find(microservice => microservice.name == hostName);
        const url_formatted = `${url_base}/${services?.path}/${path}`; // Example: ${https://localhost:3000}${api/user}/${login};
        return url_formatted;
    } catch(error) {
        return console.error(`Error en traer microservicio`, error);
    }
}
// Example: Post('authService', 'login', )
export const Post = async(service: string, hostName:string, base_url:string, params?:any) => {
    try {
        const microservice_url = await getMicroServByName(service, hostName).then((res) => {
            console.log(res);
        })

        const url = `${microservice_url}/${base_url}`;
        console.log(url);
        
        const response = await axios.post(`${microservice_url}/${base_url}`, params);
        

        return response;
    } catch(error) {
        return console.error(`Error al hacer POST a ${hostName}`, error);
    }
}

// const get = async(service:string, hostName: string, base_url:string, params?:any) => {
//     // try {
//     //     const response = await axios.post(`${url_services.addresses.base_protocol}${url_services.addresses.base_url}:${url_services.addresses.port}/`)
//     // }
    
// }