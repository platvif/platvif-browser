import HomeNavbar from "@/components/Navbar/Navbar"
import { useState } from "react"
import styles from './index.module.scss';
import ReserveMaker from "../ReserveMaker/ReserveMaker";
import MyReserves from "../MyReserves/MyReserves";
import Favorites from "../Favorites/Favorites";
import Reviews from "../Reviews/Reviews";
import AboutUs from "../AboutUs/AboutUs";
import Preferences from "../Preferences/Preferences";


export default function HomePage() {

    const [selectedComponent, setSelectedComponent] = useState<string>('Dashboard');

    const renderComponent = () => {
        switch (selectedComponent) {
            case "Reserve":
              return <ReserveMaker />;
            case "MyReserves":
              return <MyReserves/>;
            case "Favorites":
              return <Favorites/>;
            case "Reviews":
              return <Reviews/>;
            case "AboutUs":
              return <AboutUs/>;
            case "Logout":
              // Logica para el logout.
              return <div>Logout</div>;
            case "Preferences":
              return <Preferences/>;
            default:
              return <ReserveMaker />
        }
    };

    return (
        <>
            <div className={styles.container}>
                <HomeNavbar onSelect={setSelectedComponent}/>
                <div className={styles.component_container}>
                    {renderComponent()}
                </div>
            </div>
        </>
    )
}