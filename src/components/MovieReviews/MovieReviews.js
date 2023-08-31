import css from './MovieReviews.module.css';
import { GetMovieReviews } from 'Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const MovieReviews = () => {
  const [MovieReviews, setMovieReviews] = useState(null);
  let { id } = useParams();
  const normilezedId = id.slice(1);

  useEffect(() => {
    const fetchMovie = async id => {
      await GetMovieReviews(id).then(response =>
        setMovieReviews(response.data.results)
      );
    };

    fetchMovie(normilezedId);
  }, [normilezedId]);
  return (
    <div>
      <ul className={css.movie_reviews_list}>
        {!MovieReviews && <p>There is no reviews</p>}
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
