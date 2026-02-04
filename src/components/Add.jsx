import { useEffect, useState } from "react";
import "./Add.css";
import axios from "axios";
import MovieCard from "./MovieCard";

const Add = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchValue.length < 3) {
      setMovies([]);
      return;
    }
    if (searchValue.length > 3) {
      axios
        .get(`http://www.omdbapi.com?s=${searchValue}&apikey=830096d0`)
        .then((response) => {
          if (response.data.Search) {
            setMovies(response.data.Search);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [searchValue]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <input
            type="text"
            placeholder="Search for a movie"
            onChange={handleChange}
            value={searchValue}
          />

          {movies.length > 0 && (
            <ul>
              {movies.map((movie) => (
                <li key={movie.imdbID}>{<MovieCard movie={movie} />}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
