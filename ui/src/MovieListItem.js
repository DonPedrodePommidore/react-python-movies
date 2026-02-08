import {useState} from "react";
export default function MovieListItem(props) {
    const [addActor,setAddActor] = useState('');
    function handleAddActor(){
        const addActor = window.prompt("Podaj imię i nazwisko aktora:");
        if (!addActor) return;
        const currentActors = props.movie.actors || "";
        const addingActors = currentActors ? currentActors + ", " + addActor : addActor; //if są aktorzy w liście to dodaje po , else sam aktor
        const updateMovie = { ...props.movie, actors: addingActors}
        props.onEdit(updateMovie)
    }
    return (
        <div>
                <strong>{props.movie.title}</strong>
                {' '}
                <span>({props.movie.year})</span>
                {' '}
                directed by {props.movie.director}
                {' '}
                played by {props.movie.actors}
                {' '}
                <a onClick={props.onDelete}>Delete movie</a>
                {' '}
                <a onClick = {handleAddActor}>Add actor</a>
        </div>
    );
}
