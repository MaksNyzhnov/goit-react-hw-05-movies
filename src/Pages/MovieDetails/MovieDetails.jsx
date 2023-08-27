import { Outlet, useParams } from "react-router-dom"
import MovieInfo from "components/MovieInfo/MovieInfo"
import { useEffect, useState } from "react"
import { getMovieById } from "Api/Api"
const MovieDetails = () => {
    const [movie, setMovie] = useState(null)
    let { id } = useParams()
    const normilezedId = id.slice(1)
    useEffect(() => {
        const fetchMovie = async (id) => {

            await getMovieById(id).then(response => setMovie(response.data) )

            
        }
        
        fetchMovie(normilezedId)
        
    }, [normilezedId])
    
    return (
        <main>
           {movie && <MovieInfo movie={ movie} />}
            <Outlet/>
    </main>
)
}

export default MovieDetails