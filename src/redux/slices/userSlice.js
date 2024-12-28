// /src/redux/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nom: '',
  prenom: '',
  couleur: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    logoutUser: (state) => {
      return initialState;
    },
    changeColor: (state, action) => {
      state.couleur = action.payload;
    },
  },
});

export const { setUser, logoutUser, changeColor } = userSlice.actions;

export default userSlice.reducer;
