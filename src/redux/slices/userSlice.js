// /src/redux/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    id: '',
    type: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            return { ...state, ...action.payload };
        },
        logoutUser: () => {
            return initialState;
        },
        changeColor: (state, action) => {
            state.couleur = action.payload;
            localStorage.setItem('couleur', action.payload);
        },
    },
});

export const { setUser, logoutUser, changeColor } = userSlice.actions;
export default userSlice.reducer;
