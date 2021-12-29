import MovieCard from './MovieCard'

function Movies({moviesData}) {
    return (
        <div className="movies-container">
        {/* Map all the movie data */}
            {moviesData.map(movie => <MovieCard key={movie.id} movie={movie} />)}           
        </div>
    )
}

export default Movies
