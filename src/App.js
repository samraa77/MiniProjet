// /src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from './redux/slices/userSlice';
import HomePage from './components/HomePage';

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Ajouter d'autres routes ici */}
      </Routes>
    </Router>
  );
};

export default App;
