import React, { createContext, useContext, useReducer } from 'react';

// prepare the data layer
export const StateContext = createContext();

//wrap app and provide state with the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull info from data layer
export const useStateValue = () => useContext(StateContext);
