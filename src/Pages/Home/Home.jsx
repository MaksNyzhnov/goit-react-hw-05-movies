import MovieList from 'components/MovieList/MovieList';
import './Home.module.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrending } from "Api/Api";
const Home = () => {
    
    const [movies, setMovies] = useState([])
    const location = useLocation()
    useEffect(() => {
        const fetchMovies = async () => {

             await getTrending().then( data => setMovies(data.results))

            
        }
        fetchMovies()
    }, [])
    return (
        <main>
            <h2>Trending today</h2>
            <MovieList movies={ movies} location={location} />
        </main>
    )

    
}

export default Home;