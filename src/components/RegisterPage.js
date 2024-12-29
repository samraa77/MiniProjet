// /src/components/RegisterPage.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        nom: '',
        age: '',
        admin: false,
        MotDePasse: '',
        pseudo: '',
        prenom: '',
        couleur: '',
        Devise: '',
        Pays: '',
        avatar: '',
        email: '',
        photo: '',
        confirmPassword: '',
        type: '',
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validatePassword = (password) => {
        const errors = [];
        if (!/[A-Z]/.test(password)) errors.push('une lettre majuscule');
        if (!/[a-z]/.test(password)) errors.push('une lettre minuscule');
        if (!/[0-9]/.test(password)) errors.push('un chiffre');
        if (!/[^A-Za-z0-9]/.test(password)) errors.push('un caractère spécial');
        if (password.length < 8) errors.push('au moins 8 caractères');
        return errors;
    };

    const validate = () => {
        const errors = {};
        if (!formData.nom.trim()) errors.nom = 'Nom requis';
        if (!formData.prenom.trim()) errors.prenom = 'Prénom requis';
        if (!formData.email.trim()) errors.email = 'Email requis';
        if (!formData.MotDePasse) {
            errors.MotDePasse = 'Mot de passe requis';
        } else {
            const passwordErrors = validatePassword(formData.MotDePasse);
            if (passwordErrors.length > 0) errors.MotDePasse = `Le mot de passe doit contenir : ${passwordErrors.join(', ')}`;
        }
        if (formData.MotDePasse !== formData.confirmPassword) errors.confirmPassword = 'Les mots de passe ne correspondent pas';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        try {
            const response = await axios.post('https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire', {
                nom: formData.nom,
                age: formData.age,
                admin: formData.admin,
                MotDePasse: formData.MotDePasse,
                pseudo: formData.pseudo,
                prenom: formData.prenom,
                couleur: formData.couleur,
                Devise: formData.Devise,
                Pays: formData.Pays,
                avatar: formData.avatar,
                email: formData.email,
                photo: formData.photo,
                type: formData.type,
            });
            if (response.data) {
                alert('Compte créé avec succès');
                navigate('/login'); // Redirige vers la page de connexion après l'inscription réussie
            }
        } catch (error) {
            console.error('Erreur lors de la création du compte', error);
        }
    };

    return (
        <div className="register-page">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nom"
                    placeholder="Nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                />
                {errors.nom && <span className="error">{errors.nom}</span>}
                
                <input
                    type="text"
                    name="prenom"
                    placeholder="Prénom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                />
                {errors.prenom && <span className="error">{errors.prenom}</span>}

                <input
                    type="text"
                    name="pseudo"
                    placeholder="Pseudonyme"
                    value={formData.pseudo}
                    onChange={handleChange}
                />
                
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                {errors.email && <span className="error">{errors.email}</span>}

                <input
                    type="password"
                    name="MotDePasse"
                    placeholder="Mot de passe"
                    value={formData.MotDePasse}
                    onChange={handleChange}
                    required
                />
                {errors.MotDePasse && <span className="error">{errors.MotDePasse}</span>}
                
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmer le mot de passe"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                
                <input
                    type="text"
                    name="age"
                    placeholder="Âge"
                    value={formData.age}
                    onChange={handleChange}
                />
                
                <input
                    type="text"
                    name="couleur"
                    placeholder="Couleur préférée"
                    value={formData.couleur}
                    onChange={handleChange}
                />
                
                <input
                    type="text"
                    name="Devise"
                    placeholder="Devise"
                    value={formData.Devise}
                    onChange={handleChange}
                />
                
                <input
                    type="text"
                    name="Pays"
                    placeholder="Pays"
                    value={formData.Pays}
                    onChange={handleChange}
                />
                
                <input
                    type="text"
                    name="avatar"
                    placeholder="URL de l'avatar"
                    value={formData.avatar}
                    onChange={handleChange}
                />
                
                <input
                    type="text"
                    name="photo"
                    placeholder="URL de la photo"
                    value={formData.photo}
                    onChange={handleChange}
                />
                
                <input
                    type="text"
                    name="type"
                    placeholder="Type"
                    value={formData.type}
                    onChange={handleChange}
                />
                
                <div className="checkbox-container">
                    <label>
                        <input
                            type="checkbox"
                            name="admin"
                            checked={formData.admin}
                            onChange={handleChange}
                        />
                        Admin
                    </label>
                </div>

                <button type="submit">S'inscrire</button>
            </form>
            <div className="login-link">
                <Link to="/login">Déjà membre ? Connectez-vous</Link>
            </div>
        </div>
    );
};

export default RegisterPage;