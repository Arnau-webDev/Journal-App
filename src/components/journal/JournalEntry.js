import React from "react";

const JournalEntry = () => {
	return (
		<div className="journal__entry">
			<div className="journal__entry-left-content">
				<div 
					className="journal__entry-picture"
					style= { {
						backgroundSize: "cover",
						backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/000/246/312/original/mountain-lake-sunset-landscape-first-person-view-vector.jpg)"
					} }
				>
				</div>

				<div className="journal__entry-body">
					<p className="journal__entry-title">Un nuevo Dia</p>
					<p className="journal__entry-content">Lorem ipsum dolor sit amet.</p>
				</div>
			</div>

			<div className="journal__entry-date-box">
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	);
};

export default JournalEntry;
