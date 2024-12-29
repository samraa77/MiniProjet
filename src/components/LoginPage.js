// /src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from '../redux/slices/userSlice';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        if (!username || !password) {
            setErrors(['Le nom d’utilisateur et le mot de passe sont obligatoires']);
            return;
        }

        try {
            const response = await axios.get('https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire');
            const user = response.data.find(user => user.pseudo === username && user.MotDePasse === password);

            if (user) {
                dispatch(setUser(user));
                alert('Connexion réussie');
                navigate('/profile'); // Redirige vers la page de profil
            } else {
                setAttempts(prev => prev + 1);
                setErrors(['Identifiants invalides']);
            }
        } catch (error) {
            setErrors(['Erreur lors de la connexion']);
            console.error('Erreur lors de la connexion', error);
        }
    };

    const handleReset = () => {
        setAttempts(0);
        setErrors([]);
    };

    return (
        <div className="login-page">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nom d'utilisateur"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" disabled={attempts >= 3}>
                    LOGIN
                </button>
                {errors.length > 0 && (
                    <ul className="error-messages">
                        {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                )}
                {attempts >= 3 && (
                    <button onClick={handleReset} className="reset-button">
                        Reset Attempts
                    </button>
                )}
            </form>
            <div className="register-link">
                <Link to="/register">Create an account</Link>
            </div>
        </div>
    );
};

export default LoginPage;
