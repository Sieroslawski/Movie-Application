import React, {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState'
import MovieCardFavs from '../components/MovieCardFavs'


function PageFavs({movie}) {

    const {favorites} = useContext(GlobalContext)

    return (
        //Map through all movies that were favorited, if none are found display a message
        <section className="home-page">
        <div className="movies-container">
            {favorites.length > 0 ? (
                <div className ="movies-card">
                {favorites.map(movie => (
                    <MovieCardFavs movie={movie} type="favorites"/>
                ))}
                </div>
            ) : <p>You have no favorited movies, return to the homepage to add some!</p>}
          </div> 
        </section>
    )
}

export default PageFavs
