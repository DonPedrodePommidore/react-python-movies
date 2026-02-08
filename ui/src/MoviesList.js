import MovieListItem from "./MovieListItem";

export default function MoviesList(props) {
    return <div>
        <h2>Movies</h2>
        <ul className="movies-list">
            {props.movies.map(movie => <li key={movie.id}>
                {/*funkcje handleEditMovies pod nazwą onEdit przekazuję dalej do MovieListItem*/}
                <MovieListItem movie={movie}
                               onDelete={() => props.onDeleteMovie(movie)}
                               onEdit={props.onEditMovie}/>
            </li>)}
        </ul>
    </div>;
}
