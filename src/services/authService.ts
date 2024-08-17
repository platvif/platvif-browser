import axios from 'axios';
import { Post } from '../services/communicationService';

export const login = async (user:string, password:string) => {
    try {
        let body = {
            mail: user,
            pass: password
          }
    
        // const login = await Post('authService', 'login', '', body);
        const login = await axios.post('http://localhost:3000/api/user/login', body)
        console.log('Respuesta obtenida => ', login);
        return login.data;
    } catch(error) {
        return console.error('Error al hacer login', error); 
    }
}