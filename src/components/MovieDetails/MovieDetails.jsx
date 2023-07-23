import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// Show extra details of selected movie
function MovieDetails() {
    const history = useHistory();
    const movie = useSelector(store => store.movieDetails)

    // Render details
    return (
        <div>
            <h1>Movie Details</h1>
            <h2>{movie[0]?.title}</h2>
            <img src={movie[0]?.poster} alt={movie[0]?.title} />
            <p>{movie[0]?.description}</p>
            {movie.map(item => {
                return (
                    <span key={item.id}>⚫️ {item.name}</span>
                )
            })}
            <button
                type="button"
                onClick={() => { history.push('/') }}>⬅ Back to List</button>
        </div>
    )
}

export default MovieDetails;