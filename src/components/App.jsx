import { Routes, Route } from "react-router-dom"
import Home from "Pages/Home/Home";
import Layout from "./LayOut/LayOut";

import MovieDetails from "Pages/MovieDetails/MovieDetails";
import MovieSearch from "Pages/MovieSearch/MovieSearch";

export const App = () => {
  return (
    
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="movies" element={<MovieSearch />}/>
  <Route path="movies/:id" element={<MovieDetails />}>
    {/* <Route path="overview" element={<MovieOverview />} />
    <Route path="cast" element={<MovieCast />} />
    <Route path="reviews" element={<MovieReviews />} /> */}
  </Route>

          <Route path="*" element={<Home />} />
        </Route>
        
      </Routes>
    
  )
};

