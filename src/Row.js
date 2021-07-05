import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "400",
    width: "690",

    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      console.log(movie.name);
      movieTrailer(
        movie.original_name || movie.original_title || movie.name || " "
      )
        .then((response) => {
          console.log(response);
          const urlParams = new URLSearchParams(new URL(response).search);
          setTrailerUrl(urlParams.get("v"));
          console.log("yup working");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <br></br>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            className={`row_poster`}
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      <center>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </center>
    </div>
  );
}

// https://www.themoviedb.org/t/p/original/1Uhoi348GEg4DObGrVLNUqtKtdu.jpg (base url + jpg path)

export default Row;
