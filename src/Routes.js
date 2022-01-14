import React from 'react'
import LoginPage from 'pages/login/LoginPage';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

export default function SetupRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} exact />
            </Routes>
        </Router>        
    )
}
