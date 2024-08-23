import HomeNavbar from "@/components/Navbar/Navbar"
import { useState } from "react"
import styles from './index.module.scss';

export default function HomePage() {

    const [selectedComponent, setSelectedComponent] = useState<string>('Dashboard');

    const renderComponent = () => {
        switch (selectedComponent) {
            case "Profile":
              return <div>Perfil del usuario</div>;
            case "Dashboard":
              return <div>Dashboard</div>;
            case "Activity":
              return <div>Actividad</div>;
            case "Analytics":
              return <div>Análisis</div>;
            case "System":
              return <div>Sistema</div>;
            case "Deployments":
              return <div>Despliegues</div>;
            case "MySettings":
              return <div>Mis Configuraciones</div>;
            case "TeamSettings":
              return <div>Configuraciones del Equipo</div>;
            case "Help":
              return <div>Ayuda y Feedback</div>;
            case "Logout":
              // Lógica de cierre de sesión
              return <div>Has cerrado sesión</div>;
            case "Login":
              return <div>Login</div>;
            case "SignUp":
              return <div>Registro</div>;
            default:
              return <div>Dashboard</div>;
        }
    };

    return (
        <>
            <div className={styles.container}>
                <HomeNavbar onSelect={setSelectedComponent}/>
                <div style={{padding: '20px'}}>
                    {renderComponent()}
                </div>
            </div>
        </>
    )
}