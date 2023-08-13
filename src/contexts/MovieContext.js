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
        genreInput: 'Drama',
        yearInput: '',
        ratingInput: '',
    });

    const searchFilter = state.searchInput ? state.allMovieData.filter((movie) => movie.title.toLowerCase().includes(state.searchInput.toLowerCase()) || movie.director.toLowerCase().includes(state.searchInput.toLowerCase())) : state.allMovieData;
    console.log(searchFilter.map((movie) => movie.genre.map((genre) => genre.toLowerCase() === state.genreInput.toLowerCase()) ? movie : null));
    const genreFilter = state.genreInput ? searchFilter.filter((genre) => genre) : searchFilter;
    console.log(state.genreInput);
    console.log(genreFilter);

    // console.log(state.yearInput);
    // console.log(state.ratingInput);

    useEffect(() => {
        localStorage.setItem('movieData', JSON.stringify(state.allMovieData));
        localStorage.setItem('wislistMovieData', JSON.stringify(state.wishlistData));
    }, [state]);

    return <MovieContext.Provider value={{ state, dispatch, searchFilter }}>{children}</MovieContext.Provider>
}