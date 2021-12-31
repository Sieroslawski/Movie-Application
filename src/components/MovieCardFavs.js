import moment from 'moment';
import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import {MovieControls} from './MovieControls'

function MovieCardFavs({ movie, type }) {               
    return (
        <div className="movie-card-favs">
            <div className="movie-poster"><Link to={`/movie/${movie.id}`}>
            
                {/* If movie poster doesn't exist, display default movie poster */}
               
                { movie.poster_path === null ?
                
                    <img src={noPoster} alt="No Poster" /> :
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    
                }
                
                </Link>
                <MovieControls type={type} movie={movie}/>     
            </div>
           
            <div className="movie-info">
                <p className="movie-title"> <Link to={`/movie/${movie.id}`}>{movie.title}</Link></p>
                <p>{movie.vote_average * 10}%</p>

                 {/* Convert date format to "Dec 00, 0000 format using the moment library" */}
                <p>{moment(movie.release_date).format('ll')}</p>

                <p>{ movie !== null && 
                /* Join and space the movie genres */
                (movie.genres.map(x => x.name).join(", "))}</p>

                 {/* Trim the overview to 60 characters and append "..." to the end of the sentence */}
                <p>{(movie.overview).replace(/^(.{60}[^\s]*).*/, "$1").replace(/,\s*$/, "") + "..."}</p>                
                <Link to={`/movie/${movie.id}`} className="more-info" title="View more info about the movie">More Info</Link>                               
            </div>            
        </div>
    )
}

export default MovieCardFavs
