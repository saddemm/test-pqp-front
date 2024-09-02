import { Link, useLocation } from "react-router-dom";
import {
  MoviesItems,
  MoviesMenu,
  MoviesTextWrap,
  MoviesTextTitle,
  MoviesWrap,
  MoviesImg,
  Rating,
  RatingIcon,
  RatingWrapper,
  DeleteIcon
} from "./MoviesList.styled.js";

export default function MoviesList({ movies , onDelete }) {
  const location = useLocation();

  function formatNumber(number) {
    if (number % 1 === 0) {
      return Math.floor(number);
    } else {
      return number;
    }
  }

  return (
    <MoviesMenu>
      {movies.map(({ id, vote_average, title, poster_path }) => (
        <MoviesItems key={id}>
            <MoviesWrap>
              <MoviesTextWrap>
                <RatingWrapper>
                  <RatingIcon value={formatNumber(vote_average.toFixed(1))} />
                  <Rating value={formatNumber(vote_average.toFixed(1))}>
                    {formatNumber(vote_average.toFixed(1))}
                  </Rating>
                  <DeleteIcon onClick={() => onDelete(id)} />

                </RatingWrapper>
                <Link to={`/movies/${id}`} state={{ from: location }}>

                <MoviesTextTitle>{title}</MoviesTextTitle>
                </Link>
              </MoviesTextWrap>
              <MoviesImg
                src={
                  poster_path
                    ? `
http://image.tmdb.org/t/p/w200${poster_path}`
                    : `${process.env.PUBLIC_URL}/images/noImage.webp`
                }
                alt={title}
              />
            </MoviesWrap>
        </MoviesItems>
      ))}
    </MoviesMenu>
  );
}
