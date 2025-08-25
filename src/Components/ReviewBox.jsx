import { useState, useEffect } from "react";
import "./ReviewBox.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import StarRating from "./StarRating";

function ReviewBox({title, reviews=[]}) {

    let reviewSection = [];
    reviews.forEach((key) => {reviewSection.push(key)})

	return (
		<>
			<div className="main-review-box">
				<span className="book-row-title">{title}</span>
				<hr style={{ color: "aliceblue" }} />
                {reviewSection}
			</div>
		</>
	);
}
export default ReviewBox;
