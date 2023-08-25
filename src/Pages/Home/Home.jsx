import MovieList from 'components/MovieList/MovieList';
import './Home.module.css';
import { useEffect, useState } from 'react';
import { getTrending } from "Api/Api";
const Home = () => {
    
    const [movies, setMovies] =useState([])
    useEffect(() => {
        const fetchMovies = async () => {

             await getTrending().then( data => setMovies(data.results))

            
        }
        fetchMovies()
    }, [])
    return (
        <main>
            <h2>Trendig today</h2>
            <MovieList movies={ movies} />
        </main>
    )

    
}

export default Home;