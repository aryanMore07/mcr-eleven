/* eslint-disable eqeqeq */
export function reducerFunction(state, action) {
    switch (action.type) {
        case "SEARCH_INPUT":
            return {
                ...state,
                searchInput: action.payload
            }
        case "ADD_MOVIE":
            return {
                ...state,
                allMovieData: [...state.allMovieData, action.payload]
            }
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wishlistData: [...state.wishlistData, action.payload]
            }
        case "REMOVE_FROM_WISHLIST":
            return {
                ...state,
                wishlistData: state.wishlistData.filter((movie) => movie.id != action.payload)
            }
        case "GENRE_INPUT": 
            return {
                ...state,
                genreInput: action.payload,
            }
        case "YEAR_INPUT": 
            return {
                ...state,
                yearInput: action.payload,
            }
        case "RATING_INPUT": 
            return {
                ...state,
                ratingInput: action.payload,
            }

        default:
            return state;
    }
} 