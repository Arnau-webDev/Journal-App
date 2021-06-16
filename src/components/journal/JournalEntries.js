import React from "react";
import { useSelector } from "react-redux";
import JournalEntry from "./JournalEntry";

const JournalEntries = () => {

	const { notes } = useSelector(state => state.notes);
	console.log(notes);

	return (
		<div className="journal__entries">
			{notes.map((note) => {
				return <JournalEntry key={note.id} note={note} />;
			})}
		</div>
	);
};

export default JournalEntries;
