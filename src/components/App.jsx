import { Routes, Route } from "react-router-dom"
import Home from "Pages/Home/Home";
import Layout from "./LayOut/LayOut";
import Movies from "Pages/Movies/Movies";
import MovieDetails from "Pages/MovieDetails/MovieDetails";

export const App = () => {
  return (
    
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}>
  <Route path=":id" element={<MovieDetails />}>
    {/* <Route path="overview" element={<MovieOverview />} />
    <Route path="cast" element={<MovieCast />} />
    <Route path="reviews" element={<MovieReviews />} /> */}
  </Route>
</Route>
          <Route path="*" element={<Home />} />
        </Route>
        
      </Routes>
    
  )
};

<Route path="movies" element={<Movies />}>
  <Route path=":id" element={<MovieDetails />}>
    {/* <Route path="overview" element={<MovieOverview />} />
    <Route path="cast" element={<MovieCast />} />
    <Route path="reviews" element={<MovieReviews />} /> */}
  </Route>
</Route>