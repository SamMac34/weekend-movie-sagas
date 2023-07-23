import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// Show extra details of selected movie
function MovieDetails() {
    const history = useHistory();
    const movieArr = useSelector(store => store.movieDetails)
    
    // Render details
    return (
        <div>
            <h1>Movie Details</h1>
            <h2>{movieArr[0]?.title}</h2>
            <img src={movieArr[0]?.poster} alt={movieArr[0]?.title} />
            <p>{movieArr[0]?.description}</p>
            {movieArr.map(movie => {
                return (
                    <span key={movie.id}>⚫️ {movie.name}</span>
                )
            })}
            <button
                type="button"
                onClick={() => { history.push('/') }}>⬅ Back to List</button>
        </div>
    )
}

export default MovieDetails;