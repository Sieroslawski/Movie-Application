import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const MovieControls = ({movie, type}) => {

    const {removeMovieFromFavorites} = useContext(GlobalContext)

    return (
        <div className="card-control">
        {/* If type is favorites, remove the movie from local storage when clicked */}
            {type === 'favorites' && (
                <>
                <button className="delete-button" onClick={() => removeMovieFromFavorites(movie.id)}>
                    Remove from favorites
                </button>
                </>
            )}
        </div>
    )
}
