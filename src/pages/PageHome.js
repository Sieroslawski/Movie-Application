import { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import NavSort from '../components/NavSort';
import { API_KEY } from '../globals/Globals';
function PageHome({sort} ) {

    const [moviesData, setMovieData] = useState(null);

    //Grab the the custom URL and get the movie data with fetch()
    // ${sort} will allows us to insert parameters for different types of movie sorting
   
    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1`);            
            const moviesData = await res.json();           
            const first12Movies = moviesData.results.splice(0, 12);           
            setMovieData(first12Movies);
        }
        fetchMovies();
    }, [sort])
    
    return (
        <section className="home-page">
            <NavSort/>
            {moviesData !== null ? <Movies moviesData={moviesData}/> : <p>Fetching Movies...</p>}
        </section>
    )
}
export default PageHome