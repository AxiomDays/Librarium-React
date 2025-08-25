import { useState, useEffect } from "react";
import "./BookScroll.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./TitledTextBox.css"

function TitledTextBox({ title = "Last Review", context = "<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus venenatis neque ac pellentesque."}) {
	return (
		<>
			<div className="container-fluid" style={{"margin-bottom" : "2rem"}}>
				<div
					className="row col-12 justify-content-center "
					style={{ width: "100%" }}
				>
					<span className="book-row-title">{title}</span>
					<hr style={{ color: "aliceblue" }} />
					<div className="row">
						<span
							className="review-text"
							dangerouslySetInnerHTML={{
								__html: context,
							}}
						>
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default TitledTextBox;
