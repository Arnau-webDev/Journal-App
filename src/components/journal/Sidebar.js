import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { startLogout } from "../../actions/auth";
import { startNewNote } from "../../actions/notes";
import JournalEntries from "./JournalEntries";

const Sidebar = () => {

	const dispatch = useDispatch();
	const { name } = useSelector(state => state.auth);

	const history = useHistory();

	const handleLogout = () => {
		history.replace("/auth");

		dispatch(startLogout());
	};

	const handleAddNew = () => {
		dispatch(startNewNote());
	};

	return (
		<aside className="journal__sidebar">
			<div className="mt-5  journal__sidebar-navbar">
				<h3 className="journal__sidebar-name">
					<i className="far fa-moon"></i>
					<span> { name }</span>
				</h3>

				<button className="btn" onClick={handleLogout}> Logout </button>
			</div>

			<div className="journal__new-entry" onClick={handleAddNew}>
				<i className="far fa-calendar-plus fa-5x"></i>
				<p className="mt-5">New Entry</p>
			</div>

			<JournalEntries />
		</aside>
	);
};

export default Sidebar;
