import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import React, { useContext } from 'react';
import NotFound from "./pages/notfound/NotFound";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.scss';
import { AuthContext } from "./context/authContext/authContext";
const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/register" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/movies" element={user ? <Home type="movies" /> : <Navigate to="/login" />} />
        <Route path="/series" element={user ? <Home type="series" /> : <Navigate to="/login" />} />
        <Route path="/series" element={user ? <Home type="series" /> : <Navigate to="/login" />} />
        <Route path="/watch" element={user ? <Watch /> : <Navigate to="/login" />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  )
}

export default App;
