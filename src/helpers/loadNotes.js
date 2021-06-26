import { db } from "../firebase/firebaseConfig";

export const loadNotes = async ( uid ) => {
	const notesSnap = await db.collection(`${uid}/journal/notes`).get();
	const notes = [];

	notesSnap.forEach((snapNote) => {
		notes.push({
			id: snapNote.id,
			...snapNote.data()
		});
	});

	return notes;
};