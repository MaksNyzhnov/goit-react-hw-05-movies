import { NavLink, Outlet } from 'react-router-dom';
import css from './MovieInfo.module.css'

import { Suspense } from 'react';
const URL = 'https://image.tmdb.org/t/p/w500'

const MovieInfo = ({ movie }) => {
    const { poster_path, original_title, genres, vote_average, overview, release_date } = movie
    
    // const normalizedReleaseDate = release_date.split('-')[0];
    
    return <section>
        <div className={css.movie_card}>
            <img src={`${URL}${poster_path}`} alt="movie poster" />
            <div className={css.movie_info}><h2>{original_title} ({ release_date.split('-')[0]})</h2>
                <p>user score: { vote_average}</p>
        <h3>Overview</h3>
            <p>{ overview}</p>
        <h3>Ganres</h3>
            <p>{genres.map(genre => {

                return `${genre.name} `
            })}</p></div>
        </div>
        <div className={css.additional_info}><p className={css.additional_info_title}>Additional information</p>
            <ul>
            <li>
<NavLink to='cast'>Cast</NavLink>
                </li>
                <li>
<NavLink to='reviews'>Reviews</NavLink>
            </li>
            </ul>
            <Suspense fallback={<div> Loading...</div>}>
<Outlet/>
            </Suspense>
        </div>
</section>
}
export default MovieInfo;
