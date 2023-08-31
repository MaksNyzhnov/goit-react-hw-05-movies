import { NavLink, useLocation } from "react-router-dom";
import './MovieList.module.css'
const MovieList = ({movies}) => {
    
    const location = useLocation()
    return (
        <ul>
            {movies.map(({id, original_title}) => {
                return <li key={id}><NavLink state={{from: location.pathname}} to={`/movies/:${id}`}>{original_title}</NavLink></li>
            })}
    </ul>
)
}

export default MovieList;