/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useMemo, useState } from 'react';
import './movieListtingPage.css';
import { MovieContext } from '../../contexts/MovieContext';
import MovieCard from '../../components/movieCard/MovieCard';

function MovieListingPage() {

    const { state, dispatch, genreFilter } = useContext(MovieContext);
    const [genres, setGenres] = useState(['All genres']);
    const [years, setYears] = useState([]);

    function isAdd(genre) { return genres.find((ele) => ele === genre) }

    function genreHandler(event) {
        dispatch({type: 'GENRE_INPUT', payload: event.target.value})
    } 

    function yearHandler(event) {
        dispatch({type: 'YEAR_INPUT', payload: event.target.value})
    }

    function ratingHandler(event) {
        dispatch({type: 'RATING_INPUT', payload: event.target.value})
    } 

    useMemo(() => {
        setYears(state.allMovieData.map(({ year }) => year))
    }, [state])

    useEffect(() => {
        state.allMovieData.filter(({ genre }) => genre.map((ele) => isAdd(ele) ? null : setGenres([...genres, ele])));
    }, [genres]);

    return (
        <div className='Movies-div'>
            <div className='filters-div'>
                <div>
                    <h2>Movies</h2>
                </div>
                <div className='filters'>
                    <select name='genre' id="genre" onChange={genreHandler}>
                        {
                            genres.map((genre) => (<option value={genre}>{genre}</option>))
                        }
                    </select>
                    <select name='year' id="year" onChange={yearHandler}>
                        {
                            years.map((year) => (<option value={year}>{year}</option>))
                        }
                    </select>
                    <select name='rating' id="rating" onChange={ratingHandler}>
                        <option value={10}>less than 10</option>
                        <option value={8}>less than 8</option>
                        <option value={6}>less than 6</option>
                        <option value={4}>less than 4</option>
                    </select>
                </div>
                <div>
                    <button className='addtowishlist'>
                        Add Movie
                    </button>
                </div>
            </div>
            <div className='movie-listing'>
                {
                    genreFilter.map((movie) => <MovieCard key={movie.id} movieDetails={movie} />)
                }
            </div>
        </div>
    )
}

export default MovieListingPage
