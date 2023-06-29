import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios.js";
import { API_KEY } from "../../constants/constants.js";
import { imageUrl } from "../../constants/constants.js";

function Banner() {
  const [movie, setMovie] = useState();
    
  useEffect(() => {
    axios
      .get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        //console.log(response.data.results);
        //Math.floor(Math.random() * 20) will give a random number between 0 and 20
        setMovie(response.data.results[Math.floor(Math.random() * 20)]);    
              });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">
          {movie ? movie.description : ""}
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
