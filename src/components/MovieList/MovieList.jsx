import { NavLink } from "react-router-dom";
import './MovieList.module.css'
const MovieList = ({movies}) => {
    
    
    return (
        <ul>
            {movies.map(({id, original_title}) => {
                return <li key={id}><NavLink to={`/movies/:${id}`}>{original_title}</NavLink></li>
            })}
    </ul>
)
}

export default MovieList;