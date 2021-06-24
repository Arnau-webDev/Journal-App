import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {

	const dispatch = useDispatch();

	const { active: note } = useSelector(state => state.notes);
	console.log(note);
	const [ formValues, handleInputChange, reset ] = useForm(note);
	console.log(formValues);
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

	return (
		<div className="notes__main-content">
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
								src="https://images.photowall.com/products/60869/azores-mountain-landscape-1.jpg?h=699&q=85" 
								alt="landscape" 
								className="notes__image"
							/>
					
						</div>
					)
				}
			</div>
		</div>);
};

export default NoteScreen;
