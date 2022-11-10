export const ListReducer = (state, action) => {
    switch (action.type) {
        case "GET_LIST_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case "GET_LIST_SUCCESS":
            return {
                ...state,
                lists: action.payload,
                isFetching: false,
                error: false
            }
        case "GET_LIST_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            }
        case "CREATE_LIST_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case "CREATE_LIST_SUCCESS":
            return {
                ...state,
                lists: [...state.lists, action.payload],
                isFetching: false,
                error: false
            }
        case "CREATE_LIST_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            }
        case "DELETE_LIST_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            }
        case "DELETE_LIST_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case "DELETE_LIST_SUCCESS":
            return {
                ...state,
                lists: state.lists.filter(list => list._id !== action.payload),
                isFetching: false,
                error: false
            }
        default:
            return {
                ...state
            }
    }
}