import React, { useContext, useState } from 'react';
import './addMoviePage.css';
import uuid from 'react-uuid';
import { MovieContext } from '../../contexts/MovieContext';
function AddMoviePage() {

    const { dispatch } = useContext(MovieContext);

    const [titleInput, setTitleInput] = useState('');
    const [yearInput, setYearInput] = useState('');
    const [genreInput, setGenreInput] = useState([]);
    const [ratingInput, setRatingInput] = useState(0);
    const [directorInput, setDirectorInput] = useState('');
    const [writerInput, setWriterInput] = useState('');
    const [castInput, setCastInput] = useState([]);
    const [summaryInput, setSummaryInput] = useState('');
    const [imgUrlInput, setImgUrlInput] = useState('');

    function addMovieHandler() {
        if (titleInput && yearInput && genreInput && ratingInput && directorInput && writerInput && castInput && summaryInput && imgUrlInput) {
            const product = {
                id: uuid(),
                title: titleInput,
                year: yearInput,
                genre: genreInput,
                rating: ratingInput,
                director: directorInput,
                writer: writerInput,
                cast: castInput,
                summary: summaryInput,
                imageURL: imgUrlInput,
            }
            dispatch({ type: 'ADD_MOVIE', payload: product })
        } else {
            alert('Please input all fields')
        }
    }

    return (
        <div className="addmovie-div">
            <div className='inputs'>

                <label htmlFor="title-input"><b>Title: </b></label>
                <input className='input-field' type="text" id='title-input' value={titleInput} onChange={(event) => { setTitleInput(event.target.value) }} />
                <label htmlFor="year-input"><b>Year: </b></label>
                <input className='input-field' type="number" max='1950' min='2023' id='year-input' value={yearInput} onChange={(event) => { setYearInput(event.target.value) }} />
                <label htmlFor="genre-input"><b>Genre: </b></label>
                <input className='input-field' type="text" id='genre-input' onChange={(event) => { setGenreInput([...genreInput, event.target.value]) }} />
                <label htmlFor=""><b>Rating: </b></label>
                <input className='input-field' type="number" value={ratingInput} max='10' min='0' onChange={(event) => {
                    setRatingInput(event.target.value);
                }} />
                <label htmlFor="director-input"><b>Director: </b></label>
                <input className='input-field' type="text" value={directorInput} id='director-input' onChange={(event) => {
                    setDirectorInput(event.target.value);
                }} />
                <label htmlFor="writer-input"><b>Writer: </b></label>
                <input className='input-field' type="text" value={writerInput} id='writer-input' onChange={(event) => {
                    setWriterInput(event.target.value);
                }} />
                <label htmlFor="writer-input"><b>Cast: </b></label>
                <input className='input-field' type="text" id='writer-input' onChange={(event) => {
                    setCastInput([...castInput, event.target.value]);
                }} />
                <label htmlFor="summary-input"><b>Summary: </b></label>
                <input className='input-field' type="text" value={summaryInput} id='summary-input' onChange={(event) => {
                    setSummaryInput(event.target.value);
                }} />
                <label htmlFor="imgurl-input"><b>Image URL: </b></label>
                <input className='input-field' type="text" value={imgUrlInput} id='imgurl-input' onChange={(event) => {
                    setImgUrlInput(event.target.value);
                }} />
            </div>
            <div>
                <button className='addtowishlist' onClick={addMovieHandler}>Add Movie</button>
            </div>
        </div>
    )
}

export default AddMoviePage
