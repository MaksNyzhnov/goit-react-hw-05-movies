import { Outlet, useParams, NavLink, useLocation } from "react-router-dom"

import { Suspense } from "react"
import MovieInfo from "components/MovieInfo/MovieInfo"
import { useEffect, useState } from "react"
import { getMovieById } from "Api/Api"
const MovieDetails = () => {
    
    const [movie, setMovie] = useState(null)

    let { id } = useParams()

    const normilezedId = id.slice(1)

    const location = useLocation()
    useEffect(() => {
        const fetchMovie = async (id) => {

            await getMovieById(id).then(response => setMovie(response.data) )

            
        }
        
        fetchMovie(normilezedId)
        
    }, [normilezedId])
    
    return (
        <main>
            <NavLink to={!location.state?.from ? "/" : location.state.from}> Go back</NavLink>
           {movie && <MovieInfo movie={movie} />}
            <Suspense fallback={<div> Loading...</div>}>
<Outlet/>
            </Suspense>
    </main>
)
}

export default MovieDetails