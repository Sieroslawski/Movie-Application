import moment from 'moment';
import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';


function MovieCard({ movie }) {
    
   function convertGenre(genre) {
    
        switch (genre) {
        case 12:
          return'Adventure, ';
        case 16:
          return'Animation, ';
        case 28:
          return'Action, ';
        case 35:
          return'Comedy, ';
        case 80:
          return'Crime, ';
        case 99:
          return'Documentary, ';
        case 18:
          return'Drama, ';
        case 10751:
          return'Family, ';
        case 14:
          return'Fantasy, ';
        case 36:
          return'History, ';
        case 27:
          return'Horror, ';
        case 10402:
          return'Music, ';
        case 9648:
          return'Mystery, ';
        case 10749:
          return'Romance, ';
        case 878:
          return'Science Fiction, ';
        case 10770:
          return'TV Movie, ';
        case 53:
          return'Thriller, ';
        case 10752:
          return'War, ';
        case 37:
          return'Western, ';
        default:
          return genre;
        }
      
    };
   
    
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
                <p>{(movie.genre_ids).map(x => convertGenre(x))}</p>
                <p>{(movie.overview).replace(/^(.{60}[^\s]*).*/, "$1") + "\n" + "..."}</p>
                <Link to={`movie/${movie.id}`}>More Info</Link>
            </div>
        </div>
    )
}

export default MovieCard
