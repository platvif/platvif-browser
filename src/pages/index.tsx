import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Loginbox from "@/components/Loginbox/Loginbox";
import { useState } from "react";
import HomePage from "./HomePage/HomePage";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = () => {
    setIsLoggedIn(true); // Cambiar el estado de logueado
  }

  return (
    <>
      {
        isLoggedIn ? (
          <HomePage/>
        ) : (
          <Loginbox onLogin={handleLogin}/>
        )
      }
    </>
  );
}
