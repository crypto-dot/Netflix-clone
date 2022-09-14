import AuthReducer from "./authReducer";
import { createContext, useReducer, useEffect } from 'react';

const checkValidJSON = () => {
    try {
        const str = JSON.parse(localStorage.getItem("user"));
        return str;
    } catch (err) {
        return null;
    }
}
const INITIAL_STATE = {
    user: checkValidJSON(),
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);


    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                error: state.error,
                isFetching: state.isFetching,
                dispatch
            }}
        >{children}</AuthContext.Provider>
    )
}