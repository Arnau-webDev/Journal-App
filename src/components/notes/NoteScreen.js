import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote, startDeleting } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {

	const dispatch = useDispatch();

	const { active: note } = useSelector(state => state.notes);
	const [ formValues, handleInputChange, reset ] = useForm(note);
	const { title, body } = formValues; 

	const activeNoteId = useRef(note.id);
	
	useEffect(() => {
		if(note.id !== activeNoteId.current) {
			reset(note);
			activeNoteId.current = note.id;
		}
	}, [note, reset]);

	useEffect(() => {
		dispatch( activeNote(formValues.id, { ...formValues }));
	}, [formValues, dispatch]);

	const handleDelete = () => {
		dispatch(startDeleting(activeNoteId.current));
	};

	return (
		<div className="notes__main-content animate__animated animate__fadeIn animate__faster">
			<NotesAppBar />

			<div className="notes__content">
				<input 
					type="text"
					name="title"
					placeholder="Your awesome title" 
					className="notes__title-input"
					autoComplete="off"
					value={title}
					onChange={handleInputChange}
				/>

				<textarea 
					placeholder="What happened today?"
					name="body" 
					className="notes__textarea"
					value={body}
					onChange={handleInputChange}
				></textarea>

				{	
					note.url && (
						<div>
							<img 
								src={note.url} 
								alt="image_from_user" 
								className="notes__image"
							/>
					
						</div>
					)
				}
			</div>

			<button className="btn btn-danger" onClick={handleDelete}>Delete</button>
		</div>);
};

export default NoteScreen;
