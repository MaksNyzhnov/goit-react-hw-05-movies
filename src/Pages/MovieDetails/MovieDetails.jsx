import { Outlet, useParams, NavLink, useLocation } from "react-router-dom"

import { Suspense, useRef } from "react"
import MovieInfo from "components/MovieInfo/MovieInfo"
import { useEffect, useState } from "react"
import { getMovieById } from "Api/Api"
const MovieDetails = () => {
    
    const [movie, setMovie] = useState(null)

    let { id } = useParams()

    const normilezedId = id.slice(1)

    const location = useLocation()
    const prevLocation = location.state?.from ?? '/movies';
    const prevPageLink = useRef(prevLocation)
    useEffect(() => {
        const fetchMovie = async (id) => {

            await getMovieById(id).then(response => setMovie(response.data) )

            
        }
        
        fetchMovie(normilezedId)
        
    }, [normilezedId])
    
    return (
        <main>
            <NavLink to={prevPageLink.current}> Go back</NavLink>
           {movie && <MovieInfo movie={movie} />}
            <Suspense fallback={<div> Loading...</div>}>
<Outlet/>
            </Suspense>
    </main>
)
}

export default MovieDetails