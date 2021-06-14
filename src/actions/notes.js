import { db } from "../firebase/firebaseConfig";
import { types } from "../types/types";

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

		console.log(uid);
		console.log(doc);
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