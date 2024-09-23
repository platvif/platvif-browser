import { InputAdornment, TextField } from "@mui/material"
import styles from './index.module.scss';
import SearchIcon from '@mui/icons-material/Search'; 
import { useState } from "react";

export default function Search() {
    const [showContainer, setShowContainer] = useState(false);

    const handleClick = () => {
        setShowContainer(!showContainer);
    }

    return (
        <>
            <TextField 
                className={styles.input} 
                size='medium' 
                type='text' 
                required 
                id="outlined-basic" 
                label="Search" 
                variant="outlined"
                color="primary"
                onClick={handleClick}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon color="primary"/>
                        </InputAdornment>
                    )
                }}
                />

            {/* {showContainer && (
                
            )} */}
        </>
    )
}