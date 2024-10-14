
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import FavouriteMovies from './pages/FavouriteMovies';
import MovieDetails from './components/MovieDetails';



function App() {

  return (
    <BrowserRouter>
    <Routes> 
       
       <Route path ='/' element={<Home/>}></Route>
       <Route path ='/favourite'element={<FavouriteMovies/>}></Route>
       <Route path="/movie/:id" element={<MovieDetails />} />

       
       </Routes>
      </BrowserRouter>
  );
}

export default App;
