import { useEffect } from "react"

export default function MapModal({open, handleClose, coordinates}:any) {
    
    useEffect(() => {
      console.log('coordinates in modal: ', coordinates);
    }, [])
    

    return (
        <>
        
        </>
    )
}