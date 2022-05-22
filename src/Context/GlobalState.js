import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer'

//Initial state
const initialState = {   
    favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
   
}


//Create context
export const GlobalContext = createContext(initialState)

//Provider component
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {        
        localStorage.setItem('favorites', JSON.stringify(state.favorites))
       
    },[state])

//Actions to add and remove from favorites
    const addMovieToFavorites = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_FAVORITES", payload: movie})       
    }

    const removeMovieFromFavorites = (id) => {
        dispatch({type: "REMOVE_MOVIE_FROM_FAVORITES", payload: id})
    }
    return (
        <GlobalContext.Provider value={{
        favorites: state.favorites, 
        addMovieToFavorites,
        removeMovieFromFavorites}}>
            {props.children}
        </GlobalContext.Provider>
    )
}