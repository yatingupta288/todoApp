import react from "react";
import DeleteIcon from '@material-ui/icons/Delete';
function Notes(props){
return (
    <div className = "notes">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick = {() => {
            props.delete(props.id)
            }}><DeleteIcon /></button>
    </div>
);
}
export default Notes;