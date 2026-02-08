import './App.css';
import {useState, useEffect} from "react";
import "milligram";
import MovieForm from "./MovieForm";
import MoviesList from "./MoviesList";

function App() {
    const [movies, setMovies] = useState([]);
    const [addingMovie, setAddingMovie] = useState(false);
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(`/movies`);
            if (response.ok) {
                const movies = await response.json();
                setMovies(movies);
            }
        };
        fetchMovies();
    }, []);
    async function handleEditMovie(movie){
        const response = await fetch(`/movies/${movie.id}`, {
            method:'PUT',
            body: JSON.stringify(movie),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            setMovies(movies.map(m => m.id === movie.id ? movie : m));
    }


    }
    async function handleDeleteMovie(movie){
        const response = await fetch(`/movies/${movie.id}`, {
            method: 'DELETE',
    });
    if (response.ok) {
        setMovies(movies.filter(m => m !== movie));
    }

}

    async function handleAddMovie(movie) {
    const response = await fetch('/movies', {
    method: 'POST',
    body: JSON.stringify(movie),
    headers: { 'Content-Type': 'application/json' }
  });
  if (response.ok) {
      const addingResponse = await response.json();
      movie.id = addingResponse.id;
      setMovies([...movies, movie]);
      setAddingMovie(false);
  }
}

    return (
        <div className="container">
            <h1>My favourite movies to watch</h1>
            {movies.length === 0
                ? <p>No movies yet. Maybe add something?</p>
                : <MoviesList movies={movies}
                              onDeleteMovie={handleDeleteMovie}
                              onEditMovie={handleEditMovie}
                />}
            {addingMovie
                ? <MovieForm onMovieSubmit={handleAddMovie}
                             buttonLabel="Add a movie"
                />
                : <button onClick={() => setAddingMovie(true)}>Add a movie</button>}
        </div>
    );
}

export default App;
