// /src/redux/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  attempts: 0,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.attempts = 0;
      state.error = null;
    },
    loginFailure: (state) => {
      state.attempts += 1;
      state.error = 'Invalid credentials';
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    resetAttempts: (state) => {
      state.attempts = 0;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout, resetAttempts } = authSlice.actions;

export default authSlice.reducer;
