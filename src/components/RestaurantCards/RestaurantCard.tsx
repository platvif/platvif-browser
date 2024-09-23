import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useEffect, useState } from "react"
import styles from './index.module.scss';
import MapModal from "@/shared/MapsModal/MapsModal";


export default function RestaurantCards({restaurants}:any) {

    const [open, setOpen] = useState(false);
    const [coordinates, setCoordiantes] = useState();
  
    useEffect(() => {
      console.log('Restaurant en cards!', restaurants);
    }, []);

    const handleOpen = (coordinates:any) => {
      setOpen(true)
      setCoordiantes(coordinates);
    };
    const handleClose = () => setOpen(false);


    return (
        <>
        {restaurants.map((restaurant:any) => (
          <>
          <Card key={restaurant.id} className={styles.restaurantContainerCard} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              sx={{ height: 140, maskImage: 'linear-gradient(black 85%, transparent)' }}
              image={restaurant.image_url}
              title={restaurant.name}
            />
            <CardContent>
              <Typography 
                  gutterBottom
                  variant="h5" 
                  component="div"
                  sx={{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '80%'}}
                  >
                {restaurant.name}
              </Typography>
              <Typography 
                variant="body1"
                component="div"
                sx={{width:'fit-content', color: restaurant.is_closed ? 'red' : 'green', position: 'absolute', right: '5%', bottom: '38%'}}
                >
                {restaurant.is_closed ? 'Closed': 'Open'}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {restaurant.location.address1}, {restaurant.location.city}, {restaurant.location.country}
              </Typography>
            </CardContent>
            <CardActions sx={{position: 'absolute', bottom: '1%', left: '2%', width: '100%'}}>
              <Button className={styles.btn} size="small" sx={{border: '2px solid var(--secondary-color)', background:'var(--secondary-color)', color: 'white', fontWeight: '600', marginRight: '5%'}}>Reserve</Button>
              <Button className={styles.btn} size="small" sx={{border: '2px solid var(--secondary-color)', background:'var(--secondary-color)', color: 'white', fontWeight: '600', marginRight: '20%'}}>Learn More</Button>
              <IconButton onClick={() => handleOpen(restaurant.coordinates)} sx={{color: 'var(--secondary-color)'}} aria-label="Show Location" >
                <LocationOnOutlinedIcon /> 
              </IconButton>
            </CardActions>
          </Card>
          <MapModal open={open} handleClose={handleClose} coordinates={restaurant.coordinates}/>
          </>

        ))}
        </>
    )
}