
import { Routes,Route } from 'react-router-dom';
import './App.css';
import AddMovies from './pages/addmovies';
import Login from './pages/login';
import Userpage from './pages/userpage';

function App() {
  return (
   <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/userpage' element={<Userpage />} />
        <Route path='/addMovie' element={<AddMovies />} />
      </Routes>
   </>

   
  );
}

export default App;
