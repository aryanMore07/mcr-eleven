import React, { useContext } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import { MovieContext } from '../../contexts/MovieContext';

function Navbar() {

    const { state, dispatch } = useContext(MovieContext);

    return (
        <div className="navbar-div">
            <div>
                <h2 className='heading'>IMDB</h2>
            </div>
            <div>
                <input placeholder='Search movies' className='search-input' value={state.searchInput} onChange={(event) => {
                    dispatch({ type: 'SEARCH_INPUT', payload: event.target.value});
                }}/>
            </div>
            <div>
                <NavLink className='navlink-element' to='/'>Movies</NavLink>
                <NavLink className='navlink-element' to='/wishlists'>Wishlists</NavLink>
            </div>
        </div>
    )
}

export default Navbar
