import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// Render movie list
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
        console.log('in handleMovieClick, movie is:', movie);
        history.push({ pathname: `/details/${movie.title}`, state: {movie} })
    }


    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img
                                src={movie.poster}
                                alt={movie.title}
                                onClick={() => {handleMovieClick(movie)}}
                            />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;