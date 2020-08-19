import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {
  const [note,setNote]=useState({
    title:"",
    content:""
  });

function handleChange(event){
  const {name,value}=event.target;
  setNote((prevNote)=>{
    return {
      ...prevNote,
      [name]:value
    }
  });
}

function handleClick(event){
  event.preventDefault();
  props.onAdd(note);
  setNote({title:"",content:""});
}

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={handleClick}><AddIcon /></button>
      </form>
    </div>
  );
}

export default CreateArea;
