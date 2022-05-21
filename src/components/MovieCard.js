import moment from 'moment';
import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import convertGenre from '../globals/globals'

function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <div className="movie-poster"><Link to={`/movie/${movie.id}`}>

                {/* If movie poster doesn't exist, display default movie poster */}

                {movie.poster_path === null ?

                    <img src={noPoster} alt="No Poster" /> :
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                }
            </Link>
            </div>

            <div className="movie-info">
                <p className="movie-title"> <Link to={`movie/${movie.id}`}>{movie.title}</Link></p>
                <p>{movie.vote_average * 10}%</p>
                {/* Convert date format to "Dec 00, 0000" format using the moment library */}
                <p>{moment(movie.release_date).format('ll')}</p>
                {/* Get the movie IDs and covert them to words, and then format them */}
                <p>{(movie.genre_ids).map(x => (convertGenre(x))).join(", ")}</p>
                {/* Trim the overview to 60 characters and append "..." to the end of the sentence */}
                <p>{(movie.overview).replace(/^(.{60}[^\s]*).*/, "$1").replace(/,\s*$/, "") + "..."}</p>
                <button className="more-info"><Link to={`/movie/${movie.id}`}>More Info</Link></button>
            </div>
        </div>
    )
}

export default MovieCard
