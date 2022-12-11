import { UserReducer } from "./userReducer";
import { createContext, useReducer } from "react";
const INITIAL_STATE = {
    isFetching: false,
    error: false,
    users: []
}

export const UserContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
    return (<UserContext.Provider
        value={
            {
                dispatch: dispatch,
                users: state.users,
                isFetching: state.isFetching,
                error: state.error
            }
        }
    >
        {children}
    </UserContext.Provider>);
}