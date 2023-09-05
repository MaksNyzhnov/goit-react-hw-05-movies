
import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import './MovieSearch.module.css'
import MovieList from "components/MovieList/MovieList";
import { getMovieByName } from "Api/Api";

const MovieSearch = () => {
    const [inputValue, setInputValue] = useState('');
    const [searchQuery, setSearchQuery] = useSearchParams();
    const movieName = searchQuery.get('query')
    const [movies, setMovies] = useState([]);
    const location = useLocation()
    useEffect(() => {
        const fetchMovies = async (name) => {
            if (!name) {
                return
                }
            await getMovieByName(name).then(response =>  setMovies(response.data.results))

            
        }
        fetchMovies(movieName)
        
    }, [movieName])

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }
    const onSearch = event => {
        event.preventDefault();
        const searchParams = event.target.elements.movie.value.trim() !== '' ? { query: event.target.elements.movie.value.trim()} : {};
        setSearchQuery(searchParams)

    }

    return (
        <main>
            <form onSubmit={onSearch}>
                <input type="text" name="movie" value={ inputValue} onChange={onInputChange} />
                <button type="sybmit">Search</button>
            </form>
            {movies.length !== 0 && <MovieList movies={movies} location={location} />}
            
        </main>
    )
}

export default MovieSearch;