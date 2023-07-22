import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function MovieDetails() {
    const location = useLocation();
    let movie = location.state.movie

    console.log('in MovieDetails:', movie.id )

    // TODO: GET request for genres

    return (
        <>
        <h1>Movie Details</h1>
        <h2>{movie.title}</h2>
        <img src={movie.poster} alt={movie.title}/>
        
        
        </>
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
