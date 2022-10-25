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
export const createMovieStart = () => {
    return {
        type: 'CREATE_MOVIE_START'
    }
}
export const createMovieSuccess = (movie) => {
    return {
        type: 'CREATE_MOVIE_SUCCESS',
        payload: movie
    }
}
export const createMovieFailure = () => {
    return {
        type: 'CREATE_MOVIE_FAILURE'
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
export const updateMovieStart = () => {
    return {
        type: 'UPDATE_MOVIE_START'
    }
}
export const updateMovieFailure = () => {
    return {
        type: 'UPDATE_MOVE_FAILURE'
    }
}
export const updateMovieSuccess = (movie) => {
    return {
        payload: movie,
        type: 'UPDATE_MOVIE_SUCCESS'
    }
}