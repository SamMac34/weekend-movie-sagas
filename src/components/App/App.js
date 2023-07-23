import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';

// Top level component
function App() {

  // Render
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <nav>
          <Link to="/"></Link><br />
          <Link to="/details"></Link>
        </nav>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details">
          <MovieDetails />
        </Route>
      </Router>
    </div>
  );
}

export default App;