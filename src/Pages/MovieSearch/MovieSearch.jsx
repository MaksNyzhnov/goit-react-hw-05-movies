
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './MovieSearch.module.css'
import MovieList from "components/MovieList/MovieList";
import { getMovieByName } from "Api/Api";

const MovieSearch = () => {
    const [inputValue, setInputValue] = useState('');
    const [SearchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const location = useLocation()
    useEffect(() => {
        const fetchMovies = async (name) => {

            await getMovieByName(name).then(response =>  setMovies(response.data.results))

            
        }
        fetchMovies(SearchQuery)
        
    }, [SearchQuery])

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }
    const onSearch = event => {
        event.preventDefault();
        const normilezInputValue = event.target.elements.movie.value.trim()
        setSearchQuery(normilezInputValue)

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