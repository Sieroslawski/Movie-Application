import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const MovieControls = ({movie, type}) => {

    const {removeMovieFromWatchlist} = useContext(GlobalContext)

    return (
        <div className="card-control">
            {type === 'watchlist' && (
                <>
                <button className="delete-button" onClick={() => removeMovieFromWatchlist(movie.id)}>
                    Remove from favorites
                </button>
                </>
            )}
        </div>
    )
}
