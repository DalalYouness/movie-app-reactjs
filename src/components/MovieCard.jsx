import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <div className="card-poster">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="card-info">
        <div>
          <h4>{movie.Title}</h4>
          <span>{movie.Year}</span>
        </div>
        <div className="card-bottons">
          <button className="btn btn-movie">ADD TO WATCHLIST</button>
          <button className="btn btn-movie">ADD TO WATCHED</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
