/* eslint-disable eqeqeq */
import React, { useContext } from 'react';
import './singleMoviePage.css';
import { useParams } from 'react-router'
import { MovieContext } from '../../contexts/MovieContext';

function SingleMoviePage() {

    const { state, dispatch } = useContext(MovieContext);
    const { movieId } = useParams();


    function addToWishlistHandler(movie) {
        dispatch({ type: 'ADD_TO_WISHLIST', payload: movie });
    }

    function removeFromWishlistHandler(id) {
        dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: id });
    }

    function isWishlisted(id) {
        return state.wishlistData.find((movie) => movie.id === id);
    }
    const selectedMovie = state.allMovieData.find((movie) => movie.id == movieId);

    const { id, title, year, genre, rating, director, writer, cast, summary, imageURL } = selectedMovie;

    return (
        <div className="single-movie-div">
            <div >
                <img src={imageURL} alt={title} className='single-img-div' />
            </div>
            <div className='single-movie-info'>
                <h1>{title}</h1>
                <p>{summary}</p>
                <p>year: {year}</p>
                <p>Genre: {genre.map((gen) => gen,)}</p>
                <p>Rating: {rating}</p>
                <p>Director: {director}</p>
                <p>Writer: {writer}</p>
                <p>Case: {cast.map((cast) => cast,)}</p>
                {
                    isWishlisted(id) ? (
                        <div>
                            <button className='addtowishlist' onClick={() => { removeFromWishlistHandler(id) }}>Remove from wishlist</button>
                        </div>
                    ) :
                        (
                            <div>
                                <button className='addtowishlist' onClick={() => { addToWishlistHandler(selectedMovie) }}>Add to wishlist</button>
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default SingleMoviePage
