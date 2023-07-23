import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// Show list of all movies in DB
function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    // Fetch movie list on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // Handle click event, send user to MovieDetails page
    const handleMovieClick = (movie) => {
        console.log('in handleMovieClick, movie.id is:', movie.id);
        dispatch({ type: 'FETCH_MOVIEDETAILS', payload: movie.id })
        history.push(`/details/${movie.title}`);
    }

    // Render movie list
    return (
        <main>
            <h1>Movie List</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img
                                src={movie.poster}
                                alt={movie.title}
                                onClick={() => { handleMovieClick(movie) }}
                            />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;