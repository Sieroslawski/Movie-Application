import {useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import moment from 'moment';
import {GlobalContext} from "../Context/GlobalState"


function PageAbout() {

    const [movieData, setMovieData] = useState(null);
    const { addMovieToWatchlist, watchlist } = useContext(GlobalContext)
    let storedMovie = watchlist.find(x => x === movieData)
    const disabledWatchlist = storedMovie ? true : false
    const { id } = useParams();

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=467ae5ff4a2ad2a532b819a080fb0e52&language=en-US`);
            const data = await res.json();
            setMovieData(data);
        }
        fetchMovies();
    }, [id])

    console.log(movieData);

    return (
        <section className="single-movie-page">
          
           <div className="movie-poster">
               
                 { 
                 movieData !== null && 
                 movieData.poster_path === null ?
                
                    <img src={noPoster} alt="No Poster" /> :
                    movieData !== null && 
                    <img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt={movieData.title} />
                } 
               
            </div>
            <div className="movie-header">
            { movieData !== null &&  <h2>{movieData.title}</h2> }
            <button>Remove from favorites</button>
            <button className="btn-watchlist" 
            onClick={() => addMovieToWatchlist(movieData)}
            disabled={disabledWatchlist}>Favorite this movie</button>
            
            </div>

            <div className="movie-body">
                { movieData !== null && 
                <p>{movieData.overview}</p> }
                <h3>Released</h3>
                <p>{movieData !== null && 
                moment(movieData.release_date).format('ll')}</p>
                <h3>Rating</h3>
                <p>{ movieData !== null && 
                movieData.vote_average * 10}%</p>
                <h3>Genre</h3>
                <p>{ movieData !== null && 
                (movieData.genres.map(x => x.name).join(", "))}</p>
            </div>
           
        </section>
    )
}

export default PageAbout