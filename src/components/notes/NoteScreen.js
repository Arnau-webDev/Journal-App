import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {

	const { active: note } = useSelector(state => state.notes);
	console.log(note);

	const [ formValues, handleInputChange ] = useForm(note);
	console.log(formValues);

	// Entendre la implementació de useForm amb el NoteScreen

	// const { title, body } = active; 

	return (
		<div className="notes__main-content">
			<NotesAppBar />

			<div className="notes__content">
				<input 
					type="text"
					placeholder="Your awesome title" 
					className="notes__title-input"
					autoComplete="off"
				/>

				<textarea placeholder="What happened today?" className="notes__textarea"></textarea>

				<div>
					<img 
						src="https://images.photowall.com/products/60869/azores-mountain-landscape-1.jpg?h=699&q=85" 
						alt="landscape" 
						className="notes__image"
					/>
					
				</div>
			</div>
		</div>);
};

export default NoteScreen;
