import React from 'react'
import LoginPage from 'pages/login/LoginPage';
import DiscussPage from 'pages/discuss/DiscussPage';
import Navbar from 'components/navbars/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet
} from "react-router-dom";
import DetailQuestionsPage from 'pages/details-question/DetailQuestionsPage';

export default function SetupRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WithNavbar />}>
                    {/* 
                        Discuss Pages
                    */}
                    <Route path="/discuss" element={<DiscussPage />} />

                    {/* 
                        Question Pages
                    */}
                    <Route path="/question/:id/:title" element={<DetailQuestionsPage />} />

                    {/* 
                        Contact Pages
                    */}
                    <Route path="/contact" element={<h1>Ini halaman contact</h1>} />
                </Route>

                {/* 
                    Login Page
                */}
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