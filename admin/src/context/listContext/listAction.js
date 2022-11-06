export const getListSuccess = (lists) => {
    return {
        type: 'GET_LIST_SUCCESS',
        payload: lists
    }
}
export const getListStart = () => {
    return {
        type: 'GET_LIST_START'
    }
}
export const getListFailure = () => {
    return {
        type: 'GET_LIST_FAILURE'
    }
}
export const deleteListFailure = () => {
    return {
        type: 'DELETE_LIST_FAILURE'
    }
}
export const deleteListSuccess = (id) => {
    return {
        type: 'DELETE_LIST_SUCCESS',
        payload: id
    }
}
export const deleteListStart = () => {
    return {
        type: 'DELETE_LIST_START'
    }
}
