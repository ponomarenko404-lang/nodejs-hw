import { Router } from "express";
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from "../controllers/notesController.js";


const notes = Router();
notes.get('/notes', getAllNotes);
notes.get('/notes/:noteId', getNoteById);
notes.post('/notes', createNote);
notes.delete('/notes/:noteId', deleteNote);
notes.patch('/notes/:noteId', updateNote);

export default notes;
