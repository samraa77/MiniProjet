// /src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ChangeColorPage from './components/ChangeColorPage';
import ProfilePage from './components/ProfilePage';
import Header from './components/Header';

import './styles/changeColor.css';


const AppContent = () => {
    const userColor = useSelector((state) => state.user.couleur);
    const location = useLocation();

    return (
        <div style={{ backgroundColor: userColor, minHeight: '100vh', paddingTop: location.pathname !== '/login' && location.pathname !== '/register' ? '60px' : '0' }}>
            {location.pathname !== '/login' && location.pathname !== '/register' && <Header />}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/color" element={<ChangeColorPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                {/* Ajouter d'autres routes ici */}
            </Routes>
        </div>
    );
};

const App = () => (
    <Router>
        <AppContent />
    </Router>
);

export default App;
