import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import React from 'react';
import NotFound from "./pages/notfound/NotFound";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.scss';
const App = () => {
  const user = false;
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/register" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/home" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/home" />} />
        {user &&
          (<> <Route path="/movies" element={<Home type="movies" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch" element={<Watch />} /> </>)}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;
