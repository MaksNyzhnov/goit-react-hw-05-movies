import { useEffect } from 'react'
import css from './MovieCast.module.css'
import { useParams } from 'react-router-dom'
import { getMovieCast } from 'Api/Api'
import { useState } from 'react'

const MovieCast = () => {
    const [movieCast, setMovieCast] = useState(null)
    let { id } = useParams()
    const normilezedId = id.slice(1)
    
    useEffect(() => {
        const fetchMovie = async (id) => {

            await getMovieCast(id).then(response => setMovieCast(response.data.cast) )

            console.log(movieCast)
        }
        
        fetchMovie(normilezedId)
        
    }, [normilezedId])

    return (<div>
        <ul className={css.movie_cast_list}>
            {movieCast && movieCast.map(({id, profile_path, name, character}) => {
                return (<li key={id}>
                    <img src={profile_path} alt="Actor" width="80px" height="120px"/>
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </li>)
            })}</ul> 
    </div>)
}

export default MovieCast