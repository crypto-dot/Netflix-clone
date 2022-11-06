import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/authContext/authContext';
import { ListContextProvider } from './context/listContext/listContext';
import { MovieContextProvider } from './context/movieContext/movieContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <MovieContextProvider>
      <ListContextProvider>
        <App />
      </ListContextProvider>
    </MovieContextProvider>
  </AuthContextProvider>

);
