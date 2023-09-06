import css from './MovieReviews.module.css';
import { GetMovieReviews } from 'Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const MovieReviews = () => {
  const [MovieReviews, setMovieReviews] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const fetchMovie = async id => {
      await GetMovieReviews(id).then(response =>
        setMovieReviews(response.data.results)
      );
    };

    fetchMovie(id);
  }, [id]);
  return (
    <div>
      {MovieReviews?.length === 0 && <p>There is no reviews</p>}
      <ul className={css.movie_reviews_list}>
        {MovieReviews &&
          MovieReviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieReviews;
