import { Link } from "react-router-dom";
import './MovieList.module.css'
const MovieList = ({movies, location}) => {
    
    
    return (
        <ul>
            {movies.map(({id, original_title}) => {
                return <li key={id}><Link state={{from: location}} to={`/movies/${id}`}>{original_title}</Link></li>
            })}
    </ul>
)
}

export default MovieList;