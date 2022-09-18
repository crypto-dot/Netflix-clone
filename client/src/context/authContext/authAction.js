export const loginStart = () => {
    return {
        type: 'LOGIN_START'
    }
}
export const loginSuccess = (user) => {
    return {
        payload: user,
        type: 'LOGIN_SUCCESS'
    }
}
export const loginFailure = () => {
    return {
        type: 'LOGIN_FAILURE'
    }
}
export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}