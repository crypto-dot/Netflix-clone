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
export const createListFailure = () => {
    return {
        type: 'CREATE_LIST_FAILURE'
    }
}
export const createListSuccess = (list) => {
    return {
        type: 'CREATE_LIST_SUCCESS',
        payload: list
    }
}
export const createListStart = () => {
    return {
        type: 'CREATE_LIST_START'
    }
}
export const updateListFailure = () => {
    return {
        type: 'UPDATE_LIST_FAILURE'
    }
}
export const updateListSuccess = (list) => {
    return {
        type: 'UPDATE_LIST_SUCCESS',
        payload: list
    }
}
export const updateListStart = () => {
    return {
        type: 'UPDATE_LIST_START'
    }
}
