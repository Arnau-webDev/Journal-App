import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";

const NotesAppBar = () => {

	const dispatch = useDispatch();
	const { active: note } = useSelector(state => state.notes);

	const handlePictureUpload = () => {
		document.querySelector("#fileSelector").click();
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];

		if(file) {
			dispatch( startUploading(file));
		}
	};

	const handleSave = () => {
		dispatch(startSaveNote( note ));
	};

	return (
		<div className="notes__appbar">
			<span>20 de agosto 2020</span>

			<input id="fileSelector" name="file" type="file" style={{ display: "none" }} onChange={handleFileChange}/>

			<div>
				<button className="btn" onClick={handlePictureUpload}>Upload Picture</button>
				<button className="btn" onClick={handleSave}>Save</button>
			</div>
		</div>
	);
};

export default NotesAppBar;
