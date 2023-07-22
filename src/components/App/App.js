import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <nav>
          <Link to="/">Movie List</Link><br />
          <Link to="/details">Details</Link>
        </nav>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details">
          <MovieDetails />
        </Route>
        <Route>
          {/* Add Movie page */}
        </Route>
      </Router>
    </div>
  );
}


export default App;
