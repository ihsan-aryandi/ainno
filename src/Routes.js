import React from 'react'
import LoginPage from 'pages/login/LoginPage';
import Navbar from 'components/navbars/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet
} from "react-router-dom";

export default function SetupRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WithNavbar />}>
                    <Route path="/discuss" element={<h1>Ini halaman discuss</h1>} />
                    <Route path="/contact" element={<h1>Ini halaman contact</h1>} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>        
    )
}

function WithNavbar() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}