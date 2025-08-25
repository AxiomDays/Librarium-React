import { useState, useEffect } from "react";
import "./Review.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import StarRating from "./StarRating";

function Review({
	title = "User Review",
	userName = ["Null Review", "#"],
	stars = 5,
	date = "Date",
	content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
						luctus venenatis neque ac pellentesque. Donec id luctus orci.
						Maecenas ullamcorper efficitur lectus, sit amet blandit risus congue
						at. Maecenas scelerisque, odio in tempus sollicitudin, felis lectus
						rhoncus lacus, quis lobortis massa nunc vel lorem. Etiam mollis
						consectetur arcu at commodo. Nulla auctor odio eget libero sodales
						lacinia. Proin suscipit elit ut ex convallis, ultricies laoreet sem
						aliquet.`
}) {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="user-img-thumbnail col-3">
						<img
							src="../src/assets/holberton-logo.jpg"
							className="img-thumbnail"
							alt=""
						/>
					</div>
					<div className="review-title col">
						<a className="class-username" href={userName[1]}>
							{userName[0]}
						</a>
						<p>
							{date.split(" ")[0]} - <StarRating stars={stars} />
						</p>
					</div>
					<span className="review-txt">
						{content}
					</span>
					<hr className="review-underline" style={{ color: "aliceblue" }} />
				</div>
			</div>
		</>
	);
}

export default Review;
