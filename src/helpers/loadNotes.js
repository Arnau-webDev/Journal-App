import { db } from "../firebase/firebaseConfig";

export const loadNotes = async ( uid ) => {
	const notesSnap = await db.collection(`${uid}/journal/notes`).get();
	const notes = [];

	notesSnap.forEach((snapNote) => {
		console.log(snapNote.data());
		notes.push({
			id: snapNote.id,
			...snapNote.data()
		});
	});

	console.log(notesSnap);
	console.log(notes);

	return notes;
};