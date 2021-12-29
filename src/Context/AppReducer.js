//Exportable function that create a switch which allows you to determine if a button clicked is remove or add button
//If ADD_MOVIE_TO_FAVORITES, then add data of movie to favorites
//If REMOVE_MOVIE_FROM_FAVORITES, find the movie which doesn't recieve a payload
export default (state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_FAVORITES":
            return {
                ...state,
                favorites: [action.payload, ...state.favorites],
            }
        case "REMOVE_MOVIE_FROM_FAVORITES":
            return {
                ...state,
                favorites: state.favorites.filter(movie => movie.id !== action.payload)
            }
        default:
            return state
    }
};