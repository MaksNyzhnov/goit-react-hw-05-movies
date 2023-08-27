import { NavLink } from 'react-router-dom';
import css from './MovieInfo.module.css'

const MovieInfo = ({ movie }) => {
    const { poster_path, original_title, genres, vote_average, overview, release_date } = movie
    console.log(movie)
    // const normalizedReleaseDate = release_date.split('-')[0];
    
    return <section>
        <div className={css.movie_card}>
            <img src={poster_path} alt="movie poster" />
            <div className={css.movie_info}><h2>{original_title} ({ release_date.split('-')[0]})</h2>
                <p>user score: { vote_average}</p>
        <h3>Overview</h3>
            <p>{ overview}</p>
        <h3>Ganres</h3>
            <p>{genres.map(genre => {

                return `${genre.name} `
            })}</p></div>
        </div>
        <div className={css.additional_info}><p>Additional information</p>
            <ul>
            <li>
<NavLink to='cast'>Cast</NavLink>
                </li>
                <li>
<NavLink to='reviews'>Reviews</NavLink>
            </li>
            </ul>
        </div>
</section>
}
export default MovieInfo;