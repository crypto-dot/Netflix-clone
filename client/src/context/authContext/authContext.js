import { authReducer } from "./authReducer";
import { createContext, useReducer, useEffect } from 'react';
const getUser = () => {
    if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'));
    } else {
        return null;
    }
}
const INITIAL_STATE = {
    isFetching: false,
    error: false,
    user: getUser()
}

export const AuthContext = createContext(authReducer, INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);
    return (
        <AuthContext.Provider
            value={
                {
                    isFetching: state.isFetching,
                    error: state.error,
                    user: state.user,
                    dispatch
                }
            }
        >
            {children}
        </AuthContext.Provider>
    )
}