import { deleteMovieFailure, deleteMovieSuccess, deleteMovieStart, getMoviesFailure, getMoviesStart, getMoviesSuccess, createMovieFailure, createMovieSuccess, createMovieStart, updateMovieStart, updateMovieSuccess, updateMovieFailure } from "./movieAction"
import axios from "axios";
export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try {
        const res = await axios.get('/movies', { headers: { token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}` } });
        dispatch(getMoviesSuccess(res.data));
    } catch (err) {
        dispatch(getMoviesFailure());
    }
}
export const createMovie = async (movie, dispatch) => {
    dispatch(createMovieStart());
    try {
        const res = await axios.post('/movies', movie, { headers: { token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}` } });
        dispatch(createMovieSuccess(res.data));
    } catch (err) {
        dispatch(createMovieFailure());
    }
}
export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart());
    try {
        await axios.delete(`/movies/${id}`, { headers: { token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}` } });
        dispatch(deleteMovieSuccess(id));
    } catch (err) {
        dispatch(deleteMovieFailure());
    }
}

export const updateMovie = async (movie, dispatch) => {
    dispatch(updateMovieStart());
    debugger;
    try {
        debugger;
        const updatedMovie = await axios.put(`/movies/${movie._id}`, movie, {
            headers: {
                token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
            }
        });
        dispatch(updateMovieSuccess(updatedMovie));
    } catch (err) {
        dispatch(updateMovieFailure());
    }
}
