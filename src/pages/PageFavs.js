import React, {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState'
import MovieCardFavs from '../components/MovieCardFavs'


function PageFavs({movie}) {

    const {watchlist} = useContext(GlobalContext)

    return (
        <section className="favs-page">
            {watchlist.length > 0 ? (
                <div className ="movie-card">
                {watchlist.map(movie => (
                    <MovieCardFavs movie={movie} type="watchlist"/>
                ))}
                </div>
            ) : <p>You have no favorited movies, return to the homepage to add some!</p>}
            
        </section>
    )
}

export default PageFavs
