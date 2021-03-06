import { db } from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload";

export const startNewNote = () => {
	return async (dispacth, getState) => {
		const { uid } = getState().auth;

		const newNote = {
			title: "",
			body: "",
			date: new Date().getTime()
		};

		const doc = await db.collection(`${uid}/journal/notes`).add( newNote );
 
		dispacth(activeNote(doc.id, newNote));
		dispacth(addNewNoteToStorage(doc.id, newNote));
	};
};

export const addNewNoteToStorage = (id, note) => {
	return {
		type: types.notesAddNew,
		payload: {
			id,
			...note
		}
	};
};

export const activeNote = (id, note) => {
	return {
		type: types.notesActive,
		payload: {
			id,
			...note
		}
	};
};

export const startLoadingNotes = ( uid ) => {
	return async ( dispatch ) => {
		const notes = await loadNotes(uid);
		dispatch(setNotes(notes));
	};
};


export const setNotes = ( notes ) => {
	return {
		type: types.notesLoad,
		payload: notes	
	};
};

export const startSaveNote = ( note ) => {
	return async ( dispatch, getState ) => {
		const { uid } = getState().auth;

		if(!note.url) {
			delete note.url;
		}

		const noteToFirestore = { ...note };
		delete noteToFirestore.id;

		await db.doc(`${uid}/journal/notes/${note.id}`).update( noteToFirestore );

		dispatch( refreshNote(note.id, note));
		Swal.fire("Saved", note.title, "success");
	};
};

export const refreshNote = ( id, note) => {
	return {
		type: types.notesUpdated,
		payload: {
			id,
			note: {
				id,
				...note
			}
		}
	};
};

export const startUploading = (file) => {
	return async ( dispatch, getState ) => {
		const activeNote = getState().notes.active;

		Swal.fire({
			title: "Uploading...",
			text: "Please wait...",
			allowOutsideClick: false,
		});

		Swal.showLoading();

		const fileUrl = await fileUpload(file);
		activeNote.url = fileUrl;
		
		dispatch( startSaveNote( activeNote ));
		Swal.close();
	};
};

export const startDeleting = ( id ) => {
	return async ( dispatch, getState ) => {
		const uid = getState().auth.uid;

		await db.doc(`${uid}/journal/notes/${id}`).delete();

		dispatch( deleteNote(id) );
	};
};

export const deleteNote = ( id ) => {
	return {
		type: types.notesDelete,
		payload: id
	};
};

export const cleanNotesOnLogout = () => {
	return {
		type: types.notesLogoutCleaning
	};
};