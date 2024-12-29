// /src/components/Header.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/authSlice';

const Header = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <div>
            <header className="header-section">
                <img src="/logo.png" alt="App Logo" className="logo" />
                <h1>{`${user.prenom} ${user.nom}`}</h1>
                <button className="logout-button" onClick={handleLogout}>Se Déconnecter</button>
            </header>
            <nav className="navbar">
            <a href="/profile">Voir Mon Profil</a>
            <a href="/color">Modifier Couleur</a>
            {user.admin && <a href="/users">Liste Utilisateurs</a>}
            {user.admin && <a href="/add-user">Ajouter Utilisateur</a>}
        </nav>
      </div>
    );
};

export default Header;
