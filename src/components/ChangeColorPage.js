// /src/components/ChangeColorPage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { changeColor } from '../redux/slices/userSlice';

const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'maroon', 'orange', 'black', 'white'];

const ChangeColorPage = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const handleColorChange = async (color) => {
        try {
            // Mettre à jour la couleur dans le store Redux
            dispatch(changeColor(color));

            // Envoyer la requête PUT à l'API pour mettre à jour la couleur
            await axios.put(`https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire/${user.id}`, {
                couleur: color,
            });

            alert('Couleur mise à jour avec succès');
        } catch (error) {
            console.error('Erreur lors de la mise à jour de la couleur', error);
        }
    };

    return (
        <div className="change-color-page">
            <h2>Choisissez une nouvelle couleur</h2>
            <div className="color-table">
                {colors.map((color) => (
                    <div 
                        key={color} 
                        className={`color-swatch ${color === user.couleur ? 'selected' : ''}`} 
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorChange(color)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ChangeColorPage;
