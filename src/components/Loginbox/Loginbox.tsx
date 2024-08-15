import { Box, InputAdornment, TextField } from '@mui/material';
import styles from './index.module.scss';
import { useState } from "react";
import { AccountCircle } from '@mui/icons-material';
import Image from 'next/image';
import LoginLogo from '@/assets/platvif.png';


export default function Loginbox() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <>
        <div className={styles.container}>
            <div className={styles.login_box}>
                {isLogin ? (
                    <form className={styles.form} action="">
                        <Image src={LoginLogo} alt='Login' className={styles.logo} />
                        <div className={styles.inputs}>
                            <input type="text" aria-label='User' placeholder='User' className={styles.input}/>
                            <input type="password" aria-label='Password' placeholder='Password' className={styles.input}/>
                        </div>
                    </form>
                ) : (
                    <div></div>
                )} 
            </div>
        </div>
        </>
    )
}