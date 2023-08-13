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


    // console.log(state.yearInput);
    // console.log(state.ratingInput);

    useEffect(() => {
        localStorage.setItem('movieData', JSON.stringify(state.allMovieData));
        localStorage.setItem('wislistMovieData', JSON.stringify(state.wishlistData));
    }, [state]);

    return <MovieContext.Provider value={{ state, dispatch, genreFilter }}>{children}</MovieContext.Provider>
}