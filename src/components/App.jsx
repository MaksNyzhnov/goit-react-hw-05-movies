import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react";
import Home from "Pages/Home/Home";
import Layout from "./LayOut/LayOut";

// import MovieCast from "./MovieCast/MovieCast";
// import MovieDetails from "Pages/MovieDetails/MovieDetails";
// import MovieSearch from "Pages/MovieSearch/MovieSearch";
// import MovieReviews from "./MovieReviews/MovieReviews";

const MovieSearch = lazy(() => import("../Pages/MovieSearch/MovieSearch"));
const MovieDetails = lazy(() => import("../Pages/MovieDetails/MovieDetails"));
const MovieCast = lazy(() => import("./MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"));


export const App = () => {
  return (
    
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MovieSearch />}/>
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} /> 
          </Route>

          <Route path="*" element={<Home />} />
        </Route>
        
      </Routes>
      </Suspense>
    
  )
};

// const MovieSearch = lazy(() => import("/Pages/MovieSearch"))
// const MovieDetails = lazy(() => import("/Pages/MovieDetails"))
// const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"))
// const MovieCast = lazy(() => import("./MovieCast/MovieCast"))
