import React, { useContext } from 'react';
import './wishlistpage.css';
import { MovieContext } from '../../contexts/MovieContext';
import MovieCard from '../../components/movieCard/MovieCard';

function WishlistPage() {

    const { state } = useContext(MovieContext);

    return (
        <div className="wishlist-div">
            <div className='wishlist-data'>
                {
                    state.wishlistData.length === 0 ? (<h1 style={{ textAlign: 'center' }}>No wishlists to show</h1>) :
                        (state.wishlistData.map((movie) => (<MovieCard key={movie.id} movieDetails={movie} />)))
                }
            </div>
        </div>
    )
}

export default WishlistPage
