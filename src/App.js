import React, { useState } from "react";
import "./styles.css";

var movieDB = {
  Action: [
    { name: "Bahubali", rating: "5/5" },

    { name: "Mirchi", rating: "5/5" },
    { name: "RRR", rating: "5/5" },
    { name: "Pokiri", rating: "5/5" },
    { name: "Julayi", rating: "5/5" }
  ],

  comedy: [
    {
      name: "Pelli Chupulu",
      rating: "4.5/5"
    },
    {
      name: "Nuvvu naku nachav",
      rating: "4.5/5"
    },
    {
      name: "Ee nagaraniki emaindi",
      rating: "5/5"
    },
    {
      name: "Evadi gola vadide",
      rating: "5/5"
    },
    {
      name: "Mayabazaar",
      rating: "5/5"
    }
  ],
  feelgood: [
    {
      name: "Anand",
      rating: "4.5/5"
    },
    {
      name: "Banglore days",
      rating: "5/5"
    },
    {
      name: "Zindagi na milegi dobara",
      rating: "5/5"
    },
    {
      name: "Godavari",
      rating: "5/5"
    },
    {
      name: "yeh jawani hai diwaani",
      rating: "5/5"
    }
  ]
};
var genres = Object.keys(movieDB);
export default function App() {
  var [genre, setGenre] = useState("Action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Movie timeee!!</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite movies. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              backgroundColor: "violet"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[genre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid",
                width: "60%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                backgroundColor: "pink"
              }}
            >
              {" "}
              <div style={{ fontSize: "1.5rem" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
