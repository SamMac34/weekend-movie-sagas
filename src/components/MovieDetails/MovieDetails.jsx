import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function MovieDetails() {
    const location = useLocation();
    // let movie = location.state.movie
    // console.log('in MovieDetails:', movie.id)

    const movie = useSelector(store => store.movies)
    console.log('in MovieDetails:', movie)

    // TODO: GET request for genres


    return (
        <div>
            {/* <h1>Movie Details</h1>
            <h2>{movie.title}</h2>
            <p>Genres here</p>
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.description}</p> */}
            <h3>{movie}</h3>

        </div>
    )
}

export default MovieDetails;

{/* <div key={movie.id} >
<h3>{movie.title}</h3>
<img
    src={movie.poster}
    alt={movie.title}
    // onClick={() => { history.push(`/details/${movie.id}`) }}
    onClick={() => {handleMovieClick(movie)}}
/> */}
