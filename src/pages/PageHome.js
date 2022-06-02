import { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import NavSort from '../components/NavSort';



function PageHome({sort} ) {

    const [moviesData, setMovieData] = useState(null);
    const API_KEY = process.env.REACT_APP_API_KEY
    const [search, setSearch] = useState("")

    const searchAPI = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=;`

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

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if(search) {
        fetch(searchAPI+search)
            .then((res) => res.json())
            .then((data) => {
                setMovieData(data.results)
            })
        setSearch('')         
    }
}
    const handleOnChange = (e) => {
        setSearch(e.target.value)
    }
    
    return (        
        <section className="home-page">
        <div className="nav-sort">
        <NavSort/>
          <form onSubmit={handleOnSubmit}> 
            <input type="search" placeholder="Search movies..." className="search-bar" value={search} onChange={handleOnChange}></input>
            </form>              
            </div>                
            {moviesData !== null ? <Movies moviesData={moviesData}/> : <p>Fetching Movies...</p>}
        </section>
    )
}
export default PageHome