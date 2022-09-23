import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    NZ: undefined,
    District: undefined,
    Suburb: undefined,
    Bedroom: undefined,
    Bathroom: undefined,
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
    switch (action.type) {
        case "NEW_SEARCH":
            return action.payload;
        case "RESET_SEARCH":
            return INITIAL_STATE;
        default:
            return state;
    }
};

export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

    return (
        <SearchContext.Provider
            value={{
                NZ: state.NZ,
                District: state.District,
                Suburb: state.Suburb,
                Bedroom: state.Bedroom,
                Bathroom: state.Bathroom,
                dispatch,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};





