import { Box, Button, InputAdornment, TextField } from '@mui/material';
import styles from './index.module.scss';
import React, { useState } from "react";
import { AccountCircle } from '@mui/icons-material';
import Image from 'next/image';
import LoginLogo from '@/assets/platvif.png';
import { login } from '@/services/authService';

interface LoginboxProps {
    onLogin: () => void;
}


export default function LoginBox({onLogin}: LoginboxProps) {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleLogin = async(e: React.FormEvent) => {
        e.preventDefault();

        try {
            const data = await login(username, password);
            console.log('Respuesta del servidor', data);

            if(data.mail == username) {
                console.log('Usuario Autenticado, loguenadose...');
                onLogin();
            }
        } catch(error) {
            console.error('Error al iniciar sesion: ', error);
        }
    }
    
    return (
        <>
        <div className={styles.container}>
            <div className={styles.login_box}>
                {isLogin ? (
                    <>
                        <form onSubmit={handleLogin} className={styles.form} action="">
                            <Image src={LoginLogo} alt='Login' className={styles.logo} />
                            <div className={styles.inputs}>
                                <TextField className={styles.input} size='small' type='text' value={username} required onChange={(e) => setUsername(e.target.value)} id="outlined-basic" label="User" variant="outlined" />
                                <TextField className={styles.input} size='small' type='password' value={password} required onChange={(e) => setPassword(e.target.value)}  id="outlined-basic" label="Password" variant="outlined" />
                            </div>
                            <div className={styles.login_container}>
                                <Button className={styles.btn_login} variant="contained" type="submit">Login</Button>
                            </div>
                            <div className={styles.register_container}>
                                <Button className={styles.btn_register} variant="text" onClick={toggleForm}>Register</Button>
                            </div>
                        </form>
                    </>
                ) : (
                    <>
                        <form className={styles.form} action="">
                            <Image src={LoginLogo} alt='Login' className={styles.logo} />
                            <div className={styles.inputs}>
                                <TextField className={styles.input} size='small' type='text' id="outlined-basic" label="User" variant="outlined" />
                                <TextField className={styles.input} size='small' type='password' id="outlined-basic" label="Password" variant="outlined" />
                            </div>
                            <div className={styles.login_container}>
                                <Button className={styles.btn_login} variant="contained">Register</Button>
                            </div>
                            <div className={styles.register_container}>
                                <Button className={styles.btn_register} variant="text" onClick={toggleForm}>Login</Button>
                            </div>
                        </form>
                    </>
                )} 
            </div>
        </div>
        </>
    )
}