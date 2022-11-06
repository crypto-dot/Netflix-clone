import { ListReducer } from "./listReducer";
import { useReducer, createContext } from "react";

const INITAL_STATE = {
    isFetching: false,
    error: false,
    lists: []
}

export const ListContext = createContext(INITAL_STATE);

export const ListContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ListReducer, INITAL_STATE);
    return (
        <ListContext.Provider
            value={{
                lists: state.lists,
                isFetching: state.isFetching,
                error: state.error,
                dispatch: dispatch
            }}
        >
            {children}
        </ListContext.Provider>
    );
}