import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { moveSyntheticComments } from "typescript";

function App() {
  const[allnotes,setAllnotes]=useState([]);
  function addnotes(newnote){
    setAllnotes((prevNote)=>{
      return [...prevNote,newnote]
    });
  }

  function deletenotes(id){
    setAllnotes((prevNote)=>{
      return prevNote.filter((delnote,index)=>{
        return index!==id
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addnotes}/>
      {allnotes.map((mynotes,index)=>{
        return <Note id={index} key={index} title={mynotes.title} content={mynotes.content} onDelete={deletenotes}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
