import { useState, useEffect } from "react";
import "./BookScroll.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function StarRating({ stars = 5 }) {
	const starray = [];
	starray.length = 0;
	// for (let i = 1; i <= stars; i++) {
	// 	if (i == stars && i % 2 != 0) {
	// 		starray.push(<img src="../src/assets/half-star2.png"></img>);
	// 	}

	// 	if (i % 2 == 0) {
	// 		starray.push(<img src="../src/assets/full-star2.png"></img>);
	// 	}
	// }

	for (let i = 1; i <= stars; i++) {
		starray.push(<img src="../src/assets/full-star2.png"></img>);
	}
	return starray;
}

export default StarRating;
