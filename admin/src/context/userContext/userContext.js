import { UserReducer } from "./userReducer";
import { useContext, useReducer } from "react";
const INITIAL_STATE = {
    isFetching: false,
    error: false,
    users: []
}

export const UserContext = useContext(INITIAL_STATE);

export const UserContextProvide = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
    return (<UserContext.Provider
        value={
            {
                dispatch: dispatch,
                state: state,
                isFetching: state.isFetching,
                error: state.error
            }
        }
    >
        {children}
    </UserContext.Provider>);
}