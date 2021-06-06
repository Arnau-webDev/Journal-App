import React from "react";
import JournalEntries from "./JournalEntries";

const Sidebar = () => {
	return (
		<aside className="journal__sidebar">
			<div className="mt-5  journal__sidebar-navbar">
				<h3 className="journal__sidebar-name">
					<i className="far fa-moon"></i>
					<span> Arnau</span>
				</h3>

				<button className="btn"> Logout </button>
			</div>

			<div className="journal__new-entry">
				<i className="far fa-calendar-plus fa-5x"></i>
				<p className="mt-5">New Entry</p>
			</div>

			<JournalEntries />
		</aside>
	);
};

export default Sidebar;
