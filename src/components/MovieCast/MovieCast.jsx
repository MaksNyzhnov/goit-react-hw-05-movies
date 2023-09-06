import { useEffect } from 'react'
import css from './MovieCast.module.css'
import { useParams } from 'react-router-dom'
import { getMovieCast } from 'Api/Api'
import { useState } from 'react'
import person from '../../images/person.png'
const URL = 'https://image.tmdb.org/t/p/w500';

const MovieCast = () => {
    const [movieCast, setMovieCast] = useState(null)
    let { id } = useParams()

    
    useEffect(() => {
        const fetchMovie = async (id) => {

            await getMovieCast(id).then(response => setMovieCast(response.data.cast) )

           
        }
        
        fetchMovie(id)
        
    }, [id])

    return (<div>
        {movieCast?.length === 0 && <p>There is no cast information</p>}
        <ul className={css.movie_cast_list}>
            {movieCast && movieCast.map(({id, profile_path, name, character}) => {
                return (<li key={id}>
                    {profile_path ? (
                <img
                  src={`${URL}${profile_path}`}
                  alt={name}
                  width="120px"
                  height="160px"
                />
              ) : (
                <img src={person} alt={name} width="120px" height="160px" />
              )}
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </li>)
            })}</ul> 
    </div>)
}

export default MovieCast