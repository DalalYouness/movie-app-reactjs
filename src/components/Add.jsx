import { useEffect, useState } from "react";
import "./Add.css";
import axios from "axios";

const Add = () => {
  const [searchValue, setsearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com?s=${searchValue}&apikey=830096d0`)
      .then((response) => {
        if (response.data.Search) {
          setMovies(response.data.Search);
        }
        //console.log(response.data);
      });
  }, [searchValue]);

  const handleChange = (e) => {
    setsearchValue(e.target.value);
    //console.log(searchValue.current);
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
            <ul className="results">
              {movies.map((movie) => (
                <li key={movie.imdbID}>{movie.Title}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
