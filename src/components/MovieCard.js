import moment from 'moment';
import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';

function MovieCard({ movie }) {        
    
    return (
        <div className="movie-card">
            <div className="movie-poster"><Link to={`movie/${movie.id}`}>
               
                { movie.poster_path === null ?
                
                    <img src={noPoster} alt="No Poster" /> :
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                }
                </Link>
            </div>
            <div className="movie-info">
                <p className="movie-title"> <Link to={`movie/${movie.id}`}>{movie.title}</Link></p>
                <p>{movie.vote_average * 10}%</p>
                <p>{moment(movie.release_date).format('ll')}</p>
                <p>{(movie.overview).replace(/^(.{60}[^\s]*).*/, "$1") + "\n" + "..."}</p>
                <Link to={`movie/${movie.id}`}>More Info</Link>
            </div>
        </div>
    )
}

export default MovieCard