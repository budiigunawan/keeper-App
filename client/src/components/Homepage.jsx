import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

import { useSelector, useDispatch } from "react-redux"
import {getAllNotes, createNote, removeNote} from "../store/actions/noteAction"
import swal from 'sweetalert'

function Homepage() {

  const notes = useSelector((state)=> state.noteReducer.notes)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllNotes())
  },[dispatch,notes])
  
  function addNote(newNote) {
    dispatch(createNote(newNote))
  }

  function deleteNote(id) {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this note!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            dispatch(removeNote(id))
        } else {
          swal("Your note is safe!");
        }
      });
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default Homepage;
