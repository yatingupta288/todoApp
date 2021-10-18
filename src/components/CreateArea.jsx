import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import {Fab} from "@mui/material";
import {Zoom} from "@mui/material";
function CreateArea(props){
    const [todoList, setList] = useState({
        title : "",
        content : ""
    });
    const [isExpanded, setTrue] = useState(false);
    function handleChange(event){
        event.preventDefault();
        const {name, value} = event.target;
        setList(prevValue => {
            return {
                ...prevValue,
                [name] : value
            }
        })
        setTrue(prevValue => {
            return true;
        });
    }
    return (
        <div>
            <form className = "createOne">
            {isExpanded === true ?<input name= "title" placeholder = "title" value = {todoList.title} onChange = {handleChange} />: null}
                 <textarea placeholder = "Enter the Content..." name = "content" value = {todoList.content} onChange = {handleChange} rows = {isExpanded === true ? "3" : "1"}></textarea> 
                <Zoom in = {isExpanded === true ? true : false}>
                <Fab size = "small" onClick = {() => {
                    props.onAdd(todoList)
                    setList({
                        title : "",
                        content : ""
                    });
                }} >
                    <AddIcon />
                </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;