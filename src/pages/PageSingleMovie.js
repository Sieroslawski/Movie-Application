import {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PageAbout() {

    const [movieData, setMovieData] = useState(null);

    const { id } = useParams();

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
           { movieData !== null &&  <h2>{movieData.title}</h2> }
        </section>
    )
}

export default PageAbout