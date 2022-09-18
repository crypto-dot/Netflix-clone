export const getMoviesStart = () => {
    return {
        type: 'GET_MOVIES_START'
    }
}
export const getMoviesSuccess = (movies) => {
    return {
        type: 'GET_MOVIES_SUCCESS',
        payload: movies
    }
}
export const getMoviesFailure = () => {
    return {
        type: 'GET_MOVIES_FAILURE'
    }
}
export const deleteMovieFailure = () => {
    return {
        type: 'DELETE_MOVIE_FAILURE'
    }
}
export const deleteMovieStart = () => {
    return {
        type: 'DELETE_MOVIE_START'
    }
}
export const deleteMovieSuccess = (id) => {
    return {
        payload: id,
        type: 'DELETE_MOVIE_SUCCESS'
    }
}