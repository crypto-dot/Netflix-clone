const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                isFetching: true,
                error: false,
                user: null
            }
        case "LOGIN_SUCCESS":
            return {
                isFetching: false,
                error: false,
                user: action.payload
            }
        case "LOGIN_FAILURE":
            return {
                isFetching: false,
                error: true,
                user: null
            }
        case "LOGIN_RESET_FAILURE":
            return {
                isFetching: false,
                error: false,
                user: null
            }
        case "LOGOUT":
            return {
                isFetching: false,
                error: false,
                user: null
            }
        default:
            return {
                ...state
            }
    }
}

export default AuthReducer;