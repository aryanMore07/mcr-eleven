import React, { useContext } from 'react';
import './movieCard.css';
import { useNavigate } from 'react-router';
import { MovieContext } from '../../contexts/MovieContext';

function MovieCard({ movieDetails }) {

    const { state, dispatch } = useContext(MovieContext);
    const navigate = useNavigate();
    const { id, title, summary, imageURL } = movieDetails;

    function isWishlisted(id) {
        return state.wishlistData.find((movie) => movie.id === id);
    }

    function addToWishlistHandler(movie) {
        dispatch({ type: 'ADD_TO_WISHLIST', payload: movie });
    }

    function removeFromWishlistHandler(id) {
        dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: id });
    }

    function cardSelectHandler() {
        navigate(`/movie/${id}`)
    }

    return (
        <div key={id} className="moive-card">
            <div className='movie-card-info'>
                <div className='navigate-div' onClick={cardSelectHandler}>
                    <div className='img-div'>
                        <img src={imageURL} alt={title} className='img' />
                    </div>
                    <div>
                        <h2 className='movie-title'>{title}</h2>
                        <p>{summary}</p>
                    </div>
                </div>
                <div className='wishlist-btn'>
                    {
                        isWishlisted(id) ? (
                            <button className='addtowishlist' onClick={() => { removeFromWishlistHandler(id) }}>
                                Remove from wishlist
                            </button>) : (
                            <button className='addtowishlist' onClick={() => { addToWishlistHandler(movieDetails) }}>
                                Add to wishlist
                            </button>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default MovieCard
