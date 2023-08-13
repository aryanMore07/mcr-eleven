import { createContext, useEffect, useReducer } from "react";
import { movies } from "../data/data";
import { reducerFunction } from "../reducers/reducerFunction";

export const MovieContext = createContext();

export function MovieProvider({ children }) {

    const data = localStorage.getItem('movieData');
    const wislistData = localStorage.getItem('wislistMovieData');
    const presistMovieData = data ? JSON.parse(data) : movies;
    const presistWishlistMovieData = wislistData ? JSON.parse(wislistData) : [];

    const [state, dispatch] = useReducer(reducerFunction, {
        allMovieData: presistMovieData,
        searchInput: '',
        wishlistData: presistWishlistMovieData,
        genreInput: '',
        yearInput: '',
        ratingInput: '',
    });

    const searchFilter = state.searchInput ? state.allMovieData.filter((movie) => movie.title.toLowerCase().includes(state.searchInput.toLowerCase()) || movie.director.toLowerCase().includes(state.searchInput.toLowerCase())) : state.allMovieData;

    const genreFilter = state.genreInput ? state.genreInput === 'All genres' ? searchFilter : searchFilter.filter((movie) => movie.genre.some((genre) => genre === state.genreInput) ? movie : null) : searchFilter;

    const yearSearch = state.yearInput ? state.yearInput === 'All years' ? genreFilter : genreFilter.filter((movie) => movie.year <= Number(state.yearInput)) : genreFilter;
    
    const ratingFilter = state.ratingInput ? state.ratingInput === 'All ratings' ? yearSearch : yearSearch.filter((movie) => movie.rating <= Number(state.ratingInput) ? movie : null) : yearSearch;

    useEffect(() => {
        localStorage.setItem('movieData', JSON.stringify(state.allMovieData));
        localStorage.setItem('wislistMovieData', JSON.stringify(state.wishlistData));
    }, [state]);

    return <MovieContext.Provider value={{ state, dispatch, ratingFilter }}>{children}</MovieContext.Provider>
}