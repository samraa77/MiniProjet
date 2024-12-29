// /src/components/ProfilePage.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from '../redux/slices/userSlice';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire/${user.id}`);
                dispatch(setUser(response.data));
            } catch (err) {
                setError('Erreur lors du chargement des données utilisateur');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [dispatch, user.id]);

    if (loading) {
        return <p>Chargement...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="profile-page">
            <h2>Profil de l'utilisateur</h2>
            <div className="profile-details">
                <p><strong>Nom :</strong> {user.nom}</p>
                <p><strong>Prénom :</strong> {user.prenom}</p>
                <p><strong>Pseudonyme :</strong> {user.pseudo}</p>
                <p><strong>Email :</strong> {user.email}</p>
                <p><strong>Âge :</strong> {user.age}</p>
                <p><strong>Pays :</strong> {user.Pays}</p>
                <p><strong>Devise :</strong> {user.Devise}</p>
                <p><strong>Couleur préférée :</strong> {user.couleur}</p>
                <p><strong>Admin :</strong> {user.admin ? 'Oui' : 'Non'}</p>
                <p><strong>Type :</strong> {user.type}</p>
                <img src={user.photo} alt="Photo de profil" className="profile-photo" />
                <img src={user.avatar} alt="Avatar de profil" className="profile-avatar" />
            </div>
        </div>
    );
};

export default ProfilePage;
