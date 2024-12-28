// /src/components/HomePage.js
import React from 'react';
import { useSelector } from 'react-redux';

const HomePage = () => {
    const user = useSelector((state) => state.user);

    return (
        <div className="homepage" style={{ backgroundColor: user.couleur }}>
            <header className="header-section">
                <img src="/logo.png" alt="App Logo" className="logo" />
                <h1>{`${user.prenom} ${user.nom}`}</h1>
                <button className="logout-button" onClick={() => alert('Logout')}>Se Déconnecter</button>
            </header>
            <nav className="navbar">
                <a href="/profile">Voir Mon Profil</a>
                <a href="/color">Modifier Couleur</a>
                <a href="/users">Liste Utilisateurs</a>
            </nav>
            <main className="welcome-section">
                <h2>Bienvenue sur notre application!</h2>
                <p>Explorez les différentes fonctionnalités en utilisant le menu ci-dessus.</p>
            </main>
        </div>
    );
};

export default HomePage;
