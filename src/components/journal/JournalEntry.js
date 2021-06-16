import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { notesReducer } from "../../reducers/notesReducer";
import { activeNote } from "../../actions/notes";

const JournalEntry = ({ note }) => {

	const dispatch = useDispatch(notesReducer);

	const noteDate = moment(note.date);

	const handleActiveNote = () => {
		dispatch(activeNote(note.id, note));
	};

	return (
		<div className="journal__entry" onClick={handleActiveNote}>
			<div className="journal__entry-left-content">
				{
					note.url !== undefined &&
					<div 
						className="journal__entry-picture"
						style= { {
							backgroundSize: "cover",
							backgroundImage: `url(${note.url})`
						} }
					>
					</div>
				}

				<div className="journal__entry-body">
					<p className="journal__entry-title">{note.title}</p>
					<p className="journal__entry-content">{note.body}</p>
				</div>
			</div>

			<div className="journal__entry-date-box">
				<span>{ noteDate.format("dddd") }</span>
				<h4>{ noteDate.format("Do") }</h4>
			</div>
		</div>
	);
};

export default JournalEntry;
