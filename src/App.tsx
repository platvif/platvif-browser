import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginBox from "./components/Loginbox/Loginbox";
import Home from "./pages";

export default function App() {
    return (
        // <Router>
            <Routes>
                <Route path='/' element={<LoginBox/>}/>
                <Route path='/home' element={<Home/>}/>
                {/* Here is going to be a HomePage or a HomeComponent, whatever... here is going to be the magic!*/}
            </Routes>
        // </Router>
    )
}