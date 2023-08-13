import './App.css';
import { Routes, Route } from 'react-router';
import MovieListingPage from './pages/MovieListingPage/MovieListingPage';
import SingleMoviePage from './pages/singleMoviePage/SingleMoviePage';
import WishlistPage from './pages/wishlistPage/WishlistPage';
import AddMoviePage from './pages/addMoviePage/AddMoviePage';
import Navbar from './components/navbar/Navbar';

function App() {

  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<MovieListingPage />} />
          <Route path='/movie/:movieId' element={<SingleMoviePage />} />
          <Route path='/wishlists' element={<WishlistPage />} />
          <Route path='/add-movie' element={<AddMoviePage />} />
        </Routes>
    </div>
  );
}

export default App;
