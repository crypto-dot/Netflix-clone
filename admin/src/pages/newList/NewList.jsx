import React, { useState, useContext, useEffect } from 'react';
import './NewList.scss';
import { ListContext } from '../../context/listContext/listContext';
import { getMovies } from '../../context/movieContext/apiCalls';
import { MovieContext } from '../../context/movieContext/movieContext';
import { createList } from '../../context/listContext/apiCalls';
const NewList = () => {
    const { dispatch, isFetching } = useContext(ListContext);
    const [list, setList] = useState({ type: "movie" });
    const { dispatch: dispatchMovies, movies } = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatch);
    }, [dispatchMovies]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!list.title) {
            alert('LISTS MUST CONTAIN A UNIQUE TITLE');
            return;
        }
        createList(list, dispatch);
    }
    const handleChange = (e) => {
        setList(prev => { return { ...prev, [e.target.name]: e.target.value } });
    }
    const handleSelect = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setList(prev => { return { ...prev, [e.target.name]: value } });
    }
    return (
        <div className='newMovieList'>
            <h1 className="newMovieListTitle">New Movie List</h1>
            <form action="" className="newMovieListForm">
                <div className="newMovieListItemContainer">
                    <div className="newMovieListItem">
                        <label>Title</label>
                        <input type="text" placeholder='Title' name='title' minLength={1} onChange={handleChange} required />
                    </div>
                    <div className="newMovieListItem">
                        <label>Genre</label>
                        <input type="text" placeholder='Genre' name='genre' onChange={handleChange} />
                    </div>
                    <div className="newMovieListItem">
                        <label>Type</label>
                        <select defaultValue={"movie"} name='type' onChange={handleChange}>
                            <option value="movie">Movie</option>
                            <option value="series">Series</option>
                        </select>
                    </div>
                </div>
                <div className="newMovieListItem">
                    <label>Content</label>
                    <select multiple name='content' onChange={handleSelect}>
                        {movies.map(movie => (<option key={movie._id} value={movie._id}>{movie.title}</option>))}
                    </select>
                </div>
                <div className="newProductButtonContainer">
                    <button className='newProductButton' onClick={handleSubmit} disabled={isFetching}>Create</button>
                </div>


            </form></div>
    )
}

export default NewList