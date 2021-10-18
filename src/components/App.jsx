import react, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import CreateArea from "./CreateArea";

function App(){
    const [todoitems, SetItems] = useState([]);
    function onAddhandler(input){
        SetItems(prevValue => {
            return [
                ...prevValue,
                input
            ];
        });
    }
    function deletion(idx){
        SetItems(prevValue => {
            return prevValue.filter((item, index) => {
                return idx !== index 
            })
        });
    }
    return (
        <div>
            <Header/>
            <CreateArea 
                onAdd = {onAddhandler}
            />
            {todoitems.map((item, idx) => {
                return <Notes key = {idx} id = {idx} title = {item.title} content = {item.content} delete = {deletion}/>
            })}
            <Footer/>
        </div>
    );
}

export default App;