
import { Routes,Route } from 'react-router-dom';
import './App.css';
import AppRoute from './components/appRoute';
import { AuthProvider } from './context/authContext';
import { EmailProvider } from './context/emailContext';
import AddMovies from './pages/addmovies';
import Home from './pages/home';
import Login from './pages/login';
import MyMovies from './pages/mymovie';
import NewUSer from './pages/newuser';

import Userpage from './pages/userpage';

function App() {
  return (
   <AuthProvider>
    <AppRoute />
   </AuthProvider>

   
  );
}

export default App;
