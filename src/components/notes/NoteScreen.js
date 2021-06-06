import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
	return (
		<div className="notes__main-content">
			<NotesAppBar />

			<div className="notes__content">
				<input 
					type="text"
					placeholder="Some awesome title" 
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
		</div>
	);
};

export default NoteScreen;
