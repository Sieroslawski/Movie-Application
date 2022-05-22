import {useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg'
import moment from 'moment'
import {GlobalContext} from "../Context/GlobalState" //Allow function from GlobalState.js to be used
import ReactiveButton from 'reactive-button';


function PageAbout() {

    const [movieData, setMovieData] = useState(null); //Set default state to null
    const { addMovieToFavorites, favorites, removeMovieFromFavorites } = useContext(GlobalContext) //Allow these to use GlobalContext
    let storedMovie = favorites.find(x => x === movieData) //Store movies into here
    const disabledFavorites = storedMovie ? true : false //If the movie is stored, do not allow it be clicked again
    const { id } = useParams(); //Allow ID to be used
 


    //Fetch the movie based on ID and display it
    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=467ae5ff4a2ad2a532b819a080fb0e52&language=en-US`);
            const data = await res.json();
            setMovieData(data);
        }
        fetchMovies();
    }, [id])
    
    return (
        <section className="single-movie-page">
          
           <div className="single-movie-poster">
               
                 { 
                 movieData !== null && 
                 movieData.poster_path === null ?
                
                    <img src={noPoster} alt="No Poster" /> :
                    movieData !== null && 
                    <img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt={movieData.title} />
                } 
               
            </div>            
            <div className="single-movie-body">
            { movieData !== null &&  <h2>{movieData.title}</h2> }
                <h3 className="single-page-header-text">Overview</h3> 
                { movieData !== null &&                
                <p>{movieData.overview}</p> }
                <h3 className="single-page-header-text">Released</h3>
                <p>{movieData !== null && 
                
                //Convert date format to "Dec 00, 0000 format using the moment library
                moment(movieData.release_date).format('ll')}</p>
                <h3 className="single-page-header-text">Rating</h3>
                <p>{ movieData !== null && 
                movieData.vote_average * 10}%</p>
                <h3 className="single-page-header-text">Genre</h3>
                <p>{ movieData !== null &&
                //Grab the genres of the movie and format them 
                (movieData.genres.map(x => x.name).join(", "))}</p>
                 {/* Button removes movie based on ID */}
            <button onClick={() => removeMovieFromFavorites(movieData.id)} className="delete-button2" title="Remove from favorites">❌</button>
            {/* Button adds movie data to array, and becomes disabled if clicked*/}
            <button className="btn-favorites" onClick={() => addMovieToFavorites(movieData)} disabled={disabledFavorites} className="add-button" title="Add to favorites">❤️</button>
            </div>
           
        </section>
    )
}

export default PageAbout